import type { Metadata } from "next";

const title = "Contact";
const description =
    "Get in touch with the Blink N Ship team. Reach us via email at hello@blinknship.com, through WhatsApp, or visit our office in Karachi, Pakistan. We typically respond within 2 hours during business hours.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://blinknship.com/contact" },
    openGraph: {
        title: `${title} — Blink N Ship`,
        description:
            "Have questions about Blink N Ship? Contact our team via email, WhatsApp, or visit us in Karachi. We respond within 2 hours during business hours. We're here to help you automate your ecommerce operations.",
        url: "https://blinknship.com/contact",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Contact Blink N Ship — Get in Touch",
            },
        ],
    },
    twitter: {
        title: `${title} — Blink N Ship`,
        description:
            "Contact the Blink N Ship team via email or WhatsApp. We respond within 2 hours during business hours.",
        images: ["/og-image.png"],
    },
    keywords: [
        "contact Blink N Ship",
        "ecommerce support Pakistan",
        "courier software help",
        "AI order management support",
    ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
