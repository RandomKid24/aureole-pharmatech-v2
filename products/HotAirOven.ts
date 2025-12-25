import { ProductDetail } from '../types';

export const HotAirOven: ProductDetail = {
  id: "hao-01",
  name: "Hot Air Oven",
  category: "Stability Chambers",
  description: "Advanced hot air ovens designed for controlled heating environments ideal for curing, drying, sterilization, and conducting high-temperature tests. These ovens provide uniform heat distribution and precise temperature control for various laboratory and industrial applications.",
  imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop",
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
  compliance: ["ISO", "CE", "GMP", "USFDA 21 CFR Part 11"],
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
      title: "Product Specifications",
      headers: ["MODEL", "CAPACITY (L)", "INTERIOR DIMENSION IN MM", "EXTERIOR DIMENSION IN MM", "NO OF TRAYS", "POWER SUPPLY"],
      rows: [
        ["AP_SA_HO2-1.0_V**", "100", "450", "450", "500", "575", "865", "1260", "2", "Single Phase 230 V"],
        ["AP_SA_HO2-1.5_V**", "150", "500", "500", "600", "625", "965", "1360", "2", "Single Phase 230 V"],
        ["AP_SA_HO2-2.0_V**", "200", "600", "500", "675", "725", "965", "1435", "2", "Single Phase 230 V"],
        ["AP_SA_HO2-2.5_V**", "250", "600", "600", "700", "725", "1065", "1460", "3", "Single Phase 230 V"],
        ["APSA_HO2-3.0_V**", "300", "600", "600", "850", "725", "1065", "1610", "4", "Single Phase 230 V"]
      ]
    }
  ]
};