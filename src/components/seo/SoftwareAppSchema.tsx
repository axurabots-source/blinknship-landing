export default function SoftwareAppSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Blink N Ship",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
            "AI-powered ecommerce operations platform. AI order extraction from WhatsApp, one-click courier booking across 12+ services, real-time inventory management, financial ledger, team management, and analytics.",
        url: "https://blinknship.com",
        offers: [
            {
                "@type": "Offer",
                price: "5",
                priceCurrency: "USD",
                priceValidUntil: new Date(
                    new Date().setFullYear(new Date().getFullYear() + 1)
                ).toISOString(),
                description: "Starter plan",
            },
            {
                "@type": "Offer",
                price: "9",
                priceCurrency: "USD",
                priceValidUntil: new Date(
                    new Date().setFullYear(new Date().getFullYear() + 1)
                ).toISOString(),
                description: "Growth plan",
            },
            {
                "@type": "Offer",
                price: "19",
                priceCurrency: "USD",
                priceValidUntil: new Date(
                    new Date().setFullYear(new Date().getFullYear() + 1)
                ).toISOString(),
                description: "Business plan",
            },
        ],
        featureList: [
            "AI Order Extraction from WhatsApp, Facebook, Instagram",
            "One-Click Courier Booking (12+ services)",
            "Real-Time Inventory Management",
            "Financial Ledger with Auto-Reconciliation",
            "Team Management with Role-Based Permissions",
            "Analytics & Revenue Reports",
        ],
        browserRequirements: "Requires modern web browser",
        softwareVersion: "1.0",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
