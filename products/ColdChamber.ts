import { ProductDetail } from '../types';

export const ColdChamber: ProductDetail = {
  id: "cc-01",
  name: "Cold Chamber",
  category: "Stability Chambers",
  description: "Advanced refrigerated chambers designed for precise low-temperature storage and testing applications. These chambers provide accurate temperature control in the cold range (2°C to 8°C) essential for pharmaceutical storage, biological sample preservation, and controlled environment testing.",
  imageUrl: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2000&auto=format&fit=crop",
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
  compliance: ["ICH", "GMP", "WHO", "USFDA 21 CFR Part 11"],
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
      title: "Product Specifications",
      headers: ["MODEL", "CAPACITY (L)", "INTERIOR DIMENSION IN MM", "EXTERIOR DIMENSION IN MM", "NO OF TRAYS", "POWER SUPPLY"],
      rows: [
        ["AP_SA_CC-1.25_V**", "125", "600", "350", "600", "725", "685", "1250", "2", "Single Phase 230 V"],
        ["AP_SA_CC-2.0_V**", "200", "660", "450", "700", "785", "780", "1350", "2", "Single Phase 230 V"],
        ["AP_SA_CC-4.0_V**", "400", "700", "650", "900", "825", "985", "1550", "3", "Single Phase 230 V"],
        ["AP_SA_CC-6.0_V**", "600", "750", "750", "1075", "875", "1085", "1725", "3", "Single Phase 230 V"],
        ["AP_SA_CC-8.0_V**", "800", "750", "750", "1425", "875", "1085", "2075", "4", "Single Phase 230 V"],
        ["AP_SA_CC-1.0K_V**", "1000", "850", "750", "1575", "975", "1085", "2225", "4", "Single Phase 230 V"]
      ]
    }
  ]
};