import type { Metadata } from "next";

const title = "How It Works";
const description =
    "See how Blink N Ship works in three simple steps. From AI order extraction to one-click courier booking and real-time analytics — transform your ecommerce operations.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://blinknship.com/how-it-works" },
    openGraph: {
        title: `${title} — Blink N Ship`,
        description,
        url: "https://blinknship.com/how-it-works",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "How Blink N Ship Works",
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
