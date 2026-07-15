import type { Metadata } from "next";

const title = "About";
const description =
    "Learn about Blink N Ship — the AI-powered ecommerce operations platform built in Pakistan. Our mission, story, values, and the team behind the platform.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://blinknship.com/about" },
    openGraph: {
        title: `${title} — Blink N Ship`,
        description,
        url: "https://blinknship.com/about",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "About Blink N Ship",
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
