import type { Metadata, Viewport } from "next";
import { Manrope, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import SoftwareAppSchema from "@/components/seo/SoftwareAppSchema";
import WebSiteSchema from "@/components/seo/WebSiteSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space",
    display: "swap",
});

const baseUrl = "https://blinknship.com";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "Blink N Ship — One Platform. Everything Connected.",
        template: "%s — Blink N Ship",
    },
    description:
        "AI-powered ecommerce operations platform. Manage orders, courier bookings, inventory, finance, and team — all from one dashboard.",
    keywords: [
        "ecommerce operations",
        "courier booking Pakistan",
        "AI order extraction",
        "inventory management",
        "order management software",
        "ecommerce dashboard",
        "WhatsApp order management",
        "Blink N Ship",
    ],
    applicationName: "Blink N Ship",
    creator: "Axura Bots",
    publisher: "Blink N Ship",
    authors: [{ name: "Blink N Ship" }],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/logo.png",
        apple: "/logo.png",
    },
    manifest: "/manifest.json",
    appleWebApp: {
        capable: true,
        title: "Blink N Ship",
        statusBarStyle: "default",
    },
    category: "technology",
    classification: "Ecommerce Operations Platform",
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Blink N Ship",
        title: "Blink N Ship — One Platform. Everything Connected.",
        description:
            "AI-powered ecommerce operations platform. Manage orders, courier bookings, inventory, finance, and team — all from one dashboard.",
        url: baseUrl,
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Blink N Ship — Ecommerce Operations Platform",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blink N Ship — One Platform. Everything Connected.",
        description:
            "AI-powered ecommerce operations platform. Manage orders, courier bookings, inventory, finance, and team — all from one dashboard.",
        images: ["/og-image.png"],
    },
    other: {
        "google-site-verification": "",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    themeColor: "#CC785C",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning className={`${manrope.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
            <head>
                <OrganizationSchema />
                <SoftwareAppSchema />
                <WebSiteSchema />
            </head>
            <body className="noise">
                <BreadcrumbSchema />
                <SmoothScrollProvider>{children}</SmoothScrollProvider>
            </body>
        </html>
    );
}