"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
    { value: 100, suffix: "K+", label: "App downloads" },
    { value: 5, suffix: "+", label: "Years experience" },
    { value: 1, prefix: "₦", suffix: "T+", label: "Transaction volume" },
    { value: 38, suffix: "%", label: "Crash rate reduced" },
];

const techStack = [
    {
        category: "Mobile",
        items: ["Flutter", "Dart", "iOS (Swift)", "Android (Kotlin)"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma", "GraphQL"],
    },
    {
        category: "Frontend",
        items: ["React.js", "Vue.js", "JavaScript", "HTML/CSS"],
    },
    {
        category: "Tools",
        items: ["Git", "NFC Payments", "Figma", "CI/CD"],
    },
    // {
    //     category: "Other",
    //     items: ["WebSockets", "NFC Payments", "Real-time Tracking", "Google Maps SDK"],
    // },
];

function AnimatedCounter({
    value,
    prefix,
    suffix,
    inView,
}: {
    value: number;
    prefix?: string;
    suffix: string;
    inView: boolean;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const duration = 1500;
        const startTime = performance.now();

        function step(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(eased * value);
            setCount(start);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }, [inView, value]);

    return (
        <span>
            {prefix}
            {count}
            {suffix}
        </span>
    );
}

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

export function About() {
    const sectionRef = useRef(null);
    const statsRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

    return (
        <section id="about" className="section-padding">
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
                        About
                    </p>
                </motion.div>

                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold mb-12"
                    style={{ color: "var(--text)" }}
                >
                    A bit about me
                </motion.h2>

                <div className="grid md:grid-cols-5 gap-12 md:gap-16 mb-16">
                    <motion.div variants={itemVariants} className="md:col-span-3">
                        <div className="space-y-5" style={{ color: "var(--text-muted)" }}>
                            <p className="text-base leading-relaxed">
                                I&apos;m a fullstack mobile engineer who loves building products
                                end-to-end — from crafting pixel-perfect Flutter UIs to
                                designing the Node.js backends that power them. For the past 5+
                                years, I&apos;ve been deep in the fintech space, shipping apps
                                that handle real money, real users, and real scale.
                            </p>
                            <p className="text-base leading-relaxed">
                                At{" "}
                                <span
                                    className="font-medium"
                                    style={{ color: "var(--text)" }}
                                >
                                    Trove Finance
                                </span>
                                , I&apos;ve been the lead mobile engineer since 2021, scaling the
                                app to 100K+ downloads and helping process over ₦1 trillion in
                                transactions. Before that, I built{" "}
                                <span
                                    className="font-medium"
                                    style={{ color: "var(--text)" }}
                                >
                                    Anydrop
                                </span>{" "}
                                as the sole engineer — a delivery platform with real-time GPS
                                tracking, launched on iOS in 8 months.
                            </p>
                            <p className="text-base leading-relaxed">
                                Beyond code, I teach Flutter and Node.js to the next generation
                                of engineers. I believe the best way to solidify knowledge is to
                                give it away.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="md:col-span-2">
                        <p
                            className="text-sm font-medium mb-4"
                            style={{ color: "var(--text)" }}
                        >
                            Tech I work with
                        </p>
                        <div className="space-y-5">
                            {techStack.map((group) => (
                                <div key={group.category}>
                                    <p
                                        className="text-xs font-medium uppercase tracking-wider mb-2"
                                        style={{ color: "var(--text-faint)" }}
                                    >
                                        {group.category}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <span
                                                key={item}
                                                className="px-3 py-1 text-xs font-medium rounded-full"
                                                style={{
                                                    backgroundColor: "var(--accent-subtle)",
                                                    color: "var(--accent-text)",
                                                }}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    ref={statsRef}
                    variants={itemVariants}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-xl p-6 text-center"
                            style={{
                                backgroundColor: "var(--surface)",
                                border: "0.5px solid var(--border)",
                            }}
                        >
                            <p
                                className="text-3xl md:text-4xl font-bold mb-1"
                                style={{ color: "var(--accent)" }}
                            >
                                <AnimatedCounter
                                    value={stat.value}
                                    prefix={stat.prefix}
                                    suffix={stat.suffix}
                                    inView={statsInView}
                                />
                            </p>
                            <p
                                className="text-sm"
                                style={{ color: "var(--text-muted)" }}
                            >
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}