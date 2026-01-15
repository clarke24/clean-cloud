// Hospitality Techs Content Data

export const siteConfig = {
  name: "Hospitality Techs",
  description: "Managed technical infrastructure for restaurants and cafés across the UK",
  tagline: "Tech that just works. So you can do what you love.",
  phone: "0800 XXX XXXX",
  email: "hello@hospitalitytechs.co.uk",
  address: "United Kingdom",
  serviceAreas: ["London", "South East", "Midlands", "North West", "Yorkshire", "Scotland"],
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const trustPoints = [
  { label: "24/7 Monitoring" },
  { label: "Automatic Failover" },
  { label: "Business Phones" },
  { label: "Fast Support" },
];

export const howItWorks = [
  {
    step: 1,
    title: "Standardise",
    description: "We audit your current setup and replace unreliable consumer-grade kit with business-grade infrastructure that's built to last.",
  },
  {
    step: 2,
    title: "Stabilise",
    description: "We configure everything for maximum uptime: 4G failover, priority traffic for your POS, and proper network segmentation.",
  },
  {
    step: 3,
    title: "Support",
    description: "One number to call. We monitor everything remotely and fix issues before you even notice them. No finger-pointing, no runaround.",
  },
];

export const highlightCards = [
  {
    title: "POS Protected",
    description: "Your card payments and bookings get network priority. Even during busy service, your POS stays fast and reliable.",
    icon: "shield-check",
  },
  {
    title: "Automatic Failover",
    description: "When broadband fails, 4G kicks in automatically. Keep taking payments without missing a beat.",
    icon: "wifi",
  },
  {
    title: "Never Miss Calls",
    description: "Professional business phones with voicemail to email. Even when you're busy, customers can leave a message.",
    icon: "phone",
  },
  {
    title: "One Provider",
    description: "No more calling three different companies. One accountable provider for your entire infrastructure layer.",
    icon: "users",
  },
];

export const whySwitch = [
  {
    title: "POS Priority on Failover",
    description: "Most providers don't understand hospitality. We ensure your payment systems get priority when running on backup.",
  },
  {
    title: "Guest Wi-Fi Cut on Failover",
    description: "When you're on 4G backup, guest Wi-Fi is automatically disabled to preserve bandwidth for business-critical systems.",
  },
  {
    title: "Remote-First Fixes",
    description: "80% of issues are fixed remotely within the hour. No waiting days for an engineer when you're mid-service.",
  },
  {
    title: "Proof via Monitoring",
    description: "Real-time dashboards show your uptime. No guesswork, no 'it seems to be working'. Just data.",
  },
];

// Detailed service definitions
export const services = {
  menu: [
    {
      id: "core-network",
      title: "Core Network & Wi-Fi Management",
      description: "The foundation of reliable operations",
      mandatory: true,
      whatYouGet: [
        "Business-grade router and networking hardware provided, owned, and maintained by us",
        "Secure, segmented network: POS and staff devices are protected, guest Wi-Fi cannot interfere with payments or bookings",
        "Professionally configured Wi-Fi with consistent coverage throughout your venue",
        "Secure remote access so most issues can be fixed without a site visit",
        "Continuous monitoring of internet connectivity and network health",
        "Priority support during business hours",
      ],
      whatItMeans: [
        "Your Wi-Fi is stable and predictable—no more random dropouts",
        "Payments and bookings aren't affected by guest usage",
        "If something breaks, we usually know before you do",
      ],
      included: [
        "Hardware replacement for faults or failure",
        "Firmware updates and security patches",
        "Ongoing configuration management",
        "1 access point included (more available if needed)",
      ],
      features: [
        "Business-grade router and access points",
        "Network segmentation (staff, POS, guests)",
        "Traffic prioritisation for payment systems",
        "Remote monitoring and management",
        "Firmware updates handled for you",
      ],
      pricing: "Included in all packages",
    },
    {
      id: "failover",
      title: "4G/5G Failover",
      description: "Keep running when broadband fails",
      mandatory: false,
      whatYouGet: [
        "Built-in cellular backup connection",
        "Automatic switch if your main broadband fails",
        "Smart behaviour during outages: POS and staff stay online, guest Wi-Fi is disabled to preserve performance",
        "Monitoring and alerts when failover activates",
      ],
      whatItMeans: [
        "You can keep taking payments and calls even during outages",
        "No manual switching or staff intervention required",
        "Reduced risk during peak service times",
      ],
      included: [
        "Failover hardware fully configured",
        "Regular failover testing",
        "Ongoing firmware and configuration updates",
      ],
      note: "Mobile data plan is billed separately at cost",
      features: [
        "Automatic switchover in seconds",
        "POS systems get priority bandwidth",
        "Guest Wi-Fi disabled on failover",
        "SMS/email alerts when failover activates",
        "Return to primary automatically",
      ],
      pricing: "Add-on: £50/mo + data",
    },
    {
      id: "phones",
      title: "Business Phones & Answering",
      description: "Professional phone system with flexibility",
      mandatory: false,
      whatYouGet: [
        "A proper business phone number (new or ported from your current provider)",
        "Calls ring through to staff mobiles or a handset if you choose",
        "Opening hours and out-of-hours greeting",
        "Voicemail delivered straight to email",
        "Missed call notifications so you never lose a booking",
      ],
      whatItMeans: [
        "Fewer missed booking calls—customers can always leave a message",
        "No single phone tied to the building",
        "Calls still reach you even if the internet goes down",
      ],
      included: [
        "Call flow setup and testing",
        "Ongoing management and changes",
        "Provider-level fallback routing",
        "System updates and maintenance",
      ],
      note: "Call usage is billed at cost",
      features: [
        "Professional greeting and hold music",
        "Voicemail to email",
        "Call forwarding to mobile",
        "Missed call notifications",
        "Multiple extensions available",
      ],
      pricing: "Add-on: £40/mo per line + calls",
    },
    {
      id: "website",
      title: "Website Hosting",
      description: "Fast, secure hosting for your website",
      mandatory: false,
      whatYouGet: [
        "Fast, secure hosting for your existing website",
        "SSL security certificate included",
        "Uptime monitoring",
        "Minor content updates (menus, hours, text changes)",
      ],
      whatItMeans: [
        "Your website stays online and secure",
        "You don't need to deal with hosting companies",
        "Small updates don't require a web developer",
      ],
      included: [
        "Hosting infrastructure",
        "Monitoring and basic maintenance",
        "Configuration backups",
      ],
      note: "You provide the website files—we don't redesign sites",
      features: [
        "You provide the website files",
        "SSL certificate included",
        "Fast UK-based hosting",
        "Daily backups",
        "Basic security monitoring",
      ],
      pricing: "Add-on: £25/mo",
    },
    {
      id: "email-domain",
      title: "Email & Domain Management",
      description: "Professional email that matches your brand",
      mandatory: false,
      whatYouGet: [
        "Full management of your business domain",
        "Secure DNS configuration",
        "Business email account administration",
        "Joiner/leaver handling for staff",
        "Password resets and access control",
        "Email deliverability setup (reduces spam issues)",
      ],
      whatItMeans: [
        "You always know who owns your domain",
        "Email works reliably and looks professional",
        "Staff changes are handled quickly and safely",
      ],
      included: [
        "Ongoing security updates",
        "DNS and email configuration backups",
        "Administrative changes as part of normal support",
      ],
      extraValue: {
        title: "Custom branded email signatures for all staff",
        items: [
          "Logo",
          "Name and role",
          "Phone number",
          "Website or booking link",
        ],
      },
      note: "Email licences are billed at cost from the provider",
      features: [
        "Custom domain email (@yourrestaurant.com)",
        "Branded email signatures",
        "Domain registration and renewal",
        "Spam and virus protection",
        "5GB mailbox per user",
      ],
      pricing: "Add-on: £8/mo per mailbox",
    },
    {
      id: "backup",
      title: "Backup & Disaster Recovery",
      description: "Peace of mind for critical data",
      mandatory: false,
      whatYouGet: [
        "Automated off-site backups of critical systems we manage",
        "Encrypted storage with retention history",
        "Ability to restore systems or configurations if needed",
        "Periodic restore testing",
      ],
      whatItMeans: [
        "If something goes wrong, recovery is possible",
        "Reduced risk from hardware failure or mistakes",
        "Peace of mind that your systems aren't 'single copy only'",
      ],
      included: [
        "Backup monitoring",
        "Backup health alerts",
        "Ongoing maintenance of backup systems",
      ],
      features: [
        "Automated daily backups",
        "Off-site storage",
        "Quick restore capability",
        "Configuration backup",
        "Disaster recovery planning",
      ],
      pricing: "Add-on: £35/mo",
    },
    {
      id: "managed-device",
      title: "Managed Office Device",
      description: "Protection for your back-office computers",
      mandatory: false,
      whatYouGet: [
        "Automated encrypted backups of important files",
        "Scheduled operating system updates",
        "Basic security baseline (encryption, antivirus)",
        "Device inventory and tracking",
      ],
      whatItMeans: [
        "Office PCs used for payroll or accounts are protected",
        "Less risk of data loss",
        "Devices stay updated without manual effort",
      ],
      included: [
        "Backup monitoring",
        "Restore assistance if needed",
        "Ongoing update management",
      ],
      note: "This does not include general IT helpdesk or printer support",
      features: [
        "Encrypted backups",
        "OS updates managed",
        "Security baseline",
        "Device tracking",
      ],
      pricing: "Add-on: £15/mo per device",
    },
  ],
  packages: [
    {
      id: "core",
      name: "Core",
      description: "Essential infrastructure for single-site operations",
      monthlyPrice: 199,
      installPrice: 500,
      popular: false,
      features: [
        "Core Network & Wi-Fi Management",
        "Remote monitoring",
        "Email support",
        "Next business day response",
      ],
    },
    {
      id: "uptime",
      name: "Uptime",
      description: "Maximum reliability with automatic failover",
      monthlyPrice: 299,
      installPrice: 549,
      popular: true,
      features: [
        "Everything in Core",
        "4G/5G Failover included",
        "Business phone line",
        "Priority support (4hr response)",
        "Monthly uptime reports",
      ],
    },
    {
      id: "total-cover",
      name: "Total Cover",
      description: "Complete infrastructure coverage",
      monthlyPrice: 399,
      installPrice: 649,
      popular: false,
      features: [
        "Everything in Uptime",
        "Website hosting",
        "Email & domain management",
        "Backup & disaster recovery",
        "Dedicated account manager",
        "2hr response SLA",
      ],
    },
  ],
  discounts: [
    { locations: "2-5", discount: 10 },
    { locations: "6+", discount: 15 },
  ],
};

// What's included across all services
export const allServicesInclude = [
  "Hardware we supply is maintained and replaced if it fails",
  "Systems are kept up to date and secure",
  "Monitoring runs continuously",
  "You have one point of contact for support",
  "Changes are handled calmly and professionally",
];

// What we don't do (for clarity)
export const whatWeDontDo = {
  intro: "We focus on infrastructure, not everything with a plug. This keeps the service reliable, predictable, and fairly priced.",
  items: [
    { item: "Fix POS software bugs", reason: "Contact your POS provider" },
    { item: "Support card terminals", reason: "Contact your payment processor" },
    { item: "Troubleshoot printers", reason: "Contact your printer supplier" },
    { item: "Manage personal devices", reason: "Outside business scope" },
    { item: "Act as a general IT helpdesk", reason: "We're infrastructure specialists" },
    { item: "Build or redesign websites", reason: "We host, not design" },
    { item: "Manage CCTV or AV systems", reason: "Separate specialist area" },
  ],
};

export const faqs = [
  {
    question: "What exactly do you manage?",
    answer: "We manage the infrastructure layer: your internet connection, Wi-Fi network, business phones, website hosting, email, and domains. Everything a modern restaurant needs to operate reliably. We own and maintain the hardware, handle all updates, and monitor everything 24/7.",
  },
  {
    question: "What don't you manage?",
    answer: "We don't fix POS software bugs, card terminal issues, printers, personal devices, or kitchen equipment. We manage the infrastructure that connects everything, not the individual systems themselves. This focused approach lets us deliver a reliable, predictable service.",
  },
  {
    question: "How quickly can you respond to issues?",
    answer: "Response times depend on your package: next business day for Core, 4 hours for Uptime, and 2 hours for Total Cover. Most issues are detected by our monitoring before you even notice them—and many are fixed remotely without you needing to do anything.",
  },
  {
    question: "Do we need new equipment?",
    answer: "Usually yes. Consumer-grade routers and kit from your ISP aren't built for busy hospitality environments. We install business-grade equipment designed for reliability. All hardware is included—we own it, maintain it, and replace it if it fails.",
  },
  {
    question: "What happens if our broadband goes down?",
    answer: "With our Uptime or Total Cover packages, your 4G failover kicks in automatically within seconds. Your card machines and booking systems keep working. Guest Wi-Fi is automatically disabled to preserve bandwidth for what matters most.",
  },
  {
    question: "Can you help with multiple locations?",
    answer: "Absolutely. We offer 10% off monthly fees for 2-5 locations and 15% off for 6+. All locations are managed from a single dashboard with consistent setup and one point of contact.",
  },
  {
    question: "What about our existing phone number?",
    answer: "We can port your existing number to our phone system at no extra cost. No need to reprint menus or update your website. The process typically takes 1-2 weeks.",
  },
  {
    question: "How long does installation take?",
    answer: "Typically 2-3 hours per location. We schedule installations during quiet hours to minimise disruption—usually early morning or late evening. We'll agree the timing with you in advance.",
  },
];

export const aboutValues = [
  {
    title: "Simplicity",
    description: "One provider, one number to call, one bill. No complexity, no runaround.",
  },
  {
    title: "Accountability",
    description: "When something breaks, it's our problem. No finger-pointing between providers.",
  },
  {
    title: "Reliability",
    description: "Business-grade kit, proper configuration, continuous monitoring. Built to last.",
  },
  {
    title: "Transparency",
    description: "Real-time dashboards, honest pricing, no hidden fees. You always know where you stand.",
  },
];

export const aboutProcess = [
  {
    step: 1,
    title: "Discovery",
    description: "We visit your site, audit your current setup, and understand your specific needs.",
  },
  {
    step: 2,
    title: "Proposal",
    description: "Clear, fixed-price quote with no surprises. We explain exactly what you're getting.",
  },
  {
    step: 3,
    title: "Installation",
    description: "Professional installation during quiet hours. Minimal disruption to your service.",
  },
  {
    step: 4,
    title: "Handover",
    description: "We walk you through everything and make sure you're comfortable before we leave.",
  },
  {
    step: 5,
    title: "Ongoing Support",
    description: "24/7 monitoring, proactive maintenance, and a single number to call when you need us.",
  },
];

export const serviceInterests = [
  { id: "core-network", label: "Core Network & Wi-Fi" },
  { id: "failover", label: "4G/5G Failover" },
  { id: "phones", label: "Business Phones" },
  { id: "website", label: "Website Hosting" },
  { id: "email-domain", label: "Email & Domain" },
  { id: "backup", label: "Backup & Recovery" },
  { id: "managed-device", label: "Managed Office Device" },
];
