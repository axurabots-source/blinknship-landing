export default function AboutPageSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Blink N Ship",
        description:
            "Blink N Ship is an AI-powered ecommerce operations platform built in Pakistan, helping businesses automate order management, courier booking, inventory tracking, and financial operations.",
        url: "https://blinknship.com/about",
        primaryImageOfPage: "https://blinknship.com/logo.png",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
