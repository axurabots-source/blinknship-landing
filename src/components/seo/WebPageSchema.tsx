"use client";

import { usePathname } from "next/navigation";

const NAME_MAP: Record<string, string> = {
    features: "Features",
    "how-it-works": "How It Works",
    pricing: "Pricing",
    faq: "FAQ",
    about: "About",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    refund: "Refund Policy",
};

export default function WebPageSchema() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);
    const pageName = segments.length === 0 ? "Home" : NAME_MAP[segments[0]] || segments[0];
    const description =
        segments.length === 0
            ? "AI-powered ecommerce operations platform for order management, courier booking, inventory tracking, and financial management."
            : `${pageName} — Blink N Ship`;

    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: pageName === "Home" ? "Blink N Ship — One Platform. Everything Connected." : `${pageName} — Blink N Ship`,
        description,
        url: `https://blinknship.com${pathname}`,
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://blinknship.com" },
                ...segments.map((seg, i) => ({
                    "@type": "ListItem",
                    position: i + 2,
                    name: NAME_MAP[seg] || seg,
                    item: `https://blinknship.com/${segments.slice(0, i + 1).join("/")}`,
                })),
            ],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
