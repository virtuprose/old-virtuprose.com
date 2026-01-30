"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard, Project } from "./project-card";
import { FilterBar } from "./filter-bar";

const PROJECTS: Project[] = [
    {
        id: "1",
        client: "Apex Financial",
        description: "Reinventing the dashboard experience for high-frequency traders with real-time WebSocket data.",
        tags: ["Web App", "Fintech", "Real-time"],
        imageUrl: "/images/sample-project.png",
        logoUrl: "/images/sample-logo.png",
        link: "#",
    },
    {
        id: "2",
        client: "Lumina Health",
        description: "A patient-first digital booking system that increased conversion by 40% in the first quarter.",
        tags: ["Mobile App", "Healthcare", "UX Design"],
        imageUrl: "/images/sample-project.png",
        logoUrl: "/images/sample-logo.png",
        link: "#",
    },
    {
        id: "3",
        client: "Strata AI",
        description: "Enterprise administration panel for managing large-scale LLM training pipelines.",
        tags: ["AI Automation", "Dashboard", "React"],
        imageUrl: "/images/sample-project.png",
        logoUrl: "/images/sample-logo.png",
        link: "#",
    },
    {
        id: "4",
        client: "Echo Logistics",
        description: "Global supply chain visualization tool used by major carriers to track fleet movement.",
        tags: ["Websites", "Data Viz", "Mapbox"],
        imageUrl: "/images/sample-project.png",
        logoUrl: "/images/sample-logo.png",
        link: "#",
    },
];

const FILTERS = ["All", "Websites", "Mobile Apps", "Digital Marketing", "AI Automation"];

export function SelectedWorkSection() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = useMemo(() => {
        if (activeFilter === "All") return PROJECTS;

        // Simple matching logic for demo purposes
        // In a real app, you might match against specific types or project categories
        // checking if any tag matches is a simple heuristic for this mock data
        return PROJECTS.filter((p) => {
            // Mapping friendly names to tags for this demo
            if (activeFilter === "Websites" && p.tags.includes("Websites")) return true;
            if (activeFilter === "Mobile Apps" && p.tags.includes("Mobile App")) return true;
            if (activeFilter === "AI Automation" && p.tags.includes("AI Automation")) return true;
            // Fallback for demo: randomly show some projects if tags don't perfectly align
            // But let's try to be precise with the mock data above
            return p.tags.some(t => t.includes(activeFilter) || activeFilter.includes(t));
        });
    }, [activeFilter]);

    return (
        <section className="py-24 md:py-32 bg-[var(--bg)] relative overflow-hidden">
            <div className="container relative z-10 px-4 md:px-6 mx-auto">

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
                    >
                        Selected Work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[var(--text-secondary)] text-lg max-w-2xl font-light"
                    >
                        A small selection of systems and products we’ve designed and built.
                    </motion.p>
                </div>

                {/* Filter */}
                <FilterBar
                    filters={FILTERS}
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                />

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-12 lg:gap-x-12"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State if needed */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 text-muted-foreground"
                    >
                        No projects found for this category.
                    </motion.div>
                )}
            </div>
        </section>
    );
}
