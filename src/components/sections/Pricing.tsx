"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";
import { PRICING_PLANS } from "@/constants";

export default function Pricing() {
    const [yearly, setYearly] = useState(false);
    const headingRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(headingRef, { once: true, margin: "-100px" });

    return (
        <section id="pricing" className="py-28 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div ref={headingRef} className="text-center mb-14">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block"
                    >
                        Simple Pricing
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-manrope font-extrabold text-foreground leading-tight mb-4 text-4xl md:text-5xl lg:text-6xl"
                    >
                        Start free.
                        <br />
                        <span className="text-gradient">Scale when ready.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-inter text-muted max-w-md mx-auto leading-relaxed mb-8 text-sm md:text-base"
                    >
                        30 days free trial. No credit card required. Cancel anytime.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="inline-flex items-center gap-3 bg-card border border-border rounded-full p-1"
                    >
                        <button
                            onClick={() => setYearly(false)}
                            className={`font-inter text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 cursor-pointer ${!yearly
                                    ? "bg-foreground text-white shadow-sm"
                                    : "text-muted hover:text-foreground"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setYearly(true)}
                            className={`font-inter text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-2 ${yearly
                                    ? "bg-foreground text-white shadow-sm"
                                    : "text-muted hover:text-foreground"
                                }`}
                        >
                            Yearly
                            <span className="text-[10px] font-semibold text-primary bg-primary-light px-2 py-0.5 rounded-full">
                                Save 17%
                            </span>
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 relative overflow-hidden rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-primary-light/50 to-white shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-shadow duration-500"
                >
                    {/* Background sparkle dots */}
                    <div className="absolute inset-0 opacity-[0.04]" style={{
                        backgroundImage: "radial-gradient(circle at 1px 1px, #CC785C 1px, transparent 0)",
                        backgroundSize: "24px 24px"
                    }} />

                    {/* Top accent glow */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/15 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                        <div className="flex items-center gap-4">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center shrink-0 shadow-lg shadow-primary/30"
                            >
                                <Sparkles size={20} className="text-white" />
                            </motion.div>
                            <div>
                                <p className="font-manrope font-bold text-foreground text-base sm:text-lg">
                                    Founding Member Offer
                                </p>
                                <p className="font-inter text-sm text-muted mt-1">
                                    Lock in{" "}
                                    <span className="text-primary font-bold text-base">$2/month lifetime</span>{" "}
                                    pricing —{" "}
                                    <span className="font-semibold text-foreground">first 100 businesses only</span>.
                                    Never increases. Ever.
                                </p>
                            </div>
                        </div>
                        <motion.a
                            href="/pricing"
                            whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(204,120,92,0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 12 }}
                            className="font-manrope font-semibold text-white bg-gradient-to-r from-primary to-primary-hover px-8 py-3.5 rounded-full text-sm cursor-pointer shrink-0 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow duration-300 flex items-center gap-2"
                        >
                            <Zap size={16} />
                            Claim Your Spot
                        </motion.a>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {PRICING_PLANS.map((plan, i) => {
                        const ref = useRef<HTMLDivElement>(null);
                        const inView = useInView(ref, { once: true, margin: "-60px" });
                        const price = yearly
                            ? Math.round(plan.price * 10)
                            : plan.price;
                        const period = yearly ? "/yr" : "/mo";

                        return (
                            <motion.div
                                key={i}
                                ref={ref}
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                                className={`relative rounded-3xl p-8 flex flex-col gap-6 transition-shadow duration-300 cursor-default ${plan.highlighted
                                        ? "bg-dark border border-primary/30 shadow-2xl shadow-primary/10 hover:shadow-3xl hover:shadow-primary/20"
                                        : "bg-white border border-border hover:shadow-2xl hover:shadow-black/10"
                                    }`}
                            >
                                {plan.highlighted && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="font-inter text-[11px] font-semibold text-white bg-gradient-to-r from-primary to-primary-hover px-4 py-1 rounded-full whitespace-nowrap shadow-lg shadow-primary/30">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div>
                                    <h3
                                        className={`font-manrope font-bold text-lg mb-1 ${plan.highlighted ? "text-white" : "text-foreground"
                                            }`}
                                    >
                                        {plan.name}
                                    </h3>
                                    <p
                                        className={`font-inter text-sm ${plan.highlighted ? "text-white/50" : "text-muted"
                                            }`}
                                    >
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="flex items-end gap-1">
                                    <span
                                        className={`font-space font-bold leading-none ${plan.highlighted ? "text-white" : "text-foreground"
                                            } text-4xl md:text-5xl`}
                                    >
                                        ${price}
                                    </span>
                                    <span
                                        className={`font-inter text-sm mb-2 ${plan.highlighted ? "text-white/40" : "text-muted"
                                            }`}
                                    >
                                        {period}
                                    </span>
                                </div>

                                <div
                                    className={`h-px ${plan.highlighted ? "bg-white/10" : "bg-border"
                                        }`}
                                />

                                <ul className="flex flex-col gap-3 flex-1">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3">
                                            <div
                                                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlighted
                                                        ? "bg-primary/20"
                                                        : "bg-primary-light"
                                                    }`}
                                            >
                                                <Check size={11} className="text-primary" />
                                            </div>
                                            <span
                                                className={`font-inter text-sm ${plan.highlighted ? "text-white/70" : "text-muted"
                                                    }`}
                                            >
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <motion.a
                                    href="/pricing"
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: plan.highlighted ? "0 12px 40px rgba(204,120,92,0.5)" : "0 8px 30px rgba(0,0,0,0.12)",
                                    }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 12 }}
                                    className={`w-full font-manrope font-semibold text-sm py-3.5 rounded-full cursor-pointer transition-all duration-300 text-center ${plan.highlighted
                                            ? "bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-hover"
                                            : "bg-card text-foreground border border-border hover:bg-foreground hover:text-white hover:border-foreground"
                                        }`}
                                >
                                    {plan.cta}
                                </motion.a>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center font-inter text-xs text-muted mt-8"
                >
                    All plans include 30-day free trial · Data never deleted on expiry ·
                    Cancel anytime
                </motion.p>
            </div>
        </section>
    );
}
