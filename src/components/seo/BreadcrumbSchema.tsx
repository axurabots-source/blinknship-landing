"use client";

import { usePathname } from "next/navigation";

const LABEL_MAP: Record<string, string> = {
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

export default function BreadcrumbSchema() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    const itemListElement = [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://blinknship.com",
        },
        ...segments.map((seg, i) => ({
            "@type": "ListItem",
            position: i + 2,
            name: LABEL_MAP[seg] || seg,
            item: `https://blinknship.com/${segments.slice(0, i + 1).join("/")}`,
        })),
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
