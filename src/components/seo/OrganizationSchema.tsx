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
        contactPoint: {
            "@type": "ContactPoint",
            email: "hello@blinknship.com",
            contactType: "customer support",
        },
        sameAs: [],
        foundingDate: "2024",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
