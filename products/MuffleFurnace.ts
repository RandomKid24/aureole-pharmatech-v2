import { ProductDetail } from '../types';

export const MuffleFurnace: ProductDetail = {
  id: "mf-01",
  name: "Muffle Furnace",
  category: "Stability Chambers",
  description: "Advanced high-temperature furnaces designed for heat treatment, material processing, and laboratory applications requiring precise temperature control up to 1150°C. These furnaces provide uniform heating and are essential for various industrial and research processes.",
  imageUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1000&auto=format&fit=crop",
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
  compliance: ["CE", "ISO", "GMP", "USFDA 21 CFR Part 11"],
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
      title: "Product Specifications",
      headers: ["MODEL", "CAPACITY (L)", "INTERIOR DIMENSION IN MM", "EXTERIOR DIMENSION IN MM", "NO OF TRAYS", "POWER SUPPLY"],
      rows: [
        ["AP_SA_MF-0.6_V**", "6", "150", "300", "150", "225", "375", "225", "Not specified", "Single Phase 230 V"],
        ["AP_SA_MF-0.12_V**", "12", "200", "300", "200", "275", "375", "275", "Not specified", "Single Phase 230 V"]
      ]
    }
  ]
};