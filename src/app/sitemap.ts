import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blinknship.com";
const lastMod = new Date("2026-07-15");

const routes: { path: string; priority: number; changeFreq: "weekly" | "monthly" | "yearly" | "daily" }[] = [
    { path: "/", priority: 1.0, changeFreq: "weekly" },
    { path: "/features", priority: 0.9, changeFreq: "weekly" },
    { path: "/how-it-works", priority: 0.9, changeFreq: "weekly" },
    { path: "/pricing", priority: 0.9, changeFreq: "weekly" },
    { path: "/faq", priority: 0.7, changeFreq: "monthly" },
    { path: "/about", priority: 0.7, changeFreq: "monthly" },
    { path: "/contact", priority: 0.7, changeFreq: "monthly" },
    { path: "/privacy", priority: 0.5, changeFreq: "yearly" },
    { path: "/terms", priority: 0.5, changeFreq: "yearly" },
    { path: "/refund", priority: 0.5, changeFreq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: lastMod,
        changeFrequency: route.changeFreq,
        priority: route.priority,
    }));
}
