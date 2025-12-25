import { ProductDetail } from '../types';

export const DeepFreezer: ProductDetail = {
  id: "df-01",
  name: "Deep Freezer (upto -20°C / upto -40°C)",
  category: "Stability Chambers",
  description: "Advanced ultra-low temperature freezers designed for long-term storage of sensitive biological materials, vaccines, and critical samples. These freezers provide precise temperature control in the ultra-low range essential for pharmaceutical storage, research applications, and sample preservation.",
  imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/deep_freezer.png",
  mainFeatures: [
    "Ultra-low temperature operation (-5°C to -20°C / -25°C to -40°C)",
    "Heavy duty refrigeration system with high accuracy",
    "Uniform temperature distribution",
    "Advanced temperature monitoring and control",
    "Compliance with international standards",
    "User-friendly digital interface"
  ],
  specifications: [
    { label: "Temperature Range", value: "-5°C to -20°C / -25°C to -40°C" },
    { label: "Accuracy", value: "± 3°C" },
    { label: "Uniformity", value: "± 5°C" }
  ],
  compliance: ["GMP", "CE", "ISO", "USFDA 21 CFR Part 11"],
  regularAttributes: [
    "Master & stand by sensor",
    "SS Door with gasket",
    "Heavy Duty refrigeration system"
  ],
  addOnsAttributes: [
    "21 CFR part 11 Compliance",
    "Mobile Alert System",
    "Hooter System",
    "Extra Trays"
  ],
  tables: [
    {
      title: "Product Specifications",
      headers: ["MODEL", "CAPACITY (L)", "INTERNAL DIMENSION (WxDxH)", "EXTERIOR DIMENSION (WxDxH)", "NO OF TRAYS", "POWER SUPPLY"],
      rows: [
        ["AP_SA_DF-1.25_V**", "125", "625 x 400 x 500", "810 x 700 x 1260", "2", "Single Phase 230 V"],
        ["AP_SA_DF-2.0_V**", "200", "650 x 500 x 625", "835 x 800 x 1385", "2", "Single Phase 230 V"],
        ["AP_SA_DF-4.0_V**", "400", "700 x 650 x 900", "885 x 950 x 1660", "3", "Single Phase 230 V"],
        ["AP_SA_DF-6.0_V**", "600", "750 x 800 x 1000", "935 x 1100 x 1760", "3", "Single Phase 230 V"],
        ["AP_SA_DF-8.0_V**", "800", "750 x 800 x 1350", "935 x 1100 x 2110", "4", "Single Phase 230 V"],
        ["AP_SA_DF-1.0K_V**", "1000", "825 x 825 x 1500", "1010 x 1125 x 2260", "4", "Single Phase 230 V"]
      ]
    }
  ]
};