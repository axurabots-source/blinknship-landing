"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Shield,
    ArrowRight,
    Clock,
    Zap,
    Check,
    RefreshCw,
    CreditCard,
    Package,
    Ban,
    FileText,
    MessageCircle,
    Receipt,
    Mail,
    HelpCircle,
    ChevronRight,
    Sparkles,
    Wallet,
    RotateCcw,
    ThumbsUp,
} from "lucide-react";
import { REFUND_PAGE } from "@/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

const { hero, marquee, summary, sections, process, highlights, cta } = REFUND_PAGE;

/* ─── Hero — Clip-path sweep reveal ─── */
function RefundHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".rp-hero-title", {
                clipPath: "inset(0 100% 0 0)",
                duration: 1.2,
                delay: 0.3,
                ease: "power3.out",
            });
            gsap.from(".rp-hero-title .text-gradient", {
                clipPath: "inset(0 100% 0 0)",
                duration: 1.2,
                delay: 0.5,
                ease: "power3.out",
            });
            gsap.from(".rp-hero-sub", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.9,
                ease: "power2.out",
            });
            gsap.from(".rp-hero-meta", {
                y: 20,
                opacity: 0,
                duration: 0.5,
                delay: 0.15,
                ease: "power2.out",
            });

            gsap.to(".rp-float-a", {
                y: -60,
                x: gsap.utils.random(-20, 20),
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 0.5,
            });
            gsap.to(".rp-float-b", {
                y: 40,
                x: gsap.utils.random(-30, 30),
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
            gsap.to(".rp-float-c", {
                y: -30,
                x: gsap.utils.random(-40, 40),
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1,
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-[85vh] flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden bg-white">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-32 -right-32 w-[26rem] h-[26rem] rounded-full bg-gradient-to-bl from-primary/[0.06] via-primary/[0.03] to-transparent blur-3xl rp-float-a" />
                <div className="absolute bottom-1/3 -left-28 w-72 h-72 rounded-full bg-gradient-to-tr from-emerald-500/[0.04] via-teal-500/[0.02] to-transparent blur-3xl rp-float-b" />
                <div className="absolute top-1/2 right-1/3 w-56 h-56 rounded-full bg-gradient-to-b from-blue-500/[0.03] via-transparent to-transparent blur-3xl rp-float-c" />
            </div>

            <div className="relative max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 bg-primary-light border border-primary/15 rounded-full px-4 py-1.5 mb-6"
                >
                    <RotateCcw size={14} className="text-primary" />
                    <span className="font-inter text-xs font-medium text-primary tracking-wide">{hero.badge}</span>
                </motion.div>

                <p className="rp-hero-meta font-inter text-[11px] text-muted/60 mb-5">
                    Last updated: {hero.lastUpdated}
                </p>

                <h1 ref={titleRef} className="rp-hero-title font-manrope font-extrabold text-foreground leading-[1.1] mb-5 text-[clamp(2.8rem,7vw,4.8rem)]">
                    {hero.title}
                    <br />
                    <span className="text-gradient">{hero.titleHighlight}</span>
                </h1>

                <p className="rp-hero-sub font-inter text-muted max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                    {hero.subtitle}
                </p>

                <div className="rp-hero-sub mt-8 flex flex-wrap items-center justify-center gap-3">
                    {["30-Day Guarantee", "No Questions Asked", "5-10 Day Processing"].map((tag) => (
                        <span key={tag} className="font-inter text-xs font-medium text-foreground bg-card border border-border px-3.5 py-1.5 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Marquee — Continuous scroll ─── */
function RefundMarquee() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section ref={sectionRef} className="py-10 bg-dark border-y border-white/5 overflow-hidden">
            <div className="flex whitespace-nowrap rp-marquee">
                <div className="flex items-center gap-8 animate-marquee pr-8">
                    {marquee.map((item, i) => (
                        <span key={i} className="font-inter text-sm text-white/60 flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                        </span>
                    ))}
                </div>
                <div className="flex items-center gap-8 animate-marquee pr-8" aria-hidden="true">
                    {marquee.map((item, i) => (
                        <span key={`dup-${i}`} className="font-inter text-sm text-white/60 flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Summary ─── */
function RefundSummary() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".rp-sum", {
                y: 40,
                opacity: 0,
                scale: 0.97,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 px-6 bg-card border-b border-border">
            <div className="max-w-4xl mx-auto">
                <div className="rp-sum bg-white border border-primary/10 rounded-2xl p-7 md:p-9 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0">
                            <ThumbsUp size={20} />
                        </div>
                        <h2 className="font-manrope font-bold text-foreground text-xl md:text-2xl pt-1">{summary.title}</h2>
                    </div>
                    <p className="font-inter text-sm md:text-base text-muted leading-relaxed pl-0 md:pl-14">{summary.body}</p>
                </div>
            </div>
        </section>
    );
}

/* ─── Quick Stats ─── */
function RefundStats() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

    const STAT_ICONS: Record<string, React.ReactNode> = {
        Shield: <Shield size={20} />,
        Clock: <Clock size={20} />,
        Zap: <Zap size={20} />,
        Check: <Check size={20} />,
    };

    return (
        <section ref={sectionRef} className="py-14 px-6 bg-white border-b border-border">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {highlights.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-card border border-border rounded-2xl p-5 md:p-6 text-center hover:border-primary/20 transition-colors duration-300"
                        >
                            <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center mx-auto mb-3">
                                {STAT_ICONS[h.icon] || <Check size={20} />}
                            </div>
                            <div className="font-manrope font-extrabold text-foreground text-xl md:text-2xl mb-0.5">{h.value}</div>
                            <p className="font-inter text-xs text-muted">{h.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Content Sections ─── */
function RefundSections() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            sections.forEach((_, i) => {
                const card = document.querySelector(`#rp-card-${i}`);
                const lines = card?.querySelectorAll(".rp-line");
                const icon = card?.querySelector(".rp-sect-icon");
                const num = card?.querySelector(".rp-sect-num");
                const hl = card?.querySelectorAll(".rp-hl");

                if (card) {
                    gsap.from(card, {
                        y: 50,
                        opacity: 0,
                        duration: 0.7,
                        ease: "power2.out",
                        scrollTrigger: { trigger: card, start: "top 80%", end: "top 50%", scrub: 0.6 },
                    });
                }

                if (lines) {
                    gsap.from(lines, {
                        y: 20,
                        opacity: 0,
                        stagger: 0.08,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: { trigger: card, start: "top 75%", end: "top 35%", scrub: 0.5 },
                    });
                }

                if (icon) {
                    gsap.from(icon, {
                        scale: 0,
                        rotate: -45,
                        duration: 0.6,
                        ease: "back.out(2.5)",
                        scrollTrigger: { trigger: card, start: "top 78%", end: "top 45%", scrub: 0.5 },
                    });
                }

                if (num) {
                    gsap.from(num, { y: -30, opacity: 0, duration: 0.5, delay: i * 0.05, ease: "power2.out", scrollTrigger: { trigger: card, start: "top 80%" } });
                }

                if (hl) {
                    gsap.from(hl, {
                        scale: 0.8,
                        opacity: 0,
                        stagger: 0.06,
                        duration: 0.4,
                        ease: "back.out(1.7)",
                        scrollTrigger: { trigger: card, start: "top 72%", end: "top 40%", scrub: 0.5 },
                    });
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef}>
            {sections.map((sec, i) => (
                <div key={sec.id} className={`${sec.bg} ${i > 0 ? "border-t border-border" : ""} relative overflow-hidden`}>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {i % 2 === 0 && (
                            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/[0.02] blur-3xl" />
                        )}
                        {i % 2 === 1 && (
                            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-emerald-500/[0.02] blur-3xl" />
                        )}
                    </div>

                    <div id={`rp-card-${i}`} className="relative max-w-5xl mx-auto px-6 py-16 md:py-20">
                        <div className="flex items-start gap-4 md:gap-6">
                            <div className="hidden md:flex rp-sect-icon w-12 h-12 rounded-2xl bg-primary-light text-primary items-center justify-center shrink-0 mt-1">
                                <FileText size={22} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="rp-sect-num font-inter text-[11px] font-semibold text-primary/50">{sec.number}</span>
                                    <span className="w-px h-3 bg-border" />
                                    <h2 className="font-manrope font-bold text-foreground text-lg md:text-xl">{sec.title}</h2>
                                </div>
                                <p className="rp-line font-inter text-xs text-primary/70 mb-4">{sec.subtitle}</p>
                                <p className="rp-line font-inter text-sm md:text-base text-muted leading-relaxed">{sec.body}</p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {sec.highlights.map((h, j) => (
                                        <span key={j} className="rp-hl font-inter text-xs font-medium text-primary bg-primary-light border border-primary/10 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                                            <Check size={10} /> {h}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

/* ─── Process Flow ─── */
function RefundProcess() {
    const sectionRef = useRef<HTMLElement>(null);
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
    const pathRef = useRef<HTMLDivElement>(null);
    const [scrambled, setScrambled] = useState<string[]>(["01", "02", "03", "04"]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (pathRef.current) {
                gsap.from(pathRef.current, {
                    scaleY: 0,
                    transformOrigin: "top center",
                    duration: 2,
                    ease: "power3.inOut",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 60%", end: "bottom 30%", scrub: 1 },
                });
            }

            stepsRef.current.forEach((step, i) => {
                if (!step) return;
                gsap.from(step, {
                    x: 60,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    delay: i * 0.15,
                    scrollTrigger: { trigger: step, start: "top 80%", end: "top 45%", scrub: 0.6 },
                });

                ScrollTrigger.create({
                    trigger: step,
                    start: "top 75%",
                    once: true,
                    onEnter: () => {
                        const chars = process[i].step.split("");
                        let iterations = 0;
                        const interval = setInterval(() => {
                            setScrambled((prev) => {
                                const next = [...prev];
                                next[i] = process[i].step
                                    .split("")
                                    .map((_, idx) => {
                                        if (idx <= iterations - 6) return process[i].step[idx];
                                        const pool = "0123456789";
                                        return pool[Math.floor(Math.random() * pool.length)];
                                    })
                                    .join("");
                                return next;
                            });
                            iterations++;
                            if (iterations > 14) {
                                clearInterval(interval);
                                setScrambled((prev) => {
                                    const next = [...prev];
                                    next[i] = process[i].step;
                                    return next;
                                });
                            }
                        }, 60);
                    },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-28 px-6 bg-white relative overflow-hidden border-y border-border">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 right-1/4 w-72 h-72 rounded-full bg-primary/[0.02] blur-3xl" />
                <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-blue-500/[0.02] blur-3xl" />
            </div>

            <div className="relative max-w-5xl mx-auto">
                <div className="text-center mb-14">
                    <span className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-3 block">The Refund Process</span>
                    <h2 className="font-manrope font-extrabold text-foreground text-3xl md:text-4xl">
                        How refunds work in{" "}
                        <span className="text-gradient">4 simple steps</span>
                    </h2>
                </div>

                <div className="relative max-w-2xl mx-auto">
                    <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-border/60 md:-translate-x-1/2">
                        <div ref={pathRef} className="w-full h-full bg-gradient-to-b from-primary via-primary/60 to-primary/20" style={{ transformOrigin: "top center", transform: "scaleY(0)" }} />
                    </div>

                    <div className="space-y-16 md:space-y-20">
                        {process.map((step, i) => (
                            <div key={i} className="relative flex items-start gap-6 md:gap-12">
                                <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary border-[3px] border-white z-10 shadow-sm" />

                                <div className="hidden md:block w-1/2" />

                                    <div
                                        ref={(el) => { stepsRef.current[i] = el; }}
                                        className="ml-7 md:ml-0 md:w-1/2"
                                    >
                                        <div className="bg-card border border-border rounded-2xl p-4 md:p-7 hover:border-primary/20 transition-colors duration-300">
                                        <div className="font-manrope font-black text-primary text-2xl md:text-3xl mb-1 tabular-nums">
                                            {scrambled[i]}
                                        </div>
                                        <h3 className="font-manrope font-bold text-foreground text-base md:text-lg mb-1">{step.title}</h3>
                                        <p className="font-inter text-sm text-muted leading-relaxed">{step.description}</p>
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

/* ─── Guarantee Card ─── */
function GuaranteeCard() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".rp-guarantee", {
                y: 50,
                opacity: 0,
                scale: 0.95,
                duration: 0.9,
                ease: "power2.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 px-6 bg-dark">
            <div className="max-w-4xl mx-auto">
                <div className="rp-guarantee bg-dark border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/[0.04] blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-emerald-500/[0.03] blur-3xl" />
                    </div>
                    <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-primary-light border border-primary/20 flex items-center justify-center mx-auto mb-6">
                            <Shield size={28} className="text-primary" />
                        </div>
                        <h2 className="font-manrope font-extrabold text-white text-3xl md:text-4xl mb-4 leading-tight">
                            Our 30-day
                            <br />
                            <span className="text-gradient">money-back guarantee</span>
                        </h2>
                        <p className="font-inter text-white/50 max-w-lg mx-auto leading-relaxed text-sm md:text-base mb-8">
                            Try Blink N Ship risk-free. If you&apos;re not satisfied within the first 30 days of any
                            paid plan, we&apos;ll refund your full payment — no questions asked. That&apos;s our promise.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                            {["Risk-free trial", "No questions asked", "Full refund", "Zero pressure"].map((item) => (
                                <span key={item} className="font-inter text-white/30 border border-white/10 px-4 py-2 rounded-full">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── CTA ─── */
function RefundCTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".rp-cta-el", {
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
        <section ref={sectionRef} className="py-24 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <div className="rp-cta-el w-14 h-14 rounded-2xl bg-primary-light border border-primary/20 flex items-center justify-center mx-auto mb-6">
                        <HelpCircle size={24} className="text-primary" />
                    </div>
                    <span className="rp-cta-el font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block">{cta.title}</span>
                    <p className="rp-cta-el font-inter text-muted max-w-lg mx-auto leading-relaxed text-sm md:text-base mb-10">
                        {cta.subtitle}
                    </p>
                    <div className="rp-cta-el flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.a
                            href="mailto:hello@blinknship.com"
                            whileHover={{ scale: 1.06, boxShadow: "0 16px 50px rgba(204,120,92,0.6)" }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 12 }}
                            className="font-manrope font-semibold text-white bg-primary px-10 py-4 rounded-full text-[16px] shadow-2xl shadow-primary/40 cursor-pointer inline-flex items-center gap-2"
                        >
                            Email Billing Team <ArrowRight size={16} />
                        </motion.a>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="font-inter text-sm font-medium text-foreground border border-border px-8 py-4 rounded-full cursor-pointer hover:border-primary/30 transition-colors duration-300"
                        >
                            Contact Support
                        </motion.a>
                    </div>
                    <div className="rp-cta-el mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-muted/50">
                        <span>30-Day Guarantee</span>
                        <span className="w-px h-3 bg-border" />
                        <span>No Questions Asked</span>
                        <span className="w-px h-3 bg-border" />
                        <span>5-10 Business Day Processing</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── Page ─── */
export default function RefundPage() {
    return (
        <main>
            <Navbar />
            <RefundHero />
            <RefundMarquee />
            <RefundSummary />
            <RefundStats />
            <RefundSections />
            <RefundProcess />
            <GuaranteeCard />
            <RefundCTA />
            <Footer />
        </main>
    );
}
