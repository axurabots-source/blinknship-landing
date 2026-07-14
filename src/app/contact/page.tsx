"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Mail,
    MessageCircle,
    MapPin,
    ArrowRight,
    Sparkles,
    Send,
    Check,
    ChevronDown,
    HelpCircle,
    Clock,
} from "lucide-react";
import { CONTACT_PAGE, FAQ_PAGE } from "@/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

const { hero, channels, faqs } = CONTACT_PAGE;

const ICON_MAP: Record<string, React.ReactNode> = {
    Mail: <Mail size={20} />,
    MessageCircle: <MessageCircle size={20} />,
    MapPin: <MapPin size={20} />,
};

/* ─── Hero ─── */
function ContactHero() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".co-ch", {
                opacity: 0,
                rotateY: -90,
                y: 40,
                stagger: 0.03,
                duration: 0.7,
                ease: "back.out(2)",
                delay: 0.2,
            });
            gsap.from(".co-sub", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.9,
                ease: "power2.out",
            });

            const orbs = sectionRef.current?.querySelectorAll(".co-orb");
            if (orbs) {
                orbs.forEach((orb, i) => {
                    gsap.to(orb, {
                        x: gsap.utils.random(-120, 120),
                        y: gsap.utils.random(-120, 120),
                        scale: gsap.utils.random(0.6, 1.4),
                        duration: gsap.utils.random(5, 9),
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
        <section ref={sectionRef} className="relative min-h-[80vh] flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden bg-white">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="co-orb absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent blur-3xl" />
                <div className="co-orb absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent blur-3xl" />
                <div className="co-orb absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-gradient-to-t from-blue-500/5 via-transparent to-transparent blur-3xl" />
            </div>

            <div className="relative max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 bg-primary-light border border-primary/15 rounded-full px-4 py-1.5 mb-8"
                >
                    <HelpCircle size={14} className="text-primary" />
                    <span className="font-inter text-xs font-medium text-primary tracking-wide">{hero.badge}</span>
                </motion.div>

                <h1 className="font-manrope font-extrabold text-foreground leading-[1.15] mb-6 text-[clamp(2.5rem,7vw,4.5rem)]" style={{ perspective: "1200px" }}>
                    {chars.map((ch, i) => (
                        <span key={i} className="co-ch inline-block" style={{ perspective: "800px" }}>{ch}</span>
                    ))}
                    <br />
                    <span className="text-gradient co-ch" style={{ perspective: "800px" }}>{hero.titleHighlight}</span>
                </h1>

                <p className="co-sub font-inter text-muted max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                    {hero.subtitle}
                </p>
            </div>
        </section>
    );
}

/* ─── Contact Channels ─── */
function ContactChannels() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section ref={sectionRef} className="py-20 px-6 bg-card border-y border-border">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {channels.map((ch, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white border border-border rounded-2xl p-6 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-11 h-11 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4">
                                {ICON_MAP[ch.icon] || <Mail size={20} />}
                            </div>
                            <h3 className="font-manrope font-semibold text-foreground text-sm mb-1">{ch.title}</h3>
                            <p className="font-inter text-xs text-muted mb-3 leading-relaxed">{ch.description}</p>
                            {ch.href ? (
                                <a
                                    href={ch.href}
                                    target={ch.href.startsWith("http") ? "_blank" : undefined}
                                    rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="inline-flex items-center gap-1.5 font-inter text-xs font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                                >
                                    {ch.action} <ArrowRight size={12} />
                                </a>
                            ) : (
                                <p className="font-inter text-xs font-medium text-foreground">{ch.value}</p>
                            )}
                        </motion.div>
                    ))}
                </div>

                <p className="font-inter text-xs text-muted text-center mt-8 flex items-center justify-center gap-1.5">
                    <Clock size={12} /> Average response time: under 4 hours (Mon-Sat, 9 AM - 9 PM)
                </p>
            </div>
        </section>
    );
}

/* ─── Contact Form ─── */
function ContactForm() {
    const sectionRef = useRef<HTMLElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        gsap.to(formRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
                setFormData({ name: "", email: "", subject: "", message: "" });
            },
        });
    };

    const fields = [
        { name: "name", label: "Your Name", type: "text", placeholder: "Enter your name" },
        { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
        { name: "subject", label: "Subject", type: "select", placeholder: "Select a subject", options: ["General Inquiry", "Technical Support", "Partnership", "Feedback", "Other"] },
    ];

    return (
        <section ref={sectionRef} className="py-28 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                    {/* Left: Info */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block"
                        >
                            Send Us a Message
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-manrope font-extrabold text-foreground text-3xl md:text-4xl leading-tight mb-4"
                        >
                            We&apos;re here to
                            <br />
                            <span className="text-gradient">help you grow</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-inter text-muted leading-relaxed text-sm md:text-base mb-8"
                        >
                            Whether you have a question about the platform, need help with setup, or want
                            to share feedback — we&apos;re listening. Fill out the form and our team will
                            get back to you within 4 hours.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-4"
                        >
                            {[
                                { icon: Mail, text: "hello@blinknship.com" },
                                { icon: MessageCircle, text: "WhatsApp: +92 300 1234567" },
                                { icon: Clock, text: "Mon-Sat, 9 AM - 9 PM" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-lg bg-primary-light text-primary flex items-center justify-center shrink-0">
                                        <item.icon size={16} />
                                    </div>
                                    <span className="font-inter text-sm text-foreground">{item.text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Form */}
                    <div>
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                            >
                                <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                                    <Check size={28} />
                                </div>
                                <h3 className="font-manrope font-bold text-foreground text-lg mb-2">Message Sent!</h3>
                                <p className="font-inter text-sm text-muted mb-4">Thank you for reaching out. Our team will respond within 4 hours.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="font-inter text-sm font-medium text-primary hover:underline cursor-pointer"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                ref={formRef}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                onSubmit={handleSubmit}
                                className="bg-card border border-border rounded-3xl p-7 md:p-8 space-y-5"
                            >
                                {fields.map((field) => (
                                    <div key={field.name}>
                                        <label className="font-inter text-xs font-medium text-foreground block mb-1.5">{field.label}</label>
                                        {field.type === "select" ? (
                                            <select
                                                name={field.name}
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full font-inter text-sm bg-white border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                                            >
                                                <option value="">Select a subject</option>
                                                {field.options?.map((o) => <option key={o} value={o}>{o}</option>)}
                                            </select>
                                        ) : (
                                            <input
                                                type={field.type}
                                                name={field.name}
                                                value={formData[field.name as keyof typeof formData]}
                                                onChange={handleChange}
                                                placeholder={field.placeholder}
                                                required
                                                className="w-full font-inter text-sm bg-white border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                                            />
                                        )}
                                    </div>
                                ))}

                                <div>
                                    <label className="font-inter text-xs font-medium text-foreground block mb-1.5">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us how we can help..."
                                        rows={5}
                                        required
                                        className="w-full font-inter text-sm bg-white border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 resize-none"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="w-full font-manrope font-semibold text-white bg-primary py-3.5 rounded-full text-[14px] shadow-lg shadow-primary/30 hover:shadow-xl cursor-pointer inline-flex items-center justify-center gap-2"
                                >
                                    <Send size={15} /> Send Message
                                </motion.button>
                            </motion.form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── Quick Contact FAQs ─── */
function ContactFaqs() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());
    const [openItem, setOpenItem] = useState<string | null>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(headingRef, { once: true, margin: "-80px" });

    const setContentRef = (key: string) => (el: HTMLDivElement | null) => {
        if (el) contentRefs.current.set(key, el);
    };

    const toggle = (key: string) => {
        const isOpen = openItem === key;
        if (isOpen) {
            const el = contentRefs.current.get(key);
            if (el) gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut", onComplete: () => setOpenItem(null) });
        } else {
            if (openItem) {
                const prev = contentRefs.current.get(openItem);
                if (prev) gsap.to(prev, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
            }
            setOpenItem(key);
            const el = contentRefs.current.get(key);
            if (el) gsap.fromTo(el, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
        }
    };

    return (
        <section ref={sectionRef} className="py-20 px-6 bg-card border-b border-border">
            <div className="max-w-3xl mx-auto">
                <div ref={headingRef} className="text-center mb-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block"
                    >
                        Quick Answers
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-manrope font-extrabold text-foreground text-2xl md:text-3xl"
                    >
                        Before you reach out
                    </motion.h2>
                </div>

                <div className="space-y-2">
                    {faqs.map((faq, i) => {
                        const key = `contact-faq-${i}`;
                        return (
                            <div key={key} className="border border-border rounded-xl overflow-hidden bg-white">
                                <button
                                    onClick={() => toggle(key)}
                                    className="w-full flex items-center justify-between p-4 md:p-5 text-left cursor-pointer hover:bg-card/50 transition-colors duration-200"
                                >
                                    <span className="font-manrope font-medium text-foreground text-sm pr-4">{faq.q}</span>
                                    <ChevronDown size={15} className={`text-muted shrink-0 transition-transform duration-300 ${openItem === key ? "rotate-180" : ""}`} />
                                </button>
                                <div ref={setContentRef(key)} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
                                    <div className="px-4 md:px-5 pb-4 md:pb-5">
                                        <p className="font-inter text-sm text-muted leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ─── CTA ─── */
function ContactCTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".co-cta-el", {
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
                <span className="co-cta-el font-inter text-xs font-medium text-primary tracking-widest uppercase mb-4 block">Start Today</span>
                <h2 className="co-cta-el font-manrope font-extrabold text-white leading-tight mb-5 text-4xl md:text-5xl lg:text-6xl">
                    Ready to transform your
                    <br />
                    <span className="text-gradient">ecommerce operations?</span>
                </h2>
                <p className="co-cta-el font-inter text-white/50 max-w-xl mx-auto leading-relaxed text-sm md:text-base mb-10">
                    Join 2,500+ businesses. Start free for 30 days. No credit card required.
                </p>
                <div className="co-cta-el flex flex-col sm:flex-row items-center justify-center gap-4">
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
                <div className="co-cta-el mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-white/30">
                    <span>30-day free trial</span>
                    <span className="w-px h-4 bg-white/10" />
                    <span>No credit card</span>
                    <span className="w-px h-4 bg-white/10" />
                    <span>Cancel anytime</span>
                </div>
            </div>
        </section>
    );
}

/* ─── Page ─── */
export default function ContactPage() {
    return (
        <main>
            <Navbar />
            <ContactHero />
            <ContactChannels />
            <ContactForm />
            <ContactFaqs />
            <ContactCTA />
            <Footer />
        </main>
    );
}
