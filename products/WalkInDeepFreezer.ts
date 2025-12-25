import { ProductDetail } from '../types';

export const WalkInDeepFreezer: ProductDetail = {
  id: "wdf-01",
  name: "Walk In Deep Freezer",
  category: "Walk In Chambers",
  description: "Advanced walk-in deep freezers designed for bulk storage and industrial applications requiring ultra-low temperature conditions. These large-scale freezers feature dual-zone design with an anti-room for temperature transition and a deep freezer zone for ultra-low temperature storage.",
  mainFeatures: [
    "Master & stand by sensor for reliability",
    "Heavy Duty refrigeration system with high performance",
    "Door Access System (Numeric) for security",
    "Master & stand by refrigeration system for continuous operation",
    "Split type refrigeration system for efficiency",
    "Racks with trays for organized storage"
  ],
  specifications: [
    { label: "Anti Room Temperature Range", value: "2°C to 8°C" },
    { label: "Anti Room Accuracy", value: "± 1°C" },
    { label: "Anti Room Uniformity", value: "± 2°C" },
    { label: "Deep Freezer Temperature Range", value: "-5°C to -20°C / -25°C to -40°C" },
    { label: "Deep Freezer Accuracy", value: "± 3°C" },
    { label: "Deep Freezer Uniformity", value: "± 5°C" }
  ],
  compliance: ["ICH Guidelines", "USFDA 21 CFR Part 11", "GMP", "ISO Certified"],
  regularAttributes: [
    "Double walled with 125 mm PUF insulated modular panels with easy on-site assembly",
    "SS 304 Interior & Exterior either SS 304 or Pre Coated GI",
    "Stainless Steel Trays",
    "Observation window - 300 x 300 mm",
    "Forced air circulation for uniform temperature",
    "CFC free cooling system consisting of hermetically sealed compressor coupled with evaporation coil & condenser",
    "Mechanism for equalizing air-pressure for door opening from inside",
    "Audio/Visual alarms for deviations",
    "Master & stand by sensor",
    "Heavy Duty refrigeration system",
    "Door Access System (Numeric)",
    "Master & stand by refrigeration system",
    "Split type refrigeration system",
    "Racks with trays",
    "Person trap alarm",
    "7\" Touch Screen HMI"
  ],
  addOnsAttributes: [
    "21 CFR part 11 Compliance",
    "Mobile Alert System",
    "Hooter System",
    "Door Access System (Biometric)",
    "Extra Trays"
  ],
  tables: [
    {
      title: "Product Specifications",
      headers: ["MODEL", "CAPACITY (L)", "INT W", "INT D", "INT H", "EXT W", "EXT D", "EXT H", "TRAYS", "POWER SUPPLY"],
      rows: [
        ["AP_WC_DF-2.0K_V**", "2000", "1700", "800", "1900", "1860", "960", "2060", "12", "Single Phase 230 V"],
        ["AP_WC_DF-3.0K_V**", "3000", "1800", "1000", "1900", "1960", "1160", "2060", "12", "Single Phase 230 V"],
        ["AP_WC_DF-6.0K_V**", "6000", "2000", "1500", "2000", "2160", "1660", "2160", "24", "Single Phase 230 V"],
        ["AP_WC_DF-8.0K_V**", "8000", "2000", "2000", "2000", "2160", "2160", "2160", "24", "Three Phase 415 V"],
        ["AP_WC_DF-10.0K_V**", "10000", "2000", "2500", "2000", "2160", "2660", "2160", "36", "Three Phase 415 V"],
        ["AP_WC_DF-20.0K_V**", "20000", "2000", "4000", "2500", "2160", "4160", "2660", "60", "Three Phase 415 V"],
        ["AP_WC_DF-30.0K_V**", "30000", "2500", "4800", "2500", "2660", "4960", "2660", "84", "Three Phase 415 V"],
        ["AP_WC_DF-40.0K_V**", "40000", "4000", "4000", "2500", "4160", "4160", "2660", "108", "Three Phase 415 V"],
        ["AP_WC_DF-50.0K_V**", "50000", "4000", "5000", "2500", "4160", "5160", "2660", "144", "Three Phase 415 V"]
      ]
    }
  ]
};