export default function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Blink N Ship",
        alternateName: "BlinkNShip",
        url: "https://blinknship.com",
        logo: "https://blinknship.com/logo.png",
        description:
            "AI-powered ecommerce operations platform for order management, courier booking, inventory tracking, and financial management.",
        email: "hello@blinknship.com",
        foundingDate: "2024",
        contactPoint: [
            {
                "@type": "ContactPoint",
                email: "hello@blinknship.com",
                contactType: "customer support",
                availableLanguage: ["English", "Urdu"],
            },
        ],
        sameAs: [],
        knowsAbout: [
            "AI order extraction from WhatsApp and social media",
            "Courier booking and shipment tracking",
            "Inventory management for ecommerce",
            "Financial ledger and reconciliation",
            "Ecommerce operations automation",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
