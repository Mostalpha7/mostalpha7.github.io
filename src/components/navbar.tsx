"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Teaching", href: "#teaching" },
    { label: "Contact", href: "#contact" },
];

export function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        setHidden(latest > previous && latest > 150);
        setScrolled(latest > 50);
    });

    useEffect(() => {
        const sections = navLinks.map((link) =>
            document.querySelector(link.href)
        );
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        sections.forEach((section) => {
            if (section) observer.observe(section);
        });
        return () => observer.disconnect();
    }, []);

    function handleScroll(e: React.MouseEvent, target: string) {
        e.preventDefault();
        if (target === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const el = document.querySelector(target);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            // animate={{ y: hidden ? -100 : 0 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50"
            style={{
                backgroundColor: scrolled
                    ? "color-mix(in srgb, var(--bg) 80%, transparent)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled
                    ? "0.5px solid var(--border)"
                    : "0.5px solid transparent",
            }}
        >
            <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <a
                    href="#"
                    onClick={(e) => handleScroll(e, "#")}
                    className="text-base font-semibold tracking-tight"
                    style={{ color: "var(--text)" }}
                >
                    Mustapha<span style={{ color: "var(--accent)" }}>.</span>
                </a>

                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            className="relative px-3 py-1.5 text-sm rounded-md"
                            style={{
                                color:
                                    activeSection === link.href
                                        ? "var(--accent)"
                                        : "var(--text-muted)",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                if (activeSection !== link.href) {
                                    e.currentTarget.style.color = "var(--text)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeSection !== link.href) {
                                    e.currentTarget.style.color = "var(--text-muted)";
                                }
                            }}
                        >
                            <span className="relative z-10">{link.label}</span>
                            {activeSection === link.href && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute inset-0 rounded-md"
                                    style={{ backgroundColor: "var(--accent-subtle)" }}
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href="#contact"
                        onClick={(e) => handleScroll(e, "#contact")}
                        className="hidden sm:inline-flex px-4 py-2 text-sm font-medium rounded-lg"
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
                        Get in touch
                    </a>
                    <ThemeToggle />
                    <MobileMenu />
                </div>
            </nav>
        </motion.header>
    );
}

function MobileMenu() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    function handleNavClick(e: React.MouseEvent, target: string) {
        e.preventDefault();
        setOpen(false);
        setTimeout(() => {
            const el = document.querySelector(target);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 200);
    }

    return (
        <div className="md:hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg cursor-pointer"
                style={{
                    backgroundColor: "var(--surface-2)",
                    border: "0.5px solid var(--border)",
                }}
                aria-label="Toggle menu"
            >
                <motion.span
                    animate={{ rotate: open ? 45 : 0, y: open ? 4 : 0 }}
                    className="block w-4 h-0.5 rounded-full"
                    style={{ backgroundColor: "var(--text-muted)" }}
                />
                <motion.span
                    animate={{ opacity: open ? 0 : 1 }}
                    className="block w-4 h-0.5 rounded-full"
                    style={{ backgroundColor: "var(--text-muted)" }}
                />
                <motion.span
                    animate={{ rotate: open ? -45 : 0, y: open ? -4 : 0 }}
                    className="block w-4 h-0.5 rounded-full"
                    style={{ backgroundColor: "var(--text-muted)" }}
                />
            </button>

            <motion.div
                initial={false}
                animate={{
                    opacity: open ? 1 : 0,
                    pointerEvents: open ? "auto" : "none",
                }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-16 z-40"
                style={{ backgroundColor: "var(--bg)" }}
            >
                <nav className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: open ? 1 : 0, y: open ? 0 : 20 }}
                            transition={{ delay: open ? i * 0.05 : 0, duration: 0.3 }}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-2xl font-medium"
                            style={{ color: "var(--text)" }}
                        >
                            {link.label}
                        </motion.a>
                    ))}
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: open ? 1 : 0, y: open ? 0 : 20 }}
                        transition={{ delay: open ? navLinks.length * 0.05 : 0, duration: 0.3 }}
                        onClick={(e) => handleNavClick(e, "#contact")}
                        className="px-6 py-3 text-lg font-medium rounded-lg"
                        style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
                    >
                        Get in touch
                    </motion.a>
                </nav>
            </motion.div>
        </div>
    );
}