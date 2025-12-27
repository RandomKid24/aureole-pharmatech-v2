import { ProductDetail } from '../types';

export const WaterBathCirculating: ProductDetail = {
  id: "tt-wb-circulating",
  name: "Circulating",
  category: "Water Baths",
  description: "A water bath is a testing cabinet which used in many industries and laboratories. The container's main substance for testing the specimen is a heated water. The samples are kept inside them to test their behavior in rising temperature. This machine has very distinct applications. It is utilized in biological labs to incubate sensitive which are unable to be kept in direct dry heat. This water bath is successfully used in R&D laboratory, microbiology, quality control, blood bank, pathology, chemical, food processing industry area in Pharmaceutical, Healthcare, Institutions & Food Industry.",
  imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/ultrasonic_bath.png",
  mainFeatures: [
    "Circulation system for uniform temperature",
    "Digital control with high accuracy",
    "Stainless steel construction",
    "Safety features",
    "Overshoot & Water Level Low Cut Off",
    "Stainless Steel Heater Cover Tray",
    "Gabled Lid",
    "Built-in pump"
  ],
  specifications: [
    { label: "Temperature Range", value: "Ambient + 5 to 95°C" },
    { label: "Resolution", value: "0.1°C" },
    { label: "Control Accuracy", value: "± 0.3°C" },
    { label: "Uniformity", value: "± 0.3°C" },
    { label: "Timer", value: "0 to 9999 Min" },
    { label: "Safety Feature", value: "Overshoot & Water Level Low Cut Off" },
    { label: "Heater Cover Tray", value: "Stainless Steel" },
    { label: "Gabled Lid", value: "Stainless Steel" },
    { label: "Circulation", value: "Built-in pump" }
  ],
  regularAttributes: [
    "Industries Served: Healthcare - Hospitals (OT, Micro, Pathology, Blood Bank Labs)",
    "Industries Served: Pharmaceuticals - Quality, R&D, Production",
    "Industries Served: Institutes - Research Labs",
    "Industries Served: Food Industries - QC, Testing Labs"
  ],
  compliance: ["GMP", "CE Certified", "ISO 9001:2015"],
  tables: [
    {
      title: "Product Specifications",
      headers: ["FEATURE", "UNIT", "AP_TT_WBC_05", "AP_TT_WBC_14", "AP_TT_WBC_28"],
      rows: [
        ["Model", "-", "AP_TT_WBC_05", "AP_TT_WBC_14", "AP_TT_WBC_28"],
        ["Capacity", "Lit", "5", "14", "28"],
        ["Inner Dimensions L x D x H", "Mm", "300 x 150 x 150", "320 x 300 x 150", "500 x 300 x 250"],
        ["Heater Power", "kW", "0.5", "1.5", "2"],
        ["Temperature Range", "°C", "Ambient + 5 to 95", "Ambient + 5 to 95", "Ambient + 5 to 95"],
        ["Resolution", "°C", "0.1", "0.1", "0.1"],
        ["Control Accuracy", "°C", "± 0.3", "± 0.3", "± 0.3"],
        ["Uniformity", "°C", "± 0.3", "± 0.3", "± 0.3"],
        ["Timer", "Min", "0 to 9999", "0 to 9999", "0 to 9999"],
        ["Safety feature", "-", "Overshoot & Water Level Low Cut Off", "-", "-"],
        ["Heater Cover Tray", "-", "Stainless Steel", "-", "-"],
        ["Gabled Lid", "-", "Stainless Steel", "-", "-"],
        ["Concentric Ring Lid", "-", "3 Holes", "6 Holes", "12 Holes"]
      ]
    }
  ]
};