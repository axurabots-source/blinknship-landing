"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Shield,
    ArrowRight,
    Lock,
    Database,
    Search,
    Share2,
    Clock,
    FileText,
    Cookie,
    Users,
    RefreshCw,
    MessageCircle,
    ChevronDown,
    CheckCircle,
    Sparkles,
} from "lucide-react";
import { PRIVACY_PAGE } from "@/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

const { hero, summary, sections, cta } = PRIVACY_PAGE;

const SECTION_ICONS: Record<string, React.ReactNode> = {
    Database: <Database size={22} />,
    Search: <Search size={22} />,
    Share2: <Share2 size={22} />,
    Shield: <Shield size={22} />,
    Clock: <Clock size={22} />,
    FileText: <FileText size={22} />,
    Cookie: <Cookie size={22} />,
    Users: <Users size={22} />,
    RefreshCw: <RefreshCw size={22} />,
    MessageCircle: <MessageCircle size={22} />,
};

/* ─── Hero ─── */
function PrivacyHero() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".pp-hero-ch", {
                opacity: 0,
                rotateY: -90,
                y: 40,
                stagger: 0.03,
                duration: 0.7,
                ease: "back.out(2)",
                delay: 0.2,
            });
            gsap.from(".pp-hero-meta", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                delay: 0.3,
                ease: "power2.out",
            });
            gsap.from(".pp-hero-sub", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.9,
                ease: "power2.out",
            });

            const orbs = sectionRef.current?.querySelectorAll(".pp-orb");
            if (orbs) {
                orbs.forEach((orb, i) => {
                    gsap.to(orb, {
                        x: gsap.utils.random(-120, 120),
                        y: gsap.utils.random(-120, 120),
                        scale: gsap.utils.random(0.6, 1.4),
                        duration: gsap.utils.random(5, 9),
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: i * 0.5,
                    });
                });
            }

            gsap.to(".pp-shield-orb", {
                rotate: 360,
                duration: 20,
                repeat: -1,
                ease: "none",
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const chars = (hero.title + " ").split("").map((c) => (c === " " ? "\u00A0" : c));

    return (
        <section ref={sectionRef} className="relative min-h-[85vh] flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden bg-white">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="pp-orb absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent blur-3xl" />
                <div className="pp-orb absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl" />
                <div className="pp-orb absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent blur-3xl" />
            </div>

            <div className="relative max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 bg-primary-light border border-primary/15 rounded-full px-4 py-1.5 mb-8"
                >
                    <Lock size={14} className="text-primary" />
                    <span className="font-inter text-xs font-medium text-primary tracking-wide">{hero.badge}</span>
                </motion.div>

                <p className="pp-hero-meta font-inter text-[11px] text-muted/60 mb-4">
                    Last updated: {hero.lastUpdated}
                </p>

                <h1 className="font-manrope font-extrabold text-foreground leading-[1.15] mb-6 text-[clamp(2.5rem,7vw,4.5rem)]" style={{ perspective: "1200px" }}>
                    {chars.map((ch, i) => (
                        <span key={i} className="pp-hero-ch inline-block" style={{ perspective: "800px" }}>{ch}</span>
                    ))}
                    <br />
                    <span className="text-gradient pp-hero-ch" style={{ perspective: "800px" }}>{hero.titleHighlight}</span>
                </h1>

                <p className="pp-hero-sub font-inter text-muted max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                    {hero.subtitle}
                </p>

                <div className="pp-shield-orb mt-10 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary-light/50 border border-primary/10 flex items-center justify-center">
                        <Shield size={28} className="text-primary" />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── Horizontal Scroll Text ─── */
function PrivacyScrollText() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(textRef.current, {
                xPercent: -45,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-32 overflow-hidden bg-dark">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div ref={textRef} className="flex whitespace-nowrap will-change-transform">
                <h2 className="font-manrope font-extrabold text-white/10 text-[clamp(3rem,12vw,12rem)] leading-none tracking-[-0.03em] select-none pr-12">
                    ✦ YOUR DATA YOUR RULES ✦ YOUR DATA YOUR RULES ✦ YOUR DATA YOUR RULES ✦
                </h2>
                <h2 className="font-manrope font-extrabold text-white/10 text-[clamp(3rem,12vw,12rem)] leading-none tracking-[-0.03em] select-none">
                    ✦ YOUR DATA YOUR RULES ✦ YOUR DATA YOUR RULES ✦ YOUR DATA YOUR RULES ✦
                </h2>
            </div>

            <div className="relative max-w-4xl mx-auto px-6 mt-[-1rem]">
                <p className="font-inter text-white/40 text-sm md:text-base leading-relaxed text-center max-w-2xl mx-auto">
                    We don't just comply with privacy laws — we believe in them.
                </p>
            </div>
        </section>
    );
}

/* ─── Summary / TL;DR ─── */
function PrivacySummary() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section ref={sectionRef} className="py-20 px-6 bg-card border-y border-border">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.97 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white border-2 border-primary/10 rounded-3xl p-8 md:p-10 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/[0.02] blur-3xl pointer-events-none" />

                    <div className="flex items-start gap-4 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle size={20} />
                        </div>
                        <div>
                            <h2 className="font-manrope font-bold text-foreground text-xl md:text-2xl mb-1">{summary.title}</h2>
                            <span className="font-inter text-[11px] text-primary font-medium">Read this if you read nothing else</span>
                        </div>
                    </div>

                    <p className="font-inter text-sm md:text-base text-muted leading-relaxed">
                        {summary.body}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {["We never sell your data", "Encrypted in transit & at rest", "Delete anytime", "48-hour response"].map((tag) => (
                            <span key={tag} className="font-inter text-xs font-medium text-primary bg-primary-light px-3 py-1.5 rounded-full border border-primary/10">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* ─── Privacy Sections ─── */
function PrivacySections() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const pathRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (pathRef.current) {
                gsap.from(pathRef.current, {
                    scaleY: 0,
                    transformOrigin: "top center",
                    duration: 2,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                        end: "bottom 30%",
                        scrub: 1,
                    },
                });
            }

            cardsRef.current.forEach((card, i) => {
                if (!card) return;
                const dir = window.innerWidth < 768 ? 40 : (i % 2 === 0 ? -60 : 60);
                const rot = window.innerWidth < 768 ? 3 : (i % 2 === 0 ? 5 : -5);
                gsap.from(card, {
                    x: dir,
                    opacity: 0,
                    rotateY: rot,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 82%",
                        end: "top 35%",
                        scrub: 0.8,
                    },
                });

                gsap.from(card.querySelector(".pp-section-icon"), {
                    scale: 0,
                    rotate: -30,
                    duration: 0.5,
                    ease: "back.out(3)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 75%",
                        end: "top 40%",
                        scrub: 0.6,
                    },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-primary/[0.02] blur-3xl" />
                <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-blue-500/[0.02] blur-3xl" />
            </div>

            <div className="relative max-w-5xl mx-auto">
                <div className="relative">
                    {/* Center Timeline Path */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-border/60 md:-translate-x-1/2">
                        <div ref={pathRef} className="w-full h-full bg-gradient-to-b from-primary via-primary/60 to-primary/20" style={{ transformOrigin: "top center", transform: "scaleY(0)" }} />
                    </div>

                    <div className="space-y-14 md:space-y-20">
                        {sections.map((section, i) => (
                            <div key={i} className="relative flex items-start gap-4 md:gap-16">
                                {/* Dot */}
                                <div className="absolute left-[24px] md:left-1/2 md:-translate-x-1/2 w-2 h-2 md:w-[10px] md:h-[10px] rounded-full bg-primary border-[2px] md:border-[3px] border-white z-10 shadow-sm" />

                                {/* Empty side on desktop */}
                                <div className="hidden md:block w-1/2" />

                                {/* Card */}
                                <div
                                    ref={(el) => { cardsRef.current[i] = el; }}
                                    className="ml-10 md:ml-0 md:w-1/2 bg-white border border-border rounded-2xl p-4 md:p-7 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                                    style={{ perspective: "1200px" }}
                                >
                                    <div className="flex items-start gap-3 md:gap-4">
                                        <div className="pp-section-icon w-10 h-10 md:w-11 md:h-11 rounded-xl md:rounded-2xl bg-primary-light text-primary flex items-center justify-center shrink-0">
                                            {SECTION_ICONS[section.icon] || <Shield size={20} />}
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="font-manrope font-bold text-foreground text-sm md:text-lg mb-2 leading-snug">{section.title}</h3>
                                            <p className="font-inter text-sm text-muted leading-relaxed">{section.body}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── CTA ─── */
function PrivacyCTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".pp-cta-el", {
                y: 40,
                opacity: 0,
                stagger: 0.12,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-28 px-6 relative overflow-hidden bg-gradient-to-br from-dark via-dark to-primary/10">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl" />
            </div>
            <div className="relative max-w-4xl mx-auto text-center">
                <div className="pp-cta-el w-14 h-14 rounded-2xl bg-primary-light border border-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Lock size={24} className="text-primary" />
                </div>
                <span className="pp-cta-el font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block">{cta.title}</span>
                <h2 className="pp-cta-el font-manrope font-extrabold text-white leading-tight mb-5 text-4xl md:text-5xl lg:text-6xl">
                    Your data is
                    <br />
                    <span className="text-gradient">always yours</span>
                </h2>
                <p className="pp-cta-el font-inter text-white/50 max-w-xl mx-auto leading-relaxed text-sm md:text-base mb-10">
                    {cta.subtitle}
                </p>
                <div className="pp-cta-el flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.a
                        href="mailto:hello@blinknship.com"
                        whileHover={{ scale: 1.06, boxShadow: "0 16px 50px rgba(204,120,92,0.6)" }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                        className="font-manrope font-semibold text-white bg-primary px-10 py-4 rounded-full text-[16px] shadow-2xl shadow-primary/40 cursor-pointer inline-flex items-center gap-2"
                    >
                        Email Privacy Team <ArrowRight size={16} />
                    </motion.a>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="font-inter text-sm font-medium text-white/70 border border-white/20 px-8 py-4 rounded-full cursor-pointer hover:text-white hover:border-white/40 transition-colors duration-300"
                    >
                        Visit Contact Page
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

/* ─── Page ─── */
export default function PrivacyPage() {
    return (
        <main>
            <Navbar />
            <PrivacyHero />
            <PrivacyScrollText />
            <PrivacySummary />
            <PrivacySections />
            <PrivacyCTA />
            <Footer />
        </main>
    );
}
