"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const teachingRoles = [
    {
        title: "Node.js Instructor",
        org: "Solvestation Labs",
        period: "Jan 2026 — Present",
        location: "Remote",
        current: true,
        description:
            "Teaching comprehensive Node.js curriculum covering programming foundations, data structures, web development with Express.js, and database integration. Currently mentoring students through a 4-month structured program with real-world projects.",
    },
    {
        title: "Flutter & Dart Instructor",
        org: "MGQS IT Lab & Research Centre",
        period: "2023 — Present",
        location: "Lagos, Nigeria",
        current: true,
        description:
            "Leading mobile development education in cohort-based programs, teaching Flutter and Dart fundamentals through hands-on projects and real-world application development.",
    },
];

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

export function Teaching() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="teaching" className="section-padding">
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
                        Teaching & Leadership
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                    <h2
                        className="text-3xl md:text-4xl font-bold"
                        style={{ color: "var(--text)" }}
                    >
                        I build teams, not just products
                    </h2>
                    <p
                        className="text-base max-w-md"
                        style={{ color: "var(--text-muted)" }}
                    >
                        Teaching is how I give back — and the best way to deepen my own understanding.
                    </p>
                </motion.div>

                {/* Teaching roles */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {teachingRoles.map((role) => (
                        <motion.div
                            key={role.org}
                            variants={itemVariants}
                            className="rounded-xl p-6 md:p-8 flex flex-col"
                            style={{
                                backgroundColor: "var(--surface)",
                                border: "0.5px solid var(--border)",
                            }}
                        >
                            <div className="flex items-start justify-between gap-3 mb-4">
                                <div>
                                    <h3
                                        className="text-lg font-semibold mb-1"
                                        style={{ color: "var(--text)" }}
                                    >
                                        {role.title}
                                    </h3>
                                    <p
                                        className="text-sm font-medium"
                                        style={{ color: "var(--accent-text)" }}
                                    >
                                        {role.org}
                                    </p>
                                </div>
                                {role.current && (
                                    <span
                                        className="text-xs font-medium px-3 py-1 rounded-full shrink-0"
                                        style={{
                                            backgroundColor: "var(--accent-subtle)",
                                            color: "var(--accent-text)",
                                        }}
                                    >
                                        Active
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <p
                                    className="text-sm"
                                    style={{ color: "var(--text-muted)" }}
                                >
                                    {role.period}
                                </p>
                                <span
                                    className="w-1 h-1 rounded-full"
                                    style={{ backgroundColor: "var(--text-faint)" }}
                                />
                                <p
                                    className="text-sm"
                                    style={{ color: "var(--text-muted)" }}
                                >
                                    {role.location}
                                </p>
                            </div>

                            <p
                                className="text-sm leading-relaxed"
                                style={{ color: "var(--text-muted)" }}
                            >
                                {role.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Recognition */}
                <motion.div
                    variants={itemVariants}
                    className="rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
                    style={{
                        backgroundColor: "var(--accent-subtle)",
                        border: "0.5px solid var(--accent)",
                    }}
                >
                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "var(--accent)" }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--bg)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7" />
                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 7 17 7" />
                            <path d="M4 22h16" />
                            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                        </svg>
                    </div>
                    <div>
                        <h3
                            className="text-base font-semibold mb-1"
                            style={{ color: "var(--text)" }}
                        >
                            Consistency Award — Trove Finance (2025)
                        </h3>
                        <p
                            className="text-sm"
                            style={{ color: "var(--text-muted)" }}
                        >
                            Recognized as most consistent and reliable team member for dedication and performance excellence.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}