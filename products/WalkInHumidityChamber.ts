import { ProductDetail } from '../types';

export const WalkInHumidityChamber: ProductDetail = {
  id: "whc-01",
  name: "Walk In Humidity Chamber",
  category: "Walk In Chambers",
  description: "Aureole PharmaTech's walk-in humidity chambers are meticulously crafted with the purpose of creating controlled environments for studying and assessing the impacts of different environmental factors such as humidity and temperature. These test chambers find applications in a wide range of fields, including microbiology, plant studies, tissue research, electronic component testing, and various customized industrial and research endeavors. Our humidity test chambers are utilized in R&D laboratories, research projects, and product testing facilities.",
  imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/walk_in_chamber.png",
  mainFeatures: [
    "Full Door is of toughened glass",
    "Racks with trays",
    "Person trap alarm",
    "Door Access System (Numeric)",
    "Low water indication",
    "Master & stand by refrigeration/humidity system",
    "Split type refrigeration system",
    "Scanner: 8 pt. temperature & humidity sensor",
    "7\" Touch Screen HMI"
  ],
  specifications: [
    { label: "Temperature Range", value: "20°C to 60°C" },
    { label: "Humidity Range", value: "40% RH to 95% RH" },
    { label: "Temperature Accuracy", value: "± 0.2°C" },
    { label: "Humidity Accuracy", value: "± 2.0% RH" },
    { label: "Temperature Uniformity", value: "± 1.0°C" },
    { label: "Humidity Uniformity", value: "± 3.0% RH" },
    { label: "Test Suitable for", value: "25°C & 60% RH, 30°C & 65% RH, 40°C & 75% RH, 30°C & 75% RH" },
    { label: "Also available with low conditions", value: "25°C & 40% RH, 40°C & 25% RH, 30°C & 35% RH" }
  ],
  compliance: ["ICH Q1A (R2)", "WHO Guidelines", "USFDA 21 CFR Part 11", "GMP", "MHRA"],
  regularAttributes: [
    "Full Door is of toughened glass",
    "Racks with trays",
    "Person trap alarm",
    "Door Access System (Numeric)",
    "Low water indication",
    "Master & stand by refrigeration/humidity system",
    "Split type refrigeration system",
    "Scanner: 8 pt. temperature & humidity sensor",
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
        ["AP_WC_HC-2.0K_V**", "2000", "1700", "800", "1900", "1860", "960", "2060", "12", "Single Phase 230 V"],
        ["AP_WC_HC-3.0K_V**", "3000", "1800", "1000", "1900", "1960", "1160", "2060", "12", "Single Phase 230 V"],
        ["AP_WC_HC-6.0K_V**", "6000", "2000", "1500", "2000", "2160", "1660", "2160", "24", "Single Phase 230 V"],
        ["AP_WC_HC-8.0K_V**", "8000", "2000", "2000", "2000", "2160", "2160", "2160", "24", "Three Phase 415 V"],
        ["AP_WC_HC-10.0K_V**", "10000", "2000", "2500", "2000", "2160", "2660", "2160", "36", "Three Phase 415 V"],
        ["AP_WC_HC-20.0K_V**", "20000", "2000", "4000", "2500", "2160", "4160", "2660", "60", "Three Phase 415 V"],
        ["AP_WC_HC-30.0K_V**", "30000", "2500", "4800", "2500", "2660", "4960", "2660", "84", "Three Phase 415 V"],
        ["AP_WC_HC-40.0K_V**", "40000", "4000", "4000", "2500", "4160", "4160", "2660", "108", "Three Phase 415 V"],
        ["AP_WC_HC-50.0K_V**", "50000", "4000", "5000", "2500", "4160", "5160", "2660", "144", "Three Phase 415 V"]
      ]
    }
  ]
};