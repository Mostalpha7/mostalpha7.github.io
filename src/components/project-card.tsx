"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

function PlayStoreIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
        </svg>
    );
}

function AppStoreIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z" />
        </svg>
    );
}

function ExternalIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    );
}

const iconMap = {
    playstore: PlayStoreIcon,
    appstore: AppStoreIcon,
    external: ExternalIcon,
};

export function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            className="group relative rounded-2xl p-6 md:p-8 flex flex-col h-full"
            style={{
                backgroundColor: "var(--surface)",
                border: "0.5px solid var(--border)",
                transition: "border-color 0.3s, box-shadow 0.3s",
            }}
            whileHover={{
                y: -4,
                transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.boxShadow =
                    "0 8px 30px color-mix(in srgb, var(--accent) 8%, transparent)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            {/* Header: Title + Status */}
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3
                        className="text-xl font-semibold mb-1"
                        style={{ color: "var(--text)" }}
                    >
                        {project.title}
                    </h3>
                    <p
                        className="text-sm"
                        style={{ color: "var(--text-muted)" }}
                    >
                        {project.subtitle}
                    </p>
                </div>
                {project.status && (
                    <span
                        className="text-xs font-medium px-3 py-1 rounded-full shrink-0 ml-4"
                        style={{
                            backgroundColor:
                                project.status === "Current role"
                                    ? "var(--accent-subtle)"
                                    : "var(--surface-2)",
                            color:
                                project.status === "Current role"
                                    ? "var(--accent-text)"
                                    : "var(--text-faint)",
                        }}
                    >
                        {project.status}
                    </span>
                )}
            </div>

            {/* Role */}
            <p
                className="text-sm font-medium mb-3"
                style={{ color: "var(--accent-text)" }}
            >
                {project.role}
            </p>

            {/* Description */}
            <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--text-muted)" }}
            >
                {project.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-2 mb-6">
                {project.metrics.map((metric) => (
                    <div
                        key={metric}
                        className="flex items-start gap-2"
                    >
                        <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: "var(--accent)" }}
                        />
                        <span
                            className="text-xs leading-relaxed"
                            style={{ color: "var(--text-muted)" }}
                        >
                            {metric}
                        </span>
                    </div>
                ))}
            </div>

            {/* Spacer to push bottom content down */}
            <div className="flex-1" />

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                    <span
                        key={item}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-full"
                        style={{
                            backgroundColor: "var(--surface-2)",
                            color: "var(--text-faint)",
                        }}
                    >
                        {item}
                    </span>
                ))}
            </div>

            {/* Links */}
            {project.links.length > 0 && (
                <div className="flex gap-3">
                    {project.links.map((link) => {
                        const Icon = iconMap[link.icon];
                        return (
                            <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg"
                                style={{
                                    color: "var(--text-muted)",
                                    border: "0.5px solid var(--border)",
                                    transition: "color 0.2s, border-color 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "var(--accent)";
                                    e.currentTarget.style.borderColor = "var(--accent)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "var(--text-muted)";
                                    e.currentTarget.style.borderColor = "var(--border)";
                                }}
                            >
                                <Icon />
                                {link.label}
                            </a>
                        );
                    })}
                </div>
            )}

            {/* In development label when no links */}
            {project.links.length === 0 && project.status === "In development" && (
                <div className="flex items-center gap-2">
                    <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: "var(--accent)" }}
                    />
                    <span
                        className="text-xs font-medium"
                        style={{ color: "var(--text-faint)" }}
                    >
                        In active development
                    </span>
                </div>
            )}
        </motion.div>
    );
}