import { ProductDetail } from '../types';

export const PhotostabilityChamber: ProductDetail = {
  id: "pc-01",
  name: "Photostability Chamber",
  category: "Stability Chambers",
  description: "Advanced photostability chambers designed specifically to meet ICH & FDA requirements for photostability testing. These chambers provide simultaneous Near UV & visible light testing according to ICH Q1B option 2, ensuring compliance with regulatory standards for drug substance and drug product photostability studies.",
  imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop",
  mainFeatures: [
    "ICH Q1B compliant with FDA requirements",
    "Simultaneous Near UV & visible light testing",
    "Uniform light distribution for accurate testing",
    "Automatic light control with exposure level monitoring",
    "Master & stand by sensor for reliability",
    "Two Door system with full view inner glass door & outer SS door"
  ],
  specifications: [
    { label: "Temperature Range", value: "20°C to 50°C" },
    { label: "Accuracy", value: "± 0.2°C" },
    { label: "Uniformity", value: "± 1°C" }
  ],
  compliance: ["ICH Q1B Option 2", "USFDA 21 CFR Part 11", "GMP", "MHRA"],
  regularAttributes: [
    "Inner Mirror finish & outer Matt finish",
    "UV lights get switched off automatically once the door is opened",
    "Tests the sample on Fluorescent light or U.V. lights",
    "Uniform light distribution",
    "Lights automatically shut off after specific exposure level",
    "Master & stand by sensor",
    "Two Door: Full view inner glass door & outer SS door & leakage proof silicon rubber gasket"
  ],
  addOnsAttributes: [
    "21 CFR part 11 Compliance",
    "UV Meter",
    "LUX Meter",
    "Mobile Alert System",
    "Hooter System",
    "Door Access System (Numeric/Biometric)",
    "Extra Trays"
  ],
  tables: [
    {
      title: "Product Specifications",
      headers: ["MODEL", "CAPACITY (L)", "INTERIOR DIMENSION IN MM", "EXTERIOR DIMENSION IN MM", "NO OF TRAYS", "POWER SUPPLY"],
      footerNote: "Photostability with Humidity is also available.",
      rows: [
        ["AP_SA_PH-2.0_V**", "200", "800", "500", "600", "925", "850", "1300", "1", "Single Phase 230 V"],
        ["AP_SA_PH-4.0_V**", "400", "800", "700", "700", "925", "1050", "1400", "2", "Single Phase 230 V"]
      ]
    }
  ]
};