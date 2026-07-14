"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Check,
    ArrowRight,
    Sparkles,
    Zap,
    Shield,
    Users,
    DollarSign,
    ChevronDown,
    Mail,
    Clock,
    Search,
    HelpCircle,
} from "lucide-react";
import { FAQ_PAGE } from "@/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

const { hero, categories, contact } = FAQ_PAGE;

const CAT_ICONS: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles size={18} />,
    Zap: <Zap size={18} />,
    DollarSign: <DollarSign size={18} />,
    Shield: <Shield size={18} />,
    Users: <Users size={18} />,
};

/* ─── Hero ─── */
function FaqHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".fq-ch", {
                opacity: 0,
                rotateY: -90,
                y: 40,
                stagger: 0.03,
                duration: 0.7,
                ease: "back.out(2)",
                delay: 0.2,
            });
            gsap.from(".fq-sub", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.9,
                ease: "power2.out",
            });
            gsap.from(".fq-cta", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                delay: 1.2,
                ease: "power2.out",
            });

            const orbs = sectionRef.current?.querySelectorAll(".fq-orb");
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
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const chars = (hero.title + " ").split("").map((c) => (c === " " ? "\u00A0" : c));

    return (
        <section ref={sectionRef} className="relative min-h-[80vh] flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden bg-dark">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="fq-orb absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent blur-3xl" />
                <div className="fq-orb absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent blur-3xl" />
                <div className="fq-orb absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-gradient-to-t from-blue-500/5 via-transparent to-transparent blur-3xl" />
            </div>

            <div ref={titleRef} className="relative max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8"
                >
                    <HelpCircle size={14} className="text-primary" />
                    <span className="font-inter text-xs font-medium text-primary tracking-wide">{hero.badge}</span>
                </motion.div>

                <h1 className="font-manrope font-extrabold text-white leading-[1.15] mb-6 text-[clamp(2.8rem,8vw,5rem)]" style={{ perspective: "1200px" }}>
                    {chars.map((ch, i) => (
                        <span key={i} className="fq-ch inline-block" style={{ perspective: "800px" }}>{ch}</span>
                    ))}
                    <br />
                    <span className="text-gradient fq-ch" style={{ perspective: "800px" }}>{hero.titleHighlight}</span>
                </h1>

                <p className="fq-sub font-inter text-white/50 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                    {hero.subtitle}
                </p>

                <div className="fq-cta mt-10">
                    <motion.a
                        href={`mailto:${contact.email}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 font-manrope font-semibold text-white bg-primary px-8 py-3.5 rounded-full text-[15px] shadow-lg shadow-primary/30 cursor-pointer"
                    >
                        <Mail size={16} /> {hero.cta}
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

/* ─── FAQ Accordion ─── */
function FaqAccordion() {
    const [activeCat, setActiveCat] = useState(categories[0].id);
    const sectionRef = useRef<HTMLElement>(null);
    const contentRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());
    const [openItem, setOpenItem] = useState<string | null>(null);

    const setContentRef = useCallback((key: string) => (el: HTMLDivElement | null) => {
        if (el) contentRefs.current.set(key, el);
    }, []);

    const toggle = useCallback((key: string) => {
        const isOpen = openItem === key;

        if (isOpen) {
            const el = contentRefs.current.get(key);
            if (el) {
                gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut", onComplete: () => setOpenItem(null) });
            }
        } else {
            if (openItem) {
                const prev = contentRefs.current.get(openItem);
                if (prev) gsap.to(prev, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
            }
            setOpenItem(key);
            const el = contentRefs.current.get(key);
            if (el) gsap.fromTo(el, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
        }
    }, [openItem]);

    const activeItems = categories.find((c) => c.id === activeCat)?.items || [];

    return (
        <section ref={sectionRef} className="py-28 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Category Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => { setActiveCat(cat.id); setOpenItem(null); }}
                            className={`inline-flex items-center gap-2 font-inter text-sm px-4 py-2.5 rounded-full border transition-all duration-200 cursor-pointer ${activeCat === cat.id
                                    ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                                    : "bg-white text-muted border-border hover:border-primary/30 hover:text-foreground"
                                }`}
                        >
                            <span className={activeCat === cat.id ? "text-white" : "text-primary"}>{CAT_ICONS[cat.icon]}</span>
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Questions */}
                <div className="space-y-3">
                    {activeItems.map((item, i) => {
                        const key = `${activeCat}-${i}`;
                        return (
                            <div key={key} className="border border-border rounded-2xl overflow-hidden transition-shadow duration-200 hover:shadow-sm">
                                <button
                                    onClick={() => toggle(key)}
                                    className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer bg-white hover:bg-card/50 transition-colors duration-200"
                                >
                                    <span className="font-manrope font-semibold text-foreground text-sm md:text-base pr-4">{item.q}</span>
                                    <ChevronDown size={16} className={`text-muted shrink-0 transition-transform duration-300 ${openItem === key ? "rotate-180" : ""}`} />
                                </button>
                                <div
                                    ref={setContentRef(key)}
                                    className="overflow-hidden"
                                    style={{ height: 0, opacity: 0 }}
                                >
                                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                                        <p className="font-inter text-sm text-muted leading-relaxed">{item.a}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Category count */}
                <p className="text-center font-inter text-xs text-muted mt-8">
                    {activeItems.length} question{activeItems.length !== 1 ? "s" : ""} in this category
                </p>
            </div>
        </section>
    );
}

/* ─── Contact ─── */
function FaqContact() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".fq-contact-el", {
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
        <section ref={sectionRef} className="py-20 px-6 bg-card border-y border-border">
            <div className="max-w-3xl mx-auto text-center">
                <div className="bg-white border border-border rounded-3xl p-8 md:p-12 shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary flex items-center justify-center mx-auto mb-5">
                        <Mail size={24} />
                    </div>
                    <h2 className="fq-contact-el font-manrope font-extrabold text-foreground text-2xl md:text-3xl mb-3">
                        {contact.title}
                    </h2>
                    <p className="fq-contact-el font-inter text-muted leading-relaxed mb-6 max-w-md mx-auto">
                        {contact.subtitle}
                    </p>
                    <div className="fq-contact-el flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.a
                            href={`mailto:${contact.email}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 font-manrope font-semibold text-white bg-primary px-8 py-3.5 rounded-full text-[15px] shadow-lg shadow-primary/30"
                        >
                            <Mail size={16} /> Email {contact.email}
                        </motion.a>
                    </div>
                    <p className="fq-contact-el font-inter text-xs text-muted mt-4 flex items-center justify-center gap-1.5">
                        <Clock size={12} /> {contact.responseTime}
                    </p>
                </div>
            </div>
        </section>
    );
}

/* ─── CTA ─── */
function FaqCTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".fq-cta-el", {
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
                <span className="fq-cta-el font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block">Ready to Get Started?</span>
                <h2 className="fq-cta-el font-manrope font-extrabold text-white leading-tight mb-5 text-4xl md:text-5xl lg:text-6xl">
                    Try Blink N Ship free
                    <br />
                    <span className="text-gradient">for 30 days</span>
                </h2>
                <p className="fq-cta-el font-inter text-white/50 max-w-xl mx-auto leading-relaxed text-sm md:text-base mb-10">
                    No credit card required. Full access to all features. Cancel anytime.
                </p>
                <div className="fq-cta-el flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.a
                        href="/pricing"
                        whileHover={{ scale: 1.06, boxShadow: "0 16px 50px rgba(204,120,92,0.6)" }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                        className="font-manrope font-semibold text-white bg-primary px-10 py-4 rounded-full text-[16px] shadow-2xl shadow-primary/40 cursor-pointer"
                    >
                        Start Free Trial
                    </motion.a>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="font-inter text-sm font-medium text-white/70 border border-white/20 px-8 py-4 rounded-full cursor-pointer hover:text-white hover:border-white/40 transition-colors duration-300"
                    >
                        Talk to Sales
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

/* ─── Page ─── */
export default function FaqPage() {
    return (
        <main>
            <Navbar />
            <FaqHero />
            <FaqAccordion />
            <FaqContact />
            <FaqCTA />
            <Footer />
        </main>
    );
}
