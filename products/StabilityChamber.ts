import { ProductDetail } from '../types';

export const StabilityChamber: ProductDetail = {
  id: "hc-01",
  name: "Humidity Chamber / Stability Chamber",
  category: "Stability Chambers",
  description: "Advanced humidity and stability chambers designed for precise environmental control in pharmaceutical, biotech, and research applications. These chambers provide accurate temperature and humidity conditions for stability testing, formulation development, and regulatory compliance.",
  imageUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1000&auto=format&fit=crop",
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
    { label: "Also available with low conditions", value: "25°C & 40% RH, 40°C & 25% RH, 30°C & 35% RH" }
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
      title: "Product Specifications",
      headers: ["MODEL", "CAPACITY (L)", "INTERIOR DIMENSION IN MM", "EXTERIOR DIMENSION IN MM", "NO OF TRAYS", "POWER SUPPLY"],
      rows: [
        ["AP_SA_HC-1.25_V**", "125", "600", "350", "600", "725", "685", "1250", "2", "Single Phase 230 V"],
        ["AP_SA_HC-2.0_V**", "200", "660", "450", "700", "785", "780", "1350", "2", "Single Phase 230 V"],
        ["AP_SA_HC-4.0_V**", "400", "700", "650", "900", "825", "985", "1550", "3", "Single Phase 230 V"],
        ["AP_SA_HC-6.0_V**", "600", "750", "750", "1075", "875", "1085", "1725", "3", "Single Phase 230 V"],
        ["AP_SA_HC-8.0_V**", "800", "750", "750", "1425", "875", "1085", "2075", "4", "Single Phase 230 V"],
        ["AP_SA_HC-1.0K_V**", "1000", "850", "750", "1575", "975", "1085", "2225", "4", "Single Phase 230 V"]
      ]
    }
  ]
};