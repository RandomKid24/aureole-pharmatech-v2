import { ProductDetail } from '../types';

export const WalkInBODIncubator: ProductDetail = {
  id: "wbi-01",
  name: "Walk In BOD Incubator",
  category: "Walk In Chambers",
  description: "Aureole PharmaTech's premium walk-in Incubators stand out as the preferred choice for maintaining precise and uniform temperature conditions within the chamber. These incubators are renowned for their exceptional accuracy, making them the top choice for applications that demand stringent temperature control.",
  mainFeatures: [
    "Precise and uniform temperature conditions",
    "Exceptional accuracy for stringent temperature control",
    "Engineered to meet exacting requirements of laboratories",
    "Full door of toughened glass with polysulphides for viewing samples",
    "Trays and detachable racks with adjustable angles",
    "7\" Touch Screen HMI (Allen Bradly)"
  ],
  specifications: [
    { label: "Temperature Range", value: "10°C to 60°C" },
    { label: "Accuracy", value: "± 0.2°C" },
    { label: "Uniformity", value: "± 1.0°C" }
  ],
  compliance: ["ICH Guidelines", "USFDA 21 CFR Part 11", "GMP", "ISO Certified"],
  regularAttributes: [
    "Full door is of toughened glass with polysulphides to view the samples without disturbing the test conditions & human safety",
    "Trays and detachable racks with adjustable angles",
    "7\" Touch Screen HMI (Allen Bradly)",
    "Master & Stand By refrigeration System",
    "Split type refrigeration system",
    "Scanner: 8 pt. Temperature Sensor",
    "Person trap/indication switch inside chamber with audible alarm outside",
    "Door Access System (Numeric)"
  ],
  addOnsAttributes: [
    "21 CFR part 11 compliance",
    "GSM alert system",
    "Hooter System",
    "Door Access System (Biometric)",
    "Extra Trays"
  ],
  tables: [
    {
      title: "Product Specifications",
      headers: ["MODEL", "CAPACITY (L)", "INT W", "INT D", "INT H", "EXT W", "EXT D", "EXT H", "TRAYS", "POWER SUPPLY"],
      rows: [
        ["AP_WC_BO-2.0K_V**", "2000", "1700", "800", "1900", "1860", "960", "2060", "12", "Single Phase 230 V"],
        ["AP_WC_BO-3.0K_V**", "3000", "1800", "1000", "1900", "1960", "1160", "2060", "12", "Single Phase 230 V"],
        ["AP_WC_BO-6.0K_V**", "6000", "2000", "1500", "2000", "2160", "1660", "2160", "24", "Single Phase 230 V"],
        ["AP_WC_BO-8.0K_V**", "8000", "2000", "2000", "2000", "2160", "2160", "2160", "24", "Three Phase 415 V"],
        ["AP_WC_BO-10.0K_V**", "10000", "2000", "2500", "2000", "2160", "2660", "2160", "36", "Three Phase 415 V"],
        ["AP_WC_BO-20.0K_V**", "20000", "2000", "4000", "2500", "2160", "4160", "2660", "60", "Three Phase 415 V"],
        ["AP_WC_BO-30.0K_V**", "30000", "2500", "4800", "2500", "2660", "4960", "2660", "84", "Three Phase 415 V"],
        ["AP_WC_BO-40.0K_V**", "40000", "4000", "4000", "2500", "4160", "4160", "2660", "108", "Three Phase 415 V"],
        ["AP_WC_BO-50.0K_V**", "50000", "4000", "5000", "2500", "4160", "5160", "2660", "144", "Three Phase 415 V"]
      ]
    }
  ]
};