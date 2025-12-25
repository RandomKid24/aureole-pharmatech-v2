
import { ManifestoItem, VentureItem, JobPosting, CareerBenefit, SoftwareBenefit, NavLink, ServiceFeature, ServiceLocation } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home', action: 'home' },
  { label: 'About', href: '#about', action: 'about' },
  { label: 'Products', href: '#products', action: 'products' },
  { label: 'Services', href: '#services', action: 'services' },
  { label: 'Software', href: '#software', action: 'software' },
  { label: 'Events', href: '#events', action: 'home' },
  { label: 'Careers', href: '#careers', action: 'careers' },
];

export const MANIFESTO_ITEMS: ManifestoItem[] = [
  {
    letter: 'A',
    title: 'Adherence',
    description: "We consistently and faithfully adhere to our industry's set of rules, guidelines, standards, and expectations."
  },
  {
    letter: 'U',
    title: 'Ubiquitous',
    description: 'Our products are readily available and widely used throughout the industry. We are recognized as a leader in the pharmaceutical industry, maintaining a strong presence and offering a wide range of pharmaceutical equipment and services.'
  },
  {
    letter: 'R',
    title: 'Recognition',
    description: 'Aureole has earned a positive reputation and gained visibility in our sector through multiple success stories.'
  },
  {
    letter: 'E',
    title: 'Expertise',
    description: 'With our high level of skill, knowledge, and proficiency, we provide valuable insights, solve complex problems, make informed decisions, and make significant contributions to the field of pharmaceutical equipment.'
  },
  {
    letter: 'O',
    title: 'Optimal',
    description: 'Our commitment to optimal performance ensures that all equipment is manufactured to the highest quality standards, in compliance with relevant regulations and industry guidelines.'
  },
  {
    letter: 'L',
    title: 'Longevity',
    description: "Longevity signifies our commitment to sustainable practices, ensuring our organization's lasting presence in the pharmaceutical fraternity for years to come."
  },
  {
    letter: 'E',
    title: 'Enthusiastic',
    description: 'Our teams are highly enthusiastic, driven by the desire to achieve great goals and deliver their best performance. Our people are our most valuable assets, and we hold them in the highest regard.'
  }
];

export const VENTURES: VentureItem[] = [
  {
    year: "2012",
    title: "Adityam Foundation – Kiran Aashecha",
    description: "An NGO driving social welfare, education, healthcare, and rural development initiatives in Nashik, Maharashtra. Founded in 2012 by Dr. Kiran Badgujar, dedicated to improving lives through compassion-driven initiatives.",
    linkText: "Visit",
    linkHref: "#"
  },
  {
    year: "2012",
    title: "Mack Auraa Healthcare Pvt. Ltd.",
    description: "Focuses on veterinary healthcare, producing products that enhance livestock well-being and farm productivity.",
    linkText: "Visit",
    linkHref: "#"
  },
  {
    year: "2019",
    title: "Aureole Process Equipments Pvt. Ltd.",
    description: "Specializes in high-quality process equipment for the pharmaceutical and biotech industries, supplying autoclaves, sterilizers, and distillation plants globally.",
    linkText: "Visit",
    linkHref: "#"
  },
  {
    year: "2021",
    title: "Aureole Pharma Pvt. Ltd.",
    description: "Established under Dr. Kiran Badgujar, Aureole Pharma manufactures advanced pharmaceutical equipment, including stability chambers and lab instruments, serving clients across India.",
    linkText: "Visit",
    linkHref: "#"
  },
  {
    year: "2024",
    title: "Swapnkiran Resort",
    description: "An eco-friendly agro-tourism resort near Trimbakeshwar, Nashik, offering serene stays and sustainable farm experiences.",
    linkText: "Visit",
    linkHref: "#"
  }
];

export const SOFTWARE_CONTENT = {
  hero: {
    title: "SIS-APP",
    subtitle: "Secure and Integrated Solutions for Applications, Products, and Processes",
    badge: "21 CFR Part 11 Compliance Software"
  },
  intro: {
    text: "In the fast-paced landscape of today's business world, the need for secure and seamlessly integrated solutions for applications, products, and processes has reached unprecedented levels. Our system and software are designed to deliver secure and integrated solutions for applications, products, and processes, ensuring the utmost protection and efficiency.",
    subtext: "SIS-APP efficiently manages sensitive data across various applications, products, and organizational processes, guaranteeing robust security and compliance with defined procedures."
  },
  featuresIntro: "Comprehensive software solution with advanced features for pharmaceutical compliance and data management.",
  features: [
    "Secured Audit Trail",
    "E-Records & E-Signature",
    "MKT (Mean Kinetic Temperature)",
    "Unlimited Equipment Connectivity",
    "Real Time Equipment Display",
    "Graphical Analysis",
    "First Time Password Change",
    "Alpha Numeric Password",
    "Multilevel Authorization",
    "Offline Analysis",
    "PDF Data Export",
    "Real Time Parameter Setting",
    "MySQL Database",
    "Automated Backup",
    "Auto Logout & Account Security",
    "Comprehensive Data Logging",
    "Multi Browser Support",
    "Time Synchronization",
    "Master & Scanner Reports",
    "Company Logo on Reports",
    "Guaranteed Data Integrity",
    "Department Wise Access",
    "Communication Fail Alerts",
    "Password Protected Door Operation",
    "Two Way Door Control",
    "Group Wise Printing",
    "Advanced Search Facility"
  ],
  benefits: [
    {
      title: "21 CFR Part 11 Compliance",
      description: "Full compliance with FDA regulations for electronic records and signatures, ensuring regulatory approval."
    },
    {
      title: "Enterprise-Grade Security",
      description: "Multi-level authorization, audit trails, and encrypted data transmission for maximum protection."
    },
    {
      title: "Real-Time Equipment Monitoring",
      description: "Live parameter tracking, MKT calculations, and instant alerts for critical operations."
    },
    {
      title: "Scalable Architecture",
      description: "MySQL database with automated backups and unlimited equipment connectivity support."
    },
    {
      title: "Advanced Analytics & Reporting",
      description: "Comprehensive data logging, graphical analysis, and customizable PDF reports with company branding."
    },
    {
      title: "Cross-Platform Accessibility",
      description: "Multi-browser support with responsive design for desktop, tablet, and mobile access."
    }
  ] as SoftwareBenefit[],
  contact: {
    title: "Contact Us to Experience the Difference",
    address: "Plot No. B - 61, Malegaon MIDC, Tal - Sinnar, Dist - Nashik 422 113 Maharashtra, India",
    email: "connect@aureolepharmatech.com",
    phone: "+91 86248 58551",
    tagline: "Experience the power of enterprise-grade pharmaceutical software that ensures compliance, security, and operational excellence."
  }
};

export const CAREERS_CONTENT = {
  hero: {
    title: "Join Our Team",
    subtitle: "Be part of a team that's revolutionizing pharmaceutical technology and laboratory equipment innovation",
    text: "Join our dynamic team and contribute to the future of pharmaceutical laboratory equipment and technology."
  },
  benefits: [
    {
      title: "Innovation",
      description: "Work on cutting-edge pharmaceutical technology"
    },
    {
      title: "Growth",
      description: "Continuous learning and career development"
    },
    {
      title: "Impact",
      description: "Make a difference in healthcare technology"
    }
  ] as CareerBenefit[],
  jobs: [
    {
      title: "Service Engineer",
      experience: "1–5 years (Pharma industry or Pharma equipment line)",
      type: "Full-time, On-site & Remote",
      status: "Open",
      qualifications: [
        "B.E – Electrical / Instrumentation / Electronics / Mechanical",
        "Diploma – Electrical / Instrumentation / Electronics / Mechanical",
        "B.Sc – Electronics or Physics",
        "ITI – Electrical / Refrigeration"
      ],
      responsibilities: [
        "Installation, Service, AMC, Calibration, and Maintenance of Laboratory Equipment",
        "Handle complete end-to-end installation and service support",
        "Strong technical background in Electrical, Electronics, and Refrigeration",
        "Understand product technical specifications, functionality, and applications",
        "Basic knowledge of PLC & HMI is preferred",
        "Knowledge of electrical components: Contactor, Sensor, Timer, Temperature Controller, SSR, SMPS, MCB, Electrical Wiring",
        "Customer-facing role, including remote support for client queries",
        "Support QA and QC departments with documentation and process requirements",
        "Good communication, interpersonal, and computer skills (MS Excel, PowerPoint, Word)",
        "Outdoor role with travel as per requirement",
        "High ethical standards, positive attitude, and adherence to company policies"
      ]
    },
    {
      title: "Service Engineer (Junior)",
      experience: "0–1 years (Pharma industry or Pharma equipment line)",
      type: "Full-time, On-site & Remote",
      status: "Open",
      qualifications: [
        "B.E – Electrical / Instrumentation / Electronics / Mechanical",
        "Diploma – Electrical / Instrumentation / Electronics / Mechanical",
        "B.Sc – Electronics or Physics",
        "ITI – Electrical / Refrigeration"
      ],
      responsibilities: [
        "Assist in Installation, Service, AMC, Calibration, and Maintenance of Laboratory Equipment",
        "Support in end-to-end installation and service activities",
        "Technical background in Electrical, Electronics, and Refrigeration",
        "Understanding of product specifications, functions, and applications",
        "Basic PLC & HMI knowledge (preferred)",
        "Familiarity with electrical components: Contactor, Sensor, Timer, Temperature Controller, SSR, SMPS, MCB, Electrical Wiring",
        "Customer support role (including remote assistance)",
        "Assist QA and QC departments with documentation support",
        "Good communication, interpersonal, and computer skills (MS Excel, PowerPoint, Word)",
        "Outdoor role with travel as per requirement",
        "Positive attitude, ethics, and adherence to company policies"
      ]
    }
  ] as JobPosting[]
};

export const CONTACT_INFO = {
  address: "Plot No. B – 61, Malegaon MIDC, Tal – Sinnar, Dist – Nashik 422 113 Maharashtra, India",
  phone: "+91 86005 22240",
  email: "enquiry@aureolepharmatech.com"
};

export const MARQUEE_TEXT = "TRUSTED BY AUROBINDO • DABUR • INTAS • ERIS • TCG LIFESCIENCES • RECIPHARM • HETERO • MERIL • ENGINEERING PRECISION • 28 YEARS EXPERIENCE • ";

// Added ABOUT_CONTENT for About page to fix error in About.tsx
export const ABOUT_CONTENT = {
  heroDescription: "Since 1996, Aureole Pharma-Tech has been at the forefront of environmental control technology, providing critical infrastructure for global pharmaceutical research and quality control.",
  director: {
    title: "Director's Desk",
    name: "Dr. Kiran Badgujar",
    role: "Director – Aureole Group",
    message: "At Aureole, we believe that precision is the foundation of scientific progress. Our journey started over two decades ago with a simple mission: to build the most reliable environmental control systems in the industry.\n\nToday, as we support the world's leading pharmaceutical companies, that mission remains unchanged. We don't just build chambers; we build the trust that allows researchers to focus on what matters most—saving lives."
  },
  visionMissionGoal: [
    {
      title: "Our Vision",
      text: "To be the global benchmark for excellence in pharmaceutical environmental control and laboratory instrumentation."
    },
    {
      title: "Our Mission",
      text: "Empowering scientists with precision-engineered solutions that ensure the highest standards of safety, quality, and regulatory compliance."
    },
    {
      title: "Our Goal",
      text: "Continuous innovation and expansion into new frontiers of laboratory technology while maintaining our legacy of trust."
    }
  ]
};

// Added SERVICE_INTRO for Services page to fix error in Services.tsx
export const SERVICE_INTRO = {
  subtitle: "We provide comprehensive support and maintenance services globally."
};

// Added SERVICE_FEATURES for Services page to fix error in Services.tsx
export const SERVICE_FEATURES: ServiceFeature[] = [
  {
    title: "On-Site Installation",
    description: "Expert setup and commissioning of all equipment by certified engineers.",
    icon: "Factory"
  },
  {
    title: "Annual Maintenance",
    description: "Scheduled check-ups and preventative maintenance to ensure peak performance.",
    icon: "Layers"
  },
  {
    title: "Calibration Services",
    description: "NABL traceable calibration for temperature and humidity sensors.",
    icon: "Award"
  },
  {
    title: "24/7 Technical Support",
    description: "Round-the-clock assistance for critical equipment issues.",
    icon: "Headphones"
  }
];

// Added SERVICE_LOCATIONS for Services page to fix error in Services.tsx
export const SERVICE_LOCATIONS: ServiceLocation[] = [
  { city: "Mumbai", x: 20, y: 70 },
  { city: "Hyderabad", x: 40, y: 75 },
  { city: "Ahmedabad", x: 15, y: 60 },
  { city: "Bangalore", x: 35, y: 85 },
  { city: "Pune", x: 22, y: 72 },
  { city: "Delhi", x: 30, y: 30 },
  { city: "Chennai", x: 45, y: 90 },
  { city: "Baddi", x: 32, y: 25 }
];
