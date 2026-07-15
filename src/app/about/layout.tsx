import type { Metadata } from "next";

const title = "About";
const description =
    "Learn about Blink N Ship — the AI-powered ecommerce operations platform built in Pakistan. Our mission is to help ecommerce businesses automate order management, courier booking, inventory tracking, and financial operations. Trusted by 2,500+ businesses.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://blinknship.com/about" },
    openGraph: {
        title: `${title} — Blink N Ship`,
        description:
            "Blink N Ship was built to solve the chaos of managing ecommerce operations across multiple tools. Founded in Pakistan, we help 2,500+ businesses automate orders, courier bookings, inventory, and finances on one platform.",
        url: "https://blinknship.com/about",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "About Blink N Ship — AI-Powered Ecommerce Operations Platform",
            },
        ],
    },
    twitter: {
        title: `${title} — Blink N Ship`,
        description:
            "Blink N Ship helps 2,500+ ecommerce businesses automate operations. AI-powered platform built in Pakistan for order, courier, inventory, and finance management.",
        images: ["/og-image.png"],
    },
    keywords: [
        "about Blink N Ship",
        "ecommerce platform Pakistan",
        "courier software company",
        "AI order management startup",
        "Pakistani ecommerce solution",
    ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
