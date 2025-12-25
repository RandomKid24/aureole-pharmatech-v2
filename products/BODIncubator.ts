import { ProductDetail } from '../types';

export const BODIncubator: ProductDetail = {
  id: "bi-01",
  name: "BOD Incubator",
  category: "Stability Chambers",
  description: "Advanced BOD (Bio-Oxygen Demand) Incubators designed for precise temperature control in biological oxygen demand testing, microbiological research, and environmental analysis. These incubators provide accurate and uniform temperature conditions essential for reliable biological testing and research applications.",
  imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop",
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
  compliance: ["GMP", "CE", "ISO", "USFDA 21 CFR Part 11"],
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
      title: "Product Specifications",
      headers: ["MODEL", "CAPACITY (L)", "INTERIOR DIMENSION IN MM", "EXTERIOR DIMENSION IN MM", "NO OF TRAYS", "POWER SUPPLY"],
      rows: [
        ["AP_SA_BO/BI-1.25_V**", "125", "600", "350", "600", "725", "685", "1250", "2", "Single Phase 230 V"],
        ["AP_SA_BO/BI-2.0_V**", "200", "660", "450", "700", "785", "780", "1350", "2", "Single Phase 230 V"],
        ["AP_SA_BO/BI-4.0_V**", "400", "700", "650", "900", "825", "985", "1550", "3", "Single Phase 230 V"],
        ["AP_SA_BO/BI-6.0_V**", "600", "750", "750", "1075", "875", "1085", "1725", "3", "Single Phase 230 V"],
        ["AP_SA_BO/BI-8.0_V**", "800", "750", "750", "1425", "875", "1085", "2075", "4", "Single Phase 230 V"],
        ["AP_SA_BO/BI-1.0K_V**", "1000", "850", "750", "1575", "975", "1085", "2225", "4", "Single Phase 230 V"]
      ]
    }
  ]
};