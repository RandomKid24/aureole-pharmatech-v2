import { ManifestoItem, ProductItem, NavLink, VentureItem, StandardItem, ProductCategory, ServiceFeature, ServiceLocation, SoftwareFeature, SoftwareBenefit, JobPosting, CareerBenefit, ProductDetail } from './types';

// Detailed Product Information for Technical Overlays
export const DETAILED_PRODUCTS: Record<string, ProductDetail> = {
  "Humidity Chamber / Stability Chamber": {
    id: "hc-01",
    name: "Humidity Chamber / Stability Chamber",
    category: "Stability Chambers",
    description: "Advanced humidity and stability chambers designed for precise environmental control in pharmaceutical, biotech, and research applications. These chambers provide accurate temperature and humidity conditions for stability testing, formulation development, and regulatory compliance.",
    mainFeatures: [
      "Precise temperature and humidity control",
      "Advanced sensor technology",
      "User-friendly interface",
      "Compliance with ICH, WHO, GMP, MHRA and FDA standards",
      "Energy-efficient operation",
      "Uniform airflow design"
    ],
    specifications: [
      { label: "Temperature Range", value: "20°C to 60°C" },
      { label: "Humidity Range", value: "40% to 95% RH" },
      { label: "Temperature Accuracy", value: "± 0.2°C" },
      { label: "Humidity Accuracy", value: "± 2.0% RH" },
      { label: "Temperature Uniformity", value: "± 1.0°C" },
      { label: "Humidity Uniformity", value: "± 3.0% RH" },
      { label: "Test Suitable for", value: "25°C & 60% RH, 30°C & 65% RH, 40°C & 75% RH, 30°C & 75% RH" },
      { label: "Low conditions available", value: "25°C & 40% RH, 40°C & 25% RH, 30°C & 35% RH" }
    ],
    compliance: ["ICH Q1A (R2)", "WHO Guidelines", "USFDA 21 CFR Part 11", "GMP", "MHRA"],
    regularAttributes: [
      "Inner outer door with proof silicon",
      "Water & steam Tank",
      "Low water indication",
      "Master & stand by sensor"
    ],
    addOnsAttributes: [
      "21 CFR part 11 Compliance",
      "Standby Refrigeration & Steam Generation System",
      "Scanner: 4 pt. temperature & humidity sensor",
      "Mobile Alert System",
      "Hooter System",
      "Door Access System (Numeric/Biometric)",
      "Extra Trays"
    ],
    tables: [
      {
        title: "Product Specifications Table",
        headers: ["Model", "Capacity (L)", "Int. Dim. (WxDxH)", "Ext. Dim. (WxDxH)", "Trays", "Power Supply"],
        rows: [
          ["AP_SA_HC-2.0_V**", "200", "660 x 450 x 700 mm", "785 x 780 x 1350 mm", "2", "Single Phase 230 V"],
          ["AP_SA_HC-4.0_V**", "400", "700 x 650 x 900 mm", "825 x 985 x 1550 mm", "3", "Single Phase 230 V"],
          ["AP_SA_HC-6.0_V**", "600", "750 x 750 x 1075 mm", "875 x 1085 x 1725 mm", "3", "Single Phase 230 V"],
          ["AP_SA_HC-8.0_V**", "800", "750 x 750 x 1425 mm", "875 x 1085 x 2075 mm", "4", "Single Phase 230 V"],
          ["AP_SA_HC-1.0K_V**", "1000", "850 x 750 x 1575 mm", "975 x 1085 x 2225 mm", "4", "Single Phase 230 V"]
        ]
      }
    ]
  },
  "BOD Incubator": {
    id: "bi-01",
    name: "BOD Incubator",
    category: "Stability Chambers",
    description: "Advanced BOD (Bio-Oxygen Demand) Incubators designed for precise temperature control in biological oxygen demand testing, microbiological research, and environmental analysis. These incubators provide accurate and uniform temperature conditions essential for reliable biological testing and research applications.",
    mainFeatures: [
      "Precise temperature control for BOD testing",
      "Advanced sensor technology with high accuracy",
      "Uniform temperature distribution",
      "Energy-efficient operation",
      "Compliance with international standards",
      "User-friendly digital interface"
    ],
    specifications: [
      { label: "Temperature Range", value: "10°C to 60°C" },
      { label: "Accuracy", value: "± 0.2°C" },
      { label: "Uniformity", value: "± 1.0°C" }
    ],
    compliance: ["ICH Guidelines", "USFDA 21 CFR Part 11", "GMP", "ISO Certified"],
    regularAttributes: [
      "Inner outer door with proof silicon",
      "Master & stand by sensor"
    ],
    addOnsAttributes: [
      "FDA 21 CFR part 11 Compliance",
      "Standby Refrigeration System (for BOD Only)",
      "Scanner: 4 pt. temperature sensor",
      "Mobile Alert System",
      "Hooter System",
      "Door Access System (Numeric/Biometric)",
      "Extra Trays"
    ],
    tables: [
      {
        title: "Product Specifications Table",
        headers: ["Model", "Capacity (L)", "Int. Dim. (WxDxH)", "Ext. Dim. (WxDxH)", "Trays", "Power Supply"],
        rows: [
          ["AP_SA_BO/BI-1.25_V**", "125", "600 x 350 x 600 mm", "725 x 685 x 1250 mm", "2", "Single Phase 230 V"],
          ["AP_SA_BO/BI-2.0_V**", "200", "660 x 450 x 700 mm", "785 x 780 x 1350 mm", "2", "Single Phase 230 V"],
          ["AP_SA_BO/BI-4.0_V**", "400", "700 x 650 x 900 mm", "825 x 985 x 1550 mm", "3", "Single Phase 230 V"],
          ["AP_SA_BO/BI-6.0_V**", "600", "750 x 750 x 1075 mm", "875 x 1085 x 1725 mm", "3", "Single Phase 230 V"],
          ["AP_SA_BO/BI-8.0_V**", "800", "750 x 750 x 1425 mm", "875 x 1085 x 2075 mm", "4", "Single Phase 230 V"],
          ["AP_SA_BO/BI-1.0K_V**", "1000", "850 x 750 x 1575 mm", "975 x 1085 x 2225 mm", "4", "Single Phase 230 V"]
        ]
      }
    ]
  },
  "Cold Chamber": {
    id: "cc-01",
    name: "Cold Chamber",
    category: "Stability Chambers",
    description: "Advanced refrigerated chambers designed for precise low-temperature storage and testing applications. These chambers provide accurate temperature control in the cold range (2°C to 8°C) essential for pharmaceutical storage, biological sample preservation, and controlled environment testing.",
    mainFeatures: [
      "Precise low temperature control (2°C to 8°C)",
      "Advanced refrigeration system with high accuracy",
      "Uniform temperature distribution",
      "Energy-efficient operation",
      "Compliance with international standards",
      "User-friendly digital interface"
    ],
    specifications: [
      { label: "Temperature Range", value: "2°C to 8°C" },
      { label: "Accuracy", value: "± 1°C" },
      { label: "Uniformity", value: "± 2°C" }
    ],
    compliance: ["ICH Guidelines", "USFDA 21 CFR Part 11", "GMP", "ISO Certified"],
    regularAttributes: [
      "Inner outer door with proof silicon",
      "Master & stand by sensor"
    ],
    addOnsAttributes: [
      "21 CFR part 11 Compliance",
      "Standby Refrigeration System",
      "Scanner: 4 pt. temperature sensor",
      "Mobile Alert System",
      "Hooter System",
      "Door Access System (Numeric/Biometric)",
      "Extra Trays"
    ],
    tables: [
      {
        title: "Product Specifications Table",
        headers: ["Model", "Capacity (L)", "Int. Dim. (WxDxH)", "Ext. Dim. (WxDxH)", "Trays", "Power Supply"],
        rows: [
          ["AP_SA_CC-1.25_V**", "125", "600 x 350 x 600 mm", "725 x 685 x 1250 mm", "2", "Single Phase 230 V"],
          ["AP_SA_CC-2.0_V**", "200", "660 x 450 x 700 mm", "785 x 780 x 1350 mm", "2", "Single Phase 230 V"],
          ["AP_SA_CC-4.0_V**", "400", "700 x 650 x 900 mm", "825 x 985 x 1550 mm", "3", "Single Phase 230 V"],
          ["AP_SA_CC-6.0_V**", "600", "750 x 750 x 1075 mm", "875 x 1085 x 1725 mm", "3", "Single Phase 230 V"],
          ["AP_SA_CC-8.0_V**", "800", "750 x 750 x 1425 mm", "875 x 1085 x 2075 mm", "4", "Single Phase 230 V"],
          ["AP_SA_CC-1.0K_V**", "1000", "850 x 750 x 1575 mm", "975 x 1085 x 2225 mm", "4", "Single Phase 230 V"]
        ]
      }
    ]
  },
  "Deep Freezer (upto -20°C / upto -40°C)": {
    id: "df-01",
    name: "Deep Freezer (upto -20°C / upto -40°C)",
    category: "Stability Chambers",
    description: "Advanced ultra-low temperature freezers designed for long-term storage of sensitive biological materials, vaccines, and critical samples. These freezers provide precise temperature control in the ultra-low range essential for pharmaceutical storage, research applications, and sample preservation.",
    mainFeatures: [
      "Ultra-low temperature operation (-5°C to -20°C / -25°C to -40°C)",
      "Heavy duty refrigeration system with high accuracy",
      "Uniform temperature distribution",
      "Advanced temperature monitoring and control",
      "Compliance with international standards",
      "User-friendly digital interface"
    ],
    specifications: [
      { label: "Temperature Range", value: "-5°C to -20°C / -25°C to -40°C" },
      { label: "Accuracy", value: "± 3°C" },
      { label: "Uniformity", value: "± 5°C" }
    ],
    compliance: ["ICH Guidelines", "USFDA 21 CFR Part 11", "GMP", "ISO Certified"],
    regularAttributes: [
      "Master & stand by sensor",
      "SS Door with gasket",
      "Heavy Duty refrigeration system"
    ],
    addOnsAttributes: [
      "21 CFR part 11 Compliance",
      "Mobile Alert System",
      "Hooter System",
      "Extra Trays"
    ],
    tables: [
      {
        title: "Product Specifications Table",
        headers: ["Model", "Capacity (L)", "Int. Dim. (WxDxH)", "Ext. Dim. (WxDxH)", "Trays", "Power Supply"],
        rows: [
          ["AP_SA_DF-1.25_V**", "125", "625 x 400 x 500 mm", "810 x 700 x 1260 mm", "2", "Single Phase 230 V"],
          ["AP_SA_DF-2.0_V**", "200", "650 x 500 x 625 mm", "835 x 800 x 1385 mm", "2", "Single Phase 230 V"],
          ["AP_SA_DF-4.0_V**", "400", "700 x 650 x 900 mm", "885 x 950 x 1660 mm", "3", "Single Phase 230 V"],
          ["AP_SA_DF-6.0_V**", "600", "750 x 800 x 1000 mm", "935 x 1100 x 1760 mm", "3", "Single Phase 230 V"],
          ["AP_SA_DF-8.0_V**", "800", "750 x 800 x 1350 mm", "935 x 1100 x 2110 mm", "4", "Single Phase 230 V"],
          ["AP_SA_DF-1.0K_V**", "1000", "825 x 825 x 1500 mm", "1010 x 1125 x 2260 mm", "4", "Single Phase 230 V"]
        ]
      }
    ]
  },
  "Ultra Low Deep Freezer (-80°C)": {
    id: "uldf-01",
    name: "Ultra Low Deep Freezer (-80°C)",
    category: "Stability Chambers",
    description: "Advanced ultra-low temperature freezers designed for critical storage of biological samples, vaccines, and research materials at temperatures down to -86°C. These specialized freezers provide precise ultra-low temperature control essential for long-term preservation of sensitive biological materials and pharmaceutical applications.",
    mainFeatures: [
      "Ultra-low temperature operation (-40°C to -86°C)",
      "Heavy duty refrigeration system with high accuracy",
      "Master & stand by sensor for reliability",
      "SS Door with gasket for optimal sealing",
      "Quick release filter for easy maintenance",
      "One-hand operation handle for convenience"
    ],
    specifications: [
      { label: "Temperature Range", value: "-40°C to -86°C" },
      { label: "Accuracy", value: "± 5°C" },
      { label: "Uniformity", value: "± 5°C" }
    ],
    compliance: ["ICH Guidelines", "USFDA 21 CFR Part 11", "GMP", "ISO Certified"],
    regularAttributes: [
      "Master & stand by sensor",
      "SS Door with gasket",
      "Heavy duty refrigeration system",
      "Quick release filter",
      "One-hand operation handle",
      "Vacuum release port for quick re-access to samples",
      "Lock the cold air inner door closing pressure can be adjusted by the handle"
    ],
    addOnsAttributes: [
      "21 CFR part 11 Compliance",
      "Mobile Alert System",
      "Hooter System",
      "Extra Trays"
    ],
    tables: [
      {
        title: "Product Specifications Table",
        headers: ["Model", "Capacity (L)", "Int. Dim. (WxDxH)", "Ext. Dim. (WxDxH)", "Trays", "Power Supply"],
        rows: [
          ["AP_SA_DF-3.4_V**", "340", "488 x 607 x 1140 mm", "854 x 1006 x 1907 mm", "3", "Single Phase 230 V"],
          ["AP_SA_DF-4.08_V**", "408", "606 x 575 x 1180 mm", "872 x 1028 x 1945 mm", "3", "Single Phase 230 V"],
          ["AP_SA_DF-5.88_V**", "588", "606 x 738 x 1310 mm", "872 x 1192 x 1994 mm", "3", "Single Phase 230 V"],
          ["AP_SA_DF-7.28_V**", "728", "963 x 571 x 1350 mm", "1229 x 1012 x 1994 mm", "3", "Single Phase 230 V"],
          ["AP_SA_DF-8.38_V**", "838", "894 x 718 x 1310 mm", "1160 x 1172 x 1994 mm", "3", "Single Phase 230 V"]
        ]
      }
    ]
  },
  "Photostability Chamber": {
    id: "phc-01",
    name: "Photostability Chamber",
    category: "Stability Chambers",
    description: "Advanced photostability chambers designed specifically to meet ICH & FDA requirements for photostability testing. These chambers provide simultaneous Near UV & visible light testing according to ICH Q1B option 2, ensuring compliance with regulatory standards for drug substance and drug product photostability studies.",
    mainFeatures: [
      "ICH Q1B compliant with FDA requirements",
      "Simultaneous Near UV & visible light testing",
      "Uniform light distribution for accurate testing",
      "Automatic light control with exposure level monitoring",
      "Master & stand by sensor for reliability",
      "Two Door system with full view inner glass door & outer SS door"
    ],
    specifications: [
      { label: "Temperature Range", value: "20°C to 50°C" },
      { label: "Accuracy", value: "± 0.2°C" },
      { label: "Uniformity", value: "± 1°C" }
    ],
    compliance: ["ICH Q1B Option 2", "USFDA 21 CFR Part 11", "GMP", "ISO Certified"],
    regularAttributes: [
      "Inner Mirror finish & outer Matt finish",
      "UV lights get switched off automatically once the door is opened",
      "Tests the sample on Fluorescent light or U.V. lights",
      "Uniform light distribution",
      "Lights automatically shut off after specific exposure level",
      "Master & stand by sensor",
      "Two Door: Full view inner glass door & outer SS door & leakage proof silicon rubber gasket"
    ],
    addOnsAttributes: [
      "21 CFR part 11 Compliance",
      "UV Meter",
      "LUX Meter",
      "Mobile Alert System",
      "Hooter System",
      "Door Access System (Numeric/Biometric)",
      "Extra Trays"
    ],
    tables: [
      {
        title: "Product Specifications Table",
        headers: ["Model", "Capacity (L)", "Int. Dim. (WxDxH)", "Ext. Dim. (WxDxH)", "Trays", "Power Supply"],
        rows: [
          ["AP_SA_PH-2.0_V**", "200", "800 x 500 x 600 mm", "925 x 850 x 1300 mm", "1", "Single Phase 230 V"],
          ["AP_SA_PH-4.0_V**", "400", "800 x 700 x 700 mm", "925 x 1050 x 1400 mm", "2", "Single Phase 230 V"]
        ]
      }
    ]
  },
  "Pharma Refrigerator / Dual Zone Chamber": {
    id: "dzc-01",
    name: "Pharma Refrigerator / Dual Zone Chamber",
    category: "Stability Chambers",
    description: "Advanced dual-zone chambers designed for pharmaceutical applications, providing precise temperature control in two separate zones - an upper deep freezer zone and a lower cold chamber zone. These chambers ensure optimal storage conditions for different types of pharmaceutical products requiring different temperature ranges.",
    mainFeatures: [
      "Master & stand by sensor for reliability",
      "SS Door with gasket for optimal sealing",
      "Heavy Duty refrigeration system with high performance",
      "Inner outer door with proof silicon for enhanced insulation",
      "Dual zone temperature control for different storage requirements",
      "Compliance with pharmaceutical storage standards"
    ],
    specifications: [
      { label: "Upper Zone Temp Range", value: "-5°C to -20°C" },
      { label: "Upper Zone Accuracy", value: "± 3°C" },
      { label: "Upper Zone Uniformity", value: "± 5°C" },
      { label: "Lower Zone Temp Range", value: "2°C to 8°C" },
      { label: "Lower Zone Accuracy", value: "± 1°C" },
      { label: "Lower Zone Uniformity", value: "± 2°C" }
    ],
    compliance: ["USFDA 21 CFR Part 11", "ICH Guidelines", "GMP", "ISO Certified"],
    regularAttributes: [
      "Master & stand by sensor",
      "SS Door with gasket",
      "Heavy Duty refrigeration system",
      "Inner outer door with proof silicon"
    ],
    addOnsAttributes: [
      "21 CFR part 11 Compliance",
      "Mobile Alert System",
      "Hooter System",
      "Extra Trays",
      "Scanner: 4 pt. temperature sensor",
      "Door Access System (Numeric/Biometric)"
    ],
    tables: [
      {
        title: "Product Specifications Table",
        headers: ["Model", "Zone", "Capacity (L)", "Int. Dim. (WxDxH)", "Trays", "Ext. Dim. (WxDxH)", "Power Supply"],
        rows: [
          ["AP_DC_DF-1.0_CC-1.0_V**", "Upper / Lower", "100 / 100", "640x350x500 / 640x350x600", "1 / 1", "825 x 850 x 2055 mm", "Single Phase 230 V"],
          ["AP_DC_DF-2.0_CC-2.0_V**", "Upper / Lower", "200 / 200", "700x575x500 / 700x475x600", "2 / 2", "885 x 975 x 2055 mm", "Single Phase 230 V"],
          ["AP_DC_DF-1.0_CC-2.0_V**", "Upper / Lower", "100 / 200", "700x350x450 / 700x475x600", "1 / 2", "885 x 975 x 2010 mm", "Single Phase 230 V"],
          ["AP_DC_DF-2.0_CC-4.0_V**", "Upper / Lower", "200 / 400", "800x500x500 / 800x600x850", "2 / 3", "985 x 1100 x 2300 mm", "Single Phase 230 V"]
        ]
      }
    ]
  },
  "Hot Air Oven": {
    id: "hao-01",
    name: "Hot Air Oven",
    category: "Stability Chambers",
    description: "Advanced hot air ovens designed for controlled heating environments ideal for curing, drying, sterilization, and conducting high-temperature tests. These ovens provide uniform heat distribution and precise temperature control for various laboratory and industrial applications.",
    mainFeatures: [
      "High temperature capability up to 250°C",
      "Uniform heat distribution for consistent results",
      "Digital control system with precise temperature control",
      "Advanced safety features and thermal insulation",
      "Stainless steel construction for durability",
      "Multiple tray configurations for different applications"
    ],
    specifications: [
      { label: "Temperature Range", value: "10°C above ambient to 250°C" },
      { label: "Accuracy", value: "± 1°C" },
      { label: "Uniformity", value: "± 5°C" }
    ],
    compliance: ["ICH Guidelines", "USFDA 21 CFR Part 11", "GMP", "ISO Certified"],
    regularAttributes: [
      "High temperature capability",
      "Uniform heat distribution",
      "Digital control system",
      "Safety features"
    ],
    addOnsAttributes: [
      "21 CFR part 11 Compliance",
      "Mobile Alert System",
      "Hooter System",
      "Extra Trays",
      "Scanner: 4 pt. temperature sensor",
      "Door Access System (Numeric/Biometric)"
    ],
    tables: [
      {
        title: "Product Specifications Table",
        headers: ["Model", "Capacity (L)", "Int. Dim. (WxDxH)", "Ext. Dim. (WxDxH)", "Trays", "Power Supply"],
        rows: [
          ["AP_SA_HO2-1.0_V**", "100", "450 x 450 x 500 mm", "575 x 865 x 1260 mm", "2", "Single Phase 230 V"],
          ["AP_SA_HO2-1.5_V**", "150", "500 x 500 x 600 mm", "625 x 965 x 1360 mm", "2", "Single Phase 230 V"],
          ["AP_SA_HO2-2.0_V**", "200", "600 x 500 x 675 mm", "725 x 965 x 1435 mm", "2", "Single Phase 230 V"],
          ["AP_SA_HO2-2.5_V**", "250", "600 x 600 x 700 mm", "725 x 1065 x 1460 mm", "3", "Single Phase 230 V"],
          ["APSA_HO2-3.0_V**", "300", "600 x 600 x 850 mm", "725 x 1065 x 1610 mm", "4", "Single Phase 230 V"]
        ]
      }
    ]
  },
  "Vacuum Oven": {
    id: "vo-01",
    name: "Vacuum Oven",
    category: "Stability Chambers",
    description: "Advanced vacuum ovens designed for applications requiring controlled atmosphere and uniform heating under vacuum conditions. These precision ovens are ideal for drying, curing, degassing, and other processes that require both temperature control and vacuum environment for optimal results.",
    mainFeatures: [
      "High vacuum capability up to 760 mm of mercury (-30)",
      "Precise temperature control with ±1°C accuracy",
      "Uniform heating distribution under vacuum conditions",
      "Advanced safety interlocks and vacuum monitoring",
      "Digital display for temperature and vacuum pressure",
      "Toughened glass window for sample viewing during operation"
    ],
    specifications: [
      { label: "Temperature Range", value: "60°C to 200°C" },
      { label: "Accuracy", value: "± 1°C" },
      { label: "Uniformity", value: "± 5°C" },
      { label: "Vacuum", value: "760 mm of mercury (-30)" }
    ],
    compliance: ["ICH Guidelines", "USFDA 21 CFR Part 11", "GMP", "ISO Certified"],
    regularAttributes: [
      "High vacuum capability",
      "Precise temperature control",
      "Uniform heating",
      "Safety interlocks",
      "Digital display for temperature and vacuum",
      "Toughened glass window for sample viewing"
    ],
    addOnsAttributes: [
      "21 CFR part 11 Compliance",
      "Mobile Alert System",
      "Hooter System",
      "Extra Trays",
      "Scanner: 4 pt. temperature sensor",
      "Door Access System (Numeric/Biometric)"
    ],
    tables: [
      {
        title: "Product Specifications Table",
        headers: ["Model", "Capacity (L)", "Int. Dim. (WxDxH)", "Ext. Dim. (WxDxH)", "Trays", "Power Supply"],
        rows: [
          ["AP_SA_VO-0.15_V**", "15", "22.5 Dia. x 30 Depth x 22.5 Dia.", "28.5 x 36 x 28.5 mm", "Not specified", "Single Phase 230 V"],
          ["AP_SA_VO-0.21_V**", "21", "30 Dia. x 30 Depth x 30 Dia.", "36 x 36 x 36 mm", "Not specified", "Single Phase 230 V"],
          ["AP_SA_VO-0.27_V**", "27", "30 Dia. x 38 Depth x 30 Dia.", "36 x 44 x 36 mm", "Not specified", "Single Phase 230 V"]
        ]
      }
    ]
  },
  "Muffle Furnace": {
    id: "mf-01",
    name: "Muffle Furnace",
    category: "Stability Chambers",
    description: "Advanced high-temperature furnaces designed for heat treatment, material processing, and laboratory applications requiring precise temperature control up to 1150°C. These furnaces provide uniform heating and are essential for various industrial and research processes.",
    mainFeatures: [
      "High temperature operation up to 1150°C",
      "Precise temperature control with ±5°C accuracy",
      "Uniform heating distribution",
      "Advanced safety features and thermal insulation",
      "Digital control system with user-friendly interface",
      "Robust construction for industrial applications"
    ],
    specifications: [
      { label: "Temperature Range", value: "1150°C" },
      { label: "Accuracy", value: "± 5°C" }
    ],
    compliance: ["ICH Guidelines", "USFDA 21 CFR Part 11", "GMP", "ISO Certified"],
    regularAttributes: [
      "High temperature operation",
      "Precise temperature control",
      "Uniform heating",
      "Safety features",
      "Digital control system",
      "Thermal insulation"
    ],
    addOnsAttributes: [
      "21 CFR part 11 Compliance",
      "Mobile Alert System",
      "Hooter System",
      "Extra Trays",
      "Scanner: 4 pt. temperature sensor",
      "Door Access System (Numeric/Biometric)"
    ],
    tables: [
      {
        title: "Product Specifications Table",
        headers: ["Model", "Capacity (L)", "Int. Dim. (WxDxH)", "Ext. Dim. (WxDxH)", "Trays", "Power Supply"],
        rows: [
          ["AP_SA_MF-0.6_V**", "6", "150 x 300 x 150 mm", "225 x 375 x 225 mm", "Not specified", "Single Phase 230 V"],
          ["AP_SA_MF-0.12_V**", "12", "200 x 300 x 200 mm", "275 x 375 x 275 mm", "Not specified", "Single Phase 230 V"]
        ]
      }
    ]
  },
  "Walk In Humidity Chamber": {
    id: "whc-01",
    name: "Walk In Humidity Chamber",
    category: "Walk In Chambers",
    description: "Designed for large-scale stability testing and long-term storage of pharmaceutical products. Our chambers provide precise control over temperature and humidity across the entire internal volume, exceeding ICH guidelines for stability testing.",
    mainFeatures: [
      "21 CFR Part 11 compliant software control",
      "Redundant cooling systems for 24/7 reliability",
      "High-accuracy capacitive humidity sensors",
      "Standard and customized interior volumes available",
      "Advanced airflow management for uniform distribution"
    ],
    specifications: [
      { label: "Temperature Range", value: "20.0°C to 60.0°C" },
      { label: "Humidity Range", value: "40% to 95% RH" },
      { label: "Temperature Accuracy", value: "±0.5°C" },
      { label: "Humidity Accuracy", value: "±2.0% RH" },
      { label: "Uniformity", value: "±1.0°C / ±3% RH" }
    ],
    compliance: ["ICH Q1A (R2)", "WHO Guidelines", "USFDA 21 CFR Part 11"],
    tables: [
      {
        title: "Standard Models & Capacity",
        headers: ["Model No.", "Internal Dimensions (WxDxH)", "Volume (Liters)", "No. of Shelves"],
        rows: [
          ["A-WI-400", "2000 x 2000 x 2000 mm", "8000 L", "Adjustable"],
          ["A-WI-600", "2500 x 2500 x 2200 mm", "13750 L", "Adjustable"],
          ["A-WI-800", "3000 x 3000 x 2200 mm", "19800 L", "Adjustable"],
          ["Custom", "As per client requirement", "Up to 500k L", "Customizable"]
        ]
      }
    ]
  }
};

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

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home', action: 'home' },
  { label: 'About', href: '#about', action: 'about' },
  { label: 'Products', href: '#products', action: 'products' },
  { label: 'Services', href: '#services', action: 'services' },
  { label: 'Software', href: '#software', action: 'software' },
  { label: 'Events', href: '#events', action: 'home' },
  { label: 'Careers', href: '#careers', action: 'careers' },
];

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
        title: "Stand Alone Chambers",
        items: [
          "Humidity Chamber / Stability Chamber",
          "BOD Incubator",
          "Cold Chamber",
          "Deep Freezer (upto -20°C / upto -40°C)",
          "Ultra Low Deep Freezer (-80°C)",
          "Photostability Chamber",
          "Pharma Refrigerator / Dual Zone Chamber",
          "Hot Air Oven",
          "Vacuum Oven",
          "Muffle Furnace"
        ]
      },
      {
        title: "Walk In Chambers",
        items: [
          "Walk In Humidity Chamber",
          "Walk In Cold Chamber",
          "Walk In BOD Incubator",
          "Walk In Deep Freezer"
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
          "Chilled Circulating Bath"
        ]
      },
      {
        title: "Refrigerated Circular Bath",
        items: ["Custom Solutions Available"]
      },
      {
        title: "Air Sampler",
        items: [
          "Basic Model",
          "21 CFR Model"
        ]
      },
      {
        title: "Stainless Steel Items & Accessories",
        items: ["Custom Fabrication"]
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

export const SERVICE_INTRO = {
  title: "Support Services",
  subtitle: "In the ever-evolving pharmaceutical landscape, quality and customer service are the cornerstone of success. Aureole Pharma Pvt. Ltd. stands out as a beacon of excellence in this competitive industry."
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

export const CONTACT_INFO = {
  address: "Plot No. B – 61, Malegaon MIDC, Tal – Sinnar, Dist – Nashik 422 113 Maharashtra, India",
  phone: "+91 86005 22240",
  email: "enquiry@aureolepharmatech.com"
};

export const MARQUEE_TEXT = "TRUSTED BY AUROBINDO • DABUR • INTAS • ERIS • TCG LIFESCIENCES • RECIPHARM • HETERO • MERIL • ENGINEERING PRECISION • 28 YEARS EXPERIENCE • ";