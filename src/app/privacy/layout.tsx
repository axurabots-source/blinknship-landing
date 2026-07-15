import type { Metadata } from "next";

const title = "Privacy Policy";
const description =
    "Blink N Ship privacy policy. Learn how we collect, use, and protect your personal data when you use our ecommerce operations platform.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://blinknship.com/privacy" },
    openGraph: {
        title: `${title} — Blink N Ship`,
        description,
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
