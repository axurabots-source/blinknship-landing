"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <motion.nav
                ref={navRef}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? "py-3 bg-white/80 backdrop-blur-xl border-b border-[#e5e5e5]/80 shadow-sm"
                        : "py-5 bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="/"
                        className="flex items-center gap-2.5 group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <img src="/logo.png" alt="Blink N Ship" className="h-8 w-auto rounded-lg" />
                        <span className="font-manrope font-bold text-[15px] tracking-tight text-[#0a0a0a]">
                            Blink N Ship
                        </span>
                    </motion.a>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => handleNavClick(link.href)}
                                className="font-inter text-sm font-medium text-[#737373] hover:text-[#0a0a0a] transition-colors duration-200 relative group cursor-pointer"
                            >
                                {link.label}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#CC785C] transition-all duration-300 group-hover:w-full" />
                            </button>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <motion.button
                            whileHover={{ scale: 1.05, color: "#CC785C" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="font-inter text-sm font-medium text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                        >
                            Sign In
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.06, boxShadow: "0 8px 25px rgba(204,120,92,0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 12 }}
                            className="font-inter text-sm font-semibold text-white bg-primary px-5 py-2.5 rounded-full cursor-pointer shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300"
                        >
                            Start Free Trial
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[#e5e5e5] text-[#0a0a0a] cursor-pointer"
                    >
                        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed top-[64px] left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-[#e5e5e5] px-6 py-6 flex flex-col gap-4"
                    >
                        {NAV_LINKS.map((link, i) => (
                            <motion.button
                                key={link.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.07 }}
                                onClick={() => handleNavClick(link.href)}
                                className="font-inter text-base font-medium text-[#0a0a0a] text-left py-2 border-b border-[#e5e5e5] last:border-0 cursor-pointer"
                            >
                                {link.label}
                            </motion.button>
                        ))}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-2 w-full font-inter text-sm font-semibold text-white bg-[#CC785C] px-5 py-3 rounded-full cursor-pointer"
                        >
                            Start Free Trial
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}