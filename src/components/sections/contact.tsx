"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const socials = [
    {
        label: "GitHub",
        url: "https://github.com/mostalpha7",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        url: "https://linkedin.com/in/mustapha",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "Twitter / X",
        url: "https://twitter.com/mostalpha7",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

const sectionVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
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

export function Contact() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="section-padding">
            <motion.div
                ref={sectionRef}
                variants={sectionVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-5xl mx-auto px-6"
            >
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div variants={itemVariants} className="mb-4">
                        <p
                            className="text-sm font-medium tracking-widest uppercase"
                            style={{ color: "var(--accent)" }}
                        >
                            Contact
                        </p>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-4xl font-bold mb-6"
                        style={{ color: "var(--text)" }}
                    >
                        Let&apos;s work together
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg mb-4"
                        style={{ color: "var(--text-muted)" }}
                    >
                        I&apos;m currently open to senior remote roles and technical
                        co-founder opportunities. If you&apos;re building something
                        interesting, I&apos;d love to hear about it.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="inline-flex flex-wrap justify-center gap-2 mb-10"
                    >
                        <span
                            className="px-3 py-1 text-xs font-medium rounded-full"
                            style={{
                                backgroundColor: "var(--accent-subtle)",
                                color: "var(--accent-text)",
                            }}
                        >
                            Senior remote roles
                        </span>
                        <span
                            className="px-3 py-1 text-xs font-medium rounded-full"
                            style={{
                                backgroundColor: "var(--accent-subtle)",
                                color: "var(--accent-text)",
                            }}
                        >
                            Technical co-founder
                        </span>
                        <span
                            className="px-3 py-1 text-xs font-medium rounded-full"
                            style={{
                                backgroundColor: "var(--accent-subtle)",
                                color: "var(--accent-text)",
                            }}
                        >
                            Contract work
                        </span>
                    </motion.div>

                    {/* Email CTA */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <a
                            href="mailto:mostalpha7@gmail.com"
                            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-medium rounded-xl"
                            style={{
                                backgroundColor: "var(--accent)",
                                color: "var(--bg)",
                                transition: "background-color 0.2s, transform 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "var(--accent-hover)";
                                e.currentTarget.style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "var(--accent)";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            mostalpha7@gmail.com
                        </a>
                    </motion.div>

                    {/* Phone */}
                    <motion.div variants={itemVariants} className="mb-10">
                        <p
                            className="text-sm mb-1"
                            style={{ color: "var(--text-faint)" }}
                        >
                            Or reach me directly
                        </p>
                        <a
                            href="tel:+2348149607707"
                            className="text-base font-medium"
                            style={{
                                color: "var(--text-muted)",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "var(--accent)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "var(--text-muted)";
                            }}
                        >
                            +234 814 960 7707
                        </a>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center gap-4"
                    >
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-xl flex items-center justify-center"
                                style={{
                                    backgroundColor: "var(--surface)",
                                    border: "0.5px solid var(--border)",
                                    color: "var(--text-faint)",
                                    transition: "color 0.2s, border-color 0.2s, background-color 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "var(--accent)";
                                    e.currentTarget.style.borderColor = "var(--accent)";
                                    e.currentTarget.style.backgroundColor = "var(--accent-subtle)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "var(--text-faint)";
                                    e.currentTarget.style.borderColor = "var(--border)";
                                    e.currentTarget.style.backgroundColor = "var(--surface)";
                                }}
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    variants={itemVariants}
                    className="mt-20 pt-8 text-center"
                    style={{ borderTop: "0.5px solid var(--border)" }}
                >
                    <p
                        className="text-sm"
                        style={{ color: "var(--text-faint)" }}
                    >
                        Built with Next.js, Tailwind CSS & Framer Motion.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}