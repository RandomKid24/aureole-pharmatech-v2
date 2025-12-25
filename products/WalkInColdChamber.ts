import { ProductDetail } from '../types';

export const WalkInColdChamber: ProductDetail = {
  id: "wcc-01",
  name: "Walk In Cold Chamber",
  category: "Walk In Chambers",
  description: "Large-scale walk-in cold chambers designed for bulk storage and industrial applications requiring precise temperature control in the cold range.",
  mainFeatures: [
    "Viewing window with toughened glass",
    "Scanner: 8 pt. temperature sensor",
    "Door Access System (Numeric)",
    "Master & stand by refrigeration system",
    "Split type refrigeration system",
    "Racks with trays",
    "7\" Touch Screen HMI"
  ],
  specifications: [
    { label: "Temperature Range", value: "2°C to 8°C" },
    { label: "Accuracy", value: "± 1°C" },
    { label: "Uniformity", value: "± 2°C" }
  ],
  compliance: ["ICH Guidelines", "USFDA 21 CFR Part 11", "GMP", "ISO Certified"],
  regularAttributes: [
    "Viewing window with toughened glass",
    "Scanner: 8 pt. temperature sensor",
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
        ["AP_WC_CC-2.0K_V**", "2000", "1700", "800", "1900", "1860", "960", "2060", "12", "Single Phase 230 V"],
        ["AP_WC_CC-3.0K_V**", "3000", "1800", "1000", "1900", "1960", "1160", "2060", "12", "Single Phase 230 V"],
        ["AP_WC_CC-6.0K_V**", "6000", "2000", "1500", "2000", "2160", "1660", "2160", "24", "Single Phase 230 V"],
        ["AP_WC_CC-8.0K_V**", "8000", "2000", "2000", "2000", "2160", "2160", "2160", "24", "Three Phase 415 V"],
        ["AP_WC_CC-10.0K_V**", "10000", "2000", "2500", "2000", "2160", "2660", "2160", "36", "Three Phase 415 V"],
        ["AP_WC_CC-20.0K_V**", "20000", "2000", "4000", "2500", "2160", "4160", "2660", "60", "Three Phase 415 V"],
        ["AP_WC_CC-30.0K_V**", "30000", "2500", "4800", "2500", "2660", "4960", "2660", "84", "Three Phase 415 V"],
        ["AP_WC_CC-40.0K_V**", "40000", "4000", "4000", "2500", "4160", "4160", "2660", "108", "Three Phase 415 V"],
        ["AP_WC_CC-50.0K_V**", "50000", "4000", "5000", "2500", "4160", "5160", "2660", "144", "Three Phase 415 V"]
      ]
    }
  ]
};