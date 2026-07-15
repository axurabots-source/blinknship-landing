export default function WebSiteSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Blink N Ship",
        url: "https://blinknship.com",
        description:
            "AI-powered ecommerce operations platform. One dashboard for orders, courier, inventory, finance, and team.",
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: "https://blinknship.com/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
