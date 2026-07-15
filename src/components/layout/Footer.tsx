"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FOOTER_LINKS: Record<string, { label: string; href: string }[]> = {
    Product: [
        { label: "Features", href: "/features" },
        { label: "How It Works", href: "/how-it-works" },
        { label: "Pricing", href: "/#pricing" },
        { label: "FAQ", href: "/#faq" },
    ],
    Company: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "mailto:hello@blinknship.com" },
    ],
    Legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Refund Policy", href: "/refund" },
    ],
};

export default function Footer() {
    const bigTextRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                bigTextRef.current,
                { opacity: 0, y: 80, scale: 0.92 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.4,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: bigTextRef.current,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={sectionRef}
            className="bg-dark pt-16 md:pt-20 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 pb-10 md:pb-16 border-b border-white/10">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2.5 mb-5">
                            <img src="/logo.png" alt="Blink N Ship" className="h-8 w-auto rounded-lg" />
                            <span className="font-manrope font-bold text-white text-[15px] tracking-tight">
                                Blink N Ship
                            </span>
                        </div>

                        <p className="font-inter text-sm text-white/40 leading-relaxed max-w-xs">
                            AI-powered ecommerce operations platform. One dashboard for
                            orders, courier, inventory, finance, and team.
                        </p>
                    </div>

                    {Object.entries(FOOTER_LINKS).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="font-manrope font-semibold text-white text-sm mb-5">
                                {category}
                            </h4>
                            <ul className="flex flex-col gap-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="font-inter text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-4 md:py-6">
                    <p className="font-inter text-xs text-white/25">
                        &copy; {new Date().getFullYear()} Blink N Ship. All rights reserved. Built by Axura Bots.
                    </p>
                    <div className="flex items-center gap-1">
                        <span className="font-inter text-xs text-white/25">Made with</span>
                        <span className="text-primary text-xs mx-1">&hearts;</span>
                        <span className="font-inter text-xs text-white/25">
                            for ecommerce businesses
                        </span>
                    </div>
                </div>
            </div>

            <div ref={bigTextRef} className="relative mt-1 md:mt-4 w-full h-24 sm:h-32 md:h-40 lg:h-52 flex items-end justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-dark/20 via-transparent to-dark/20 z-10 pointer-events-none" />

                <h2
                    className="font-manrope font-extrabold text-center select-none pointer-events-none whitespace-nowrap leading-[0.7] tracking-[-0.04em] bg-gradient-to-b from-white/40 to-white/5 bg-clip-text text-transparent text-6xl sm:text-7xl md:text-8xl lg:text-[12rem] xl:text-[14rem]"
                >
                    BLINK N SHIP
                </h2>
            </div>
        </footer>
    );
}
