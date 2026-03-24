"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
    theme: Theme;
    resolvedTheme: "light" | "dark";
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>("system");
    const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark");

    // On mount, read saved preference
    useEffect(() => {
        const saved = localStorage.getItem("theme") as Theme | null;
        if (saved) {
            setThemeState(saved);
        }
    }, []);

    // Apply theme changes
    useEffect(() => {
        const root = document.documentElement;

        function applyTheme(resolved: "light" | "dark") {
            if (resolved === "dark") {
                root.classList.add("dark");
            } else {
                root.classList.remove("dark");
            }
            setResolvedTheme(resolved);
        }

        if (theme === "system") {
            const mq = window.matchMedia("(prefers-color-scheme: dark)");
            applyTheme(mq.matches ? "dark" : "light");

            const handler = (e: MediaQueryListEvent) => {
                applyTheme(e.matches ? "dark" : "light");
            };
            mq.addEventListener("change", handler);
            return () => mq.removeEventListener("change", handler);
        } else {
            applyTheme(theme);
        }
    }, [theme]);

    function setTheme(newTheme: Theme) {
        setThemeState(newTheme);
        if (newTheme === "system") {
            localStorage.removeItem("theme");
        } else {
            localStorage.setItem("theme", newTheme);
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}