export const NAV_LINKS = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
];

export const FEATURES = [
    {
        icon: "Zap",
        title: "AI Order Extraction",
        description:
            "Paste WhatsApp, Facebook, or Messenger messages. AI extracts customer name, address, city, COD, and products instantly.",
        tag: "AI Powered",
    },
    {
        icon: "Package",
        title: "Courier Booking",
        description:
            "Book parcels with one click. Track in real-time. Get status updates automatically synced to your dashboard.",
        tag: "Automation",
    },
    {
        icon: "BarChart3",
        title: "Inventory Management",
        description:
            "Track stock levels, calculate profit automatically, and get low inventory alerts before you run out.",
        tag: "Smart Tracking",
    },
    {
        icon: "BookOpen",
        title: "Financial Ledger",
        description:
            "Track income, expenses, courier payments, and customer payments in one place. Know your numbers always.",
        tag: "Finance",
    },
    {
        icon: "Users",
        title: "Team Management",
        description:
            "Add managers and employees with custom role permissions. Control who sees what across your business.",
        tag: "Collaboration",
    },
    {
        icon: "TrendingUp",
        title: "Analytics & Reports",
        description:
            "Revenue charts, profit trends, top products, best customers. Make decisions based on real data.",
        tag: "Insights",
    },
];

export const HOW_IT_WORKS = [
    {
        step: "01",
        title: "Connect Your Business",
        description:
            "Sign up, connect your courier API, and set up your inventory in minutes. No technical knowledge required.",
    },
    {
        step: "02",
        title: "Manage Everything in One Place",
        description:
            "Create orders, book parcels, track deliveries, manage inventory, and monitor finances — all from one dashboard.",
    },
    {
        step: "03",
        title: "Grow Without Limits",
        description:
            "Scale your team, automate repetitive tasks, and use AI insights to make smarter business decisions every day.",
    },
];

export const PRICING_PLANS = [
    {
        name: "Starter",
        price: 5,
        description: "Perfect for individual sellers getting started.",
        features: [
            "Order Management",
            "Courier Booking",
            "Basic Inventory",
            "Financial Ledger",
            "Email Notifications",
        ],
        cta: "Start Free Trial",
        highlighted: false,
    },
    {
        name: "Growth",
        price: 9,
        description: "For growing ecommerce businesses.",
        features: [
            "Everything in Starter",
            "AI Order Extraction",
            "Advanced Analytics",
            "Customer Management",
            "Priority Support",
        ],
        cta: "Start Free Trial",
        highlighted: true,
    },
    {
        name: "Business",
        price: 19,
        description: "For teams and inventory-based businesses.",
        features: [
            "Everything in Growth",
            "Team Management",
            "Custom Roles & Permissions",
            "Bulk Import & Export",
            "Advanced Reports",
        ],
        cta: "Start Free Trial",
        highlighted: false,
    },
];

export const FAQS = [
    {
        question: "Is there a free trial?",
        answer:
            "Yes! Every new business gets 30 days of full platform access completely free. No credit card required.",
    },
    {
        question: "Can I change my courier API later?",
        answer:
            "Each Blink N Ship account connects to one courier API permanently. This prevents account misuse and ensures data integrity.",
    },
    {
        question: "What happens when my subscription expires?",
        answer:
            "Your account enters read-only mode. All your data is safe — you can view and export everything. Full access is restored immediately after payment.",
    },
    {
        question: "Do I need technical knowledge to use Blink N Ship?",
        answer:
            "Not at all. Blink N Ship is designed for ecommerce sellers, not developers. If you can use WhatsApp, you can use Blink N Ship.",
    },
    {
        question: "Can I manage multiple team members?",
        answer:
            "Yes. You can add managers and employees with custom permissions on the Business plan. Control exactly what each team member can access.",
    },
    {
        question: "What payment methods are supported?",
        answer:
            "We support Stripe, Visa, and Mastercard internationally. For Pakistan, JazzCash and EasyPaisa are supported with manual verification.",
    },
];

export const WORKFLOW_PILLS = [
    { label: "WhatsApp Order", color: "bg-green-50 text-green-700 border-green-200" },
    { label: "AI Extracts Data", color: "bg-[#fff5f0] text-[#CC785C] border-[#CC785C]/20" },
    { label: "Review & Confirm", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { label: "Courier Booked", color: "bg-purple-50 text-purple-700 border-purple-200" },
    { label: "Parcel Tracked", color: "bg-orange-50 text-orange-700 border-orange-200" },
    { label: "Delivered ✓", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { label: "Profit Calculated", color: "bg-[#fff5f0] text-[#CC785C] border-[#CC785C]/20" },
    { label: "Ledger Updated", color: "bg-slate-50 text-slate-700 border-slate-200" },
];