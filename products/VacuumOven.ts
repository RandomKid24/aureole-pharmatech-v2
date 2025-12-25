import { ProductDetail } from '../types';

export const VacuumOven: ProductDetail = {
  id: "vo-01",
  name: "Vacuum Oven",
  category: "Stability Chambers",
  description: "Advanced vacuum ovens designed for applications requiring controlled atmosphere and uniform heating under vacuum conditions. These precision ovens are ideal for drying, curing, degassing, and other processes that require both temperature control and vacuum environment for optimal results.",
  imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop",
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
  compliance: ["GMP", "ISO", "CE", "USFDA 21 CFR Part 11"],
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
      title: "Product Specifications",
      headers: ["MODEL", "CAPACITY (L)", "INTERIOR DIMENSION IN MM", "EXTERIOR DIMENSION IN MM", "NO OF TRAYS", "POWER SUPPLY"],
      rows: [
        ["AP_SA_VO-0.15_V**", "15", "22.5 Dia.", "30 Depth", "22.5", "28.5", "36", "28.5", "Not specified", "Single Phase 230 V"],
        ["AP_SA_VO-0.21_V**", "21", "30 Dia.", "30 Depth", "30", "36", "36", "36", "Not specified", "Single Phase 230 V"],
        ["AP_SA_VO-0.27_V**", "27", "30 Dia.", "38 Depth", "30", "36", "44", "36", "Not specified", "Single Phase 230 V"]
      ]
    }
  ]
};