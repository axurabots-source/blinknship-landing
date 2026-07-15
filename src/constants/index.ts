export const NAV_LINKS = [
    { label: "Features", href: "/features" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
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

export const HOW_IT_WORKS_PAGE = {
    hero: {
        badge: "Simple 3-Step Process",
        title: "How Blink N Ship Works",
        subtitle:
            "From WhatsApp message to delivered order — Blink N Ship automates your entire ecommerce workflow. No manual data entry, no switching between tabs, no spreadsheets. Just three simple steps to run your business.",
        cta: "Start Free Trial",
        stats: [
            { label: "Setup Time", value: "5 min" },
            { label: "Steps to First Order", value: "3" },
            { label: "Automation Rate", value: "95%" },
        ],
    },
    steps: [
        {
            step: "01",
            title: "Connect & Configure",
            subtitle: "Get your business online in under 5 minutes",
            description:
                "Sign up, connect your courier API, import your products, and invite your team. Blink N Ship works with 12+ courier services and supports bulk product import from CSV. No technical skills needed — if you can use WhatsApp, you can set this up.",
            details: [
                "Create account in 60 seconds — no credit card, no commitment",
                "Connect any of 12+ supported courier APIs with one click",
                "Import products via CSV or add them individually",
                "Invite team members with custom role-based permissions",
                "Set automation rules: auto-book courier, auto-send tracking",
                "Customize invoice templates with your brand logo",
            ],
            icon: "Settings",
            gradient: "from-amber-500 to-orange-600",
            illustration: {
                label: "Setup Steps",
                items: [
                    "Create Account → 60 seconds",
                    "Connect Courier → One click",
                    "Import Products → CSV upload",
                    "Invite Team → Role-based",
                    "Go Live → Start accepting orders",
                ],
            },
        },
        {
            step: "02",
            title: "Process & Fulfill",
            subtitle: "AI handles the heavy lifting — you just confirm",
            description:
                "A customer places an order on WhatsApp. Our AI instantly extracts their name, address, phone, products, and payment details. You review and confirm with one tap. The courier is booked automatically, and your customer gets a tracking link via SMS.",
            details: [
                "AI extracts orders from WhatsApp, Facebook, and Instagram DMs",
                "Auto-detects COD amount, advance payment, product SKUs",
                "Supports Urdu, Roman Urdu, and English — no language limit",
                "Review and confirm orders with a single tap",
                "One-click courier booking across 12+ services",
                "Real-time tracking synced to dashboard and customer",
            ],
            icon: "Zap",
            gradient: "from-blue-500 to-indigo-600",
            illustration: {
                label: "Order Flow",
                items: [
                    "Customer sends order → WhatsApp/FB/IG",
                    "AI extracts data → 2 seconds",
                    "You review → One tap confirm",
                    "Courier booked → Automatic",
                    "Customer notified → SMS + WhatsApp",
                ],
            },
        },
        {
            step: "03",
            title: "Track & Scale",
            subtitle: "Real-time data to grow your business every day",
            description:
                "Every order, expense, and delivery is tracked automatically. Watch your revenue grow on live dashboards, get weekly business reports in your inbox, and use AI-powered insights to identify your best products, top customers, and growth opportunities.",
            details: [
                "Live revenue and profit dashboards updated in real-time",
                "Weekly business reports delivered to your email",
                "AI identifies top products, best customers, and trends",
                "Low inventory alerts — never run out of stock again",
                "Team performance metrics and productivity insights",
                "Export reports for accounting and tax preparation",
            ],
            icon: "TrendingUp",
            gradient: "from-emerald-500 to-teal-600",
            illustration: {
                label: "Growth Metrics",
                items: [
                    "Revenue tracked → In real-time",
                    "Profit calculated → Per order",
                    "Stock alerts → Automatic",
                    "Reports delivered → Weekly",
                    "Insights generated → AI-powered",
                ],
            },
        },
    ],
    workflow: [
        {
            id: "receive",
            icon: "MessageSquare",
            title: "1. Customer Sends an Order",
            subtitle: "Wherever they shop, you receive",
            description:
                'Your customer messages you on WhatsApp, Facebook Messenger, or Instagram. They send their order details — products, address, payment preference. It could be in Urdu, English, or a mix. Blink N Ship reads it all.',
            detail: "The message arrives in your Blink N Ship dashboard instantly. Our AI gets to work: it identifies the customer (new or returning), extracts every piece of order information, and cross-references your inventory to verify product availability — all before you've even finished reading the message yourself.",
            steps: [
                "Customer sends order via any messaging platform",
                "Message appears instantly in your dashboard",
                "AI identifies customer and checks order history",
                "AI extracts products, address, phone, and payment info",
                "System verifies stock availability in real-time",
                "Order is presented for your review — ready to confirm",
            ],
            visual: {
                icon: "MessageSquare",
                color: "from-amber-500 to-orange-600",
            },
        },
        {
            id: "fulfill",
            icon: "Package",
            title: "2. AI Extracts, You Confirm, We Ship",
            subtitle: "From message to courier in under 30 seconds",
            description:
                'With a single tap, you confirm the order. Blink N Ship automatically books the courier — comparing rates across 12+ services to pick the fastest or cheapest option. The tracking ID is generated, and your customer gets a notification with the tracking link.',
            detail: "You don't need to visit a single courier website. You don't need to type the address again. You don't need to manually send tracking updates. Blink N Ship handles the entire fulfillment pipeline — from order confirmation to courier booking to customer notification — in the background while you focus on your next sale.",
            steps: [
                "Review extracted order details — all fields pre-filled",
                "Confirm with one tap — or edit if needed",
                "System compares 12+ courier rates automatically",
                "Best option selected based on your preference (price/speed)",
                "Courier booked, tracking ID generated instantly",
                "Customer receives tracking link via SMS and WhatsApp",
            ],
            visual: {
                icon: "Package",
                color: "from-blue-500 to-indigo-600",
            },
        },
        {
            id: "analyze",
            icon: "BarChart3",
            title: "3. Track, Analyze, and Grow",
            subtitle: "Every data point at your fingertips",
            description:
                'As orders ship and get delivered, Blink N Ship updates your inventory, logs every expense, calculates profit per order, and feeds real-time data into your analytics dashboard. You see exactly where your business stands — always.',
            detail: "This is where Blink N Ship transforms from an operations tool into a growth engine. Revenue trends, profit margins per product, top-performing cities, repeat customer rates, courier performance comparisons — all visualized and updated live. You get a complete picture of your business health, updated every second.",
            steps: [
                "Inventory updated automatically after every order",
                "Revenue and profit calculated per product in real-time",
                "Expenses logged — courier fees, COD charges, marketing costs",
                "Dashboard shows trends, top products, and customer insights",
                "Weekly reports generated and emailed to you automatically",
                "AI highlights growth opportunities and underperforming areas",
            ],
            visual: {
                icon: "BarChart3",
                color: "from-emerald-500 to-teal-600",
            },
        },
    ],
    benefits: [
        {
            icon: "Clock",
            title: "Save 15+ Hours Every Week",
            description:
                "Stop typing orders manually, stop switching between courier websites, stop maintaining spreadsheets. Blink N Ship automates the repetitive work so you can focus on growing your business.",
        },
        {
            icon: "Target",
            title: "Eliminate Costly Errors",
            description:
                "Manual order entry leads to shipping to wrong addresses, lost packages, and unhappy customers. Our AI extracts with 99% accuracy — and you review every order before it ships.",
        },
        {
            icon: "Layers",
            title: "One Dashboard, Everything",
            description:
                "Orders, courier booking, inventory, finances, team, and analytics — all in one place. No more logging into 6 different tools or digging through spreadsheets to find what you need.",
        },
        {
            icon: "Sparkles",
            title: "AI That Gets Smarter Over Time",
            description:
                "Every correction you make teaches the AI. It learns your products, your customer naming patterns, your preferred courier services. The more you use it, the more accurate and personalized it becomes.",
        },
    ],
    scrollText: [
        "A customer sends an order on WhatsApp.",
        "AI reads every detail in seconds.",
        "You confirm. Courier books itself.",
        "Done. You just made a sale.",
        "All in under 30 seconds.",
    ],
    useCases: [
        {
            icon: "UserCircle",
            title: "For Individual Sellers",
            subtitle: "Home-based, solo operator",
            challenge: "Spent 4+ hours daily copying WhatsApp orders, visiting courier websites one-by-one, and tracking finances in spreadsheets. Every typo meant a lost sale or wrong delivery.",
            solution: "AI extracts orders from messages automatically. Courier booking is one click. Profit calculates itself. Operations that took 4 hours now take 30 minutes — giving time back to focus on products and customers.",
            result: "87% less time on daily operations",
            metrics: ["30 min/day vs 4 hours", "99% order accuracy", "Zero missed shipments"],
        },
        {
            icon: "UsersRound",
            title: "For Growing Teams",
            subtitle: "3-15 employees, multiple branches",
            challenge: "Team members worked without a shared system. Orders were duplicated or lost. There was no visibility into who did what. Financial reconciliation at month-end was a painful multi-day process.",
            solution: "Role-based access gives everyone the right permissions. Orders auto-assign to team members. An activity log tracks every action. Financial reports generate automatically — no more month-end chaos.",
            result: "100% team accountability & 5x throughput",
            metrics: ["5x order processing speed", "Unified team dashboard", "Auto-generated reports"],
        },
        {
            icon: "Package",
            title: "For Inventory-Based Businesses",
            subtitle: "500+ SKUs, warehouse operations",
            challenge: "Stock levels were tracked in memory or messy spreadsheets. Stockouts caused lost revenue, overstocking tied up cash. Manual profit calculation was impossible at scale across hundreds of products.",
            solution: "Real-time inventory tracking with low-stock alerts prevents stockouts. Automatic profit calculation per product shows exactly what's working. Data-driven reorder suggestions optimize stock levels.",
            result: "Zero stockouts & 40% less dead stock",
            metrics: ["40% reduction in dead stock", "Real-time stock visibility", "Smart reorder alerts"],
        },
    ],
    integrations: {
        categories: [
            {
                label: "Order Sources",
                color: "from-amber-500 to-orange-600",
                items: [
                    { icon: "MessageCircle", name: "WhatsApp" },
                    { icon: "Globe", name: "Facebook Messenger" },
                    { icon: "Globe", name: "Instagram DM" },
                    { icon: "Mail", name: "Email Orders" },
                ],
            },
            {
                label: "Courier Partners",
                color: "from-blue-500 to-indigo-600",
                items: [
                    { icon: "Truck", name: "TCS" },
                    { icon: "Truck", name: "Leopards" },
                    { icon: "Truck", name: "Call Courier" },
                    { icon: "Truck", name: "M&P" },
                    { icon: "Truck", name: "Trax" },
                    { icon: "Truck", name: "BlueEx" },
                    { icon: "Truck", name: "+6 more" },
                ],
            },
            {
                label: "Data & Notifications",
                color: "from-emerald-500 to-teal-600",
                items: [
                    { icon: "FileText", name: "CSV Import/Export" },
                    { icon: "Smartphone", name: "SMS Tracking" },
                    { icon: "Mail", name: "Email Reports" },
                    { icon: "Printer", name: "Label Printing" },
                ],
            },
        ],
    },
};

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

export const FEATURES_PAGE = {
    hero: {
        badge: "All-in-One Platform",
        title: "Everything You Need",
        titleHighlight: "To Scale Your Ecommerce Business",
        subtitle:
            "Blink N Ship — one platform that does the work of six. AI extracts orders from WhatsApp, books couriers, tracks inventory, manages finances, and gives you real-time analytics. No more juggling multiple tools.",
        cta: "Start Free Trial",
    },
    stats: [
        { label: "Orders Processed", value: 47382, suffix: "+" },
        { label: "Active Businesses", value: 2531, suffix: "+" },
        { label: "Hours Saved Per Week", value: 17, suffix: "+" },
        { label: "Courier Partners", value: 12, suffix: "" },
    ],
    features: [
        {
            id: "ai-extraction",
            icon: "Zap",
            title: "AI Order Extraction",
            tag: "AI Powered",
            summary:
                "Paste any WhatsApp, Facebook, or Instagram message. Our AI extracts customer name, phone, address, city, COD amount, and product SKUs — instantly, with 99% accuracy.",
            details: [
                "Extracts customer name, phone, full address with city and area",
                "Detects COD amount, advance payment, and product SKUs",
                "Supports Urdu, Roman Urdu, and English messages",
                "Handles voice messages — speech-to-text then extraction",
                "Bulk processing — 50+ orders from a single message chain",
                "Auto-learns from manual corrections to improve accuracy",
                "Detects order status: new, pending, completed, cancelled",
            ],
            stat: "90% faster order processing",
            benefit: "Save 15+ hours every week on manual data entry",
        },
        {
            id: "courier-booking",
            icon: "Package",
            title: "One-Click Courier Booking",
            tag: "Automation",
            summary:
                "Book parcels across 12+ courier services with a single click. Tracking updates sync automatically to your dashboard and customers get real-time delivery notifications.",
            details: [
                "One-click booking across 12+ courier services in Pakistan",
                "Automatic rate comparison — picks the cheapest/fastest option",
                "Real-time tracking updates synced to your dashboard",
                "Automated SMS and WhatsApp delivery notifications to customers",
                "Bulk booking — book 100+ parcels in under 60 seconds",
                "Print shipping labels and invoices directly from the platform",
                "Auto-update tracking IDs and delivery status in orders",
            ],
            stat: "85% faster dispatch process",
            benefit: "Ship 3x more orders with the same team size",
        },
        {
            id: "inventory",
            icon: "BarChart3",
            title: "Smart Inventory Management",
            tag: "Smart Tracking",
            summary:
                "Never lose track of stock again. Monitor real-time inventory levels across all products, get low-stock alerts, and automatically calculate profit margins per item.",
            details: [
                "Real-time stock tracking across all products and variants",
                "Low inventory alerts via email, SMS, and in-app notifications",
                "Automatic profit margin calculation per product and per order",
                "Bulk stock updates — import/export via CSV or Excel files",
                "Product categorization, tags, and advanced search filtering",
                "Stock history log — see every addition, sale, and adjustment",
                "Reorder point suggestions based on historical sales data",
            ],
            stat: "Zero stockouts with smart alerts",
            benefit: "Reduce dead stock by 40% with data-driven insights",
        },
        {
            id: "financial-ledger",
            icon: "BookOpen",
            title: "Complete Financial Ledger",
            tag: "Finance",
            summary:
                "See exactly where your money is going. Track income, expenses, courier payments, and customer payments in one place. Built-in reconciliation keeps your books clean.",
            details: [
                "Track income, expenses, and profit in real-time",
                "Automatic courier payment reconciliation",
                "Customer payment tracking — COD, advance, partial, and full",
                "Daily, weekly, and monthly profit & loss statements",
                "Export financial reports to PDF or Excel for accountants",
                "Multi-currency support for international suppliers",
                "Bank-level encryption for all financial data",
            ],
            stat: "100% accurate books, always",
            benefit: "Save 8+ hours on accounting every week",
        },
        {
            id: "team",
            icon: "Users",
            title: "Team Management & Permissions",
            tag: "Collaboration",
            summary:
                "Add your team members with custom role-based permissions. Managers get full access, employees get order processing access, and accountants see only finances — you decide.",
            details: [
                "Custom roles: Admin, Manager, Employee, Accountant, Viewer",
                "Granular permissions — control access to orders, finances, etc.",
                "Activity log — see who did what and when",
                "Multiple branches/warehouses with separate team assignments",
                "Real-time collaboration — team can work on orders simultaneously",
                "Employee performance metrics and productivity reports",
                "Secure team authentication with 2FA support",
            ],
            stat: "Zero data leaks with role-based access",
            benefit: "Scale your team from 1 to 50 without losing control",
        },
        {
            id: "analytics",
            icon: "TrendingUp",
            title: "Analytics & Revenue Reports",
            tag: "Insights",
            summary:
                "Make data-driven decisions. Revenue charts, profit trends, top-selling products, best-performing cities, and customer purchase patterns — all visualized in real-time dashboards.",
            details: [
                "Revenue and profit trend charts — daily, weekly, monthly, yearly",
                "Top-selling products and underperforming items identification",
                "Customer analytics — repeat buyers, top spenders, geography",
                "City-wise and area-wise sales distribution maps",
                "Courier performance comparison — delivery time & success rate",
                "Automated business reports delivered to your email weekly",
                "Export raw data for advanced analysis in your favorite tools",
            ],
            stat: "Data-driven decisions in real-time",
            benefit: "Increase revenue 25% with actionable insights",
        },
    ],
    deepDive: [
        {
            id: "ai-workflow",
            icon: "Zap",
            title: "From Message to Order in Seconds",
            subtitle: "AI-Powered Workflow",
            description:
                "A customer sends an order on WhatsApp. Blink N Ship's AI instantly extracts every detail — name, address, phone, products, COD amount — and creates a verified order in your system. No typing. No errors. No delays.",
            steps: [
                "Customer sends order via WhatsApp, Facebook, or Instagram",
                "AI extracts name, address, phone, products, and payment info",
                "System auto-creates a verified order in your dashboard",
                "You review and confirm with one tap",
                "Order moves to courier booking — ready to ship",
            ],
            visual: {
                icon: "MessageSquare",
            },
        },
        {
            id: "courier-flow",
            icon: "Package",
            title: "Ship Faster, Track Smarter",
            subtitle: "Automated Logistics",
            description:
                "With your order confirmed, Blink N Ship compares rates across 12+ courier services, picks the best option, books the shipment, and sends tracking info to your customer — all automatically.",
            steps: [
                "System compares rates across 12+ courier services",
                "Auto-selects cheapest or fastest option based on your preference",
                "Books the shipment and generates tracking ID instantly",
                "Customer receives tracking link via SMS and WhatsApp",
                "Delivery status updates automatically in your dashboard",
            ],
            visual: {
                icon: "Truck",
            },
        },
        {
            id: "analytics-flow",
            icon: "TrendingUp",
            title: "Know Your Numbers, Grow Your Business",
            subtitle: "Real-Time Analytics",
            description:
                "Every order, every expense, every delivery — automatically tracked and visualized. See revenue trends, profit margins, top products, and customer insights. Make decisions based on facts, not guesses.",
            steps: [
                "Every order and expense is automatically recorded",
                "Revenue and profit calculated in real-time per product",
                "Visual dashboards show trends, top products, and customer data",
                "Identify growth opportunities and underperforming areas",
                "Export reports or get weekly summaries delivered to your inbox",
            ],
            visual: {
                icon: "BarChart3",
            },
        },
    ],
    comparison: {
        title: "Why Businesses Switch to Blink N Ship",
        beforeLabel: "Without Blink N Ship",
        afterLabel: "With Blink N Ship",
        rows: [
            { aspect: "Order Entry", before: "Manual typing from WhatsApp screenshots", after: "AI extracts in 2 seconds" },
            { aspect: "Courier Booking", before: "Visit each courier website separately", after: "One-click from dashboard" },
            { aspect: "Inventory Tracking", before: "Spreadsheets or memory", after: "Real-time auto-updated" },
            { aspect: "Financial Records", before: "Hire accountant or messy notes", after: "Auto-generated ledger" },
            { aspect: "Team Management", before: "Shared passwords & confusion", after: "Role-based permissions" },
            { aspect: "Business Reports", before: "Manual calculations every month", after: "Live dashboard + weekly email" },
            { aspect: "Time Spent Daily", before: "6-8 hours on operations", after: "1-2 hours, then done" },
            { aspect: "Error Rate", before: "10-15% manual errors", after: "Less than 0.5% with AI" },
        ],
    },
};

export const PRICING_PAGE = {
    hero: {
        badge: "Simple, Transparent Pricing",
        title: "Plans that scale",
        titleHighlight: "with your business",
        subtitle:
            "Start free for 30 days. No credit card needed. All plans include core ecommerce features — upgrade when you outgrow them.",
        cta: "Get Started Free",
        guarantee: "30-day free trial · No credit card · Cancel anytime",
    },
    billing: {
        monthly: "Monthly",
        yearly: "Yearly",
        badge: "Save ~17%",
    },
    plans: [
        {
            name: "Starter",
            monthlyPrice: 5,
            yearlyPrice: 50,
            description: "Perfect for individual sellers getting started with order management.",
            highlighted: false,
            badge: null,
            features: [
                "Order Management",
                "Courier Booking",
                "Basic Inventory",
                "Financial Ledger",
                "Email Notifications",
            ],
            extra: [],
            cta: "Start Free Trial",
            color: "from-slate-400 to-slate-500",
        },
        {
            name: "Growth",
            monthlyPrice: 9,
            yearlyPrice: 90,
            description: "For growing businesses that need AI automation and analytics.",
            highlighted: true,
            badge: "Most Popular",
            features: [
                "Order Management",
                "Courier Booking",
                "Basic Inventory",
                "Financial Ledger",
                "AI Order Extraction",
                "Advanced Analytics",
                "Customer Management",
                "Priority Support",
            ],
            extra: ["Everything in Starter, plus:"],
            cta: "Start Free Trial",
            color: "from-primary to-orange-600",
        },
        {
            name: "Business",
            monthlyPrice: 19,
            yearlyPrice: 190,
            description: "For teams and inventory-heavy businesses needing full control.",
            highlighted: false,
            badge: null,
            features: [
                "Order Management",
                "Courier Booking",
                "Advanced Inventory",
                "Financial Ledger",
                "AI Order Extraction",
                "Advanced Analytics",
                "Customer Management",
                "Team Management",
                "Custom Roles & Permissions",
                "Bulk Import & Export",
                "Advanced Reports",
            ],
            extra: ["Everything in Growth, plus:"],
            cta: "Start Free Trial",
            color: "from-purple-500 to-indigo-600",
        },
    ],
    savings: [
        { label: "Vs. manual operations", value: "15+ hrs/week", desc: "Time saved by automating order processing, courier booking, and financial tracking." },
        { label: "Vs. multiple tools", value: "$200+/month", desc: "Saved by replacing 6+ separate tools with one unified platform." },
        { label: "Vs. hiring help", value: "$500+/month", desc: "Saved by eliminating the need for extra staff to handle operations." },
    ],
    comparison: [
        { feature: "Manual Order Entry", s: true, g: true, b: true },
        { feature: "AI Order Extraction", s: false, g: true, b: true },
        { feature: "Courier Booking (Basic)", s: true, g: true, b: true },
        { feature: "Rate Comparison (12+ Couriers)", s: false, g: true, b: true },
        { feature: "Basic Inventory Tracking", s: true, g: true, b: true },
        { feature: "Advanced Inventory (Bulk, Alerts)", s: false, g: false, b: true },
        { feature: "Financial Ledger", s: true, g: true, b: true },
        { feature: "Auto Profit Calculation", s: false, g: true, b: true },
        { feature: "Customer Management", s: false, g: true, b: true },
        { feature: "Team Management", s: false, g: false, b: true },
        { feature: "Custom Roles & Permissions", s: false, g: false, b: true },
        { feature: "Advanced Analytics & Reports", s: false, g: true, b: true },
        { feature: "Bulk Import & Export (CSV)", s: false, g: false, b: true },
        { feature: "Email Notifications", s: true, g: true, b: true },
        { feature: "Priority Support", s: false, g: true, b: true },
    ],
    faqs: [
        {
            q: "Is there a free trial?",
            a: "Yes! Every new business gets 30 days of full platform access completely free. No credit card required. All features unlocked.",
        },
        {
            q: "Can I switch plans later?",
            a: "Absolutely. You can upgrade or downgrade at any time. If you upgrade, you get immediate access to new features. Downgrades take effect at the next billing cycle.",
        },
        {
            q: "What happens when my trial ends?",
            a: "Your account enters a grace period where you can still access and export your data. To continue using Blink N Ship, simply choose a plan and subscribe.",
        },
        {
            q: "Are there any hidden fees?",
            a: "None. The price you see is the price you pay. No setup fees, no cancellation fees, no surprise charges. Courier fees are separate and paid directly to the courier service.",
        },
        {
            q: "Can I cancel anytime?",
            a: "Yes. Cancel directly from your dashboard with one click. Your data remains accessible for 30 days after cancellation, giving you plenty of time to export everything.",
        },
        {
            q: "Do you offer discounts for annual billing?",
            a: "Yes! Yearly plans give you roughly 17% off compared to monthly billing. That's almost two months free every year.",
        },
    ],
};

export const FAQ_PAGE = {
    hero: {
        badge: "Got Questions? We've Got Answers",
        title: "Frequently asked",
        titleHighlight: "questions",
        subtitle:
            "Everything you need to know about Blink N Ship. Can't find what you're looking for? We're here to help.",
        cta: "Contact Support",
    },
    categories: [
        {
            id: "getting-started",
            label: "Getting Started",
            icon: "Sparkles",
            items: [
                {
                    q: "What is Blink N Ship?",
                    a: "Blink N Ship is an all-in-one ecommerce operations platform that automates order management, courier booking, inventory tracking, financial ledgers, team collaboration, and analytics. It replaces 6+ separate tools with one unified dashboard — saving ecommerce businesses 15+ hours every week.",
                },
                {
                    q: "How do I get started with Blink N Ship?",
                    a: "Signing up takes less than 60 seconds. Go to our website, click 'Start Free Trial', create your account (no credit card needed), and you'll get full platform access for 30 days. During the trial, you can connect your courier API, import your products, and start processing orders immediately.",
                },
                {
                    q: "Is there a free trial? What's included?",
                    a: "Yes! Every new business gets 30 days of full platform access completely free. No credit card required. During your trial, you get access to ALL features across all plans — including AI order extraction, courier booking, inventory management, financial ledger, team management, and analytics. The only limitation is a cap on total orders, which resets after the trial.",
                },
                {
                    q: "Do I need technical knowledge to use Blink N Ship?",
                    a: "Not at all. Blink N Ship is designed specifically for ecommerce sellers, not developers. If you can use WhatsApp, you can use Blink N Ship. The interface is intuitive, AI handles the complex stuff, and our support team is available if you ever need help. Most sellers are fully set up and processing orders within 5 minutes of signing up.",
                },
                {
                    q: "How is Blink N Ship different from spreadsheets?",
                    a: "Spreadsheets require manual data entry for every order, every expense, and every update. They don't integrate with courier services, they don't track inventory in real-time, and they don't calculate profit automatically. Blink N Ship does all of this — AI extracts order data from messages, couriers are booked with one click, inventory updates automatically, and profit is calculated per order. What takes hours in spreadsheets happens in seconds with Blink N Ship.",
                },
            ],
        },
        {
            id: "features",
            label: "Features & Usage",
            icon: "Zap",
            items: [
                {
                    q: "How does AI order extraction work?",
                    a: "When a customer sends an order via WhatsApp, Facebook Messenger, or Instagram DM, Blink N Ship's AI reads the message and automatically extracts the customer's name, phone number, delivery address, city, area, products ordered, COD amount, and any advance payment — in seconds. It works with Urdu, Roman Urdu, and English messages. You review the extracted data and confirm with one tap. The AI also learns from your corrections, getting more accurate over time.",
                },
                {
                    q: "Which courier services does Blink N Ship support?",
                    a: "Blink N Ship integrates with 12+ courier services across Pakistan, including TCS, Leopards, Call Courier, M&P, Trax, BlueEx, and more. When you book a shipment, the system compares rates across all connected services and recommends the cheapest or fastest option based on your preference. Booking takes one click and tracking updates sync automatically.",
                },
                {
                    q: "Can I track inventory in real-time?",
                    a: "Yes. Blink N Ship provides real-time inventory tracking across all your products. When an order is placed, stock levels adjust automatically. You get low-stock alerts before you run out, and the system suggests reorder points based on your sales history. You can also import and export inventory data via CSV for bulk updates.",
                },
                {
                    q: "Does Blink N Ship handle finances and accounting?",
                    a: "Yes. The Financial Ledger tracks income, expenses, courier payments, and customer payments automatically. It calculates profit per order and per product, generates daily/weekly/monthly profit & loss statements, and can export reports to PDF or Excel for your accountant. Bank-level encryption keeps all your financial data secure.",
                },
                {
                    q: "Can I manage my team with Blink N Ship?",
                    a: "Absolutely. You can add managers and employees with custom role-based permissions — Admins get full access, Employees can process orders, Accountants see only finances, and Viewers can monitor operations. An activity log tracks every action. This is available on the Business plan.",
                },
                {
                    q: "What kind of analytics does Blink N Ship provide?",
                    a: "Blink N Ship provides comprehensive analytics including revenue and profit trends (daily, weekly, monthly, yearly), top-selling products, underperforming items, customer purchase patterns, city-wise sales distribution, courier performance comparisons, and automated weekly business reports delivered to your email. All dashboards update in real-time.",
                },
            ],
        },
        {
            id: "pricing",
            label: "Pricing & Billing",
            icon: "DollarSign",
            items: [
                {
                    q: "How much does Blink N Ship cost?",
                    a: "Blink N Ship has three plans: Starter at $5/month for individual sellers, Growth at $9/month for growing businesses (most popular), and Business at $19/month for teams and inventory-based businesses. Yearly billing gives you roughly 17% off. All plans include a 30-day free trial with no credit card required.",
                },
                {
                    q: "Can I switch plans later?",
                    a: "Absolutely. You can upgrade or downgrade at any time from your dashboard. If you upgrade, new features are available immediately. Downgrades take effect at the start of your next billing cycle. Your data is always preserved — nothing is lost when switching plans.",
                },
                {
                    q: "What payment methods do you accept?",
                    a: "We accept Stripe, Visa, and Mastercard internationally. For businesses in Pakistan, we also support JazzCash and EasyPaisa with manual verification. All payments are processed securely through encrypted payment gateways.",
                },
                {
                    q: "Can I cancel my subscription?",
                    a: "Yes, you can cancel directly from your dashboard with one click — no need to email or call anyone. After cancellation, your account enters a grace period where you can still access and export all your data. If you change your mind, you can resubscribe and everything will be exactly as you left it.",
                },
                {
                    q: "Is there a discount for annual billing?",
                    a: "Yes! Yearly plans save you approximately 17% compared to monthly billing. For example, the Growth plan is $9/month ($108/year) or $90/year with yearly billing — saving you $18. All the benefits of yearly pricing with the flexibility to switch plans anytime.",
                },
                {
                    q: "Are there any hidden fees or setup costs?",
                    a: "None whatsoever. The price you see is the price you pay. There are no setup fees, no cancellation fees, and no surprise charges. Courier fees are paid directly to the courier service and are not processed through Blink N Ship. What you pay for the platform is clearly stated on our pricing page.",
                },
            ],
        },
        {
            id: "technical",
            label: "Technical",
            icon: "Shield",
            items: [
                {
                    q: "Is my data secure with Blink N Ship?",
                    a: "Yes. Blink N Ship uses bank-level encryption (AES-256) for all data at rest and TLS 1.3 for data in transit. We are hosted on secure cloud infrastructure with automatic backups. We never share your business data with third parties. Your financial information, customer data, and business metrics are yours and yours alone.",
                },
                {
                    q: "Can I connect my own courier API?",
                    a: "Yes. Each Blink N Ship account connects to one courier API of your choice. We support 12+ courier services with one-click integration. Once connected, you can book shipments, track deliveries, and manage returns all from your Blink N Ship dashboard. The connection is secure and permanent to prevent account misuse.",
                },
                {
                    q: "Can I import my existing data into Blink N Ship?",
                    a: "Yes. You can import your products, customers, and historical orders via CSV files. The import wizard guides you through mapping your columns to Blink N Ship's fields. We also support bulk export of all your data at any time, so you're never locked in. Most sellers complete their data migration in under 30 minutes.",
                },
                {
                    q: "Does Blink N Ship work on mobile?",
                    a: "Yes. Blink N Ship is fully responsive and works on all devices — desktop, tablet, and mobile. The mobile experience is optimized for on-the-go order management, allowing you to confirm orders, check inventory, and view analytics from your phone. A dedicated mobile app is also in development.",
                },
                {
                    q: "How often is Blink N Ship updated?",
                    a: "We ship new features and improvements every month. Our roadmap includes WhatsApp automation, a mobile app, AI-powered insights, and more courier integrations. Updates are applied automatically — no manual upgrades needed. You can follow our changelog to stay informed about what's new.",
                },
            ],
        },
        {
            id: "account",
            label: "Account & Support",
            icon: "Users",
            items: [
                {
                    q: "What happens if my subscription expires?",
                    a: "Your account enters a read-only mode. All your data — orders, customers, inventory, finances, and reports — remains safe and accessible for viewing and exporting. You won't be able to create new orders or book couriers until payment is received. Full access is restored immediately after successful payment.",
                },
                {
                    q: "Can I export my data if I leave Blink N Ship?",
                    a: "Absolutely. You can export all your data — orders, products, customers, financial reports — at any time, even after cancellation. We provide CSV and Excel exports so you can take your data anywhere. Your data remains accessible for 30 days after your subscription ends.",
                },
                {
                    q: "How do I get help if I'm stuck?",
                    a: "We offer multiple support channels: in-app chat support (response within minutes during business hours), email support at hello@blinknship.com (response within 4 hours), a comprehensive knowledge base with tutorials and guides, and priority support for Growth and Business plan subscribers. Our team is based in Pakistan and understands the local ecommerce landscape.",
                },
                {
                    q: "Can I add multiple team members?",
                    a: "Yes, on the Business plan. You can add unlimited team members with custom role-based permissions. Control exactly what each person can see and do — from full admin access to order-processing only. An activity log tracks every action so you always know who did what.",
                },
                {
                    q: "Does Blink N Ship work with my existing tools?",
                    a: "Blink N Ship integrates with WhatsApp, Facebook Messenger, Instagram DM, 12+ courier services, SMS gateways, and email. We support CSV/Excel import and export for data portability. If you need a specific integration that isn't listed, let us know — we're constantly adding new integrations based on customer requests.",
                },
            ],
        },
    ],
    contact: {
        title: "Still have questions?",
        subtitle: "We're here to help. Our support team typically responds within 4 hours.",
        email: "hello@blinknship.com",
        responseTime: "Average response time: under 4 hours",
    },
};

export const ABOUT_PAGE = {
    hero: {
        badge: "Our Story",
        title: "Built for sellers,",
        titleHighlight: "by someone who cares",
        subtitle:
            "Blink N Ship wasn't built in a boardroom. It was born in the chaos of WhatsApp notifications, missed orders, and late-night spreadsheet marathons. This is the story of why we built it — and who we build it for.",
    },
    story: [
        {
            heading: "It started with a WhatsApp message.",
            body: "Like most ecommerce businesses in Pakistan, orders came through WhatsApp — screenshots of products, addresses typed in Roman Urdu, payment preferences mixed in with casual conversation. Our founder watched his sister spend four hours every evening copying these messages into a notebook, then into a spreadsheet, then visiting three different courier websites to compare rates. One typo meant a lost package. One missed message meant an angry customer. There had to be a better way.",
        },
        {
            heading: "The problem was everywhere.",
            body: "We started talking to other sellers — clothing brands in Karachi, electronics resellers in Lahore, home-based businesses in Islamabad. Every single one had the same story. They were spending more time on operations than on actually growing their business. They were losing money to manual errors. They were burning out. And the tools available were either too expensive, too complicated, or built for businesses in countries where ecommerce works differently.",
        },
        {
            heading: "So we built something better.",
            body: "Blink N Ship was designed from day one for the way ecommerce actually works in Pakistan. WhatsApp orders. COD payments. Multiple courier services. Urdu and English mixed together. Family-run teams. We built an AI that understands Roman Urdu. We built one-click courier booking that works with local services. We built inventory tracking that updates automatically when an order is placed. We built financial ledgers that make sense for COD-based businesses. Every feature was born from a real problem a real seller faced.",
        },
        {
            heading: "Today, we serve thousands.",
            body: "What started as a tool for one family business has grown into a platform used by 2,500+ ecommerce businesses across Pakistan. We've processed over 47,000 orders. We've saved sellers thousands of hours. We've helped businesses grow from home-based side hustles to full-fledged operations with teams and warehouses. And we're just getting started.",
        },
    ],
    journey: [
        {
            year: "2023",
            title: "The Idea",
            subtitle: "A sister's struggle became a mission",
            emoji: "💡",
            description: "Watching a family member spend 4+ hours daily on manual order processing sparked the idea. If one person was struggling this much, thousands of others must be too.",
        },
        {
            year: "Early 2024",
            title: "The Build",
            subtitle: "Late nights, coffee, and code",
            emoji: "🔧",
            description: "The first version was built in a small apartment — a simple tool that extracted orders from WhatsApp messages. It was rough, but it worked. The first test user was the founder's sister.",
        },
        {
            year: "Mid 2024",
            title: "First Users",
            subtitle: "Word spread faster than expected",
            emoji: "🚀",
            description: "Within weeks, other sellers in the same network asked for access. The tool grew from one user to fifty, then two hundred — purely by word of mouth. No ads. No marketing. Just sellers telling sellers.",
        },
        {
            year: "Late 2024",
            title: "The Platform",
            subtitle: "From tool to full platform",
            emoji: "🏗️",
            description: "Orders, courier booking, inventory, finances, team management — what started as a single-purpose tool became a complete ecommerce operations platform. New features were added based on direct requests from users.",
        },
        {
            year: "2025",
            title: "Growth & Impact",
            subtitle: "Thousands of businesses, millions saved",
            emoji: "📈",
            description: "2,500+ active businesses. 47,000+ orders processed. 15+ hours saved per business every week. Blink N Ship became the operations backbone for ecommerce businesses across Pakistan.",
        },
        {
            year: "2026+",
            title: "The Future",
            subtitle: "Building for what's next",
            emoji: "🌟",
            description: "WhatsApp automation, mobile apps, AI-powered insights, and more courier integrations. The mission remains the same: give ecommerce sellers the tools they deserve.",
        },
    ],
    values: [
        {
            icon: "Heart",
            title: "Built with Empathy",
            description: "Every feature starts with a real problem a real seller faced. We don't build features because they're trendy — we build them because they matter.",
        },
        {
            icon: "Zap",
            title: "Simplicity Above All",
            description: "If a feature makes the platform harder to use, it doesn't belong here. Ecommerce sellers don't have time to learn complicated tools. Everything should just work.",
        },
        {
            icon: "Shield",
            title: "Radical Transparency",
            description: "No hidden fees. No surprise charges. No complicated contracts. We tell you exactly what we do, how we do it, and what it costs. That's it.",
        },
        {
            icon: "TrendingUp",
            title: "Your Growth is Our Goal",
            description: "We measure our success by yours. When sellers grow from home-based to warehouse-based, when they add team members, when their revenue increases — that's what matters to us.",
        },
    ],
    impact: [
        { label: "Orders Processed", value: 47382, suffix: "+", icon: "Package" },
        { label: "Active Businesses", value: 2531, suffix: "+", icon: "Store" },
        { label: "Hours Saved Weekly", value: 38000, suffix: "+", icon: "Clock" },
        { label: "Courier Partners", value: 12, suffix: "", icon: "Truck" },
    ],
    team: {
        title: "Built by a small team",
        subtitle: "with a big mission",
        description: "We're a remote-first team of builders, designers, and problem-solvers spread across Pakistan. Some of us have built ecommerce businesses ourselves. Others have spent years in tech. All of us care deeply about making ecommerce better for sellers like you.",
    },
    cta: {
        title: "Be part of our story",
        subtitle: "Join 2,500+ businesses already using Blink N Ship. Start free — no credit card needed.",
    },
};

export const CONTACT_PAGE = {
    hero: {
        badge: "Get In Touch",
        title: "We'd love to hear",
        titleHighlight: "from you",
        subtitle:
            "Have a question, feedback, or just want to say hello? Our team is here to help. Reach out and we'll get back to you within 4 hours.",
    },
    channels: [
        {
            icon: "Mail",
            title: "Email Us",
            value: "hello@blinknship.com",
            href: "mailto:hello@blinknship.com",
            description: "For general inquiries, support, and partnership opportunities. We respond within 4 hours.",
            action: "Send Email",
        },
        {
            icon: "MessageCircle",
            title: "WhatsApp Support",
            value: "+92 300 1234567",
            href: "https://wa.me/923001234567",
            description: "Quick questions? Our WhatsApp support team is available Monday to Saturday, 9 AM to 9 PM.",
            action: "Chat on WhatsApp",
        },
        {
            icon: "Twitter",
            title: "Follow Us",
            value: "@blinknship",
            href: "https://twitter.com/blinknship",
            description: "Follow us for product updates, tips, and ecommerce insights. DM us anytime.",
            action: "Follow on Twitter",
        },
        {
            icon: "MapPin",
            title: "Our Location",
            value: "Karachi, Pakistan",
            href: null,
            description: "Remote-first team headquartered in Karachi. We serve businesses across all of Pakistan.",
            action: null,
        },
    ],
    faqs: [
        { q: "How quickly do you respond?", a: "We respond to all inquiries within 4 hours during business hours (Monday to Saturday, 9 AM to 9 PM). For urgent issues, WhatsApp support is the fastest option." },
        { q: "Do you offer phone support?", a: "Currently, we offer support via email and WhatsApp. Phone support is available for Growth and Business plan subscribers. Reach out via email to schedule a call." },
        { q: "Can I visit your office?", a: "We're a remote-first team and don't have a public office. However, we're happy to schedule a video call to discuss your needs or demo the platform." },
        { q: "I have a partnership proposal. Who should I contact?", a: "We'd love to hear it! Send your proposal to hello@blinknship.com with 'Partnership' in the subject line. Our team reviews every proposal." },
    ],
};

export const PRIVACY_PAGE = {
    hero: {
        badge: "Privacy Policy",
        title: "Your privacy",
        titleHighlight: "matters to us",
        subtitle:
            "We believe your data belongs to you. This policy explains what we collect, why we collect it, and how we keep it safe.",
        lastUpdated: "July 1, 2026",
    },
    summary: {
        title: "The short version",
        body: "Blink N Ship collects only the data needed to make shipping work for you — your name, business details, order information, and communication preferences. We never sell your data. We never share it with third parties for their marketing. We use industry-standard encryption to protect it. And you can request deletion at any time. That's it.",
    },
    sections: [
        {
            icon: "Database",
            title: "What data we collect",
            body: "We collect only what's necessary to provide and improve our shipping platform. This includes your name, email address, phone number, and business details when you create an account. When you process shipments, we collect sender and recipient names, addresses, phone numbers, and order descriptions. We also collect payment information through our secure payment processors — we never store full credit card numbers on our servers. Finally, we collect basic usage data like page views and feature interactions to help us improve the platform.",
        },
        {
            icon: "Search",
            title: "How we use your data",
            body: "Your data powers your shipping operations. We use your information to create and manage your account, process shipments, generate labels, calculate costs, and communicate order updates to you and your customers. We also use aggregated, anonymized data to analyze platform usage patterns and improve our features. We may send you product updates and tips (you can opt out anytime). We do not use your data for any purpose you wouldn't expect from a shipping platform.",
        },
        {
            icon: "Share2",
            title: "When we share your data",
            body: "We share your data only when necessary to fulfill your orders. This means sharing shipment details with our courier partners (TCS, Leopard, and others) so they can deliver your parcels. We share payment data with our payment processors (Stripe, JazzCash) to complete transactions. We may disclose data if required by law or to protect our rights. We do not sell your personal data to anyone, ever. We do not share your data with advertisers or marketing platforms.",
        },
        {
            icon: "Shield",
            title: "How we protect your data",
            body: "We take security seriously. All data transmitted between your browser and our servers is encrypted using TLS 1.3. Data at rest is encrypted using AES-256. We follow industry best practices for access control — only authorized team members can access customer data, and only when needed. We conduct regular security audits and penetration testing. Our infrastructure runs on AWS with SOC 2-compliant data centers. While no system is 100% secure, we continuously invest in keeping your data safe.",
        },
        {
            icon: "Clock",
            title: "How long we keep your data",
            body: "We keep your account data for as long as your account is active. Order data is retained for 3 years to comply with tax and accounting regulations. If you delete your account, we remove or anonymize your personal data within 30 days, except where we're legally required to keep certain records. You can request earlier deletion of your data by contacting us at hello@blinknship.com.",
        },
        {
            icon: "FileText",
            title: "Your rights over your data",
            body: "You have full control over your data. You can access, update, or delete your personal information anytime from your account settings. You can export your data in a portable format. You can withdraw consent for marketing communications. You can request that we delete all data we hold about you. We will respond to all data requests within 30 days. To exercise any of these rights, email us at hello@blinknship.com.",
        },
        {
            icon: "Cookie",
            title: "Cookies & tracking",
            body: "We use cookies and similar technologies to keep you logged in, remember your preferences, and understand how you use our platform. We use essential cookies (required for the platform to function), functional cookies (to remember your settings), and analytics cookies (to understand usage patterns). We do not use tracking cookies for advertising. You can control cookie preferences through your browser settings. Disabling certain cookies may affect platform functionality.",
        },
        {
            icon: "Users",
            title: "Children's privacy",
            body: "Blink N Ship is designed for businesses and is not intended for individuals under 18. We do not knowingly collect data from children. If you believe a child has provided us with personal data, please contact us immediately and we will delete it.",
        },
        {
            icon: "RefreshCw",
            title: "Changes to this policy",
            body: "We may update this privacy policy from time to time. When we make material changes, we'll notify you via email and through an in-app notification. We'll also update the 'Last Updated' date at the top of this page. We encourage you to review this policy periodically. Continued use of Blink N Ship after changes means you accept the updated policy.",
        },
        {
            icon: "MessageCircle",
            title: "Contact us about privacy",
            body: "If you have questions, concerns, or requests about your data or this privacy policy, you can reach our Data Protection team at hello@blinknship.com. You can also write to us at: Blink N Ship, Karachi, Pakistan. We respond to all privacy inquiries within 48 hours.",
        },
    ],
    cta: {
        title: "Questions about your data?",
        subtitle: "We're here to help. Reach out to our Data Protection team anytime.",
    },
};

export const TERMS_PAGE = {
    hero: {
        badge: "Terms of Service",
        title: "Our terms,",
        titleHighlight: "your peace of mind",
        subtitle:
            "We believe in clear, fair terms that protect both you and us. Please read these terms carefully — they govern your use of the Blink N Ship platform.",
        lastUpdated: "July 1, 2026",
    },
    intro: {
        title: "Welcome to Blink N Ship",
        body: "These Terms of Service (\"Terms\") govern your access to and use of the Blink N Ship platform, website, and services (collectively, the \"Service\"). By creating an account or using the Service, you agree to be bound by these Terms. If you do not agree, please do not use the Service. We may update these Terms from time to time, and we'll notify you of material changes via email.",
    },
    sections: [
        {
            id: "acceptance",
            number: "01",
            title: "Acceptance of Terms",
            icon: "CheckSquare",
            content:
                "By accessing or using Blink N Ship, you confirm that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, and any additional terms referenced herein. If you are using the Service on behalf of a business, you represent that you have the authority to bind that business. These Terms form a legally binding agreement between you (\"you\" or \"User\") and Blink N Ship (\"we,\" \"us,\" or \"our\").",
        },
        {
            id: "account",
            number: "02",
            title: "Account Registration & Security",
            icon: "UserPlus",
            content:
                "To use our Service, you must create an account with accurate and complete information. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account. You must notify us immediately of any unauthorized use. We reserve the right to suspend or terminate accounts that violate these Terms or provide false information. You must be at least 18 years old to create an account.",
        },
        {
            id: "services",
            number: "03",
            title: "Services & Shipping",
            icon: "Package",
            content:
                "Blink N Ship provides a platform to manage, track, and optimize your shipping operations. We integrate with third-party courier services to offer you shipping options. While we strive for accuracy, we do not guarantee delivery times as they depend on courier partners. We are not a courier service ourselves — we provide the software that connects you to couriers. You are responsible for providing accurate shipment details and complying with all applicable shipping laws and regulations.",
        },
        {
            id: "fees",
            number: "04",
            title: "Fees & Payments",
            icon: "CreditCard",
            content:
                "Our Service is offered under a subscription model with different pricing tiers as described on our Pricing page. Fees are billed in advance on a monthly or annual basis. Payments are processed securely through our third-party payment processors. All fees are non-refundable except as explicitly stated in our refund policy. We may change our fees with 30 days notice. Late payments may result in service suspension. You are responsible for all applicable taxes.",
        },
        {
            id: "content",
            number: "05",
            title: "User Content & Data",
            icon: "Database",
            content:
                "You retain all ownership rights to the data, information, and content you upload to our platform (\"User Content\"). By uploading User Content, you grant us a limited license to process, store, and transmit it solely for the purpose of providing our services to you. You represent that your User Content does not violate any laws or third-party rights. We may use anonymized, aggregated data to improve our services. Your data handling is further described in our Privacy Policy.",
        },
        {
            id: "prohibited",
            number: "06",
            title: "Prohibited Activities",
            icon: "Ban",
            content:
                "You agree not to use the Service for any unlawful purpose or in violation of these Terms. Prohibited activities include: shipping prohibited or hazardous items without proper declaration; attempting to access unauthorized areas of our systems; interfering with other users' accounts; scraping or collecting user data without consent; using the platform for fraudulent transactions; distributing malware or harmful code; and any activity that imposes an unreasonable burden on our infrastructure.",
        },
        {
            id: "intellectual",
            number: "07",
            title: "Intellectual Property",
            icon: "Copyright",
            content:
                "The Blink N Ship platform, including its code, design, branding, logos, and proprietary features, is owned by Blink N Ship and protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the Service for your business purposes. You may not copy, modify, reverse engineer, or create derivative works of our platform without our written consent. All feedback you provide becomes our intellectual property.",
        },
        {
            id: "termination",
            number: "08",
            title: "Termination & Suspension",
            icon: "Power",
            content:
                "You may terminate your account at any time from your account settings. We may suspend or terminate your access if you violate these Terms, engage in fraudulent activity, or if your actions create legal risk for us. Upon termination, your access to the Service will cease, and we will delete or anonymize your data within 30 days, except where retention is required by law. Termination does not relieve you of payment obligations incurred before termination.",
        },
        {
            id: "liability",
            number: "09",
            title: "Limitation of Liability",
            icon: "Shield",
            content:
                "To the maximum extent permitted by law, Blink N Ship shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities. Our total liability for any claim arising from these Terms or the Service is limited to the amount you paid us in the 12 months preceding the claim. The Service is provided \"as is\" without warranties of merchantability, fitness for a particular purpose, or uninterrupted availability.",
        },
        {
            id: "disputes",
            number: "10",
            title: "Dispute Resolution",
            icon: "Scale",
            content:
                "Any disputes arising from these Terms or the Service shall first be attempted to be resolved informally by contacting us at hello@blinknship.com. If informal resolution fails, disputes shall be resolved through binding arbitration in Karachi, Pakistan, in accordance with the laws of Pakistan. You agree that any claim must be filed within one year of the events giving rise to the claim. Class action waivers apply — disputes must be brought individually.",
        },
        {
            id: "changes",
            number: "11",
            title: "Changes to Terms",
            icon: "RefreshCw",
            content:
                "We reserve the right to modify these Terms at any time. Material changes will be communicated via email and in-app notification at least 30 days before they take effect. Minor changes may take effect immediately. Your continued use of the Service after changes constitutes acceptance of the updated Terms. We encourage you to review these Terms periodically. The date at the top of this page reflects the most recent update.",
        },
        {
            id: "contact",
            number: "12",
            title: "Contact & Legal Notice",
            icon: "MessageCircle",
            content:
                "For questions about these Terms, or to send legal notices, contact us at hello@blinknship.com. Legal notices may also be sent by registered mail to: Blink N Ship, Karachi, Pakistan. We respond to all legal inquiries within 5 business days. Nothing in these Terms creates a partnership, agency, or employment relationship between you and Blink N Ship. If any provision of these Terms is found unenforceable, the remaining provisions remain in effect.",
        },
    ],
    keyTerms: [
        {
            title: "No hidden fees",
            body: "What you see on our pricing page is what you pay. We don't add surprise charges.",
        },
        {
            title: "Your data stays yours",
            body: "We process your data only to provide our service. We never sell it or use it for unrelated purposes.",
        },
        {
            title: "Fair termination",
            body: "You can leave anytime. We give you 30 days to export your data after account closure.",
        },
        {
            title: "Transparent updates",
            body: "If we change these terms, we tell you 30 days in advance — no surprises.",
        },
    ],
    cta: {
        title: "Have questions about these terms?",
        subtitle: "We're happy to explain anything in plain language. Reach out to our team.",
    },
};

export const REFUND_PAGE = {
    hero: {
        badge: "Refund Policy",
        title: "Fair refunds,",
        titleHighlight: "no surprises",
        subtitle:
            "We want you to be completely confident using Blink N Ship. If something doesn't work out, our refund policy is designed to be fair, transparent, and hassle-free.",
        lastUpdated: "July 1, 2026",
    },
    marquee: [
        "30-Day Money-Back Guarantee",
        "No Questions Asked on First 30 Days",
        "Full Refund on Subscription Cancellations",
        "No Hidden Deductions",
        "Partial Refunds for Mid-Cycle Cancellations",
        "Free Trial — No Card Required",
    ],
    summary: {
        title: "Our refund promise",
        body: "We believe in our platform, and we want you to believe in it too. That's why we offer a straightforward refund policy: if you're not satisfied within the first 30 days of any paid subscription, you get your money back — no questions asked. For users on our Growth or Business plans who cancel mid-cycle, we provide a prorated refund for the unused portion. Shipping labels and courier fees are not refundable once used, as those costs are passed directly to our courier partners. Below, you'll find every detail of how refunds work at Blink N Ship.",
    },
    sections: [
        {
            id: "trial",
            number: "01",
            title: "Free Trial Period",
            subtitle: "Try before you commit",
            body: "Every new Blink N Ship account comes with a 30-day free trial on the Starter plan — no credit card required. During this period, you have full access to all features of the Starter plan. If you cancel before the trial ends, you will never be charged. No billing information is collected until you choose to upgrade. We believe the best way to evaluate our platform is to use it, and the free trial gives you plenty of time to decide if Blink N Ship is right for your business.",
            highlights: ["No credit card required", "Full Starter plan access", "Cancel anytime during trial", "Zero charges if you cancel"],
            bg: "bg-white",
        },
        {
            id: "subscription",
            number: "02",
            title: "Subscription Refunds",
            subtitle: "Money-back guarantee & prorated refunds",
            body: "If you upgrade to a paid subscription and decide Blink N Ship isn't the right fit within the first 30 days, we offer a full refund — no questions asked. After the initial 30-day period, if you cancel your subscription mid-cycle, you will receive a prorated refund for the unused portion of your billing period. For example, if you cancel your annual Growth plan after 4 months, you'll receive a refund for the remaining 8 months. Monthly subscriptions cancelled after the first 30 days are not refunded for the remainder of the current month but will not be renewed.",
            highlights: ["Full refund within 30 days", "Prorated refunds after 30 days", "Annual plans get unused months back", "Monthly plans stop at next billing"],
            bg: "bg-card",
        },
        {
            id: "shipping",
            number: "03",
            title: "Shipping Label Refunds",
            subtitle: "When courier fees can and cannot be refunded",
            body: "Shipping labels and courier fees purchased through Blink N Ship are generally non-refundable once generated, as these costs are paid directly to our courier partners (TCS, Leopard, and others). However, if a label was created in error (wrong address, duplicate label, incorrect weight) and has not been scanned by the courier, you may request a cancellation and refund within 24 hours of purchase. If a shipment is lost or damaged by the courier, the claim process is handled directly with the courier partner, and Blink N Ship will assist you in filing the claim. We do not profit from courier fees — they pass through at cost.",
            highlights: ["Labels refundable within 24hrs if unscanned", "Lost/damaged claims handled with courier", "No profit markup on courier fees", "Assistance with claim filing"],
            bg: "bg-white",
        },
        {
            id: "partial",
            number: "04",
            title: "Partial & Prorated Refunds",
            subtitle: "How we calculate partial refunds",
            body: "Partial refunds are calculated based on the number of full unused days remaining in your billing cycle. The calculation is: (Remaining Days / Total Days) × Amount Paid. We do not charge any administrative or processing fees on refunds — you get back exactly what you're owed. Refunds are issued to the original payment method within 5-10 business days. For payments made via JazzCash or other local methods, refunds are processed to your account within 3-5 business days. International payments via Stripe may take up to 10 business days to reflect.",
            highlights: ["No admin fees on refunds", "Refund to original payment method", "5-10 business days processing", "Exact prorated calculation"],
            bg: "bg-card",
        },
        {
            id: "exceptions",
            number: "05",
            title: "Exceptions & Non-Refundable Items",
            subtitle: "What is not covered by our refund policy",
            body: "While we aim to be as fair as possible, certain items are non-refundable. These include: shipping labels already scanned or in transit (these must be claimed through the courier's insurance process); add-on services purchased for specific orders that have already been fulfilled; third-party integration fees paid to external services; and any usage beyond the limits of your plan that incurred overage charges. Additionally, accounts terminated for violation of our Terms of Service are not eligible for refunds. We reserve the right to deny refund requests that appear fraudulent or abusive.",
            highlights: ["Scanned labels not refundable", "Fulfilled add-ons non-refundable", "No refunds for ToS violations", "Fraudulent claims denied"],
            bg: "bg-white",
        },
        {
            id: "process",
            number: "06",
            title: "How to Request a Refund",
            subtitle: "Simple 3-step process",
            body: "Requesting a refund is straightforward. First, log into your Blink N Ship account and navigate to Settings > Billing > Request Refund. Second, select the subscription or item you'd like refunded and provide a brief reason (optional, but helpful for us to improve). Third, submit your request — our billing team will review and process it within 2 business days. Alternatively, you can email us directly at hello@blinknship.com with the subject line \"Refund Request\" and your account email. We'll take care of the rest. You will receive a confirmation email once the refund is initiated.",
            highlights: ["In-app refund request in Settings", "2 business day review time", "Email alternative available", "Confirmation email sent"],
            bg: "bg-card",
        },
        {
            id: "chargebacks",
            number: "07",
            title: "Chargeback Policy",
            subtitle: "Our approach to payment disputes",
            body: "We understand that sometimes chargebacks are initiated in error. Before filing a chargeback with your bank or payment provider, please contact us directly at hello@blinknship.com. We resolve the vast majority of billing disputes directly and quickly, often within 24 hours. If a chargeback is filed without first contacting us, your account may be suspended until the dispute is resolved. If the chargeback is found to be in our favor, we will reinstate your account. Repeat chargebacks may result in permanent account closure. We believe direct communication resolves issues faster and more fairly than chargeback processes.",
            highlights: ["Contact us before chargeback", "24-hour dispute resolution", "Account suspended during chargeback", "Direct communication preferred"],
            bg: "bg-white",
        },
        {
            id: "contact-refund",
            number: "08",
            title: "Questions & Assistance",
            subtitle: "We're here to help with any refund questions",
            body: "If you have any questions about our refund policy, need help requesting a refund, or want to understand your eligibility, our support team is ready to assist. You can reach us via email at hello@blinknship.com, through WhatsApp at +92 300 1234567, or through the in-app chat. We typically respond within 4 hours during business hours (Monday to Saturday, 9 AM to 9 PM). For billing-specific inquiries, please include \"Billing\" in your subject line so we can route your request to the right team member faster.",
            highlights: ["Email: hello@blinknship.com", "WhatsApp: +92 300 1234567", "4-hour response time", "Use 'Billing' in subject for faster routing"],
            bg: "bg-card",
        },
    ],
    process: [
        { step: "01", title: "Submit Request", description: "Log into your account and go to Settings > Billing > Request Refund, or email us." },
        { step: "02", title: "We Review", description: "Our billing team reviews your request within 2 business days. We may reach out if we need clarification." },
        { step: "03", title: "Refund Issued", description: "Approved refunds are processed within 5-10 business days back to your original payment method." },
        { step: "04", title: "Confirmation", description: "You'll receive an email confirmation with the refund amount and expected arrival date." },
    ],
    highlights: [
        { icon: "Shield", value: "30-Day", label: "Money-Back Guarantee" },
        { icon: "Clock", value: "2 Days", label: "Refund Review Time" },
        { icon: "Zap", value: "100%", label: "No Admin Fees" },
        { icon: "Check", value: "5-10", label: "Business Days Processing" },
    ],
    cta: {
        title: "Still have questions about refunds?",
        subtitle: "Our support team is here to help. Reach out and we'll clarify everything.",
    },
};

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