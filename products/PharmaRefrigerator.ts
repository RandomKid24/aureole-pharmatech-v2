import { ProductDetail } from '../types';

export const PharmaRefrigerator: ProductDetail = {
  id: "pr-01",
  name: "Pharma Refrigerator / Dual Zone Chamber",
  category: "Stability Chambers",
  description: "Advanced dual-zone chambers designed for pharmaceutical applications, providing precise temperature control in two separate zones - an upper deep freezer zone and a lower cold chamber zone. These chambers ensure optimal storage conditions for different types of pharmaceutical products requiring different temperature ranges.",
  imageUrl: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2000&auto=format&fit=crop",
  mainFeatures: [
    "Master & stand by sensor for reliability",
    "SS Door with gasket for optimal sealing",
    "Heavy Duty refrigeration system with high performance",
    "Inner outer door with proof silicon for enhanced insulation",
    "Dual zone temperature control for different storage requirements",
    "Compliance with pharmaceutical storage standards"
  ],
  specifications: [
    { label: "Upper Zone (Deep Freezer) Temp Range", value: "-5°C to -20°C" },
    { label: "Upper Zone (Deep Freezer) Accuracy", value: "±3°C" },
    { label: "Upper Zone (Deep Freezer) Uniformity", value: "±5°C" },
    { label: "Lower Zone (Cold Chamber) Temp Range", value: "2°C to 8°C" },
    { label: "Lower Zone (Cold Chamber) Accuracy", value: "±1°C" },
    { label: "Lower Zone (Cold Chamber) Uniformity", value: "±2°C" }
  ],
  compliance: ["GMP", "ICH Guidelines", "USFDA 21 CFR Part 11"],
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
      title: "Product Specifications",
      headers: ["MODEL", "ZONE", "CAPACITY (L)", "INTERIOR DIMENSION IN MM", "NO OF TRAYS", "EXTERIOR DIMENSION IN MM", "POWER SUPPLY"],
      footerNote: "Different combination of Dual Zone Chambers also available.",
      rows: [
        ["AP_DC_DF-1.0_CC-1.0_V**", "Upper Zone", "100", "640", "350", "500", "1", "825", "850", "2055", "Single Phase 230 V"],
        ["", "Lower Zone", "100", "640", "350", "600", "1", "", "", "", ""],
        ["AP_DC_DF-2.0_CC-2.0_V**", "Upper Zone", "200", "700", "575", "500", "2", "885", "975", "2055", "Single Phase 230 V"],
        ["", "Lower Zone", "200", "700", "475", "600", "2", "", "", "", ""],
        ["AP_DC_DF-1.0_CC-2.0_V**", "Upper Zone", "100", "700", "350", "450", "1", "885", "975", "2010", "Single Phase 230 V"],
        ["", "Lower Zone", "200", "700", "475", "600", "2", "", "", "", ""],
        ["AP_DC_DF-2.0_CC-4.0_V**", "Upper Zone", "200", "800", "500", "500", "2", "985", "1100", "2300", "Single Phase 230 V"],
        ["", "Lower Zone", "400", "800", "600", "850", "3", "", "", "", ""]
      ]
    }
  ]
};