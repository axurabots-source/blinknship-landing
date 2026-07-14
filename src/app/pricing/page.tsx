"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Check,
    ArrowRight,
    Sparkles,
    Clock,
    Users,
    DollarSign,
    Star,
    HelpCircle,
    ChevronDown,
    X,
    Zap,
    Shield,
} from "lucide-react";
import { PRICING_PAGE } from "@/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

const { hero, billing, plans, savings, comparison, faqs } = PRICING_PAGE;

const ICON_MAP: Record<string, React.ReactNode> = {
    Clock: <Clock size={18} />,
    DollarSign: <DollarSign size={18} />,
    Users: <Users size={18} />,
    Star: <Star size={18} />,
    Shield: <Shield size={18} />,
    Zap: <Zap size={18} />,
    Sparkles: <Sparkles size={18} />,
};

/* ─── Hero ─── */
function PricingHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".pr-hero-ch", {
                opacity: 0,
                rotateY: -90,
                y: 40,
                stagger: 0.03,
                duration: 0.7,
                ease: "back.out(2)",
                delay: 0.2,
            });
            gsap.from(".pr-hero-sub", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.9,
                ease: "power2.out",
            });
            gsap.from(".pr-hero-cta", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                delay: 1.2,
                ease: "power2.out",
                stagger: 0.1,
            });

            const orbs = sectionRef.current?.querySelectorAll(".pr-orb");
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

    const titleChars = (hero.title + " ").split("").map((c) => (c === " " ? "\u00A0" : c));

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden bg-white">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="pr-orb absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-primary/8 via-primary/5 to-transparent blur-3xl" />
                <div className="pr-orb absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-amber-500/8 via-orange-500/5 to-transparent blur-3xl" />
                <div className="pr-orb absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-gradient-to-t from-blue-500/5 via-transparent to-transparent blur-3xl" />
            </div>

            <div ref={titleRef} className="relative max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 bg-primary-light border border-primary/15 rounded-full px-4 py-1.5 mb-8"
                >
                    <Sparkles size={14} className="text-primary" />
                    <span className="font-inter text-xs font-medium text-primary tracking-wide">{hero.badge}</span>
                </motion.div>

                <h1 className="font-manrope font-extrabold text-foreground leading-[1.15] mb-6 text-[clamp(2.8rem,8vw,5.5rem)]" style={{ perspective: "1200px" }}>
                    {titleChars.map((ch, i) => (
                        <span key={i} className="pr-hero-ch inline-block" style={{ perspective: "800px" }}>{ch}</span>
                    ))}
                    <br />
                    <span className="text-gradient pr-hero-ch" style={{ perspective: "800px" }}>
                        {hero.titleHighlight}
                    </span>
                </h1>

                <p className="pr-hero-sub font-inter text-muted max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                    {hero.subtitle}
                </p>

                <div className="pr-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                    <motion.a
                        href="/pricing"
                        whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(204,120,92,0.5)" }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                        className="font-manrope font-semibold text-white bg-primary px-8 py-3.5 rounded-full text-[15px] shadow-lg shadow-primary/30 cursor-pointer"
                    >
                        {hero.cta}
                    </motion.a>
                    <motion.a
                        href="#pricing-cards"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="font-inter text-sm font-medium text-foreground bg-card border border-border px-8 py-3.5 rounded-full cursor-pointer flex items-center gap-2 hover:border-primary/30 transition-colors duration-300"
                    >
                        Compare Plans <ChevronDown size={16} />
                    </motion.a>
                </div>

                <p className="pr-hero-cta font-inter text-xs text-muted mt-6">{hero.guarantee}</p>
            </div>
        </section>
    );
}

/* ─── Pricing Cards with "wallet unfold" GSAP ─── */
function PricingCards() {
    const sectionRef = useRef<HTMLElement>(null);
    const [yearly, setYearly] = useState(false);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const priceRefs = useRef<(HTMLDivElement | null)[]>([]);
    const headingRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(headingRef, { once: true, margin: "-80px" });

    useEffect(() => {
        const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
        if (!cards.length) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 72%",
                    end: "center 40%",
                    scrub: 1,
                },
                defaults: { ease: "power3.out" },
            });

            tl.from(cards, {
                scale: 0.4,
                y: 80,
                opacity: 0,
                rotate: (i) => i === 0 ? -8 : i === 2 ? 8 : 0,
                stagger: 0.12,
                duration: 0.5,
            }).to(cards, {
                rotate: 0,
                duration: 0.2,
                stagger: 0.12,
            }, "-=0.3");
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const handleToggle = () => {
        setYearly((p) => !p);
    };

    return (
        <section id="pricing-cards" ref={sectionRef} className="py-28 px-6 bg-card border-y border-border relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary/[0.02] blur-3xl" />
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-amber-500/[0.02] blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div ref={headingRef} className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block"
                    >
                        Choose Your Plan
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-manrope font-extrabold text-foreground leading-tight mb-4 text-4xl md:text-5xl"
                    >
                        Pick the plan that
                        <br />
                        <span className="text-gradient">fits your business</span>
                    </motion.h2>
                </div>

                <div className="flex items-center justify-center gap-4 mb-14">
                    <span className={`font-inter text-sm font-medium transition-colors duration-300 ${!yearly ? "text-foreground" : "text-muted"}`}>{billing.monthly}</span>
                    <button
                        onClick={handleToggle}
                        className="relative w-14 h-7 rounded-full bg-border cursor-pointer transition-colors duration-300 hover:bg-border/80"
                    >
                        <div className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-primary shadow-sm transition-all duration-300 ${yearly ? "translate-x-7" : "translate-x-0"}`} />
                    </button>
                    <div className="flex items-center gap-2">
                        <span className={`font-inter text-sm font-medium transition-colors duration-300 ${yearly ? "text-foreground" : "text-muted"}`}>{billing.yearly}</span>
                        <span className="font-inter text-[10px] font-semibold text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">{billing.badge}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            ref={(el) => { cardRefs.current[i] = el; }}
                            className={`relative bg-white border-2 rounded-3xl p-7 md:p-8 flex flex-col transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5 ${plan.highlighted ? "border-primary shadow-lg shadow-primary/10 scale-[1.02] md:scale-105 z-10" : "border-border"}`}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {plan.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white font-inter text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg shadow-primary/30 flex items-center gap-1">
                                    <Star size={10} className="fill-white" /> {plan.badge}
                                </div>
                            )}

                            <div className="mb-6 mt-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-manrope font-bold text-foreground text-xl">{plan.name}</h3>
                                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white text-xs shadow-sm`}>
                                        {i === 0 ? "S" : i === 1 ? "G" : "B"}
                                    </div>
                                </div>
                                <p className="font-inter text-sm text-muted leading-relaxed">{plan.description}</p>
                            </div>

                            <div className="mb-6" ref={(el) => { priceRefs.current[i] = el; }}>
                                <div className="flex items-baseline gap-1">
                                    <span className="font-inter text-lg font-semibold text-foreground">$</span>
                                    <span className="font-manrope font-extrabold text-foreground text-5xl md:text-6xl tracking-tight price-num">
                                        {yearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                                    </span>
                                    <span className="font-inter text-sm text-muted ml-1">/month</span>
                                </div>
                                {yearly && (
                                    <p className="font-inter text-xs text-green-600 mt-1">
                                        ${plan.yearlyPrice}/year — save ${plan.monthlyPrice * 12 - plan.yearlyPrice}
                                    </p>
                                )}
                            </div>

                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((f, fi) => (
                                    <li key={fi} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check size={11} className="text-green-600" />
                                        </div>
                                        <span className="font-inter text-sm text-foreground">{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <motion.a
                                href="/pricing"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className={`font-manrope font-semibold text-center py-3.5 rounded-full text-[14px] cursor-pointer w-full transition-shadow duration-300 ${plan.highlighted ? "bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40" : "bg-card text-foreground border border-border hover:border-primary/30"}`}
                            >
                                {plan.cta}
                            </motion.a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Savings ─── */
function SavingsBar() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section ref={sectionRef} className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {savings.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                            className="text-center p-6"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center mx-auto mb-4">
                                {ICON_MAP[s.label.includes("manual") ? "Clock" : s.label.includes("tools") ? "DollarSign" : "Users"] || <Sparkles size={20} />}
                            </div>
                            <div className="font-manrope font-extrabold text-foreground text-3xl md:text-4xl mb-1">{s.value}</div>
                            <p className="font-inter text-sm font-medium text-primary mb-2">{s.label}</p>
                            <p className="font-inter text-xs text-muted leading-relaxed max-w-xs mx-auto">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Feature Comparison ─── */
function FeatureComparison() {
    const sectionRef = useRef<HTMLElement>(null);
    const rowsRef = useRef<(HTMLDivElement | null)[]>([]);
    const headingRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(headingRef, { once: true, margin: "-80px" });

    useEffect(() => {
        const ctx = gsap.context(() => {
            rowsRef.current.forEach((row, i) => {
                if (!row) return;
                gsap.from(row, {
                    x: i % 2 === 0 ? -25 : 25,
                    opacity: 0,
                    duration: 0.45,
                    delay: i * 0.04,
                    ease: "power2.out",
                    scrollTrigger: { trigger: row, start: "top 88%", end: "top 60%", scrub: 0.6 },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-28 px-6 bg-card border-y border-border">
            <div className="max-w-6xl mx-auto">
                <div ref={headingRef} className="text-center mb-14">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block"
                    >
                        Compare Features
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-manrope font-extrabold text-foreground leading-tight mb-4 text-4xl md:text-5xl"
                    >
                        What&apos;s included
                        <br />
                        <span className="text-gradient">in each plan</span>
                    </motion.h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px]">
                        <thead>
                            <tr className="border-b-2 border-border">
                                <th className="font-inter text-xs font-semibold text-muted uppercase tracking-wider text-left pb-4 pr-4 w-2/5">Feature</th>
                                <th className="font-inter text-xs font-semibold text-muted uppercase tracking-wider text-center pb-4 px-3 w-1/5">Starter</th>
                                <th className="font-inter text-xs font-semibold text-primary uppercase tracking-wider text-center pb-4 px-3 w-1/5">Growth</th>
                                <th className="font-inter text-xs font-semibold text-muted uppercase tracking-wider text-center pb-4 pl-3 w-1/5">Business</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparison.map((row, i) => (
                                <tr
                                    key={i}
                                    ref={(el) => { rowsRef.current[i] = el; }}
                                    className={`border-b border-border/40 ${i % 2 === 0 ? "bg-white" : "bg-transparent"}`}
                                >
                                    <td className="font-inter text-sm text-foreground py-3.5 pr-4">{row.feature}</td>
                                    <td className="text-center py-3.5 px-3">{row.s ? <Check size={15} className="text-green-500 mx-auto" /> : <X size={15} className="text-red-300 mx-auto" />}</td>
                                    <td className="text-center py-3.5 px-3">{row.g ? <Check size={15} className="text-green-500 mx-auto" /> : <X size={15} className="text-red-300 mx-auto" />}</td>
                                    <td className="text-center py-3.5 pl-3">{row.b ? <Check size={15} className="text-green-500 mx-auto" /> : <X size={15} className="text-red-300 mx-auto" />}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

/* ─── FAQ ─── */
function PricingFaq() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const isInView = useInView(headingRef, { once: true, margin: "-80px" });

    const toggle = useCallback((i: number) => {
        const isOpen = openIndex === i;
        const content = contentRefs.current[i];
        if (!content) return;

        if (isOpen) {
            gsap.to(content, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut",
                onComplete: () => setOpenIndex(null),
            });
        } else {
            if (openIndex !== null && contentRefs.current[openIndex]) {
                gsap.to(contentRefs.current[openIndex], {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.inOut",
                });
            }
            setOpenIndex(i);
            gsap.fromTo(content, { height: 0, opacity: 0 }, {
                height: "auto",
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
            });
        }
    }, [openIndex]);

    return (
        <section ref={sectionRef} className="py-28 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
                <div ref={headingRef} className="text-center mb-14">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block"
                    >
                        Got Questions?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-manrope font-extrabold text-foreground leading-tight text-4xl md:text-5xl"
                    >
                        Frequently asked
                        <br />
                        <span className="text-gradient">pricing questions</span>
                    </motion.h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-border rounded-2xl overflow-hidden">
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer bg-white hover:bg-card/50 transition-colors duration-200"
                            >
                                <span className="font-manrope font-semibold text-foreground text-sm md:text-base pr-4">{faq.q}</span>
                                <ChevronDown
                                    size={16}
                                    className={`text-muted shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                                />
                            </button>
                            <div
                                ref={(el) => { contentRefs.current[i] = el; }}
                                className="overflow-hidden"
                                style={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                            >
                                <div className="px-5 md:px-6 pb-5 md:pb-6">
                                    <p className="font-inter text-sm text-muted leading-relaxed">{faq.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── CTA ─── */
function PricingCTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".pr-cta-el", {
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
                <span className="pr-cta-el font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block">Start Today</span>
                <h2 className="pr-cta-el font-manrope font-extrabold text-white leading-tight mb-5 text-4xl md:text-5xl lg:text-6xl">
                    Start your free trial
                    <br />
                    <span className="text-gradient">no credit card needed</span>
                </h2>
                <p className="pr-cta-el font-inter text-white/50 max-w-xl mx-auto leading-relaxed text-sm md:text-base mb-10">
                    Join 2,500+ ecommerce businesses. Full access for 30 days. Cancel anytime.
                </p>
                <div className="pr-cta-el flex flex-col sm:flex-row items-center justify-center gap-4">
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
                <div className="pr-cta-el mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-white/30">
                    <span>30-day free trial</span>
                    <span className="w-px h-4 bg-white/10" />
                    <span>No credit card</span>
                    <span className="w-px h-4 bg-white/10" />
                    <span>Cancel anytime</span>
                </div>
            </div>
        </section>
    );
}

/* ─── Page ─── */
export default function PricingPage() {
    return (
        <main>
            <Navbar />
            <PricingHero />
            <PricingCards />
            <SavingsBar />
            <FeatureComparison />
            <PricingFaq />
            <PricingCTA />
            <Footer />
        </main>
    );
}
