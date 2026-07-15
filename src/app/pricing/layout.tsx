import type { Metadata } from "next";

const title = "Pricing";
const description =
    "Simple, transparent pricing for Blink N Ship. Starter at $5/month for individual sellers, Growth at $9/month for growing businesses (most popular), Business at $19/month for teams and inventory. All plans include a 30-day free trial — no credit card required. Save 17% with yearly billing.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://blinknship.com/pricing" },
    openGraph: {
        title: `${title} — Blink N Ship`,
        description:
            "Start free for 30 days — no credit card needed. Blink N Ship plans start at $5/month. AI order extraction, one-click courier booking, inventory management, and financial tools included in every plan. Cancel anytime.",
        url: "https://blinknship.com/pricing",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Blink N Ship Pricing — Start Free, No Credit Card Required",
            },
        ],
    },
    twitter: {
        title: `${title} — Blink N Ship`,
        description:
            "Start free for 30 days. Plans from $5/month. AI order extraction, courier booking, inventory management, and more — all included.",
        images: ["/og-image.png"],
    },
    keywords: [
        "ecommerce software pricing Pakistan",
        "courier booking software cost",
        "AI order management price",
        "inventory software pricing",
        "Blink N Ship plans",
        "affordable ecommerce platform",
    ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
