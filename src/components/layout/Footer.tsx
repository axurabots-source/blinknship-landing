"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FOOTER_LINKS = {
    Product: ["Features", "How It Works", "Pricing", "Changelog"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Legal: ["Privacy Policy", "Terms of Service", "Refund Policy"],
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
            className="bg-dark pt-20 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
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
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="font-inter text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
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

            <div ref={bigTextRef} className="relative mt-4 overflow-hidden w-full -mx-6 sm:-mx-0 h-28 md:h-40 lg:h-56">
                <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-transparent to-dark/40 z-10 pointer-events-none" />

                <h2
                    className="absolute bottom-0 left-0 right-0 font-manrope font-extrabold text-center select-none pointer-events-none whitespace-nowrap text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] leading-[0.8] tracking-[-0.05em] bg-gradient-to-b from-white/30 to-transparent bg-clip-text text-transparent"
                    style={{ transform: "translateY(8%)" }}
                >
                    BLINK N SHIP
                </h2>
            </div>
        </footer>
    );
}
