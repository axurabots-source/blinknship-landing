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
                description: "Starter plan — $5/month for individual sellers",
            },
            {
                "@type": "Offer",
                price: "9",
                priceCurrency: "USD",
                priceValidUntil: new Date(
                    new Date().setFullYear(new Date().getFullYear() + 1)
                ).toISOString(),
                description: "Growth plan — $9/month for growing businesses",
            },
            {
                "@type": "Offer",
                price: "19",
                priceCurrency: "USD",
                priceValidUntil: new Date(
                    new Date().setFullYear(new Date().getFullYear() + 1)
                ).toISOString(),
                description: "Business plan — $19/month for teams and inventory",
            },
        ],
        featureList: [
            "AI Order Extraction from WhatsApp, Facebook, and Instagram DMs",
            "One-Click Courier Booking across 12+ services in Pakistan",
            "Real-Time Inventory Management with low-stock alerts",
            "Financial Ledger with automatic reconciliation and P&L statements",
            "Team Management with role-based permissions and activity logs",
            "Analytics dashboards with revenue trends, profit margins, and customer insights",
        ],
        browserRequirements: "Requires modern web browser",
        softwareVersion: "1.0",
        applicationSuite: "Blink N Ship",
        countryOfOrigin: "PK",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
