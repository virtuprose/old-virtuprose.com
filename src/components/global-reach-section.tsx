"use client";

import { WorldMap } from "@/components/ui/map";

export function GlobalReachSection() {
    // Connection paths between countries
    // Using central/capital city coordinates for each country
    const connections = [
        // UAE (Dubai) as central hub connecting to other regions
        {
            start: { lat: 25.2048, lng: 55.2708, label: "UAE" },
            end: { lat: 24.7136, lng: 46.6753, label: "Saudi Arabia" },
        },
        {
            start: { lat: 25.2048, lng: 55.2708, label: "UAE" },
            end: { lat: 25.2854, lng: 51.5310, label: "Qatar" },
        },
        {
            start: { lat: 25.2048, lng: 55.2708, label: "UAE" },
            end: { lat: 29.3759, lng: 47.9774, label: "Kuwait" },
        },
        {
            start: { lat: 25.2048, lng: 55.2708, label: "UAE" },
            end: { lat: 20.5937, lng: 78.9629, label: "India" },
        },
        // USA connections
        {
            start: { lat: 37.0902, lng: -95.7129, label: "USA" },
            end: { lat: 56.1304, lng: -106.3468, label: "Canada" },
        },
        {
            start: { lat: 37.0902, lng: -95.7129, label: "USA" },
            end: { lat: 25.2048, lng: 55.2708, label: "UAE" },
        },
        // Australia connection
        {
            start: { lat: -25.2744, lng: 133.7751, label: "Australia" },
            end: { lat: 20.5937, lng: 78.9629, label: "India" },
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-[var(--bg)] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
                        Serving Clients Worldwide
                    </h2>
                    <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mt-4 leading-relaxed font-light">
                        We work with businesses across continents, delivering intelligent growth engines wherever you are.
                    </p>
                </div>

                {/* Map */}
                <div className="max-w-6xl mx-auto">
                    <WorldMap
                        dots={connections}
                        lineColor="#27ecec"
                        showLabels={false}
                        labelClassName="text-[10px] md:text-xs"
                        animationDuration={2}
                        loop={true}
                    />
                </div>
            </div>
        </section>
    );
}
