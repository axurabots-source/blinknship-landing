"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    FileText,
    ArrowRight,
    CheckSquare,
    UserPlus,
    Package,
    CreditCard,
    Database,
    Ban,
    Copyright,
    Power,
    Shield,
    Scale,
    RefreshCw,
    MessageCircle,
    Check,
    ChevronRight,
    Sparkles,
} from "lucide-react";
import { TERMS_PAGE } from "@/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

const { hero, intro, sections, keyTerms, cta } = TERMS_PAGE;

const SECTION_ICONS: Record<string, React.ReactNode> = {
    CheckSquare: <CheckSquare size={20} />,
    UserPlus: <UserPlus size={20} />,
    Package: <Package size={20} />,
    CreditCard: <CreditCard size={20} />,
    Database: <Database size={20} />,
    Ban: <Ban size={20} />,
    Copyright: <Copyright size={20} />,
    Power: <Power size={20} />,
    Shield: <Shield size={20} />,
    Scale: <Scale size={20} />,
    RefreshCw: <RefreshCw size={20} />,
    MessageCircle: <MessageCircle size={20} />,
};

const NAV_ICONS: Record<string, React.ReactNode> = {
    "01": <FileText size={12} />,
    "02": <UserPlus size={12} />,
    "03": <Package size={12} />,
    "04": <CreditCard size={12} />,
    "05": <Database size={12} />,
    "06": <Ban size={12} />,
    "07": <Copyright size={12} />,
    "08": <Power size={12} />,
    "09": <Shield size={12} />,
    "10": <Scale size={12} />,
    "11": <RefreshCw size={12} />,
    "12": <MessageCircle size={12} />,
};

/* ─── Hero ─── */
function TermsHero() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".tp-title", { y: 30, opacity: 0, duration: 0.7, delay: 0.3, ease: "power2.out" });
            gsap.from(".tp-sub", { y: 30, opacity: 0, duration: 0.7, delay: 0.6, ease: "power2.out" });
            gsap.from(".tp-meta", { y: 20, opacity: 0, duration: 0.5, delay: 0.2, ease: "power2.out" });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-[80vh] flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden bg-white">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-[28rem] h-[28rem] rounded-full bg-gradient-to-bl from-primary/[0.04] via-primary/[0.02] to-transparent blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-blue-500/[0.03] via-transparent to-transparent blur-3xl" />
            </div>

            <div className="relative max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-16 h-16 rounded-2xl bg-primary-light border border-primary/15 flex items-center justify-center mx-auto mb-6"
                >
                    <FileText size={28} className="text-primary" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 bg-primary-light border border-primary/15 rounded-full px-4 py-1.5 mb-6"
                >
                    <Scale size={14} className="text-primary" />
                    <span className="font-inter text-xs font-medium text-primary tracking-wide">{hero.badge}</span>
                </motion.div>

                <p className="tp-meta font-inter text-[11px] text-muted/60 mb-5">
                    Last updated: {hero.lastUpdated}
                </p>

                <h1 className="tp-title font-manrope font-extrabold text-foreground leading-[1.1] mb-5 text-[clamp(2.8rem,7vw,4.8rem)]">
                    {hero.title}
                    <br />
                    <span className="text-gradient">{hero.titleHighlight}</span>
                </h1>

                <p className="tp-sub font-inter text-muted max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                    {hero.subtitle}
                </p>
            </div>
        </section>
    );
}

/* ─── Intro Card ─── */
function TermsIntro() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".tp-intro", {
                y: 40,
                opacity: 0,
                scale: 0.96,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 px-6 bg-card border-t border-border">
            <div className="max-w-4xl mx-auto">
                <div className="tp-intro bg-white border border-border rounded-2xl p-7 md:p-9">
                    <h2 className="font-manrope font-bold text-foreground text-xl md:text-2xl mb-3">{intro.title}</h2>
                    <p className="font-inter text-sm md:text-base text-muted leading-relaxed">{intro.body}</p>
                </div>
            </div>
        </section>
    );
}

/* ─── Main Content with Sidebar Navigation ─── */
function TermsContent() {
    const sectionRef = useRef<HTMLElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const [activeId, setActiveId] = useState(sections[0].id);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const sectionElsRef = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            sectionElsRef.current.forEach((el) => {
                if (!el) return;
                gsap.from(el, {
                    filter: "blur(12px)",
                    y: 50,
                    opacity: 0.3,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        end: "top 40%",
                        scrub: 0.8,
                    },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !progressRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const total = rect.height - window.innerHeight;
            const progress = Math.min(Math.max((-rect.top) / total, 0), 1);
            progressRef.current.style.transform = `scaleX(${progress})`;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
        );

        sectionElsRef.current.forEach((el) => {
            if (el) observerRef.current?.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section ref={sectionRef} className="py-20 px-6 bg-white relative">
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-[3px] bg-border z-50">
                <div ref={progressRef} className="h-full bg-primary origin-left" style={{ transform: "scaleX(0)" }} />
            </div>

            <div className="max-w-6xl mx-auto flex gap-10 relative">
                {/* Sidebar */}
                <nav className="hidden lg:block w-56 shrink-0">
                    <div className="sticky top-24 space-y-0.5">
                        <p className="font-inter text-[10px] font-medium text-muted/50 uppercase tracking-widest mb-3 pl-3">Sections</p>
                        {sections.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => scrollToSection(s.id)}
                                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-all duration-300 cursor-pointer ${
                                    activeId === s.id
                                        ? "bg-primary-light text-primary font-medium"
                                        : "text-muted/70 hover:text-foreground hover:bg-card"
                                }`}
                            >
                                <span className={`shrink-0 w-5 h-5 rounded flex items-center justify-center transition-all duration-300 ${
                                    activeId === s.id ? "bg-primary text-white" : "bg-transparent text-muted/40"
                                }`}>
                                    {NAV_ICONS[s.number] || <FileText size={12} />}
                                </span>
                                <span className="font-inter text-xs leading-tight truncate">{s.title}</span>
                            </button>
                        ))}
                    </div>
                </nav>

                {/* Mobile section nav */}
                <div className="lg:hidden sticky top-20 z-40 mb-4 -mx-2">
                    <select
                        value={activeId}
                        onChange={(e) => scrollToSection(e.target.value)}
                        className="w-full font-inter text-sm bg-white border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 shadow-sm"
                    >
                        {sections.map((s) => (
                            <option key={s.id} value={s.id}>
                                {s.number}. {s.title}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Sections */}
                <div className="flex-1 min-w-0 space-y-6">
                    {sections.map((sec, i) => (
                        <article
                            key={sec.id}
                            id={sec.id}
                            ref={(el) => { sectionElsRef.current[i] = el; }}
                            className="relative group bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/15 transition-colors duration-500 overflow-hidden"
                            style={{ filter: "blur(0px)", opacity: 1 }}
                        >
                            {/* Background Number */}
                            <div className="absolute -top-6 -right-4 md:-top-8 md:-right-6 text-[8rem] md:text-[12rem] font-manrope font-black text-border/40 pointer-events-none select-none leading-none">
                                {sec.number}
                            </div>

                            <div className="relative z-10 flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0">
                                    {SECTION_ICONS[sec.icon] || <FileText size={20} />}
                                </div>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="font-inter text-[11px] font-semibold text-primary/60">{sec.number}</span>
                                        <span className="w-px h-3 bg-border" />
                                        <h2 className="font-manrope font-bold text-foreground text-base md:text-lg">{sec.title}</h2>
                                    </div>
                                    <p className="font-inter text-sm text-muted leading-relaxed">{sec.content}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Key Terms (Hover Tilt Cards) ─── */
function KeyTerms() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, i: number) => {
        const card = cardsRef.current[i];
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
    };

    const handleMouseLeave = (i: number) => {
        const card = cardsRef.current[i];
        if (!card) return;
        card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, i) => {
                if (!card) return;
                gsap.from(card, {
                    y: 40,
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: "power2.out",
                    scrollTrigger: { trigger: card, start: "top 82%" },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 px-6 bg-card border-y border-border">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <span className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-3 block">The Highlights</span>
                    <h2 className="font-manrope font-extrabold text-foreground text-2xl md:text-3xl">Key terms at a glance</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {keyTerms.map((kt, i) => (
                        <div
                            key={i}
                            ref={(el) => { cardsRef.current[i] = el; }}
                            onMouseMove={(e) => handleMouseMove(e, i)}
                            onMouseLeave={() => handleMouseLeave(i)}
                            className="bg-white border border-border rounded-2xl p-6 md:p-7 transition-all duration-200 ease-out cursor-default"
                            style={{ transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)" }}
                        >
                            <div className="w-9 h-9 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4">
                                <Check size={18} />
                            </div>
                            <h3 className="font-manrope font-bold text-foreground text-sm mb-2">{kt.title}</h3>
                            <p className="font-inter text-xs text-muted leading-relaxed">{kt.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Acceptance Card ─── */
function AcceptanceCard() {
    const sectionRef = useRef<HTMLElement>(null);
    const [accepted, setAccepted] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".tp-accept", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="tp-accept bg-gradient-to-br from-card to-primary-light/30 border-2 border-primary/10 rounded-3xl p-8 md:p-10 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary flex items-center justify-center mx-auto mb-5">
                        <Scale size={26} />
                    </div>
                    <h2 className="font-manrope font-extrabold text-foreground text-2xl md:text-3xl mb-3">
                        By using Blink N Ship,
                        <br />
                        <span className="text-gradient">you agree to these terms</span>
                    </h2>
                    <p className="font-inter text-sm text-muted max-w-lg mx-auto leading-relaxed mb-8">
                        If you have questions about any part of these terms, reach out before accepting.
                        We&apos;re happy to explain everything in plain language.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <button
                            onClick={() => setAccepted(!accepted)}
                            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                                accepted
                                    ? "bg-green-50 border-green-300 text-green-700"
                                    : "bg-white border-border text-muted hover:border-primary/30"
                            }`}
                        >
                            <div className={`w-5 h-5 rounded flex items-center justify-center transition-all duration-300 ${
                                accepted ? "bg-green-500 text-white" : "border-2 border-muted/30"
                            }`}>
                                {accepted && <Check size={12} />}
                            </div>
                            <span className="font-inter text-sm font-medium">
                                {accepted ? "You've accepted these terms" : "I've read and understand these terms"}
                            </span>
                        </button>

                        {accepted && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 text-xs text-green-600"
                            >
                                <Check size={12} />
                                <span>Thank you. You can always review these terms again anytime.</span>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── CTA ─── */
function TermsCTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".tp-cta-el", {
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
        <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-dark via-dark to-primary/10">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl" />
            </div>
            <div className="relative max-w-4xl mx-auto text-center">
                <span className="tp-cta-el font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block">{cta.title}</span>
                <p className="tp-cta-el font-inter text-white/50 max-w-lg mx-auto leading-relaxed text-sm md:text-base mb-10">
                    {cta.subtitle}
                </p>
                <div className="tp-cta-el flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.a
                        href="mailto:hello@blinknship.com"
                        whileHover={{ scale: 1.06, boxShadow: "0 16px 50px rgba(204,120,92,0.6)" }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                        className="font-manrope font-semibold text-white bg-primary px-10 py-4 rounded-full text-[16px] shadow-2xl shadow-primary/40 cursor-pointer inline-flex items-center gap-2"
                    >
                        Ask a Question <ArrowRight size={16} />
                    </motion.a>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="font-inter text-sm font-medium text-white/70 border border-white/20 px-8 py-4 rounded-full cursor-pointer hover:text-white hover:border-white/40 transition-colors duration-300"
                    >
                        Contact Us
                    </motion.a>
                </div>
                <div className="tp-cta-el mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-white/25">
                    <span>Section 12 of 12</span>
                    <span className="w-px h-3 bg-white/10" />
                    <span>Last updated {hero.lastUpdated}</span>
                    <span className="w-px h-3 bg-white/10" />
                    <span>Karachi, Pakistan</span>
                </div>
            </div>
        </section>
    );
}

/* ─── Page ─── */
export default function TermsPage() {
    return (
        <main>
            <Navbar />
            <TermsHero />
            <TermsIntro />
            <TermsContent />
            <KeyTerms />
            <AcceptanceCard />
            <TermsCTA />
            <Footer />
        </main>
    );
}
