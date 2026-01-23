"use client";
import React from "react";
import { projects } from "@/constants/projects";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { GitBranchPlus, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: StaticImageData;
}

const ProjectShowcase = () => {
    return (
        <div className="flex flex-col max-w-screen-2xl mx-auto text-zinc-50 p-7 items-center mb-20">
            <motion.h1
                id="projects-section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center w-full text-5xl font-semibold mb-10 text-electric-violet-400"
            >
                My Projects
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {projects.map((project: Project, index: number) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="bg-gradient-to-br from-zinc-900/90 to-void-950/90 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-electric-violet-500/20 transition-all duration-300 border border-zinc-800/50 hover:border-electric-violet-500/30 group"
                    >
                        {project.imageUrl && (
                            <div className="h-48 bg-zinc-700 overflow-hidden relative">
                                <Image
                                    width={500}
                                    height={300}
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-void-950 to-transparent opacity-60" />
                            </div>
                        )}
                        <div className="flex flex-col p-6">
                            <h3 className="text-2xl font-semibold mb-2 group-hover:text-electric-violet-300 transition-colors">
                                {project.title}
                            </h3>
                            <p className="h-25 line-clamp-4 text-zinc-400 mb-4 leading-relaxed group-hover:text-zinc-300 transition-colors">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="bg-gradient-to-r from-electric-violet-950/80 to-charm-950/80 border border-electric-violet-500/30 px-3 py-1 rounded-full text-sm text-electric-violet-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                {project.githubUrl && (
                                    <Link
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-zinc-400 hover:text-electric-violet-300 transition-colors font-medium"
                                    >
                                        <GitBranchPlus size={18} /> Code
                                    </Link>
                                )}
                                {project.liveUrl && (
                                    <Link
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-zinc-400 hover:text-charm-300 transition-colors font-medium"
                                    >
                                        <ExternalLink size={18} /> Live Demo
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectShowcase;
