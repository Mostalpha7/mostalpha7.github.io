export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    role: string;
    metrics: string[];
    tech: string[];
    links: {
        label: string;
        url: string;
        icon: "playstore" | "appstore" | "external";
    }[];
    featured?: boolean;
    status?: string;
}

export const projects: Project[] = [
    {
        id: "trove",
        title: "Trove Finance",
        subtitle: "Micro-investment platform",
        description:
            "Led mobile development for a platform enabling users to invest in US and Nigerian financial instruments — stocks, bonds, mutual funds, and crypto — with social investing features. Processed over ₦1 trillion in transaction volume.",
        role: "Lead Mobile Engineer (Current)",
        metrics: [
            "100K+ Android downloads",
            "₦1T+ transaction volume",
            "38% iOS crash rate reduction",
            "App rating 3.88 → 4.02",
        ],
        tech: ["Flutter", "Dart", "WebSockets", "KYC/ML Liveness", "REST APIs"],
        links: [
            {
                label: "Play Store",
                url: "https://play.google.com/store/apps/details?id=co.troveapp.android",
                icon: "playstore",
            },
            {
                label: "App Store",
                url: "https://apps.apple.com/app/trove-invest-better/id1554487245",
                icon: "appstore",
            },
        ],
        featured: true,
        status: "Current role",
    },
    {
        id: "anydrop",
        title: "Anydrop",
        subtitle: "Urban delivery platform",
        description:
            "Architected and delivered an end-to-end delivery app as the sole mobile engineer in 8 months. Features real-time GPS tracking with sub-second update latency, background location services, and integrated Stripe payments.",
        role: "Sole Mobile Engineer (Contract)",
        metrics: [
            "Built in 8 months solo",
            "Real-time GPS tracking",
            "Sub-second location updates",
            "Launched on iOS App Store",
        ],
        tech: ["Flutter", "Node.js", "Express", "PostgreSQL", "Prisma", "Stripe", "GPS"],
        links: [
            // {
            //     label: "App Store",
            //     url: "https://apps.apple.com/app/anydrop",
            //     icon: "appstore",
            // },
        ],
        featured: true,
        // status: "In development",
    },
    {
        id: "cashmobile",
        title: "CashMobile / CashTap",
        subtitle: "NFC contactless payments",
        description:
            "Built a mobile banking and payment solution for CashAfrica featuring CashTap — a proprietary NFC-powered contactless payment system enabling secure in-store transactions between merchant POS devices and user smartphones.",
        role: "Mobile Developer (Contract)",
        metrics: [
            "NFC contactless payments",
            "Bank-level security",
            "iOS & Android launch",
            "Mobile money transfers",
        ],
        tech: ["Flutter", "NFC", "Payment Gateway", "Mobile Money"],
        links: [
            {
                label: "Play Store",
                url: "https://play.google.com/store/apps/details?id=com.cashafrica.cashmobile",
                icon: "playstore",
            },
            {
                label: "App Store",
                url: "https://apps.apple.com/app/cashmobile",
                icon: "appstore",
            },
        ],
    },
    {
        id: "parking",
        title: "Parking Spot-Sharing",
        subtitle: "Location-based parking platform",
        description:
            "Optimized location-based parking spot searches using Haversine SQL queries, eliminating third-party location plugins. Integrated Google Maps SDK for dynamic map interactions and real-time availability.",
        role: "Fullstack Mobile Engineer (Contract)",
        metrics: [
            "Haversine SQL optimization",
            "Real-time availability",
            "Google Maps integration",
            "Prisma + PostgreSQL",
        ],
        tech: ["Flutter", "Node.js", "PostgreSQL", "Prisma", "Google Maps SDK"],
        links: [],
        // status: "done",
    },
    {
        id: "ksbtech",
        title: "KSBTECH",
        subtitle: "Digital trading platform",
        description:
            "Developed a Flutter-based platform for Nigerian users to buy, sell, and exchange gift cards and digital assets. Integrated payment gateways and crypto exchanges for fast, reliable transactions.",
        role: "Mobile Developer (Contract)",
        metrics: [
            "10K+ Android downloads",
            "Gift card & crypto trading",
            "Integrated payment gateways",
            "Strong user engagement",
        ],
        tech: ["Flutter", "Crypto APIs", "Payment Gateway"],
        links: [
            {
                label: "Play Store",
                url: "https://play.google.com/store/apps/details?id=com.app.ksbtech",
                icon: "playstore",
            },
            {
                label: "App Store",
                url: "https://apps.apple.com/app/ksbtech",
                icon: "appstore",
            },
        ],
    },
    {
        id: "easyflip",
        title: "Easyflip",
        subtitle: "Gift card exchange platform",
        description:
            "Built a mobile app that facilitates the exchange of gift cards using local currency. Users can trade their unused gift cards and receive payment in Naira within minutes.",
        role: "Mobile Developer (Contract)",
        metrics: [
            "Fast gift card trading",
            "Local currency payouts",
            "Quick transaction times",
            "iOS & Android launch",
        ],
        tech: ["Flutter", "Payment Gateway", "REST APIs"],
        links: [
            {
                label: "Play Store",
                url: "https://play.google.com/store/apps/details?id=com.easyflipMobile",
                icon: "playstore" as const,
            },
        ],
    },
];