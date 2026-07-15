import type { Metadata } from "next";

const title = "Privacy Policy";
const description =
    "Read the Blink N Ship privacy policy. Learn how we collect, store, process, and protect your personal data when you use our ecommerce operations platform. We take data security and your privacy seriously.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://blinknship.com/privacy" },
    openGraph: {
        title: `${title} — Blink N Ship`,
        description:
            "Blink N Ship privacy policy explains how we collect, use, and safeguard your personal information. We use bank-level encryption and never share your data without consent.",
        url: "https://blinknship.com/privacy",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Blink N Ship Privacy Policy",
            },
        ],
    },
    twitter: {
        title: `${title} — Blink N Ship`,
        description:
            "Blink N Ship privacy policy — how we collect, use, and protect your personal data with bank-level encryption.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
    keywords: [
        "Blink N Ship privacy",
        "ecommerce data protection",
        "courier software privacy",
        "data security Pakistan",
    ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
