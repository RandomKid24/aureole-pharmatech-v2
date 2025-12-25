import { ProductDetail } from '../types';

export const UltraLowDeepFreezer: ProductDetail = {
  id: "uld-01",
  name: "Ultra Low Deep Freezer (-80°C)",
  category: "Stability Chambers",
  description: "Advanced ultra-low temperature freezers designed for critical storage of biological samples, vaccines, and research materials at temperatures down to -86°C. These specialized freezers provide precise ultra-low temperature control essential for long-term preservation of sensitive biological materials and pharmaceutical applications.",
  mainFeatures: [
    "Ultra-low temperature operation (-40°C to -86°C)",
    "Heavy duty refrigeration system with high accuracy",
    "Master & stand by sensor for reliability",
    "SS Door with gasket for optimal sealing",
    "Quick release filter for easy maintenance",
    "One-hand operation handle for convenience"
  ],
  specifications: [
    { label: "Temperature Range", value: "-40°C to -86°C" },
    { label: "Accuracy", value: "± 5°C" },
    { label: "Uniformity", value: "± 5°C" }
  ],
  compliance: ["ISO 13485", "CE", "GMP", "USFDA 21 CFR Part 11"],
  regularAttributes: [
    "Master & stand by sensor",
    "SS Door with gasket",
    "Heavy duty refrigeration system",
    "Quick release filter",
    "One-hand operation handle",
    "Vacuum release port for quick re-access to samples",
    "Lock the cold air inner door closing pressure can be adjusted by the handle"
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
        ["AP_SA_DF-3.4_V**", "340", "488 x 607 x 1140", "854 x 1006 x 1907", "3", "Single Phase 230 V"],
        ["AP_SA_DF-4.08_V**", "408", "606 x 575 x 1180", "872 x 1028 x 1945", "3", "Single Phase 230 V"],
        ["AP_SA_DF-5.88_V**", "588", "606 x 738 x 1310", "872 x 1192 x 1994", "3", "Single Phase 230 V"],
        ["AP_SA_DF-7.28_V**", "728", "963 x 571 x 1350", "1229 x 1012 x 1994", "3", "Single Phase 230 V"],
        ["AP_SA_DF-8.38_V**", "838", "894 x 718 x 1310", "1160 x 1172 x 1994", "3", "Single Phase 230 V"]
      ]
    }
  ]
};