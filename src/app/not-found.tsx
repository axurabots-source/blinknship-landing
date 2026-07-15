import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "404 — Page Not Found",
    description: "The page you're looking for doesn't exist. Return to Blink N Ship homepage.",
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 bg-white">
            <div className="text-center max-w-lg mx-auto">
                <span className="font-inter text-[10px] font-semibold text-primary tracking-widest uppercase mb-4 block">
                    Error 404
                </span>
                <h1 className="font-manrope font-extrabold text-foreground text-5xl md:text-7xl mb-4">
                    Page not found
                </h1>
                <p className="font-inter text-muted leading-relaxed text-sm md:text-base mb-8">
                    The page you are looking for does not exist, has been moved, or is temporarily
                    unavailable. Let&apos;s get you back on track.
                </p>
                <Link
                    href="/"
                    className="font-manrope font-semibold text-white bg-primary px-8 py-3.5 rounded-full text-[15px] shadow-lg shadow-primary/30 inline-flex items-center gap-2 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    );
}
