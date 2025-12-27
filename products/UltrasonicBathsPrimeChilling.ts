import { ProductDetail } from '../types';

export const UltrasonicBathsPrimeChilling: ProductDetail = {
  id: "tt-ub-prime-chilling",
  name: "Prime Series with Chilling",
  category: "Ultrasonic Baths",
  description: "A chiller sonicator, also known as a refrigerated ultrasonic bath or a cryogenic ultrasonic bath, combines the features of an ultrasonic bath with refrigeration capabilities. This equipment is particularly useful in applications where maintaining a low temperature during ultrasonic cleaning is crucial.",
  imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/ultrasonic_bath.png",
  mainFeatures: [
    "Integrated chilling system",
    "Temperature control",
    "Advanced ultrasonic cleaning",
    "Digital interface",
    "PSP functionality",
    "Degas mode"
  ],
  specifications: [
    { label: "Tank", value: "SS304" },
    { label: "Enclosure", value: "SS304" },
    { label: "Power Input", value: "230 VAC" },
    { label: "Degas Mode", value: "Yes" },
    { label: "PSP", value: "Yes" },
    { label: "Chiller", value: "Yes" },
    { label: "Ultrasonic Generator", value: "Advance latest MOSFET/IGBT based SMPS" },
    { label: "Accessories", value: "Lid, basket, drain valve, power cord, operation manual" }
  ],
  compliance: ["GMP", "CE Certified", "ISO 9001:2015"],
  tables: [
    {
      title: "Product Specifications",
      headers: ["MODEL", "AP_TT_UB_CS_TT/FM_10", "AP_TT_UB_CS_TT/FM_20"],
      rows: [
        ["Tank Size (Inches)", "12*10*6", "18*12*6"],
        ["Outer Size (Inches)", "18.4*17.2*22", "24*20*20"],
        ["Tank", "SS304", "SS304"],
        ["Enclouser", "SS304", "SS304"],
        ["Tank Capacity", "10 Liter", "20 Liter"],
        ["Ultrasonic Power (Watts)", "250W", "400W"],
        ["Chiller", "✓", "✓"],
        ["PSP", "✓", "✓"],
        ["Degas", "✓", "✓"],
        ["U/S Frequency Khz", "33±3 khz", "33±3 khz"],
        ["Timer (Min)", "0-99", "0-99"],
        ["Temp (°C)", "10 to 35°C", "10 to 35°C"],
        ["Power Input (VAC)", "230 VAC", "230 VAC"],
        ["Ultrasonic Gen.", "Advance latest MOSFET/IGBT based SMPS", "-"],
        ["Accessories", "Lid, basket, drain valve, power cord, operation manual", "-"]
      ]
    }
  ]
};