import type { Metadata } from "next";

const title = "Terms of Service";
const description =
    "Read the Blink N Ship terms of service governing your use of our AI-powered ecommerce operations platform. Includes account terms, payment terms, acceptable use policy, and limitation of liability.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://blinknship.com/terms" },
    openGraph: {
        title: `${title} — Blink N Ship`,
        description:
            "Blink N Ship terms of service — the complete terms and conditions for using our ecommerce operations platform. Includes account registration, billing, acceptable use, and legal disclaimers.",
        url: "https://blinknship.com/terms",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Blink N Ship Terms of Service",
            },
        ],
    },
    twitter: {
        title: `${title} — Blink N Ship`,
        description:
            "Blink N Ship terms of service — account terms, payment terms, acceptable use, and legal disclaimers for our ecommerce operations platform.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
    keywords: [
        "Blink N Ship terms",
        "ecommerce platform terms of service",
        "courier software terms",
        "SaaS terms Pakistan",
    ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
