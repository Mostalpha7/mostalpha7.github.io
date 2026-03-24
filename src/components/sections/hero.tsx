"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function DotGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let mouseX = -1000;
        let mouseY = -1000;

        function resize() {
            if (!canvas) return;
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
        }

        function draw() {
            if (!canvas || !ctx) return;
            const w = canvas.offsetWidth;
            const h = canvas.offsetHeight;
            ctx.clearRect(0, 0, w, h);

            const gap = 32;
            const baseRadius = 1;
            const maxRadius = 2.5;
            const influenceRadius = 120;

            const isDark = document.documentElement.classList.contains("dark");
            const baseAlpha = isDark ? 0.15 : 0.12;
            const activeAlpha = isDark ? 0.5 : 0.4;

            for (let x = gap; x < w; x += gap) {
                for (let y = gap; y < h; y += gap) {
                    const dx = x - mouseX;
                    const dy = y - mouseY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const t = Math.max(0, 1 - dist / influenceRadius);

                    const radius = baseRadius + (maxRadius - baseRadius) * t;
                    const alpha = baseAlpha + (activeAlpha - baseAlpha) * t;

                    const color = isDark
                        ? `rgba(20, 184, 166, ${alpha})`
                        : `rgba(13, 148, 136, ${alpha})`;

                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.fillStyle = color;
                    ctx.fill();
                }
            }

            animationId = requestAnimationFrame(draw);
        }

        function handleMouse(e: MouseEvent) {
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        }

        function handleMouseLeave() {
            mouseX = -1000;
            mouseY = -1000;
        }

        resize();
        draw();

        window.addEventListener("resize", resize);
        canvas.addEventListener("mousemove", handleMouse);
        canvas.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            canvas.removeEventListener("mousemove", handleMouse);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: "auto" }}
        />
    );
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
} as const;

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
} as const;

export function Hero() {
    function handleScroll(e: React.MouseEvent, target: string) {
        e.preventDefault();
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            <DotGrid />

            <div className="absolute inset-0 pointer-events-none" style={{
                background: "radial-gradient(ellipse at center, transparent 0%, var(--bg) 70%)",
            }} />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 text-center px-6 max-w-3xl mx-auto"
            >
                <motion.p
                    variants={itemVariants}
                    // className="text-sm font-medium tracking-widest uppercase mb-6"
                    // className="text-xs sm:text-sm font-medium tracking-widest uppercase mb-4 sm:mb-6"
                    className="hidden sm:block text-sm font-medium tracking-widest uppercase mb-6"
                    style={{ color: "var(--accent)" }}
                >
                    Senior Fullstack Mobile Engineer
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-7xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
                    style={{ color: "var(--text)" }}
                >
                    I build products{" "}
                    <br className="hidden sm:block" />
                    people can {" "}
                    <span style={{ color: "var(--accent)" }}>rely on</span>.
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    // className="text-lg md:text-xl max-w-lg mx-auto mb-10"
                    className="text-base sm:text-lg md:text-xl max-w-lg mx-auto mb-8"

                    style={{ color: "var(--text-muted)" }}
                >
                    Flutter & Node.js engineer with 5+ years shipping fintech
                    products to <span className="font-medium" style={{ color: "var(--text)" }}> 100K+ </span> users.
                    {/* Currently at{" "}
                    <span className="font-medium" style={{ color: "var(--text)" }}>
                        Trove Finance
                    </span>
                    . */}
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#work"
                        onClick={(e) => handleScroll(e, "#work")}
                        className="px-6 py-3 text-base font-medium rounded-lg"
                        style={{
                            backgroundColor: "var(--accent)",
                            color: "var(--bg)",
                            transition: "background-color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--accent-hover)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--accent)";
                        }}
                    >
                        View my work
                    </a>
                    <a
                        href="/mustapha-abdulmujeeb-cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 text-base font-medium rounded-lg"
                        style={{
                            backgroundColor: "transparent",
                            color: "var(--text)",
                            border: "0.5px solid var(--border)",
                            transition: "border-color 0.2s, background-color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "var(--border-hover)";
                            e.currentTarget.style.backgroundColor = "var(--surface)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "var(--border)";
                            e.currentTarget.style.backgroundColor = "transparent";
                        }}
                    >
                        Download CV
                        <span className="ml-2" style={{ color: "var(--text-faint)" }}>
                            ↓
                        </span>
                    </a>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="mt-16 flex justify-center gap-6"
                >
                    <a
                        href="https://github.com/mostalpha7"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--text-faint)", transition: "color 0.2s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-faint)"; }}
                        aria-label="GitHub"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mustapha-abdulmujeeb-32680b195/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--text-faint)", transition: "color 0.2s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-faint)"; }}
                        aria-label="LinkedIn"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                    <a
                        href="https://twitter.com/mostalpha7"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--text-faint)", transition: "color 0.2s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-faint)"; }}
                        aria-label="Twitter"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}