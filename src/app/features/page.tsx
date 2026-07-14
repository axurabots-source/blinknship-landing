"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Zap,
    Package,
    BarChart3,
    BookOpen,
    Users,
    TrendingUp,
    Check,
    ArrowRight,
    X,
    Sparkles,
    MessageSquare,
    Truck,
    ChevronRight,
} from "lucide-react";
import { FEATURES_PAGE } from "@/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP: Record<string, React.ReactNode> = {
    Zap: <Zap size={22} />,
    Package: <Package size={22} />,
    BarChart3: <BarChart3 size={22} />,
    BookOpen: <BookOpen size={22} />,
    Users: <Users size={22} />,
    TrendingUp: <TrendingUp size={22} />,
    MessageSquare: <MessageSquare size={22} />,
    Truck: <Truck size={22} />,
    Sparkles: <Sparkles size={22} />,
};

const { hero, stats, features, deepDive, comparison } = FEATURES_PAGE;

function FeatureHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const words = containerRef.current?.querySelectorAll(".hero-word");
            if (words) {
                gsap.from(words, {
                    y: 80,
                    opacity: 0,
                    rotateX: -90,
                    stagger: 0.04,
                    duration: 0.9,
                    ease: "back.out(1.7)",
                    delay: 0.3,
                });
            }
            gsap.from(".hero-sub", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.8,
                ease: "power2.out",
            });
            gsap.from(".hero-cta", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                delay: 1.1,
                ease: "power2.out",
                stagger: 0.1,
            });

            const orbs = sectionRef.current?.querySelectorAll(".hero-orb");
            if (orbs) {
                orbs.forEach((orb, i) => {
                    gsap.to(orb, {
                        x: gsap.utils.random(-120, 120),
                        y: gsap.utils.random(-120, 120),
                        scale: gsap.utils.random(0.7, 1.3),
                        duration: gsap.utils.random(4, 8),
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: i * 0.4,
                    });
                });
            }
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const titleWords = hero.title.split(" ");

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden bg-white"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="hero-orb absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
                <div className="hero-orb absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-gradient-to-bl from-amber-200/20 via-orange-200/10 to-transparent blur-3xl" />
                <div className="hero-orb absolute -bottom-20 left-1/3 w-72 h-72 rounded-full bg-gradient-to-tr from-primary/8 via-transparent to-transparent blur-3xl" />
                <div className="hero-orb absolute top-1/4 left-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-blue-200/10 to-purple-200/10 blur-3xl" />
            </div>

            <div ref={containerRef} className="relative max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 bg-primary-light border border-primary/15 rounded-full px-4 py-1.5 mb-8"
                >
                    <Sparkles size={14} className="text-primary" />
                    <span className="font-inter text-xs font-medium text-primary tracking-wide">
                        {hero.badge}
                    </span>
                </motion.div>

                <h1
                    ref={titleRef}
                    className="font-manrope font-extrabold text-foreground leading-[1.1] mb-6 text-[clamp(2.5rem,7vw,5rem)]"
                >
                    {titleWords.map((word, i) => (
                        <span
                            key={i}
                            className="hero-word inline-block"
                            style={{ perspective: "800px" }}
                        >
                            {word}{" "}
                        </span>
                    ))}
                    <br />
                    <span className="text-gradient hero-word" style={{ perspective: "800px" }}>
                        {hero.titleHighlight}
                    </span>
                </h1>

                <p className="hero-sub font-inter text-muted max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                    {hero.subtitle}
                </p>

                <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
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
                        href="/how-it-works"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="font-inter text-sm font-medium text-foreground bg-card border border-border px-8 py-3.5 rounded-full cursor-pointer flex items-center gap-2 hover:border-primary/30 transition-colors duration-300"
                    >
                        Watch Demo <ChevronRight size={16} />
                    </motion.a>
                </div>

                <div className="hero-cta mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                        <Check size={14} className="text-green-500" /> No credit card
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Check size={14} className="text-green-500" /> 30 days free
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Check size={14} className="text-green-500" /> Cancel anytime
                    </span>
                </div>
            </div>
        </section>
    );
}

function FeatureStats() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    useEffect(() => {
        const timers: ReturnType<typeof setInterval>[] = [];

        const ctx = gsap.context(() => {
            stats.forEach((stat, i) => {
                const el = document.querySelector(`#stat-value-${i}`);
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
                        timers.push(timer);
                    },
                });
            });
        }, sectionRef);

        return () => {
            timers.forEach(clearInterval);
            ctx.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-20 px-6 bg-card border-y border-border">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-center"
                        >
                            <div className="font-manrope font-extrabold text-foreground text-4xl md:text-5xl mb-1">
                                <span id={`stat-value-${i}`}>0</span>
                                {stat.suffix}
                            </div>
                            <p className="font-inter text-sm text-muted">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({
    feature,
    index,
}: {
    feature: (typeof features)[0];
    index: number;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(contentRef, { once: true, margin: "-60px" });

    const handleMouseMove = (e: React.MouseEvent) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(el, {
            rotateX: y * -6,
            rotateY: x * 6,
            duration: 0.4,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
        });
    };

    const dir = index === 0 ? -1 : index === 1 ? 1 : index === 2 ? -1 : index === 3 ? 1 : index === 4 ? -1 : 1;

    return (
        <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: dir * 60, y: 30 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="relative group"
            style={{ perspective: "1000px" }}
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative bg-white border border-border rounded-3xl p-7 md:p-8 cursor-default transition-shadow duration-500 h-full"
                style={{ transformStyle: "preserve-3d" }}
            >
                <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-primary-light text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                        {ICON_MAP[feature.icon]}
                    </div>
                    <span className="font-inter text-[11px] font-medium text-primary bg-primary-light border border-primary/15 px-3 py-1 rounded-full tracking-wide shrink-0">
                        {feature.tag}
                    </span>
                </div>

                <h3 className="font-manrope font-bold text-foreground text-lg md:text-xl mb-3 leading-snug">
                    {feature.title}
                </h3>
                <p className="font-inter text-sm text-muted leading-relaxed mb-4">
                    {feature.summary}
                </p>

                <ul className="space-y-2 mb-5">
                    {feature.details.slice(0, 4).map((detail, di) => (
                        <li key={di} className="flex items-start gap-2 font-inter text-xs text-muted">
                            <Check size={14} className="text-green-500 mt-0.5 shrink-0" />
                            <span>{detail}</span>
                        </li>
                    ))}
                    <li className="text-primary font-inter text-xs font-medium cursor-pointer hover:underline">
                        +{feature.details.length - 4} more features
                    </li>
                </ul>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="font-inter text-xs font-semibold text-primary">{feature.stat}</span>
                    <span className="font-inter text-[11px] text-muted">{feature.benefit}</span>
                </div>

                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent group-hover:ring-primary/20 transition-all duration-500 pointer-events-none" />
            </div>
        </motion.div>
    );
}

function FeatureGrid() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(headingRef, { once: true, margin: "-80px" });

    return (
        <section ref={sectionRef} className="py-28 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div ref={headingRef} className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block"
                    >
                        Platform Features
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-manrope font-extrabold text-foreground leading-tight mb-4 text-4xl md:text-5xl"
                    >
                        Six powerful tools.
                        <br />
                        <span className="text-gradient">One seamless platform.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-inter text-muted max-w-2xl mx-auto leading-relaxed text-sm md:text-base"
                    >
                        Every tool your ecommerce business needs — from AI order extraction to
                        real-time analytics — built into a single, beautifully simple platform.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <FeatureCard key={i} feature={feature} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureDeepDive() {
    const sectionRef = useRef<HTMLElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
    const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const panels = panelsRef.current.filter(Boolean) as HTMLDivElement[];
        const dots = dotsRef.current.filter(Boolean) as HTMLDivElement[];
        if (!pinRef.current || panels.length === 0) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: pinRef.current,
                    start: "top top",
                    end: `+=${(panels.length - 1) * 100}%`,
                    scrub: 1,
                    anticipatePin: 1,
                },
            });

            panels.forEach((panel, i) => {
                if (i === 0) {
                    gsap.set(panel, { opacity: 1, y: 0 });
                    return;
                }
                gsap.set(panel, { opacity: 0, y: 40 });
                tl.to(panel, { opacity: 1, y: 0, duration: 0.1 })
                    .to(panels[i - 1], { opacity: 0, y: -40, duration: 0.1 }, 0)
                    .to(
                        dots[i - 1],
                        { backgroundColor: "#e5e5e5", borderColor: "#e5e5e5", duration: 0.05 },
                        0,
                    )
                    .to(
                        dots[i],
                        { backgroundColor: "#CC785C", borderColor: "#CC785C", duration: 0.05 },
                        0,
                    );
            });

            if (progressRef.current) {
                tl.to(
                    progressRef.current,
                    { scaleY: 1, transformOrigin: "top center" },
                    0,
                );
            }
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative" style={{ height: `${deepDive.length * 100}vh` }}>
            <div
                ref={pinRef}
                className="sticky top-0 left-0 w-full h-screen flex items-center bg-dark overflow-hidden"
            >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
                    <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 w-full">
                    {/* Mobile progress dots */}
                    <div className="flex md:hidden items-center justify-center gap-2 mb-6">
                        {deepDive.map((_, i) => (
                            <div
                                key={i}
                                ref={(el) => { dotsRef.current[i] = el; }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === 0
                                        ? "bg-primary scale-125"
                                        : "bg-white/20"
                                    }`}
                            />
                        ))}
                    </div>

                    <div className="flex gap-8 md:gap-16 items-start">
                        <div className="hidden md:flex flex-col items-center gap-4 pt-2">
                            {deepDive.map((_, i) => (
                                <div
                                    key={i}
                                    ref={(el) => { dotsRef.current[i] = el; }}
                                    className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${i === 0
                                            ? "bg-primary border-primary"
                                            : "bg-white/20 border-white/20"
                                        }`}
                                />
                            ))}
                        </div>

                        <div className="hidden md:block w-px bg-white/10 relative">
                            <div
                                ref={progressRef}
                                className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary/60 to-transparent"
                                style={{ transform: "scaleY(0)", transformOrigin: "top center" }}
                            />
                        </div>

                        <div className="flex-1 relative min-h-[500px] md:min-h-[400px] overflow-y-auto">
                            {deepDive.map((item, i) => (
                                <div
                                    key={i}
                                    ref={(el) => { panelsRef.current[i] = el; }}
                                    className="inset-0 flex flex-col md:flex-row gap-8 md:gap-16 items-center md:absolute"
                                    style={{ opacity: i === 0 ? 1 : 0 }}
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                                                {ICON_MAP[item.visual?.icon || item.icon]}
                                            </div>
                                            <span className="font-inter text-xs font-medium text-primary tracking-widest uppercase">
                                                {item.subtitle}
                                            </span>
                                        </div>
                                        <h3 className="font-manrope font-bold text-white text-2xl md:text-3xl mb-4 leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="font-inter text-sm text-white/60 leading-relaxed mb-6 max-w-xl">
                                            {item.description}
                                        </p>
                                        <div className="space-y-3">
                                            {item.steps.map((step, si) => (
                                                <div
                                                    key={si}
                                                    className="flex items-start gap-3"
                                                >
                                                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                                        {si + 1}
                                                    </div>
                                                    <span className="font-inter text-sm text-white/70">
                                                        {step}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex-1 w-full max-w-sm">
                                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                                            <div
                                                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.visual?.color || "from-primary to-orange-600"} flex items-center justify-center mb-6`}
                                            >
                                                <div className="text-white">
                                                    {ICON_MAP[item.visual?.icon || item.icon]}
                                                </div>
                                            </div>
                                            <h4 className="font-manrope font-bold text-white text-lg mb-3">
                                                {item.title}
                                            </h4>
                                            <p className="font-inter text-sm text-white/50 leading-relaxed">
                                                {item.steps.slice(0, 2).join(" → ")}
                                            </p>
                                            <div className="mt-6 pt-6 border-t border-white/10">
                                                <div className="flex items-center gap-2 text-primary">
                                                    <ArrowRight size={16} />
                                                    <span className="font-inter text-xs font-medium">
                                                        Used by {stats[1].value}+ businesses
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureComparison() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const rowsRef = useRef<(HTMLDivElement | null)[]>([]);
    const isInView = useInView(headingRef, { once: true, margin: "-80px" });

    useEffect(() => {
        const ctx = gsap.context(() => {
            rowsRef.current.forEach((row, i) => {
                if (!row) return;
                gsap.from(row, {
                    x: i % 2 === 0 ? -40 : 40,
                    opacity: 0,
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: row,
                        start: "top 90%",
                    },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-28 px-6 bg-card">
            <div className="max-w-6xl mx-auto">
                <div ref={headingRef} className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block"
                    >
                        The Difference Is Clear
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-manrope font-extrabold text-foreground leading-tight mb-4 text-4xl md:text-5xl"
                    >
                        {comparison.title}
                    </motion.h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="font-inter text-xs font-medium text-muted uppercase tracking-wider text-left pb-4 pr-4 w-1/5">
                                    Aspect
                                </th>
                                <th className="font-inter text-xs font-medium text-muted uppercase tracking-wider text-left pb-4 px-4 w-2/5">
                                    <div className="flex items-center gap-2">
                                        <X size={14} className="text-red-400" />
                                        {comparison.beforeLabel}
                                    </div>
                                </th>
                                <th className="font-inter text-xs font-medium text-muted uppercase tracking-wider text-left pb-4 pl-4 w-2/5">
                                    <div className="flex items-center gap-2">
                                        <Check size={14} className="text-green-500" />
                                        {comparison.afterLabel}
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparison.rows.map((row, i) => (
                                <tr
                                    key={i}
                                    ref={(el) => { rowsRef.current[i] = el; }}
                                    className="border-t border-border/50"
                                >
                                    <td className="font-manrope font-semibold text-foreground text-sm py-4 pr-4">
                                        {row.aspect}
                                    </td>
                                    <td className="font-inter text-sm text-muted py-4 px-4">
                                        <div className="flex items-center gap-2">
                                            <X size={14} className="text-red-300 shrink-0" />
                                            <span>{row.before}</span>
                                        </div>
                                    </td>
                                    <td className="font-inter text-sm text-foreground py-4 pl-4">
                                        <div className="flex items-center gap-2">
                                            <Check size={14} className="text-green-500 shrink-0" />
                                            <span className="font-medium">{row.after}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <p className="font-inter text-sm text-muted mb-4">
                        Ready to make the switch? Thousands of businesses already have.
                    </p>
                    <motion.a
                        href="/pricing"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="font-manrope font-semibold text-white bg-primary px-8 py-3.5 rounded-full text-[15px] shadow-lg shadow-primary/30 cursor-pointer inline-flex items-center gap-2"
                    >
                        Start Your Free Trial <ArrowRight size={16} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

function FeatureCTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".cta-content > *", {
                y: 40,
                opacity: 0,
                stagger: 0.12,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-28 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-primary/10" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl" />
            </div>

            <div className="relative max-w-4xl mx-auto text-center cta-content">
                <span className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block">
                    Get Started Today
                </span>
                <h2 className="font-manrope font-extrabold text-white leading-tight mb-5 text-4xl md:text-5xl lg:text-6xl">
                    Your ecommerce business
                    <br />
                    <span className="text-gradient">deserves better tools</span>
                </h2>
                <p className="font-inter text-white/50 max-w-xl mx-auto leading-relaxed text-sm md:text-base mb-10">
                    Join 2,500+ ecommerce businesses already using Blink N Ship to automate
                    operations, save time, and grow revenue.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.a
                        href="/pricing"
                        whileHover={{
                            scale: 1.06,
                            boxShadow: "0 16px 50px rgba(204,120,92,0.6)",
                        }}
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
                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-white/30">
                    <span>No credit card required</span>
                    <span className="w-px h-4 bg-white/10" />
                    <span>30 days free trial</span>
                    <span className="w-px h-4 bg-white/10" />
                    <span>Cancel anytime</span>
                </div>
            </div>
        </section>
    );
}

export default function FeaturesPage() {
    return (
        <main>
            <Navbar />
            <FeatureHero />
            <FeatureStats />
            <FeatureGrid />
            <FeatureDeepDive />
            <FeatureComparison />
            <FeatureCTA />
            <Footer />
        </main>
    );
}
