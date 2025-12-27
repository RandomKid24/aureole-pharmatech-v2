import { ProductDetail } from '../types';

export const WaterBathSteam: ProductDetail = {
  id: "tt-wb-steam",
  name: "Steam Bath",
  category: "Water Baths",
  description: "A Steam bath is a advance version in water bath. It is designed such a way to reach and maintain 100 degree temperature. Steam bath is useful in many industries and laboratories. This machine is essential in Microbiology & Production Departments for substance testing the specimen is a heated water. The samples are kept inside them to test their behavior in rising temperature. This Steam bath is successfully used in microbiology, quality control, production Dept. in Pharmaceutical, Healthcare, Institutions & Food Industry.",
  imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/ultrasonic_bath.png",
  mainFeatures: [
    "Steam heating system",
    "Can reach and maintain 100°C temperature",
    "Essential for Microbiology & Production Departments",
    "Safety features",
    "Overshoot & Water Level Low Cut Off",
    "Stainless Steel Validation Port",
    "Digital control with high accuracy",
    "Stand and Trolley with heavy wheels"
  ],
  specifications: [
    { label: "Temperature Range", value: "Ambient + 5 to 100°C" },
    { label: "Resolution", value: "0.1°C" },
    { label: "Control Accuracy", value: "± 2°C" },
    { label: "Uniformity", value: "± 2°C" },
    { label: "Timer", value: "0 to 9999 Min" },
    { label: "Safety Feature", value: "Overshoot & Water Level Low Cut Off" },
    { label: "Validation Port", value: "Stainless Steel" },
    { label: "Stand and Trolley", value: "Stainless Steel with Heavy Wheels" },
    { label: "Heating Method", value: "Steam" }
  ],
  regularAttributes: [
    "Industries Served: Pharmaceuticals - QC, Microbiology, Production Labs",
    "Industries Served: Food Industries - QC, Testing Labs",
    "Industries Served: Institutes - Microbiology, Research Labs"
  ],
  compliance: ["GMP", "CE Certified", "ISO 9001:2015"],
  tables: [
    {
      title: "Product Specifications",
      headers: ["FEATURE", "UNIT", "AP_TT_SB_45", "AP_TT_SB_65", "AP_TT_SB_85"],
      rows: [
        ["Model", "-", "AP_TT_SB_45", "AP_TT_SB_65", "AP_TT_SB_85"],
        ["Capacity", "Lit", "45", "65", "85"],
        ["Inner Dimensions L x D x H", "Mm", "500 x 300 x 325", "500 x 300 x 425", "500 x 400 x 425"],
        ["Heater Power", "kW", "1.5", "3", "5"],
        ["Suitable for Bottles/Flasks", "Lits", "1 x 12 no's", "5 x 2 no's", "5 x 4 no's"],
        ["Temperature Range", "°C", "Ambient + 5 to 100", "Ambient + 5 to 100", "Ambient + 5 to 100"],
        ["Resolution", "°C", "0.1", "0.1", "0.1"],
        ["Control Accuracy", "°C", "± 2", "± 2", "± 2"],
        ["Uniformity", "°C", "± 2", "± 2", "± 2"],
        ["Timer", "Min", "0 to 9999", "0 to 9999", "0 to 9999"],
        ["Safety feature", "-", "Overshoot & Water Level Low Cut Off", "-", "-"],
        ["Validation Port", "-", "Stainless Steel", "-", "-"],
        ["Stand and Trolley", "-", "Stainless Steel with Heavy Wheels", "-", "-"]
      ]
    }
  ]
};