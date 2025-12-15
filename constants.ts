import { ManifestoItem, ProductItem, NavLink, VentureItem, StandardItem, ProductCategory, ServiceFeature, ServiceLocation, SoftwareFeature, SoftwareBenefit, JobPosting, CareerBenefit } from './types';

// ==================================================================================
// MANIFESTO / VALUES SECTION ("The Aureole Standard")
// ==================================================================================
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

// ==================================================================================
// PRODUCTS SECTION (Sticky Scroll - Home Page)
// ==================================================================================
export const PRODUCTS: ProductItem[] = [
  {
    id: 1,
    title: "Stability Chambers",
    subtitle: "Environmental Control",
    description: "Precision-engineered chambers for pharmaceutical stability testing, ensuring strict environmental compliance.",
    imageUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2000&auto=format&fit=crop",
    stats: [
      { label: "Control", value: "±0.1°C" },
      { label: "Compliance", value: "ICH/FDA" }
    ]
  },
  {
    id: 2,
    title: "Table Top Instruments",
    subtitle: "QC & Research",
    description: "Compact, high-performance instruments designed for quality control and advanced research applications.",
    imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop",
    stats: [
      { label: "Precision", value: "Micro" },
      { label: "Reliability", value: "100%" }
    ]
  },
  {
    id: 3,
    title: "Laboratory Furniture",
    subtitle: "Ergonomic Systems",
    description: "Modular, durable, and ergonomic furniture systems designed to optimize laboratory workflows and safety.",
    imageUrl: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2000&auto=format&fit=crop",
    stats: [
      { label: "Durability", value: "25yr+" },
      { label: "Modular", value: "Yes" }
    ]
  }
];

// ==================================================================================
// NAVIGATION
// ==================================================================================
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home', action: 'home' },
  { label: 'About', href: '#about', action: 'about' },
  { label: 'Products', href: '#products', action: 'products' },
  { label: 'Services', href: '#services', action: 'services' },
  { label: 'Software', href: '#software', action: 'software' },
  { label: 'Events', href: '#events', action: 'home' },
  { label: 'Careers', href: '#careers', action: 'careers' },
];

// ==================================================================================
// ABOUT PAGE CONTENT
// ==================================================================================
export const ABOUT_CONTENT = {
  heroTitle: "About Aureole Group",
  heroDescription: "A dynamic family of companies spanning pharmaceutical solutions, process equipment, animal healthcare, social outreach, and hospitality—all grounded in quality, innovation, and integrity.",
  heroBadge: "28+ years of excellence",
  
  director: {
    title: "Director’s Desk",
    name: "Dr. Kiran Badgujar",
    role: "Founder & Director – Aureole Group",
    message: `It gives me immense pride to address you from the Director’s Desk at Aureole Group. What began as a vision has today flourished into a dynamic family of companies-spanning pharmaceutical solutions, process equipment, animal healthcare, social outreach, and hospitality-all grounded in quality, innovation, and integrity.

With over 27 years of experience in the pharmaceutical industry, my journey has been driven by the belief that excellence is not an act, but a habit. Whether it’s through cutting-edge technologies at Aureole PharmaTech and Aureole Process Equipment, holistic care via Mack Auraa Veterinary Healthcare, community service with Adityam Foundation, or hospitality offerings like Swapnkiran Resort, our mission remains steadfast-to improve lives with purpose.

In 2022, we were honored with the India 500 CEO Award, and I’m thrilled to share our latest recognition: the Maharashtra Udyogratna Puraskar 2025, celebrating our entrepreneurial spirit and industry impact.

I firmly believe that innovation and compassion must go hand in hand. As we progress, I extend my deepest gratitude to our colleagues, partners, and clients—your trust fuels our passion and drives our vision forward.`,
    closing: "Warm regards,"
  },

  visionMissionGoal: [
    {
      title: "Our Vision",
      text: "To be at the forefront of the pharmaceutical industry, redefining excellence through innovation, quality, and sustainability. Guided by integrity, collaboration, and visionary leadership, we aim to set the gold standard for healthcare technologies and leave a legacy of healthier lives and brighter futures."
    },
    {
      title: "Our Mission",
      text: "Our mission is to lead with innovation, uphold the highest quality standards, and promote sustainability in pharmaceutical solutions. Through integrity and transparency, we strive to make a meaningful difference in people's lives with accessible and cutting-edge pharmaceutical technologies."
    },
    {
      title: "Our Goal",
      text: "Our paramount goal is to revolutionize multiple industries by consistently delivering innovative solutions, advanced technologies, and unmatched quality in pharmaceutical equipment and services. We are committed to driving healthcare advancements, contributing to scientific progress, and improving lives worldwide."
    }
  ],

  venturesSubtitle: "A diverse portfolio of companies dedicated to improving lives across multiple industries"
};

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

// ==================================================================================
// FULL PRODUCT CATALOG (New Product Page)
// ==================================================================================
export const PRODUCT_STANDARDS: StandardItem[] = [
  { title: "ICH Guidelines", subtitle: "International Council for Harmonisation" },
  { title: "CE Approved", subtitle: "European Conformity Standards" },
  { title: "21 CFR Part 11", subtitle: "FDA Electronic Records Compliance" }
];

export const PRODUCT_CATALOG: ProductCategory[] = [
  {
    id: "stability",
    title: "Stability Chambers",
    description: "Stability chambers are precision-engineered environmental control systems designed to provide accurate and consistent temperature and humidity conditions. They play a vital role in the pharmaceutical industry, ensuring that products maintain their quality, safety, and efficacy throughout their intended shelf life.",
    groups: [
      {
        title: "Walk In Chambers",
        items: [
          "Walk In Humidity Chamber",
          "Walk In Cold Chamber",
          "Walk In BOD Incubator",
          "Walk In Deep Freezer"
        ]
      },
      {
        title: "Humidity & Stability",
        items: [
          "Humidity Chamber / Stability Chamber",
          "Photostability Chamber"
        ]
      },
      {
        title: "Incubators & Ovens",
        items: [
          "BOD Incubator",
          "Hot Air Oven",
          "Vacuum Oven",
          "Muffle Furnace"
        ]
      },
      {
        title: "Temperature Control",
        items: [
          "Cold Chamber",
          "Deep Freezer (upto -20°C / upto -40°C)",
          "Ultra Low Deep Freezer (-80°C)",
          "Pharma Refrigerator / Dual Zone Chamber"
        ]
      }
    ]
  },
  {
    id: "tabletop",
    title: "Table Top Instruments",
    description: "Table top instruments are compact, versatile laboratory devices designed to support a wide range of quality control, research, and testing applications. With precise temperature regulation, agitation, cleaning, and analytical support, these instruments are essential tools for maintaining accuracy, compliance, and efficiency in modern laboratories.",
    groups: [
      {
        title: "Ultrasonic Baths",
        items: [
          "Eco Series",
          "Prime Series",
          "Prime Series with Chilling",
          "Prime Series with Advance Controlling",
          "Prime Series with Heating & Shaking",
          "Industrial Series"
        ]
      },
      {
        title: "Water Baths",
        items: [
          "Constant",
          "Circulating",
          "Steam Bath",
          "Oil Bath",
          "Dry Bath",
          "Chilled Circulating Bath",
          "Refrigerated Circular Bath"
        ]
      },
      {
        title: "Air Sampler",
        items: [
          "Basic Model",
          "21 CFR Model"
        ]
      },
      {
        title: "Accessories",
        items: [
          "Stainless Steel Items & Accessories"
        ]
      }
    ]
  },
  {
    id: "furniture",
    title: "Laboratory Furniture",
    description: "Laboratory furniture systems designed to provide ergonomic, durable, and functional workspaces for modern laboratories. Our comprehensive range includes modular systems, specialized workstations, and storage solutions that meet the highest standards of safety, efficiency, and compliance.",
    groups: [
      {
        title: "Frame Systems",
        items: [
          "C-Frame System",
          "H-Frame System",
          "Plinth & Pedestal System"
        ]
      },
      {
        title: "Work Surfaces",
        items: [
          "Laboratory Worktops"
        ]
      },
      {
        title: "Safety Equipment",
        items: [
          "Fume Cupboards"
        ]
      },
      {
        title: "Installations",
        items: [
          "Laboratory Fittings",
          "Hardware"
        ]
      },
      {
        title: "Storage Solutions",
        items: [
          "Storage Cabinets",
          "Lab Accessories"
        ]
      }
    ]
  }
];

// ==================================================================================
// SERVICES PAGE CONTENT
// ==================================================================================
export const SERVICE_INTRO = {
  title: "Support Services",
  subtitle: "In the ever-evolving pharmaceutical landscape, quality and customer service are the cornerstones of success. Aureole Pharma Pvt. Ltd. stands out as a beacon of excellence in this competitive industry."
};

export const SERVICE_FEATURES: ServiceFeature[] = [
  {
    title: "Quality Standards",
    description: "At Aureole PharmaTech, quality is uncompromising. The organization maintains stringent regulatory compliance and holds multiple certifications that reflect global benchmarks. Its internally enforced quality control processes ensure every product dispatched is both safe and effective.",
    icon: "Award"
  },
  {
    title: "Robust Communication & After-Sales Support",
    description: "Customers benefit from multiple responsive communication channels—phone, email, and online forms—ensuring efficient handling of inquiries and complaints. Post-purchase support is equally comprehensive, with warranty policies, prompt safety notifications, and customer education initiatives reinforcing the company's commitment.",
    icon: "Headphones"
  },
  {
    title: "Manufacturing Excellence",
    description: "Leveraging advanced manufacturing facilities equipped with state-of-the-art technology, Aureole PharmaTech combines skilled personnel with continuous training programs. This synergy ensures that every product aligns with the highest quality standards.",
    icon: "Factory"
  },
  {
    title: "Comprehensive Product Portfolio",
    description: "Aureole PharmaTech crafts a wide array of pharmaceutical equipment, including—but not limited to—stability chambers, walk-in chambers, vertical autoclaves, cold chambers, dual-zone chambers, and tabletop instruments.",
    icon: "Layers"
  },
  {
    title: "Diverse & Innovative Product Range",
    description: "From essential medications to advanced formulations, the company's portfolio is both broad and forward-thinking. Each product stems from a meticulous R&D process emphasizing safety, efficacy, and adaptability to evolving healthcare needs.",
    icon: "Lightbulb"
  },
  {
    title: "Global Reach & Adaptability",
    description: "Aureole PharmaTech operates across diverse regulatory environments, reinforcing its international presence through strategic partnerships and collaborations that cater to a broad, global clientele.",
    icon: "Globe"
  },
  {
    title: "Customer-Centric Service Philosophy",
    description: "Building long-term client relationships is central to the company's strategy. By valuing customer feedback and proactively addressing needs, Aureole fosters trust and loyalty through consistent delivery and service.",
    icon: "Users"
  },
  {
    title: "Sustainability & Corporate Responsibility",
    description: "Environmental stewardship and social performance are embedded in operations. The company undertakes ethical sourcing and production, environmental initiatives, and community-focused programs to ensure responsible and sustainable business practices.",
    icon: "Leaf"
  }
];

// Map coordinates estimated for a typical India SVG projection
// x: % from left, y: % from top
export const SERVICE_LOCATIONS: ServiceLocation[] = [
  { city: "Baddi", x: 30, y: 15 },
  { city: "Dehradun", x: 33, y: 18 },
  { city: "Delhi", x: 30, y: 22 },
  { city: "Haridwar", x: 33, y: 20 },
  { city: "Guwahati", x: 85, y: 35 },
  { city: "Ahmedabad", x: 15, y: 45 },
  { city: "Vadodara", x: 18, y: 48 },
  { city: "Vapi", x: 18, y: 52 },
  { city: "Pithampur", x: 28, y: 48 },
  { city: "Nashik", x: 22, y: 55 },
  { city: "Mumbai", x: 18, y: 58 },
  { city: "Pune", x: 22, y: 60 },
  { city: "Aurangabad", x: 25, y: 56 },
  { city: "Goa", x: 18, y: 72 },
  { city: "Hyderabad", x: 35, y: 65 },
  { city: "Bangalore", x: 30, y: 80 },
  { city: "Visakhapatnam", x: 45, y: 62 },
  { city: "Chennai", x: 40, y: 82 }
];

// ==================================================================================
// SOFTWARE PAGE CONTENT (SIS-APP)
// ==================================================================================
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
  ] as string[],
  
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

// ==================================================================================
// CAREERS PAGE CONTENT
// ==================================================================================
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
    },
    {
      title: "Sales & Marketing (Mid-Level)",
      experience: "2–5 years (Pharma Industry or Pharma Equipment line – Stability, Lab Equipment, Autoclaves, Pharma Equipment)",
      type: "Full-time, On-site & Remote",
      status: "Open",
      qualifications: [
        "MBA (Marketing) with background in: Electrical / Instrumentation / Electronics / Mechanical OR B. Pharmacy"
      ],
      responsibilities: [
        "Manage complete sales cycle: Enquiry → Order Generation → Order Closure",
        "Prepare and manage documentation (Quotations, Work Orders)",
        "Handle end-to-end responsibility for each enquiry/order",
        "Participate in outdoor client visits and frequent travel",
        "Support promotional activities & exhibition preparation",
        "Understand product specifications, applications, and technical aspects",
        "Strong communication, interpersonal, and computer skills (MS Excel, PowerPoint, Word)",
        "Outdoor job with travel as per schedule",
        "High ethical values, right attitude, and adherence to company policies"
      ]
    },
    {
      title: "Sales & Marketing (Junior)",
      experience: "0–2 years (Pharma Industry or Pharma Equipment line – Stability, Lab Equipment, Autoclaves, Pharma Equipment)",
      type: "Full-time, On-site & Remote",
      status: "Open",
      qualifications: [
        "MBA (Marketing) with background in: Electrical / Instrumentation / Electronics / Mechanical OR B. Pharmacy"
      ],
      responsibilities: [
        "Assist in complete sales cycle: Enquiry → Order Generation → Order Closure",
        "Support documentation requirements (Quotations, Work Orders)",
        "Assist in managing end-to-end enquiry/order responsibilities",
        "Participate in outdoor client visits and travel",
        "Support promotional activities & exhibitions",
        "Understand product specifications, functions, and applications",
        "Strong communication, interpersonal, and computer skills (MS Excel, PowerPoint, Word)",
        "Outdoor job with travel as per schedule",
        "Positive attitude, ethics, and adherence to company policies"
      ]
    }
  ] as JobPosting[]
};

// ==================================================================================
// CONTACT INFO (Footer)
// ==================================================================================
export const CONTACT_INFO = {
  address: "Plot No. B – 61, Malegaon MIDC, Tal – Sinnar, Dist – Nashik 422 113 Maharashtra, India",
  phone: "+91 86005 22240",
  email: "enquiry@aureolepharmatech.com"
};

// ==================================================================================
// MARQUEE TEXT
// ==================================================================================
export const MARQUEE_TEXT = "TRUSTED BY AUROBINDO • DABUR • INTAS • ERIS • TCG LIFESCIENCES • RECIPHARM • HETERO • MERIL • ENGINEERING PRECISION • 28 YEARS EXPERIENCE • ";