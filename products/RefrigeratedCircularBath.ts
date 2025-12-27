import { ProductDetail } from '../types';

export const RefrigeratedCircularBath: ProductDetail = {
  id: "tt-rcb-refrigerated",
  name: "Refrigerated Circular Bath",
  category: "Circular Baths",
  description: "The refrigerated circulating bath allows researchers to achieve precise and consistent temperature control over a wide range, usually from below room temperature to sub-zero temperatures. This makes it suitable for various applications such as cooling reactions, maintaining samples at specific temperatures, or controlling the temperature of analytical instruments like spectrophotometers and chromatography systems.",
  imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/ultrasonic_bath.png",
  mainFeatures: [
    "Precise temperature control over wide range",
    "Sub-zero temperature capability",
    "Cooling reactions and maintaining samples",
    "Controlling temperature of analytical instruments",
    "Suitable for spectrophotometers and chromatography systems",
    "Advanced refrigeration system"
  ],
  specifications: [
    { label: "Temperature Range", value: "-20 to 150 (Optional)" },
    { label: "Resolution", value: "1°C" },
    { label: "Control Accuracy", value: "± 2°C" },
    { label: "Uniformity", value: "± 3°C" },
    { label: "Timer", value: "0 to 9999 Min" },
    { label: "Safety Feature", value: "Over Temperature & Water Level Low Cut Off" },
    { label: "Circulating Pipe", value: "Silicon with insulating cover" },
    { label: "Cooling Power", value: "1250W - 3500W" }
  ],
  regularAttributes: [
    "Industries Served: Pharmaceuticals - Quality, R&D, Production Labs",
    "Industries Served: Institutes - R&D Labs",
    "Industries Served: Food Industries - QC, Testing Labs"
  ],
  compliance: ["GMP", "CE Certified", "ISO 9001:2015"],
  tables: [
    {
      title: "Product Specifications",
      headers: ["FEATURE", "UNIT", "AP_TT_RCB_06", "AP_TT_RCB_10", "AP_TT_RCB_20"],
      rows: [
        ["Model", "-", "AP_TT_RCB_06", "AP_TT_RCB_10", "AP_TT_RCB_20"],
        ["Capacity", "Lit", "06", "10", "20"],
        ["Cooling Power", "kW", "1250", "2500", "3500"],
        ["Circulation Flow", "LMP", "9", "15", "-"],
        ["Temperature Range", "°C", "-20 to 150 (Optional)", "-", "-"],
        ["Resolution", "°C", "1", "-", "-"],
        ["Control Accuracy", "°C", "±2", "-", "-"],
        ["Uniformity", "°C", "±3", "-", "-"],
        ["Timer", "Min", "0 to 9999", "-", "-"],
        ["Safety feature", "-", "Over Temperature & Water Level Low Cut Off", "-", "-"],
        ["Circulating Pipe", "-", "Silicon with insulating cover", "-", "-"]
      ]
    }
  ]
};