import type { Metadata } from "next";

const title = "Contact";
const description =
    "Get in touch with Blink N Ship. Reach us via email at hello@blinknship.com, WhatsApp, or visit our office in Karachi, Pakistan.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://blinknship.com/contact" },
    openGraph: {
        title: `${title} — Blink N Ship`,
        description,
        url: "https://blinknship.com/contact",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Contact Blink N Ship",
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
