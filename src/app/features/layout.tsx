import type { Metadata } from "next";

const title = "Features";
const description =
    "Explore all Blink N Ship features: AI order extraction from WhatsApp, one-click courier booking across 12+ Pakistan courier services, real-time inventory management, financial ledger with auto-reconciliation, team management with role-based permissions, and revenue analytics. Everything you need to automate your ecommerce operations.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://blinknship.com/features" },
    openGraph: {
        title: `${title} — Blink N Ship`,
        description:
            "Blink N Ship gives you AI-powered tools to automate your entire ecommerce workflow. Extract orders from WhatsApp with AI, book couriers in one click, track inventory in real time, manage finances, and grow your business — all from one dashboard.",
        url: "https://blinknship.com/features",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Blink N Ship Features — AI Order Management & Courier Booking",
            },
        ],
    },
    twitter: {
        title: `${title} — Blink N Ship`,
        description:
            "AI order extraction, one-click courier booking, real-time inventory, financial ledger, team management, and analytics — all from one dashboard.",
        images: ["/og-image.png"],
    },
    keywords: [
        "ecommerce features Pakistan",
        "AI order extraction software",
        "courier booking system",
        "inventory management features",
        "ecommerce dashboard tools",
        "business management software",
    ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
