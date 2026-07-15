import type { Metadata } from "next";

const title = "Pricing";
const description =
    "Simple, transparent pricing for Blink N Ship. Starter at $5/mo, Growth at $9/mo, Business at $19/mo. All plans include a 30-day free trial — no credit card required.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://blinknship.com/pricing" },
    openGraph: {
        title: `${title} — Blink N Ship`,
        description,
        url: "https://blinknship.com/pricing",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Blink N Ship Pricing",
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
