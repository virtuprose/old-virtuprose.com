/**
 * Client-side security utilities for Orvia Chat
 * Basic validation to prevent sending malicious content from the client
 */

const MAX_MESSAGE_LENGTH = 2000;
const MIN_MESSAGE_LENGTH = 1;

// Basic prompt injection patterns (client-side check)
const BASIC_PROMPT_INJECTION_PATTERNS = [
  /ignore\s+(previous|all|above|prior)\s+(instructions?|prompts?)/i,
  /forget\s+(previous|all|above|prior)\s+(instructions?|prompts?)/i,
  /you\s+are\s+now/i,
  /system\s*:?\s*/i,
  /show\s+(me\s+)?(your\s+)?(system\s+)?(prompt|instructions?)/i,
];

/**
 * Basic client-side validation (lightweight)
 */
export function validateInputClient(text: string): { valid: boolean; error?: string } {
  if (!text || typeof text !== "string") {
    return { valid: false, error: "Message cannot be empty" };
  }

  const trimmed = text.trim();
  
  if (trimmed.length < MIN_MESSAGE_LENGTH) {
    return { valid: false, error: "Message cannot be empty" };
  }

  if (trimmed.length > MAX_MESSAGE_LENGTH) {
    return { valid: false, error: `Message is too long. Maximum ${MAX_MESSAGE_LENGTH} characters allowed.` };
  }

  // Basic prompt injection check (server will do thorough check)
  for (const pattern of BASIC_PROMPT_INJECTION_PATTERNS) {
    if (pattern.test(trimmed)) {
      return { valid: false, error: "Please rephrase your message" };
    }
  }

  return { valid: true };
}

/**
 * Sanitize input for display (prevent XSS)
 */
export function sanitizeForDisplay(text: string): string {
  if (typeof text !== "string") return "";
  
  // Basic HTML entity encoding
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

