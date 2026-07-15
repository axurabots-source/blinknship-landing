import type { Metadata } from "next";

const title = "Refund Policy";
const description =
    "Read the Blink N Ship refund policy. Learn about our 30-day money-back guarantee, cancellation process, how refunds are processed, and exceptions. We make refunds simple and transparent for all our customers.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://blinknship.com/refund" },
    openGraph: {
        title: `${title} — Blink N Ship`,
        description:
            "Blink N Ship refund policy — 30-day money-back guarantee, easy cancellation, and transparent refund process. No hidden terms, no hassle. Learn how refunds work.",
        url: "https://blinknship.com/refund",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Blink N Ship Refund Policy",
            },
        ],
    },
    twitter: {
        title: `${title} — Blink N Ship`,
        description:
            "Blink N Ship refund policy — 30-day money-back guarantee, easy cancellation, and transparent refund process.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
    keywords: [
        "Blink N Ship refund",
        "ecommerce software refund policy",
        "courier booking refund",
        "SaaS refund Pakistan",
    ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
