import type { Metadata } from "next";

const title = "How It Works";
const description =
    "See how Blink N Ship works in three simple steps. AI extracts orders from WhatsApp messages, books couriers across 12+ services in Pakistan with one click, and tracks everything in real time. Set up in 5 minutes — no technical skills needed.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "https://blinknship.com/how-it-works" },
    openGraph: {
        title: `${title} — Blink N Ship`,
        description:
            "From WhatsApp order to shipped parcel in seconds. Blink N Ship AI extracts customer details, books the cheapest courier automatically, and updates your inventory and finances in real time. Three simple steps to automate your ecommerce operations.",
        url: "https://blinknship.com/how-it-works",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "How Blink N Ship Works — AI-Powered Ecommerce Automation",
            },
        ],
    },
    twitter: {
        title: `${title} — Blink N Ship`,
        description:
            "From WhatsApp order to shipped parcel in seconds. AI extracts, courier books, inventory updates — automatically. See how Blink N Ship works.",
        images: ["/og-image.png"],
    },
    keywords: [
        "how courier booking software works",
        "AI order processing workflow",
        "ecommerce automation platform",
        "WhatsApp order management system",
        "courier booking steps Pakistan",
    ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
