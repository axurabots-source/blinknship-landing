import type { Metadata } from "next";

const title = "Features";
const description =
    "Explore all features of Blink N Ship — AI order extraction from WhatsApp, one-click courier booking across 12+ services, real-time inventory management, financial ledger, team collaboration, and analytics.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://blinknship.com/features" },
    openGraph: {
        title: `${title} — Blink N Ship`,
        description,
        url: "https://blinknship.com/features",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Blink N Ship Features",
            },
        ],
    },
    twitter: {
        title: `${title} — Blink N Ship`,
        description,
        images: ["/og-image.png"],
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
