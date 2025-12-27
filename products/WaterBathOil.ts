import { ProductDetail } from '../types';

export const WaterBathOil: ProductDetail = {
  id: "tt-wb-oil",
  name: "Oil Bath",
  category: "Water Baths",
  description: "An oil bath, commonly used in chemistry laboratories, involves immersing reaction vessels or samples in heated oil to maintain stable and controlled temperatures, crucial for sensitive experiments and reactions. Moreover it has unique design to achieve upto 250°C.",
  imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/ultrasonic_bath.png",
  mainFeatures: [
    "High temperature capability up to 250°C",
    "Oil-based heating for stable temperature control",
    "Precise control for sensitive experiments",
    "Safety features",
    "Over Temperature & Thermostatic safety",
    "Stainless Steel Stand with Heavy Wheels",
    "Digital display for temperature control",
    "Robust construction for laboratory use"
  ],
  specifications: [
    { label: "Temperature Range", value: "50 to 250°C" },
    { label: "Resolution", value: "1°C" },
    { label: "Control Accuracy", value: "± 2°C" },
    { label: "Uniformity", value: "± 3°C" },
    { label: "Timer", value: "0 to 9999 Min" },
    { label: "Safety Feature", value: "Over Temperature & Thermostatic" },
    { label: "Stand", value: "Stainless Steel with Heavy Wheels" },
    { label: "Heating Medium", value: "Oil" }
  ],
  regularAttributes: [
    "Industries Served: Pharmaceuticals",
    "Industries Served: R&D Institute",
    "Industries Served: Research Institute",
    "Industries Served: Microbiology"
  ],
  compliance: ["GMP", "CE Certified", "ISO 9001:2015"],
  tables: [
    {
      title: "Product Specifications",
      footerNote: "Note*: Available in variable sizes (1 Ltr. to 20 Ltr.)",
      headers: ["FEATURE", "UNIT", "AP_TT_OB_45", "AP_TT_SB_65", "AP_TT_SB_85"],
      rows: [
        ["Model", "-", "AP_TT_OB_45", "AP_TT_SB_65", "AP_TT_SB_85"],
        ["Capacity", "Lit", "01", "03", "20"],
        ["Vessel Dimensions OD", "Mm", "150", "200", "400"],
        ["Heater Power", "kW", "0.4", "1.0", "2.5"],
        ["Suitable for Bottles / Flasks", "Lits", "01", "03", "20"],
        ["Temperature Range", "°C", "50 to 250", "-", "-"],
        ["Resolution", "°C", "1", "-", "-"],
        ["Control Accuracy", "°C", "±2", "-", "-"],
        ["Uniformity", "°C", "±3", "-", "-"],
        ["Timer", "Min", "0 to 9999", "-", "-"],
        ["Safety feature", "-", "Over Temperature & Thermostatic", "-", "-"],
        ["Stand Slask", "-", "Stainless Steel with Heavy Wheels", "-", "-"]
      ]
    }
  ]
};