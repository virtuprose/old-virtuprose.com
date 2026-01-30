"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Project {
    id: string;
    client: string;
    description: string;
    tags: string[];
    imageUrl: string; // In a real app, this would be a proper image path
    logoUrl?: string;
    link: string;
}

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative cursor-pointer flex flex-col gap-4"
        >
            {/* Visual / Screenshot Area */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-secondary/30 dark:bg-secondary/10 border border-border/50 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/5">

                {/* Placeholder Gradient since we don't have real images yet */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-neutral-900 dark:to-neutral-800" />

                {/* Actual Image (commented out for now, using a colored block as placeholder) */}
                {/* Actual Image */}
                <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.imageUrl})` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20 dark:group-hover:bg-white/5" />

                {/* Client logo */}
                <div className="absolute left-4 top-4 h-10 w-10 flex items-center justify-center rounded-xl bg-white/90 dark:bg-black/80 p-1.5 shadow-sm backdrop-blur-sm border border-white/20">
                    {project.logoUrl ? (
                        <img src={project.logoUrl} alt="client logo" className="h-full w-full object-contain opacity-90" />
                    ) : (
                        <div className="h-full w-full rounded-full bg-primary/20" />
                    )}
                </div>

                {/* Arrow Icon on Hover */}
                <div className="absolute right-4 top-4 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 dark:bg-black/90 shadow-sm backdrop-blur-sm text-primary">
                        <ArrowUpRight className="h-5 w-5" />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1.5 px-1">
                <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                        {project.client}
                    </h3>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed max-w-[90%]">
                    {project.description}
                </p>
                <div className="flex gap-2 flex-wrap mt-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-muted-foreground/70 bg-secondary/50 px-2 py-0.5 rounded-md">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
