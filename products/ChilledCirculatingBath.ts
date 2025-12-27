import { ProductDetail } from '../types';

export const ChilledCirculatingBath: ProductDetail = {
  id: "tt-wb-chilled-circulating",
  name: "Chilled Circulating Bath",
  category: "Water Baths",
  description: "A high-precision chilled circulating bath designed for laboratory applications requiring both heating and cooling capabilities. This unit features a built-in refrigeration system and a powerful circulation pump to ensure uniform temperature distribution throughout the bath and the ability to circulate fluid to external equipment like refractometers, polarimeters, and condensers.",
  imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/ultrasonic_bath.png",
  mainFeatures: [
    "Integrated refrigeration system for cooling",
    "High-capacity heater for rapid temperature rise",
    "Powerful circulation pump for external cooling/heating",
    "Advanced PID temperature controller",
    "Digital display for temperature and timer",
    "Stainless steel tank and enclosure for durability",
    "Safety features including low-level cut-off"
  ],
  specifications: [
    { label: "Temperature Range", value: "-10°C to 100°C" },
    { label: "Temperature Accuracy", value: "± 0.1°C" },
    { label: "Temperature Uniformity", value: "± 0.2°C" },
    { label: "Cooling Capacity", value: "300W at 20°C" },
    { label: "Heater Power", value: "1.5 kW" },
    { label: "Pump Capacity", value: "10-15 Liters/min" },
    { label: "Tank Capacity", value: "10 to 20 Liters" },
    { label: "Safety Feature", value: "Over-temperature & Low-liquid protection" }
  ],
  regularAttributes: [
    "Industries Served: Pharmaceuticals",
    "Industries Served: Chemical Processing",
    "Industries Served: Food & Beverage",
    "Industries Served: Research Institutes"
  ],
  compliance: ["GMP", "CE Certified", "ISO 9001:2015"],
  tables: [
    {
      title: "Product Specifications",
      headers: ["FEATURE", "UNIT", "AP_TT_CCB_10", "AP_TT_CCB_20"],
      rows: [
        ["Model", "-", "AP_TT_CCB_10", "AP_TT_CCB_20"],
        ["Capacity", "Lit", "10", "20"],
        ["Temperature Range", "°C", "-10 to 100", "-10 to 100"],
        ["Control Accuracy", "°C", "± 0.1", "± 0.1"],
        ["Uniformity", "°C", "± 0.2", "± 0.2"],
        ["Heater Power", "kW", "1.0", "1.5"],
        ["Pump Flow Rate", "L/min", "12", "15"],
        ["Inner Tank (mm)", "WxDxH", "240x150x150", "300x240x150"],
        ["Mains Power Supply", "-", "230V, 50Hz", "230V, 50Hz"]
      ]
    }
  ]
};