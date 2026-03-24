"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

const sectionVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
} as const;

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
} as const;

export function Work() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="work" className="section-padding">
            <motion.div
                ref={sectionRef}
                variants={sectionVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-5xl mx-auto px-6"
            >
                <motion.div variants={itemVariants} className="mb-4">
                    <p
                        className="text-sm font-medium tracking-widest uppercase"
                        style={{ color: "var(--accent)" }}
                    >
                        Work
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                    <h2
                        className="text-3xl md:text-4xl font-bold"
                        style={{ color: "var(--text)" }}
                    >
                        Selected work
                    </h2>
                    <p
                        className="text-base max-w-md"
                        style={{ color: "var(--text-muted)" }}
                    >
                        Products I&apos;ve built end-to-end — from mobile UI to backend
                        infrastructure.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <motion.div key={project.id} variants={itemVariants}>
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}