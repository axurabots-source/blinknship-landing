"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { WORKFLOW_PILLS } from "@/constants";

const STATS = [
    { value: "10x", label: "Faster Operations" },
    { value: "100%", label: "Automated Tracking" },
    { value: "1", label: "Platform for Everything" },
];

// C1-continuous 3-route compound path (no Z, all tangents match)
// Routes: big right loop → medium left loop → small right loop → repeat
const SNAKE_PATH = "M 500,250 C 500,100 950,30 950,250 C 950,470 500,470 500,250 C 500,30 200,50 200,250 C 200,450 500,450 500,250 C 500,50 750,100 750,250 C 750,400 500,400 500,250";

const VIEWBOX = "0 0 1000 500";

function useCountUp(target: string, duration: number = 2) {
    const [display, setDisplay] = useState("0");
    const numeric = parseFloat(target);
    const isPercent = target.includes("%");
    const isX = target.includes("x");
    const suffix = isPercent ? "%" : isX ? "x" : "";

    useEffect(() => {
        if (isNaN(numeric)) {
            setDisplay(target);
            return;
        }
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = (timestamp - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(numeric * eased);
            setDisplay(`${current}${suffix}`);
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [numeric, duration, suffix]);

    return display;
}

function StatItem({ value, label }: { value: string; label: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const display = useCountUp(hasAnimated ? value : "0", 1.5);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="flex flex-col items-center gap-1">
            <span className="font-manrope font-extrabold text-foreground text-3xl md:text-4xl tabular-nums">
                {display}
            </span>
            <span className="font-inter text-xs text-muted tracking-wide uppercase whitespace-nowrap">
                {label}
            </span>
        </div>
    );
}

const COLOR = { primary: "#CC785C", secondary: "#e0987e", shadow: "rgba(204,120,92,0.5)" };
const SNAKE_SPEED = 5.5;
const SNAKE_THICKNESS = 28;
const SNAKE_LENGTH_RATIO = 0.25;

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const pillsRowRef = useRef<HTMLDivElement>(null);

    const tick = useCallback(
        (pathRefs: SVGPathElement[], totalLength: number) => {
            const pixelPerMs = totalLength / (SNAKE_SPEED * 1000);
            let offset = 0;
            let lastTime = 0;

            const frame = (time: number) => {
                const dt = lastTime ? time - lastTime : 16;
                lastTime = time;
                offset += pixelPerMs * dt;
                if (offset > totalLength) offset -= totalLength;

                const dashOffset = -offset;
                for (const p of pathRefs) {
                    p.setAttribute("stroke-dashoffset", String(dashOffset));
                }

                raf = requestAnimationFrame(frame);
            };

            let raf = requestAnimationFrame(frame);
            return () => cancelAnimationFrame(raf);
        },
        []
    );

    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;

        const paths = Array.from(svg.querySelectorAll<SVGPathElement>("path[data-animated]"));
        if (paths.length === 0) return;

        const totalLength = paths[0].getTotalLength();

        const layerRatios: Record<string, number> = {
            glow: Math.max(0.15, SNAKE_LENGTH_RATIO * 1.0),
            trail: Math.max(0.1, SNAKE_LENGTH_RATIO * 0.65),
            body: Math.max(0.06, SNAKE_LENGTH_RATIO * 0.4),
            head: Math.max(0.03, SNAKE_LENGTH_RATIO * 0.18),
        };

        for (const p of paths) {
            const layer = p.getAttribute("data-layer") || "";
            const ratio = layerRatios[layer] ?? SNAKE_LENGTH_RATIO;
            const dash = totalLength * ratio;
            const gap = totalLength * (1 - ratio);
            p.setAttribute("stroke-dasharray", `${dash}, ${gap}`);
        }

        const glow = svg.querySelector<SVGPathElement>("path[data-layer='glow']");
        const glowTimeline = gsap.to(glow, {
            opacity: 0.08,
            duration: 2.5,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
        });

        const cancel = tick(paths, totalLength);

        return () => {
            cancel();
            glowTimeline.kill();
        };
    }, [tick]);

    // --- organic wobble (subtle rotation oscillation) ---
    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;
        const tl = gsap.to(svg, {
            rotation: 0.4,
            duration: 4,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            transformOrigin: "50% 50%",
        });
        return () => { tl.kill(); };
    }, []);

    // Heading word reveal
    useEffect(() => {
        const ctx = gsap.context(() => {
            const words = headingRef.current?.querySelectorAll(".word");
            if (words) {
                gsap.fromTo(
                    words,
                    { y: 60, opacity: 0, rotateX: -30 },
                    { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.06, ease: "power4.out", delay: 0.2 }
                );
            }

            if (pillsRowRef.current) {
                gsap.fromTo(
                    pillsRowRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 1.1 }
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-background"
        >
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: `linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/6 blur-[120px] pointer-events-none" />

            {/* === Full-width background snake === */}
            <svg
                ref={svgRef}
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible select-none"
                style={{ zIndex: 0, willChange: "transform" }}
                viewBox={VIEWBOX}
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    {/* Layer gradients */}
                    <linearGradient id="snake-grad-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={COLOR.secondary} stopOpacity="0.3" />
                        <stop offset="50%" stopColor={COLOR.primary} stopOpacity="0.6" />
                        <stop offset="100%" stopColor={COLOR.secondary} stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="snake-grad-trail" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={COLOR.primary} stopOpacity="0.4" />
                        <stop offset="50%" stopColor={COLOR.primary} stopOpacity="0.8" />
                        <stop offset="100%" stopColor={COLOR.secondary} stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="snake-grad-body" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={COLOR.primary} stopOpacity="0.7" />
                        <stop offset="50%" stopColor={COLOR.secondary} stopOpacity="1" />
                        <stop offset="100%" stopColor={COLOR.primary} stopOpacity="0.5" />
                    </linearGradient>
                    <linearGradient id="snake-grad-head" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={COLOR.primary} stopOpacity="1" />
                        <stop offset="50%" stopColor="#fff" stopOpacity="1" />
                        <stop offset="100%" stopColor={COLOR.secondary} stopOpacity="0.9" />
                    </linearGradient>

                    <filter id="snake-glow">
                        <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor={COLOR.shadow} />
                    </filter>
                    <filter id="snake-glow-strong">
                        <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor={COLOR.shadow} />
                    </filter>
                    <filter id="snake-blur">
                        <feGaussianBlur stdDeviation="6" />
                    </filter>
                    <filter id="snake-blur-heavy">
                        <feGaussianBlur stdDeviation="16" />
                    </filter>
                </defs>

                {/* Layer 1 — Ambient glow (blurred, very faint, full coverage) */}
                <path
                    data-layer="glow"
                    data-animated
                    d={SNAKE_PATH}
                    fill="none"
                    stroke={`url(#snake-grad-glow)`}
                    strokeWidth={SNAKE_THICKNESS * 2.5}
                    strokeLinecap="round"
                    filter="url(#snake-blur-heavy)"
                    opacity={0.15}
                />

                <path
                    data-layer="trail"
                    data-animated
                    d={SNAKE_PATH}
                    fill="none"
                    stroke={`url(#snake-grad-trail)`}
                    strokeWidth={SNAKE_THICKNESS * 1.3}
                    strokeLinecap="round"
                    filter="url(#snake-blur)"
                    opacity={0.35}
                />

                <path
                    data-layer="body"
                    data-animated
                    d={SNAKE_PATH}
                    fill="none"
                    stroke={`url(#snake-grad-body)`}
                    strokeWidth={SNAKE_THICKNESS}
                    strokeLinecap="round"
                    filter="url(#snake-glow)"
                    opacity={0.7}
                />

                <path
                    data-layer="head"
                    data-animated
                    d={SNAKE_PATH}
                    fill="none"
                    stroke={`url(#snake-grad-head)`}
                    strokeWidth={SNAKE_THICKNESS * 0.9}
                    strokeLinecap="round"
                    filter="url(#snake-glow-strong)"
                    opacity={1}
                />
            </svg>

            {/* === Content (z-10, above snake) === */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8 flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary-light relative z-10"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="font-inter text-xs font-medium text-primary tracking-wide uppercase">
                    Your Ecomerce Operating System
                </span>
            </motion.div>

            {/* Heading — no z-index weaving, all content above snake */}
            <div
                ref={headingRef}
                className="relative w-full max-w-5xl mx-auto mb-6 px-2 py-6 flex flex-wrap items-center justify-center gap-x-2 z-10"
                role="heading"
                aria-level={1}
            >
                <span className="word font-manrope font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.15] tracking-tight select-none"
                    style={{ color: "#CC785C", opacity: 0 }}>One</span>
                <span className="word font-manrope font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.15] tracking-tight select-none"
                    style={{ color: "#0a0a0a", opacity: 0 }}>Platform.</span>
                <span className="word font-manrope font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.15] tracking-tight select-none"
                    style={{ color: "#0a0a0a", opacity: 0 }}>Every</span>

                <span className="w-full hidden sm:block" />

                <span className="word font-manrope font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.15] tracking-tight select-none"
                    style={{ color: "#0a0a0a", opacity: 0 }}>Operation.</span>
                <span className="word font-manrope font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.15] tracking-tight select-none"
                    style={{ color: "#CC785C", opacity: 0 }}>Zero</span>
                <span className="word font-manrope font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.15] tracking-tight select-none"
                    style={{ color: "#0a0a0a", opacity: 0 }}>Chaos.</span>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-inter text-center text-muted max-w-2xl mb-10 leading-relaxed text-sm md:text-base lg:text-lg px-4 relative z-10"
            >
                Stop switching between WhatsApp, Excel, and courier portals. Blink N
                Ship connects your orders, inventory, finance, and team inside one
                intelligent dashboard.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-center gap-4 mb-16 relative z-10"
            >
                <motion.a
                    href="/pricing"
                    whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(204,120,92,0.4)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="font-manrope font-semibold text-white bg-primary px-8 py-4 rounded-full cursor-pointer text-[15px] shadow-lg shadow-primary/30"
                >
                    Start Free — 30 Days
                </motion.a>
                <motion.a
                    href="/how-it-works"
                    whileHover={{ scale: 1.05, borderColor: "#CC785C", color: "#CC785C", boxShadow: "0 8px 30px rgba(204,120,92,0.15)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="font-manrope font-semibold text-muted border-2 border-border bg-white px-8 py-4 rounded-full cursor-pointer text-[15px] hover:border-primary/40 hover:bg-primary-light/30 transition-all duration-300"
                >
                    See How It Works ↓
                </motion.a>
            </motion.div>

            <div ref={pillsRowRef} className="w-full max-w-4xl relative z-10" style={{ opacity: 0 }}>
                <p className="font-inter text-xs text-muted text-center mb-4 tracking-widest uppercase">
                    Your entire workflow — automated
                </p>
                <div className="relative flex flex-wrap justify-center gap-3">
                    {WORKFLOW_PILLS.map((pill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 + i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ scale: 1.06, y: -3 }}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium font-inter cursor-default whitespace-nowrap ${pill.color}`}
                            style={{
                                animation: `float ${3.5 + i * 0.4}s ease-in-out infinite`,
                                animationDelay: `${i * 0.3}s`,
                            }}
                        >
                            {i > 0 && <span className="text-[10px] opacity-40 -ml-1">→</span>}
                            {pill.label}
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-center mt-6 gap-1.5">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0.2, 0.8, 0.2] }}
                            transition={{ delay: 1.8 + i * 0.1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-1 rounded-full bg-primary"
                        />
                    ))}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20 relative z-10"
            >
                {STATS.map((stat, i) => (
                    <StatItem key={i} value={stat.value} label={stat.label} />
                ))}
            </motion.div>

            <div className="mt-16 flex flex-col items-center gap-2 z-10">
                <span className="font-inter text-[11px] text-muted tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
                />
            </div>
        </section>
    );
}
