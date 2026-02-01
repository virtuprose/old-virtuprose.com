import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Allowed origins for CORS
const ALLOWED_ORIGINS = [
    "https://virtuprose.com",
    "https://www.virtuprose.com",
    "https://new-virtuprose-website.vercel.app",
    // Add localhost for development
    ...(process.env.NODE_ENV === "development"
        ? ["http://localhost:3000", "http://localhost:3001", "http://127.0.0.1:3000", "http://127.0.0.1:3001"]
        : []),
];

// Maximum request body size (in bytes) - 100KB
const MAX_BODY_SIZE = 100 * 1024;

export function middleware(request: NextRequest) {
    const origin = request.headers.get("origin");
    const pathname = request.nextUrl.pathname;

    // Handle preflight requests for API routes
    if (request.method === "OPTIONS" && pathname.startsWith("/api/")) {
        return handleCORS(request, origin, true);
    }

    // For API routes, validate origin and add CORS headers
    if (pathname.startsWith("/api/orvia")) {
        // Check Content-Length for POST requests
        if (request.method === "POST") {
            const contentLength = request.headers.get("content-length");
            if (contentLength && parseInt(contentLength, 10) > MAX_BODY_SIZE) {
                return new NextResponse(
                    JSON.stringify({ error: "Request body too large" }),
                    {
                        status: 413,
                        headers: { "Content-Type": "application/json" },
                    }
                );
            }
        }

        // Origin validation (allow requests without origin for direct API calls)
        if (origin && !ALLOWED_ORIGINS.includes(origin)) {
            console.warn(`[security] Blocked request from origin: ${origin}`);
            return new NextResponse(
                JSON.stringify({ error: "Not allowed" }),
                {
                    status: 403,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        // Continue with CORS headers
        return handleCORS(request, origin, false);
    }

    return NextResponse.next();
}

function handleCORS(
    request: NextRequest,
    origin: string | null,
    isPreflight: boolean
): NextResponse {
    const corsHeaders: Record<string, string> = {
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Max-Age": "86400", // 24 hours
    };

    // Only set Allow-Origin if origin is in whitelist
    if (origin && ALLOWED_ORIGINS.includes(origin)) {
        corsHeaders["Access-Control-Allow-Origin"] = origin;
        corsHeaders["Vary"] = "Origin";
    }

    if (isPreflight) {
        return new NextResponse(null, {
            status: 204,
            headers: corsHeaders,
        });
    }

    // For actual requests, continue and add CORS headers to response
    const response = NextResponse.next();
    Object.entries(corsHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
    });

    return response;
}

export const config = {
    matcher: [
        // Match all API routes
        "/api/:path*",
    ],
};
