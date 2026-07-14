"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Check,
    ArrowRight,
    Sparkles,
    MessageSquare,
    Package,
    BarChart3,
    Settings,
    Zap,
    TrendingUp,
    Clock,
    Target,
    Layers,
    Play,
    Shield,
    UserCircle,
    UsersRound,
    MessageCircle,
    Globe,
    Mail,
    Truck,
    FileText,
    Smartphone,
    Printer,
    Quote,
    Star,
} from "lucide-react";
import { HOW_IT_WORKS_PAGE } from "@/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

const { hero, steps, workflow, benefits, scrollText, useCases, integrations } =
    HOW_IT_WORKS_PAGE;

const ICON_MAP: Record<string, React.ReactNode> = {
    Settings: <Settings size={22} />,
    Zap: <Zap size={22} />,
    TrendingUp: <TrendingUp size={22} />,
    MessageSquare: <MessageSquare size={22} />,
    Package: <Package size={22} />,
    BarChart3: <BarChart3 size={22} />,
    Clock: <Clock size={22} />,
    Target: <Target size={22} />,
    Layers: <Layers size={22} />,
    Sparkles: <Sparkles size={22} />,
    UserCircle: <UserCircle size={22} />,
    UsersRound: <UsersRound size={22} />,
    MessageCircle: <MessageCircle size={22} />,
    Globe: <Globe size={22} />,
    Mail: <Mail size={22} />,
    Truck: <Truck size={22} />,
    FileText: <FileText size={22} />,
    Smartphone: <Smartphone size={22} />,
    Printer: <Printer size={22} />,
};

function splitIntoChars(text: string): string[] {
    const chars: string[] = [];
    for (const ch of text) {
        chars.push(ch === " " ? "\u00A0" : ch);
    }
    return chars;
}

/* ─── Hero ─── */
function HowHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const chars = containerRef.current?.querySelectorAll(".hero-ch");
            if (chars) {
                gsap.from(chars, {
                    opacity: 0,
                    rotateY: -90,
                    y: 40,
                    stagger: 0.025,
                    duration: 0.7,
                    ease: "back.out(2)",
                    delay: 0.2,
                });
            }
            gsap.from(".how-hero-sub", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 1.1,
                ease: "power2.out",
            });
            gsap.from(".how-hero-cta", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                delay: 1.4,
                ease: "power2.out",
                stagger: 0.1,
            });

            const orbs = sectionRef.current?.querySelectorAll(".how-orb");
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

    const titleChars = splitIntoChars(hero.title);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden bg-dark"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="how-orb absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent blur-3xl" />
                <div className="how-orb absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent blur-3xl" />
                <div className="how-orb absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-gradient-to-t from-blue-500/5 via-transparent to-transparent blur-3xl" />
                <div className="how-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-primary/5 to-purple-500/5 blur-3xl" />
            </div>

            <div ref={containerRef} className="relative max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8"
                >
                    <Sparkles size={14} className="text-primary" />
                    <span className="font-inter text-xs font-medium text-primary tracking-wide">
                        {hero.badge}
                    </span>
                </motion.div>

                <h1
                    ref={titleRef}
                    className="font-manrope font-extrabold text-white leading-[1.15] mb-6 text-[clamp(2.8rem,8vw,5.5rem)]"
                    style={{ perspective: "1200px" }}
                >
                    {titleChars.map((ch, i) => (
                        <span key={i} className="hero-ch inline-block" style={{ perspective: "800px" }}>
                            {ch}
                        </span>
                    ))}
                </h1>

                <p className="how-hero-sub font-inter text-white/50 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
                    {hero.subtitle}
                </p>

                <div className="how-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
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
                        className="font-inter text-sm font-medium text-white/70 bg-white/5 border border-white/10 px-8 py-3.5 rounded-full cursor-pointer flex items-center gap-2 hover:bg-white/10 transition-colors duration-300"
                    >
                        <Play size={14} /> See It In Action
                    </motion.a>
                </div>

                <div className="how-hero-cta mt-10 grid grid-cols-3 gap-4 md:gap-8 max-w-md mx-auto">
                    {hero.stats.map((s, i) => (
                        <div key={i} className="text-center">
                            <div className="font-manrope font-bold text-white text-xl">{s.value}</div>
                            <p className="font-inter text-[11px] text-white/40 mt-0.5">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Scroll-text reveal — giant line-by-line sequential ─── */
function ScrollTextReveal() {
    const sectionRef = useRef<HTMLElement>(null);
    const linesRef = useRef<(HTMLDivElement | null)[]>([]);
    const tagRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const lines = linesRef.current.filter(Boolean) as HTMLDivElement[];
            if (!lines.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 65%",
                    end: "bottom 30%",
                    scrub: 1.2,
                },
                defaults: { ease: "power2.out" },
            });

            lines.forEach((line, i) => {
                if (i === 0) {
                    tl.from(line, { y: 90, opacity: 0, rotateX: 20, duration: 0.2 });
                } else {
                    tl.from(line, { y: 90, opacity: 0, rotateX: 15, duration: 0.2 })
                        .to(lines[i - 1], { opacity: 0.15, y: -30, scale: 0.92, duration: 0.12 }, "-=0.05");
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[150vh] md:min-h-[200vh] py-48 px-6 overflow-hidden bg-white"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 left-1/3 w-96 h-96 rounded-full bg-primary/[0.03] blur-3xl" />
                <div className="absolute bottom-40 right-1/3 w-96 h-96 rounded-full bg-amber-500/[0.03] blur-3xl" />
            </div>

            <div className="relative max-w-6xl mx-auto text-center">
                <span className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-12 block">
                    The Big Picture
                </span>

                <div style={{ perspective: "1200px" }}>
                    {scrollText.map((line, li) => (
                        <div
                            key={li}
                            ref={(el) => { linesRef.current[li] = el; }}
                            className="mb-6 md:mb-8 last:mb-0"
                        >
                            <h2 className="font-manrope font-extrabold text-foreground leading-[1.15] text-[clamp(1.8rem,5vw,4rem)] md:text-[clamp(2.5rem,6vw,5rem)]">
                                {line}
                            </h2>
                        </div>
                    ))}
                </div>

                <p className="font-inter text-muted/60 max-w-2xl mx-auto leading-relaxed text-sm md:text-base mt-16">
                    AI order extraction, one-click courier booking, real-time inventory,
                    automatic finances, team tools, and live analytics — one platform.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                    {["AI-Powered", "One-Click Booking", "Real-Time Sync", "Auto Reports"].map(
                        (tag) => (
                            <span
                                key={tag}
                                className="font-inter text-xs font-medium text-primary bg-primary-light border border-primary/15 px-4 py-2 rounded-full"
                            >
                                {tag}
                            </span>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}

/* ─── Steps with connected flow ─── */
function HowSteps() {
    const sectionRef = useRef<HTMLElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const arrowRefs = useRef<(HTMLDivElement | null)[]>([null, null]);
    const headingRef = useRef<HTMLDivElement>(null);
    const numsRef = useRef<(HTMLDivElement | null)[]>([]);
    const isInView = useInView(headingRef, { once: true, margin: "-80px" });

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (lineRef.current) {
                gsap.from(lineRef.current, {
                    scaleX: 0,
                    transformOrigin: "left center",
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        end: "center 50%",
                        scrub: 1,
                    },
                });
            }
            arrowRefs.current.forEach((a) => {
                if (!a) return;
                gsap.from(a, {
                    scaleX: 0,
                    transformOrigin: "left center",
                    duration: 0.8,
                    ease: "back.out(2)",
                    scrollTrigger: { trigger: a, start: "top 80%", end: "top 40%", scrub: 0.8 },
                });
            });
            numsRef.current.forEach((n) => {
                if (!n) return;
                gsap.from(n, {
                    scale: 0,
                    rotate: -180,
                    duration: 0.7,
                    ease: "back.out(2.5)",
                    scrollTrigger: { trigger: n, start: "top 80%", end: "top 40%", scrub: 0.8 },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-28 px-6 bg-card overflow-hidden border-y border-border">
            <div className="max-w-7xl mx-auto">
                <div ref={headingRef} className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block"
                    >
                        Three Simple Steps
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-manrope font-extrabold text-foreground leading-tight mb-4 text-4xl md:text-5xl"
                    >
                        From setup to scale
                        <br />
                        <span className="text-gradient">in three steps</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-inter text-muted max-w-2xl mx-auto leading-relaxed text-sm md:text-base"
                    >
                        No complicated setup, no learning curve. Three straightforward steps to
                        transform how you manage your ecommerce business.
                    </motion.p>
                </div>

                <div className="hidden md:block w-full h-px bg-border/50 mb-16 relative">
                    <div ref={lineRef} className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-primary" style={{ transformOrigin: "left center" }} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative">
                    {steps.map((step, i) => (
                        <StepCard
                            key={i}
                            step={step}
                            index={i}
                            numsRef={numsRef}
                        />
                    ))}
                </div>

                <div className="hidden md:flex items-center justify-center gap-4 mt-12">
                    {steps.map((step, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-dark text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-sm">
                                {i + 1}
                            </div>
                            <span className="font-inter text-xs text-muted whitespace-nowrap">{step.subtitle}</span>
                            {i < steps.length - 1 && (
                                <ArrowRight size={16} className="text-muted/30 mx-2" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function StepCard({ step, index, numsRef }: { step: (typeof steps)[0]; index: number; numsRef: React.MutableRefObject<(HTMLDivElement | null)[]> }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const contentRef = useRef<HTMLDivElement>(null);

    const angle = index === 0 ? -6 : index === 2 ? 6 : 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, rotate: angle }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            style={{ perspective: "1000px" }}
        >
            <div
                ref={contentRef}
                className="bg-white border border-border rounded-3xl p-7 md:p-8 h-full transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/5 group"
            >
                <div className="flex items-center justify-between mb-5">
                    <div
                        ref={(el) => { numsRef.current[index] = el; }}
                        className="font-space font-bold text-6xl text-gradient select-none"
                    >
                        {step.step}
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-md transition-all duration-300">
                        {ICON_MAP[step.icon]}
                    </div>
                </div>

                <h3 className="font-manrope font-bold text-foreground text-xl mb-2 leading-snug">
                    {step.title}
                </h3>
                <p className="font-inter text-xs text-primary font-medium mb-3">{step.subtitle}</p>

                <div className="space-y-2.5 mt-5">
                    {step.details.slice(0, 3).map((d, di) => (
                        <motion.div
                            key={di}
                            initial={{ opacity: 0, x: -15 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.18 + di * 0.08 }}
                            className="flex items-start gap-2.5"
                        >
                            <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                <Check size={11} />
                            </div>
                            <span className="font-inter text-sm text-muted leading-relaxed">{d}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-5 pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-1.5">
                        {step.illustration.items.slice(0, 3).map((item, ii) => (
                            <span
                                key={ii}
                                className="font-inter text-[10px] text-muted bg-card px-2.5 py-1 rounded-full border border-border"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Workflow Deep Dive (sticky scroll) ─── */
function HowWorkflow() {
    const sectionRef = useRef<HTMLElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
    const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const panels = panelsRef.current.filter(Boolean) as HTMLDivElement[];
        const dots = dotsRef.current.filter(Boolean) as HTMLDivElement[];
        if (!pinRef.current || panels.length < 2) return;

        const ctx = gsap.context(() => {
            gsap.set(panels[0], { opacity: 1, y: 0 });
            for (let i = 1; i < panels.length; i++) {
                gsap.set(panels[i], { opacity: 0, y: 40 });
            }

            const seg = 1 / (panels.length - 1);
            const crossFade = seg * 0.35;
            const hold = seg * 0.1;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: pinRef.current,
                    start: "top top",
                    end: `+=${(panels.length - 1) * 100}%`,
                    scrub: 1.2,
                    anticipatePin: 1,
                },
                defaults: { ease: "power2.inOut" },
            });

            for (let i = 1; i < panels.length; i++) {
                const startPos = (i - 1) * seg;
                tl.to(panels[i], { opacity: 1, y: 0, duration: crossFade }, startPos)
                    .to(panels[i - 1], { opacity: 0, y: -30, duration: crossFade }, startPos + hold)
                    .to(dots[i - 1], { backgroundColor: "#ffffff20", borderColor: "#ffffff20", duration: 0.01 }, startPos + hold)
                    .to(dots[i], { backgroundColor: "#CC785C", borderColor: "#CC785C", duration: 0.01 }, startPos + hold);
            }

            if (progressRef.current) {
                tl.to(progressRef.current, { scaleY: 1, transformOrigin: "top center", duration: 1, ease: "none" }, 0);
            }
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative" style={{ height: `${workflow.length * 100}vh` }}>
            <div
                ref={pinRef}
                className="sticky top-0 left-0 w-full h-screen flex items-center bg-dark overflow-hidden"
            >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
                    <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 w-full">
                    {/* Mobile progress dots */}
                    <div className="flex md:hidden items-center justify-center gap-2 mb-6">
                        {workflow.map((_, i) => (
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
                            {workflow.map((_, i) => (
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

                        <div className="flex-1 relative min-h-[500px] md:min-h-[450px] overflow-y-auto">
                            {workflow.map((item, i) => (
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
                                        <p className="font-inter text-sm text-white/60 leading-relaxed mb-4 max-w-xl">
                                            {item.description}
                                        </p>
                                        <p className="font-inter text-xs text-white/40 leading-relaxed mb-6 max-w-xl italic">
                                            {item.detail}
                                        </p>
                                        <div className="space-y-2.5">
                                            {item.steps.map((step, si) => (
                                                <div key={si} className="flex items-start gap-3">
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
                                            <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-6">
                                                {ICON_MAP[item.visual?.icon || item.icon]}
                                            </div>
                                            <h4 className="font-manrope font-bold text-white text-lg mb-3">
                                                {item.title}
                                            </h4>
                                            <div className="space-y-3">
                                                {item.steps.slice(0, 3).map((s, si) => (
                                                    <div key={si} className="flex items-center gap-2">
                                                        <ArrowRight size={12} className="text-primary shrink-0" />
                                                        <span className="font-inter text-xs text-white/50">{s}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-6 pt-6 border-t border-white/10">
                                                <div className="flex items-center gap-2 text-primary">
                                                    <Shield size={14} />
                                                    <span className="font-inter text-xs font-medium">
                                                        Trusted by {hero.stats[1].value} businesses
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

/* ─── Use Cases ─── */
function HowUseCases() {
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
                        Built for Every Seller
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-manrope font-extrabold text-foreground leading-tight mb-4 text-4xl md:text-5xl"
                    >
                        See how real businesses
                        <br />
                        <span className="text-gradient">use Blink N Ship</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {useCases.map((uc, i) => (
                        <UseCaseCard key={i} uc={uc} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function UseCaseCard({
    uc,
    index,
}: {
    uc: (typeof useCases)[0];
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-border rounded-3xl p-7 md:p-8 hover:border-primary/20 transition-all duration-300 h-full flex flex-col"
        >
            <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center mb-5">
                {ICON_MAP[uc.icon]}
            </div>

            <h3 className="font-manrope font-bold text-foreground text-lg mb-1">{uc.title}</h3>
            <p className="font-inter text-xs text-muted mb-4">{uc.subtitle}</p>

            <div className="mb-4">
                <span className="font-inter text-[10px] font-semibold text-red-500 uppercase tracking-wider block mb-2">
                    The Challenge
                </span>
                <p className="font-inter text-sm text-muted leading-relaxed">{uc.challenge}</p>
            </div>

            <div className="mb-5">
                <span className="font-inter text-[10px] font-semibold text-green-600 uppercase tracking-wider block mb-2">
                    The Solution
                </span>
                <p className="font-inter text-sm text-muted leading-relaxed">{uc.solution}</p>
            </div>

            <div className="mt-auto pt-4 border-t border-border">
                <div className="flex items-center gap-2 mb-3">
                    <Star size={14} className="text-primary fill-primary" />
                    <span className="font-manrope font-bold text-primary text-sm">{uc.result}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {uc.metrics.map((m, mi) => (
                        <span
                            key={mi}
                            className="font-inter text-[10px] text-muted bg-card border border-border px-2.5 py-1 rounded-full"
                        >
                            {m}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Integrations with floating chips ─── */
function HowIntegrations() {
    const sectionRef = useRef<HTMLElement>(null);
    const chipRefs = useRef<(HTMLDivElement | null)[]>([]);
    const headingRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(headingRef, { once: true, margin: "-80px" });

    useEffect(() => {
        const ctx = gsap.context(() => {
            chipRefs.current.forEach((chip, i) => {
                if (!chip) return;
                gsap.from(chip, {
                    opacity: 0,
                    scale: 0.5,
                    x: i % 2 === 0 ? -40 : 40,
                    y: 20,
                    duration: 0.6,
                    delay: Math.floor(i / 4) * 0.12 + (i % 4) * 0.06,
                    ease: "back.out(1.7)",
                    scrollTrigger: { trigger: chip, start: "top 88%", end: "top 40%", scrub: 0.6 },
                });
                gsap.to(chip, {
                    y: gsap.utils.random(-4, 4),
                    duration: gsap.utils.random(2, 3.5),
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: gsap.utils.random(0, 2),
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    let chipIdx = 0;

    return (
        <section ref={sectionRef} className="py-28 px-6 bg-white relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-primary/[0.02] blur-3xl" />
                <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-amber-500/[0.02] blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div ref={headingRef} className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block"
                    >
                        Works With Your Tools
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-manrope font-extrabold text-foreground leading-tight mb-4 text-4xl md:text-5xl"
                    >
                        Connects with everything
                        <br />
                        <span className="text-gradient">you already use</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-inter text-muted max-w-2xl mx-auto leading-relaxed text-sm md:text-base"
                    >
                        Blink N Ship integrates with the platforms, couriers, and tools your
                        business already relies on. No migration headaches, no learning new systems.
                    </motion.p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto mb-14">
                    {(() => {
                        const allItems = integrations.categories.flatMap((c) => c.items);
                        const chips: React.ReactNode[] = [];
                        const pairs: { icon: string; name: string }[][] = [];
                        for (let i = 0; i < allItems.length; i += 2) {
                            pairs.push(allItems.slice(i, i + 2));
                        }
                        pairs.forEach((pair, pi) => {
                            const tag = integrations.categories[Math.min(pi, integrations.categories.length - 1)];
                            chips.push(
                                <div key={`pair-${pi}`} className="flex items-center gap-2">
                                    {pair.map((item, ii) => {
                                        const idx = chipIdx++;
                                        return (
                                            <div
                                                key={ii}
                                                ref={(el) => { chipRefs.current[idx] = el; }}
                                                className="flex items-center gap-2.5 bg-white border border-border rounded-full px-4 py-2.5 shadow-sm hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 cursor-default"
                                            >
                                                <span className="text-muted">{ICON_MAP[item.icon]}</span>
                                                <span className="font-inter text-xs text-foreground font-medium">{item.name}</span>
                                            </div>
                                        );
                                    })}
                                    {pi < pairs.length - 1 && (
                                        <div className="flex items-center gap-1 text-muted/30">
                                            <ArrowRight size={14} />
                                        </div>
                                    )}
                                </div>,
                            );
                        });
                        return chips;
                    })()}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {integrations.categories.map((cat, ci) => (
                        <IntegrationCard key={ci} cat={cat} index={ci} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function IntegrationCard({ cat, index }: { cat: (typeof integrations.categories)[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(el, { rotateX: y * -4, rotateY: x * 4, duration: 0.3, ease: "power2.out" });
    };
    const handleMouseLeave = () => {
        gsap.to(cardRef.current, { rotateX: 0, rotateY: 0, duration: 0.4, ease: "power2.out" });
    };

    const colorClasses: Record<string, string> = {
        "from-amber-500 to-orange-600": "from-amber-500/20 to-orange-600/5 border-amber-200/50",
        "from-blue-500 to-indigo-600": "from-blue-500/20 to-indigo-600/5 border-blue-200/50",
        "from-emerald-500 to-teal-600": "from-emerald-500/20 to-teal-600/5 border-emerald-200/50",
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: "1000px" }}
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`relative bg-white border-2 rounded-2xl p-6 overflow-hidden transition-shadow duration-300 hover:shadow-xl ${colorClasses[cat.color] || "border-border"}`}
                style={{ transformStyle: "preserve-3d" }}
            >
                <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center shadow-sm">
                        {ICON_MAP[cat.items[0]?.icon] || <Sparkles size={18} />}
                    </div>
                    <span className="font-inter text-[10px] font-medium text-muted bg-card border border-border/60 px-2.5 py-1 rounded-full">
                        {cat.items.length} tools
                    </span>
                </div>

                <h3 className="font-manrope font-bold text-foreground text-base mb-2">{cat.label}</h3>
                <p className="font-inter text-xs text-muted mb-4 leading-relaxed">
                    {index === 0
                        ? "Accept orders from every platform your customers use."
                        : index === 1
                            ? "Connect with Pakistan's leading courier services."
                            : "Export data, send notifications, print labels."}
                </p>

                <div className={`h-px w-full bg-gradient-to-r ${cat.color} mb-4 opacity-40`} />

                <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, ii) => (
                        <span
                            key={ii}
                            className="inline-flex items-center gap-1.5 font-inter text-xs text-foreground bg-card border border-border/60 rounded-lg px-3 py-1.5 hover:border-primary/30 transition-colors duration-200"
                        >
                            <span className="text-muted">{ICON_MAP[item.icon]}</span>
                            {item.name}
                        </span>
                    ))}
                </div>

                <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${cat.color} opacity-[0.04] pointer-events-none`} />
            </div>
        </motion.div>
    );
}

/* ─── Benefits ─── */
function HowBenefits() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const isInView = useInView(headingRef, { once: true, margin: "-80px" });

    useEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, i) => {
                if (!card) return;
                gsap.from(card.querySelector(".benefit-line"), {
                    scaleX: 0,
                    transformOrigin: "left center",
                    duration: 0.8,
                    delay: i * 0.15 + 0.3,
                    ease: "power3.out",
                    scrollTrigger: { trigger: card, start: "top 85%" },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

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
                        Why This Approach Works
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-manrope font-extrabold text-foreground leading-tight mb-4 text-4xl md:text-5xl"
                    >
                        Built for the way
                        <br />
                        <span className="text-gradient">you actually work</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={i}
                            ref={(el) => { cardsRef.current[i] = el; }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white border border-border rounded-3xl p-7 md:p-8 hover:border-primary/20 transition-colors duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center shrink-0">
                                    {ICON_MAP[b.icon] || <Sparkles size={22} />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-manrope font-bold text-foreground text-lg mb-2">
                                        {b.title}
                                    </h3>
                                    <p className="font-inter text-sm text-muted leading-relaxed">
                                        {b.description}
                                    </p>
                                    <div className="benefit-line mt-4 h-0.5 w-full bg-gradient-to-r from-primary/30 to-transparent rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── CTA ─── */
function HowCTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".how-cta-el", {
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
        <section
            ref={sectionRef}
            className="py-28 px-6 relative overflow-hidden bg-gradient-to-br from-dark via-dark to-primary/10"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-amber-500/5 blur-3xl" />
            </div>

            <div className="relative max-w-4xl mx-auto text-center">
                <span className="how-cta-el font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block">
                    Ready to Transform Your Workflow
                </span>
                <h2 className="how-cta-el font-manrope font-extrabold text-white leading-tight mb-5 text-4xl md:text-5xl lg:text-6xl">
                    Start automating your
                    <br />
                    <span className="text-gradient">ecommerce operations today</span>
                </h2>
                <p className="how-cta-el font-inter text-white/50 max-w-xl mx-auto leading-relaxed text-sm md:text-base mb-10">
                    Join 2,500+ ecommerce businesses. Set up in 5 minutes. No credit card
                    required.
                </p>
                <div className="how-cta-el flex flex-col sm:flex-row items-center justify-center gap-4">
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
                <div className="how-cta-el mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-white/30">
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

/* ─── Page ─── */
export default function HowItWorksPage() {
    return (
        <main>
            <Navbar />
            <HowHero />
            <ScrollTextReveal />
            <HowSteps />
            <HowWorkflow />
            <HowUseCases />
            <HowIntegrations />
            <HowBenefits />
            <HowCTA />
            <Footer />
        </main>
    );
}
