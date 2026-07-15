import type { Metadata } from "next";

const title = "FAQ";
const description =
    "Frequently asked questions about Blink N Ship. Learn about AI order extraction, courier booking, pricing, features, and account management.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://blinknship.com/faq" },
    openGraph: {
        title: `${title} — Blink N Ship`,
        description,
        url: "https://blinknship.com/faq",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Blink N Ship FAQ",
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
