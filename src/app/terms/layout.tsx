import type { Metadata } from "next";

const title = "Terms of Service";
const description =
    "Blink N Ship terms of service. Read the terms and conditions governing your use of the Blink N Ship ecommerce operations platform.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://blinknship.com/terms" },
    openGraph: {
        title: `${title} — Blink N Ship`,
        description,
        url: "https://blinknship.com/terms",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Blink N Ship Terms of Service",
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
