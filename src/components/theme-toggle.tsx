"use client";

import { useTheme } from "./theme-provider";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { resolvedTheme, setTheme, theme } = useTheme();
    const isDark = resolvedTheme === "dark";

    function cycle() {
        // Cycle: system → light → dark → system
        if (theme === "system") {
            setTheme("light");
        } else if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("system");
        }
    }

    return (
        <button
            onClick={cycle}
            className="relative w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer"
            style={{
                backgroundColor: "var(--surface-2)",
                border: "0.5px solid var(--border)",
            }}
            aria-label={`Current theme: ${theme}. Click to switch.`}
            title={`Theme: ${theme}`}
        >
            {/* Sun */}
            <motion.svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ position: "absolute", color: "var(--text-muted)" }}
                initial={false}
                animate={{
                    scale: isDark ? 0 : 1,
                    opacity: isDark ? 0 : 1,
                    rotate: isDark ? -90 : 0,
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
            >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </motion.svg>

            {/* Moon */}
            <motion.svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ position: "absolute", color: "var(--text-muted)" }}
                initial={false}
                animate={{
                    scale: isDark ? 1 : 0,
                    opacity: isDark ? 1 : 0,
                    rotate: isDark ? 0 : 90,
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
            >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </motion.svg>

            {/* System indicator dot */}
            {theme === "system" && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
                    style={{
                        backgroundColor: "var(--accent)",
                        border: "2px solid var(--bg)",
                    }}
                />
            )}
        </button>
    );
}