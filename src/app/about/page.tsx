"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Check,
    ArrowRight,
    Sparkles,
    Heart,
    Zap,
    Shield,
    TrendingUp,
    Package,
    Store,
    Clock,
    Truck,
    Quote,
    ChevronRight,
    Play,
} from "lucide-react";
import { ABOUT_PAGE } from "@/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutPageSchema from "@/components/seo/AboutPageSchema";

gsap.registerPlugin(ScrollTrigger);

const { hero, story, journey, values, impact, team, cta } = ABOUT_PAGE;

const ICON_MAP: Record<string, React.ReactNode> = {
    Heart: <Heart size={22} />,
    Zap: <Zap size={22} />,
    Shield: <Shield size={22} />,
    TrendingUp: <TrendingUp size={22} />,
    Package: <Package size={22} />,
    Store: <Store size={22} />,
    Clock: <Clock size={22} />,
    Truck: <Truck size={22} />,
    Sparkles: <Sparkles size={22} />,
};

/* ─── Hero ─── */
function AboutHero() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".ab-hero-ch", {
                opacity: 0,
                rotateY: -90,
                y: 40,
                stagger: 0.03,
                duration: 0.7,
                ease: "back.out(2)",
                delay: 0.2,
            });
            gsap.from(".ab-hero-sub", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.9,
                ease: "power2.out",
            });

            const orbs = sectionRef.current?.querySelectorAll(".ab-orb");
            if (orbs) {
                orbs.forEach((orb, i) => {
                    gsap.to(orb, {
                        x: gsap.utils.random(-140, 140),
                        y: gsap.utils.random(-140, 140),
                        scale: gsap.utils.random(0.6, 1.4),
                        duration: gsap.utils.random(5, 10),
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
        <section ref={sectionRef} className="relative min-h-[85vh] flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden bg-white">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="ab-orb absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent blur-3xl" />
                <div className="ab-orb absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent blur-3xl" />
                <div className="ab-orb absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-gradient-to-t from-blue-500/5 via-transparent to-transparent blur-3xl" />
            </div>

            <div className="relative max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 bg-primary-light border border-primary/15 rounded-full px-4 py-1.5 mb-8"
                >
                    <Heart size={14} className="text-primary" />
                    <span className="font-inter text-xs font-medium text-primary tracking-wide">{hero.badge}</span>
                </motion.div>

                <h1 className="font-manrope font-extrabold text-foreground leading-[1.15] mb-6 text-[clamp(2.5rem,7vw,4.5rem)]" style={{ perspective: "1200px" }}>
                    {chars.map((ch, i) => (
                        <span key={i} className="ab-hero-ch inline-block" style={{ perspective: "800px" }}>{ch}</span>
                    ))}
                    <br />
                    <span className="text-gradient ab-hero-ch" style={{ perspective: "800px" }}>{hero.titleHighlight}</span>
                </h1>

                <p className="ab-hero-sub font-inter text-muted max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                    {hero.subtitle}
                </p>
            </div>
        </section>
    );
}

/* ─── Horizontal Scroll Text ─── */
function ScrollText() {
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
                <span className="font-manrope font-extrabold text-white/10 text-[clamp(3rem,12vw,12rem)] leading-none tracking-[-0.03em] select-none pr-12" aria-hidden="true">
                    ✦ BLINK N SHIP ✦ BLINK N SHIP ✦ BLINK N SHIP ✦ BLINK N SHIP ✦
                </span>
                <span className="font-manrope font-extrabold text-white/10 text-[clamp(3rem,12vw,12rem)] leading-none tracking-[-0.03em] select-none" aria-hidden="true">
                    ✦ BLINK N SHIP ✦ BLINK N SHIP ✦ BLINK N SHIP ✦ BLINK N SHIP ✦
                </span>
            </div>

            <div className="relative max-w-4xl mx-auto px-6 mt-[-1rem]">
                <p className="font-inter text-white/40 text-sm md:text-base leading-relaxed text-center max-w-2xl mx-auto">
                    This isn't just a platform. It's a commitment to every seller who deserves better tools.
                </p>
            </div>
        </section>
    );
}

/* ─── Story ─── */
function StorySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, i) => {
                if (!card) return;
                gsap.from(card, {
                    y: 60,
                    opacity: 0,
                    rotateX: 8,
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "top 40%",
                        scrub: 0.8,
                    },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-28 px-6 bg-card border-y border-border">
            <div className="max-w-4xl mx-auto">
                <span className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block text-center">Our Story</span>

                <div className="space-y-8 md:space-y-12">
                    {story.map((s, i) => (
                        <div
                            key={i}
                            ref={(el) => { cardsRef.current[i] = el; }}
                            className="bg-white border border-border rounded-3xl p-7 md:p-10 hover:border-primary/20 transition-colors duration-300"
                            style={{ perspective: "1000px" }}
                        >
                            <p className="font-inter text-xs text-primary font-medium mb-3">
                                {i === 0 ? "The beginning" : i === 1 ? "The realization" : i === 2 ? "The solution" : "The impact"}
                            </p>
                            <h2 className="font-manrope font-bold text-foreground text-xl md:text-2xl mb-4 leading-snug">
                                {s.heading}
                            </h2>
                            <p className="font-inter text-sm md:text-base text-muted leading-relaxed">
                                {s.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Journey Timeline with scrolling cards ─── */
function JourneyTimeline() {
    const sectionRef = useRef<HTMLElement>(null);
    const pathRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const headingRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(headingRef, { once: true, margin: "-80px" });

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (pathRef.current) {
                gsap.from(pathRef.current, {
                    scaleY: 0,
                    transformOrigin: "top center",
                    duration: 1.5,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                        end: "bottom 40%",
                        scrub: 1,
                    },
                });
            }

            cardsRef.current.forEach((card, i) => {
                if (!card) return;
                const dir = window.innerWidth < 768 ? 40 : (i % 2 === 0 ? -80 : 80);
                gsap.from(card, {
                    x: dir,
                    opacity: 0,
                    scale: 0.92,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 78%",
                        end: "top 38%",
                        scrub: 0.8,
                    },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-28 px-6 bg-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-0 w-64 h-64 rounded-full bg-primary/[0.02] blur-3xl" />
                <div className="absolute bottom-1/3 right-0 w-64 h-64 rounded-full bg-amber-500/[0.02] blur-3xl" />
            </div>

            <div className="relative max-w-6xl mx-auto">
                <div ref={headingRef} className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block"
                    >
                        The Journey
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-manrope font-extrabold text-foreground leading-tight text-4xl md:text-5xl"
                    >
                        From a kitchen table
                        <br />
                        <span className="text-gradient">to thousands of businesses</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Timeline Path */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-border/60 -translate-x-1/2">
                        <div ref={pathRef} className="w-full h-full bg-gradient-to-b from-primary via-primary/60 to-primary" style={{ transformOrigin: "top center", transform: "scaleY(0)" }} />
                    </div>

                    <div className="space-y-14 md:space-y-24">
                        {journey.map((item, i) => (
                            <div
                                key={i}
                                className="relative flex items-start gap-4 md:gap-16"
                            >
                                {/* Dot */}
                                <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary border-[3px] md:border-4 border-white z-10 shadow-sm" />

                                {/* Empty on one side */}
                                <div className="hidden md:block w-1/2" />

                                {/* Card */}
                                <div
                                    ref={(el) => { cardsRef.current[i] = el; }}
                                    className="ml-10 md:ml-0 md:w-1/2 bg-white border border-border rounded-2xl p-4 md:p-7 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xl">{item.emoji}</span>
                                        <span className="font-inter text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">{item.year}</span>
                                    </div>
                                    <h3 className="font-manrope font-bold text-foreground text-lg mb-1">{item.title}</h3>
                                    <p className="font-inter text-xs text-muted mb-3">{item.subtitle}</p>
                                    <p className="font-inter text-sm text-muted leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── Values ─── */
function ValuesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(headingRef, { once: true, margin: "-80px" });

    return (
        <section ref={sectionRef} className="py-28 px-6 bg-dark">
            <div className="max-w-7xl mx-auto">
                <div ref={headingRef} className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block"
                    >
                        What We Believe
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-manrope font-extrabold text-white leading-tight mb-4 text-4xl md:text-5xl"
                    >
                        The values that drive
                        <br />
                        <span className="text-gradient">everything we build</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40, rotateX: 10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-7 md:p-8 backdrop-blur-sm hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                            style={{ perspective: "1000px" }}
                        >
                            <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-5">
                                {ICON_MAP[v.icon] || <Sparkles size={22} />}
                            </div>
                            <h3 className="font-manrope font-bold text-white text-lg mb-3">{v.title}</h3>
                            <p className="font-inter text-sm text-white/50 leading-relaxed">{v.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Impact Numbers ─── */
function ImpactNumbers() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

    useEffect(() => {
        const ctx = gsap.context(() => {
            impact.forEach((stat, i) => {
                const el = document.querySelector(`#ab-stat-${i}`);
                if (!el) return;
                const target = stat.value;
                const steps = Math.min(target, 30);
                const stepMs = 1600 / steps;
                let frame = 0;
                let started = false;

                ScrollTrigger.create({
                    trigger: el,
                    start: "top 85%",
                    once: true,
                    onEnter: () => {
                        if (started) return;
                        started = true;
                        const timer = setInterval(() => {
                            frame++;
                            const t = frame / steps;
                            const eased = 1 - Math.pow(1 - t, 2.2);
                            const val = Math.min(Math.round(eased * target), target);
                            el.textContent = val.toLocaleString();
                            if (frame >= steps) {
                                el.textContent = target.toLocaleString();
                                clearInterval(timer);
                            }
                        }, stepMs);
                    },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 px-6 bg-card border-y border-border">
            <div className="max-w-6xl mx-auto">
                <span className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-10 block text-center">Our impact by the numbers</span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {impact.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className="w-11 h-11 rounded-2xl bg-primary-light text-primary flex items-center justify-center mx-auto mb-3">
                                {ICON_MAP[stat.icon]}
                            </div>
                            <div className="font-manrope font-extrabold text-foreground text-3xl md:text-4xl mb-1">
                                <span id={`ab-stat-${i}`}>0</span>
                                {stat.suffix}
                            </div>
                            <p className="font-inter text-xs text-muted">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Team ─── */
function TeamSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".ab-team-el", {
                y: 40,
                opacity: 0,
                stagger: 0.15,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-28 px-6 bg-white relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-primary/[0.02] blur-3xl" />
            </div>

            <div className="relative max-w-4xl mx-auto text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-light text-primary flex items-center justify-center mx-auto mb-6">
                    <Heart size={28} />
                </div>
                <h2 className="ab-team-el font-manrope font-extrabold text-foreground text-3xl md:text-4xl mb-3 leading-tight">
                    {team.title}
                    <br />
                    <span className="text-gradient">{team.subtitle}</span>
                </h2>
                <p className="ab-team-el font-inter text-muted leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
                    {team.description}
                </p>

                <div className="ab-team-el mt-10 flex flex-wrap items-center justify-center gap-4">
                    {["Software Engineers", "UI/UX Designers", "Data Scientists", "Customer Support"].map((role) => (
                        <span key={role} className="font-inter text-xs text-foreground bg-card border border-border px-4 py-2 rounded-full">{role}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── CTA ─── */
function AboutCTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".ab-cta-el", {
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
                <span className="ab-cta-el font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block">{cta.title}</span>
                <h2 className="ab-cta-el font-manrope font-extrabold text-white leading-tight mb-5 text-4xl md:text-5xl lg:text-6xl">
                    Start your journey
                    <br />
                    <span className="text-gradient">with Blink N Ship</span>
                </h2>
                <p className="ab-cta-el font-inter text-white/50 max-w-xl mx-auto leading-relaxed text-sm md:text-base mb-10">
                    {cta.subtitle}
                </p>
                <div className="ab-cta-el flex flex-col sm:flex-row items-center justify-center gap-4">
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
                        href="/about"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="font-inter text-sm font-medium text-white/70 border border-white/20 px-8 py-4 rounded-full cursor-pointer hover:text-white hover:border-white/40 transition-colors duration-300"
                    >
                        Learn More
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

/* ─── Page ─── */
export default function AboutPage() {
    return (
        <main>
            <AboutPageSchema />
            <Navbar />
            <AboutHero />
            <ScrollText />
            <StorySection />
            <JourneyTimeline />
            <ValuesSection />
            <ImpactNumbers />
            <TeamSection />
            <AboutCTA />
            <Footer />
        </main>
    );
}
