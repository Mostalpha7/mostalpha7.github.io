"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
    {
        company: "Trove Finance",
        role: "Mobile Application Developer (Flutter)",
        location: "Lagos, Nigeria (Remote)",
        period: "July 2021 — Present",
        current: true,
        highlights: [
            "Lead mobile engineer for micro-investment platform processing ₦1T+ in transaction volume",
            "Scaled app to 100K+ Android and 8.8K+ iOS downloads with 5-10K monthly active users",
            "Improved Android rating from 3.88 to 4.02 and reduced iOS crash rate by 38%",
            "Architected trading, portfolio tracking, savings, social features, and KYC verification",
            "Implemented real-time data delivery with WebSockets and intelligent caching",
        ],
    },
    {
        company: "Benmore Technologies",
        role: "Fullstack Mobile Engineer (Flutter, Node.js)",
        location: "Chicago, US (Remote)",
        period: "Jan 2025 — Mar 2025",
        current: false,
        highlights: [
            "Built Anydrop delivery app end-to-end as sole mobile engineer in 8 months",
            "Implemented real-time GPS tracking with sub-second update latency",
            "Optimized location-based SQL queries using Haversine for parking platform",
            "Integrated Stripe payments and Google Maps SDK",
        ],
    },
    {
        company: "Pullen Creatives Limited",
        role: "Frontend & WordPress Developer",
        location: "Lagos, Nigeria",
        period: "Dec 2020 — July 2021",
        current: false,
        highlights: [
            "Built custom responsive frontends using HTML, CSS, JavaScript, and Vue.js",
            "Translated UI/UX designs into production-ready web applications",
            "Integrated APIs and optimized WordPress themes with SEO best practices",
        ],
    },
    {
        company: "Success Drive Global Consult",
        role: "Junior Fullstack Engineer",
        location: "Lagos, Nigeria",
        period: "Jan 2020 — Dec 2020",
        current: false,
        highlights: [
            "Built dynamic interfaces with Vue.js and backend services with Node.js and MongoDB",
            "Assisted in Flutter mobile development for cross-platform deployment",
            "Participated in code reviews, testing, and third-party integrations",
        ],
    },
    {
        company: "Tutors & Learners World",
        role: "Software Engineering Intern (JavaScript, Python)",
        location: "Lagos, Nigeria",
        period: "July 2019 — Dec 2019",
        current: false,
        highlights: [
            "Completed intensive training in JavaScript ecosystem (Svelte.js, Node.js, Express.js) and Python",
            "Gained foundational experience in fullstack development and MongoDB through real-world projects",
        ],
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

export function Experience() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="section-padding">
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
                        Experience
                    </p>
                </motion.div>

                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold mb-12"
                    style={{ color: "var(--text)" }}
                >
                    Where I&apos;ve worked
                </motion.h2>

                <div className="relative">
                    {/* Timeline line */}
                    <div
                        className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px"
                        style={{ backgroundColor: "var(--border)" }}
                    />

                    <div className="space-y-10">
                        {experiences.map((exp) => (
                            <motion.div
                                key={exp.company + exp.period}
                                variants={itemVariants}
                                className="relative pl-8 md:pl-10"
                            >
                                {/* Timeline dot */}
                                <div
                                    className="absolute left-0 top-1.5 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full"
                                    style={{
                                        backgroundColor: exp.current ? "var(--accent)" : "var(--surface-2)",
                                        border: exp.current
                                            ? "3px solid var(--bg)"
                                            : "3px solid var(--border)",
                                        boxShadow: exp.current
                                            ? "0 0 0 2px var(--accent)"
                                            : "none",
                                    }}
                                />

                                <div
                                    className="rounded-xl p-5 md:p-6"
                                    style={{
                                        backgroundColor: "var(--surface)",
                                        border: exp.current
                                            ? "0.5px solid var(--accent)"
                                            : "0.5px solid var(--border)",
                                    }}
                                >
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                        <div>
                                            <h3
                                                className="text-lg font-semibold"
                                                style={{ color: "var(--text)" }}
                                            >
                                                {exp.company}
                                            </h3>
                                            <p
                                                className="text-sm font-medium"
                                                style={{ color: "var(--accent-text)" }}
                                            >
                                                {exp.role}
                                            </p>
                                        </div>
                                        <div className="sm:text-right shrink-0">
                                            <p
                                                className="text-sm font-medium"
                                                style={{ color: "var(--text-muted)" }}
                                            >
                                                {exp.period}
                                            </p>
                                            <p
                                                className="text-xs"
                                                style={{ color: "var(--text-faint)" }}
                                            >
                                                {exp.location}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <ul className="space-y-2">
                                        {exp.highlights.map((highlight) => (
                                            <li
                                                key={highlight}
                                                className="flex items-start gap-2"
                                            >
                                                <span
                                                    className="mt-2 w-1 h-1 rounded-full shrink-0"
                                                    style={{ backgroundColor: "var(--text-faint)" }}
                                                />
                                                <span
                                                    className="text-sm leading-relaxed"
                                                    style={{ color: "var(--text-muted)" }}
                                                >
                                                    {highlight}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}