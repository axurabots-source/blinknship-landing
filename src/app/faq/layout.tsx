import type { Metadata } from "next";

const title = "FAQ";
const description =
    "Frequently asked questions about Blink N Ship. Learn how AI order extraction works, which courier services are supported in Pakistan, pricing details, setup process, and account management. Can't find what you need? Contact our support team.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://blinknship.com/faq" },
    openGraph: {
        title: `${title} — Blink N Ship`,
        description:
            "Got questions about Blink N Ship? Find answers about AI order extraction, courier booking in Pakistan, pricing plans, features, and account setup. Our support team is always ready to help.",
        url: "https://blinknship.com/faq",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Blink N Ship FAQ — Frequently Asked Questions",
            },
        ],
    },
    twitter: {
        title: `${title} — Blink N Ship`,
        description:
            "Find answers about AI order extraction, courier booking, pricing, features, and account setup for Blink N Ship.",
        images: ["/og-image.png"],
    },
    keywords: [
        "Blink N Ship FAQ",
        "ecommerce platform questions",
        "courier booking help Pakistan",
        "AI order extraction questions",
        "inventory software FAQ",
    ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
