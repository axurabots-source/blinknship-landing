"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTA() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-28 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative rounded-3xl bg-dark p-12 md:p-16 text-center overflow-hidden"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/20 blur-[80px] pointer-events-none" />

                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                            backgroundSize: "40px 40px",
                        }}
                    />

                    <div className="relative z-10">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-5 block"
                        >
                            Get Started Today
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="font-manrope font-extrabold text-white leading-tight mb-5 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Your entire ecommerce
                            <br />
                            business.{" "}
                            <span className="text-gradient">One dashboard.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-inter text-white/50 max-w-md mx-auto leading-relaxed mb-10 text-sm md:text-base"
                        >
                            Join businesses already running smarter operations with Blink N
                            Ship. Start free — no credit card needed.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-3"
                        >
                            <motion.a
                                href="/pricing"
                                whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(204,120,92,0.5)" }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                                className="font-manrope font-semibold text-white bg-primary px-10 py-4 rounded-full cursor-pointer text-[15px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow duration-300"
                            >
                                Start Free Trial — 30 Days
                            </motion.a>
                            <motion.a
                                href="/pricing"
                                whileHover={{ scale: 1.05, borderColor: "#CC785C", color: "#CC785C", boxShadow: "0 8px 30px rgba(204,120,92,0.2)" }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                                className="font-manrope font-semibold text-white/70 border-2 border-white/20 px-10 py-4 rounded-full cursor-pointer text-[15px] hover:border-primary/50 hover:text-primary hover:bg-white/5 transition-all duration-300"
                            >
                                View Pricing →
                            </motion.a>
                        </motion.div>

                        <p className="font-inter text-xs text-white/25 mt-5">
                            No credit card · Full access · Cancel anytime
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
