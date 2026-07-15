export default function ContactPageSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Blink N Ship",
        description:
            "Get in touch with the Blink N Ship team. Reach us via email, WhatsApp, or visit our office in Karachi, Pakistan.",
        url: "https://blinknship.com/contact",
        mainEntity: {
            "@type": "Organization",
            name: "Blink N Ship",
            email: "hello@blinknship.com",
            contactPoint: [
                {
                    "@type": "ContactPoint",
                    email: "hello@blinknship.com",
                    contactType: "customer support",
                    availableLanguage: ["English", "Urdu"],
                },
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
