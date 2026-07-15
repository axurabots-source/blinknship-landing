import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

const pageTitle = "AI Order Management & Courier Booking Platform for Pakistan";

export const metadata: Metadata = {
    title: pageTitle,
    description:
        "Blink N Ship automates your ecommerce operations: AI order extraction from WhatsApp, one-click courier booking across 12+ services, real-time inventory tracking, COD management, and financial reporting. Trusted by 2,500+ businesses in Pakistan.",
    alternates: { canonical: "https://blinknship.com" },
    openGraph: {
        title: `${pageTitle} — Blink N Ship`,
        description:
            "Automate order management, courier booking, inventory tracking, and COD management with Blink N Ship. AI-powered ecommerce operations platform trusted by 2,500+ businesses in Pakistan. Start free — no credit card needed.",
        url: "https://blinknship.com",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Blink N Ship — AI-Powered Ecommerce Operations Platform",
            },
        ],
    },
    twitter: {
        title: `${pageTitle} — Blink N Ship`,
        description:
            "Automate order management, courier booking, inventory tracking, and COD management with Blink N Ship. AI-powered platform trusted by 2,500+ businesses in Pakistan.",
        images: ["/og-image.png"],
    },
    keywords: [
        "AI order management Pakistan",
        "courier booking Pakistan",
        "inventory management software",
        "COD management system",
        "shipping automation Pakistan",
        "courier management software",
        "WhatsApp order management",
        "ecommerce operations platform",
        "Blink N Ship",
        "AI shipping platform",
    ],
};

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Marquee />
            <Features />
            <HowItWorks />
            <Pricing />
            <FAQ />
            <CTA />
            <Footer />
        </main>
    );
}
