"use client";

import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
    "Order Management",
    "AI Extraction",
    "Courier Booking",
    "Live Tracking",
    "Inventory Control",
    "Profit Calculator",
    "Financial Ledger",
    "Team Roles",
    "Customer History",
    "Analytics Dashboard",
    "Auto Notifications",
    "Bulk Operations",
];

function MarqueeItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-6 mx-6 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CC785C] opacity-60" />
            <span className="font-manrope font-semibold text-sm text-[#737373] whitespace-nowrap tracking-wide">
                {text}
            </span>
        </div>
    );
}

export default function Marquee() {
    return (
        <section className="py-6 border-y border-[#e5e5e5] bg-[#fafafa] overflow-hidden">
            <div className="flex">
                {/* First strip */}
                <div className="flex animate-marquee">
                    {MARQUEE_ITEMS.map((item, i) => (
                        <MarqueeItem key={`a-${i}`} text={item} />
                    ))}
                    {MARQUEE_ITEMS.map((item, i) => (
                        <MarqueeItem key={`b-${i}`} text={item} />
                    ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex animate-marquee" aria-hidden>
                    {MARQUEE_ITEMS.map((item, i) => (
                        <MarqueeItem key={`c-${i}`} text={item} />
                    ))}
                    {MARQUEE_ITEMS.map((item, i) => (
                        <MarqueeItem key={`d-${i}`} text={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}