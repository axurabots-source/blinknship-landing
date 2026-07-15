"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOW_IT_WORKS } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

function StepCard({
    step,
    index,
}: {
    step: (typeof HOW_IT_WORKS)[0];
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const isLeft = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={`relative flex items-center gap-8 md:gap-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
        >
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 300 }}
                className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-dark z-10 shrink-0"
            />

            <div className="hidden md:block w-1/2" />

            <motion.div
                initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02 }}
                className="ml-12 md:ml-0 md:w-1/2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300"
            >
                <div className="flex items-center gap-3 mb-4">
                    <span className="font-space font-bold text-primary text-4xl leading-none opacity-30">
                        {step.step}
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                </div>

                <h3 className="font-manrope font-bold text-white text-xl mb-3 leading-snug">
                    {step.title}
                </h3>
                <p className="font-inter text-sm text-white/50 leading-relaxed">
                    {step.description}
                </p>
            </motion.div>
        </div>
    );
}

export default function HowItWorks() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(headingRef, { once: true, margin: "-100px" });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                lineRef.current,
                { scaleY: 0, transformOrigin: "top center" },
                {
                    scaleY: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                        end: "bottom 60%",
                        scrub: 0.5,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="how-it-works"
            className="py-28 px-6 bg-dark overflow-hidden"
        >
            <div className="max-w-5xl mx-auto">
                <div ref={headingRef} className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block"
                    >
                        Simple by Design
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-manrope font-extrabold text-white leading-tight text-4xl md:text-5xl lg:text-6xl"
                    >
                        Up and running
                        <br />
                        <span className="text-gradient">in three steps</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2">
                        <div
                            ref={lineRef}
                            className="w-full h-full bg-gradient-to-b from-primary via-primary/60 to-transparent"
                        />
                    </div>

                    <div className="flex flex-col gap-16">
                        {HOW_IT_WORKS.map((step, i) => (
                            <StepCard key={i} step={step} index={i} />
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-20"
                >
                    <motion.a
                        href="/pricing"
                        whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(204,120,92,0.5)" }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                        className="font-manrope font-semibold text-white bg-primary px-10 py-4 rounded-full cursor-pointer text-[15px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow duration-300"
                    >
                        Get Started Free
                    </motion.a>
                    <p className="font-inter text-xs text-white/30 mt-5 tracking-wide">
                        No credit card required&nbsp;&nbsp;·&nbsp;&nbsp;30 days free
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
