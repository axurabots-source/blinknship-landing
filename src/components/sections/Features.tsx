"use client";

import { useEffect, useRef } from "react";
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
} from "lucide-react";
import { FEATURES } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP: Record<string, React.ReactNode> = {
    Zap: <Zap size={20} />,
    Package: <Package size={20} />,
    BarChart3: <BarChart3 size={20} />,
    BookOpen: <BookOpen size={20} />,
    Users: <Users size={20} />,
    TrendingUp: <TrendingUp size={20} />,
};

type FeatureItem = (typeof FEATURES)[0];

function FeatureCard({ feature, index }: { feature: FeatureItem; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.6,
                delay: (index % 3) * 0.1,
                ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}
            className="group relative bg-white border border-border rounded-3xl p-7 cursor-default transition-shadow duration-300"
        >
            <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-2xl bg-primary-light text-primary flex items-center justify-center transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    {ICON_MAP[feature.icon]}
                </div>
                <span className="font-inter text-[11px] font-medium text-primary bg-primary-light border border-primary/15 px-3 py-1 rounded-full tracking-wide">
                    {feature.tag}
                </span>
            </div>

            <h3 className="font-manrope font-bold text-foreground text-lg mb-2.5 leading-snug">
                {feature.title}
            </h3>
            <p className="font-inter text-sm text-muted leading-relaxed">
                {feature.description}
            </p>

            <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
}

export default function Features() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(headingRef, { once: true, margin: "-100px" });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(sectionRef.current, {
                backgroundColor: "#fafafa",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="features"
            className="py-28 px-6 bg-white transition-colors duration-500"
        >
            <div className="max-w-7xl mx-auto">
                <div ref={headingRef} className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block"
                    >
                        Everything You Need
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-manrope font-extrabold text-foreground leading-tight mb-4 text-4xl md:text-5xl lg:text-6xl"
                    >
                        Replace six tools
                        <br />
                        <span className="text-gradient">with one platform</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-inter text-muted max-w-lg mx-auto leading-relaxed text-sm md:text-base"
                    >
                        Every workflow your ecommerce business needs — built in, connected,
                        and automated.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {FEATURES.map((feature, i) => (
                        <FeatureCard key={i} feature={feature} index={i} />
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-center font-inter text-sm text-muted mt-12"
                >
                    More features shipping every month —{" "}
                    <span className="text-primary font-medium">
                        WhatsApp automation, mobile apps, AI insights
                    </span>
                </motion.p>
            </div>
        </section>
    );
}
