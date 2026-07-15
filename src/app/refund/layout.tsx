import type { Metadata } from "next";

const title = "Refund Policy";
const description =
    "Blink N Ship refund policy. Learn about our refund process, cancellation terms, and how we handle returns and disputes for our ecommerce operations platform.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://blinknship.com/refund" },
    openGraph: {
        title: `${title} — Blink N Ship`,
        description,
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
        description,
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
