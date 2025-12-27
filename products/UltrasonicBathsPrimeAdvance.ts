import { ProductDetail } from '../types';

export const UltrasonicBathsPrimeAdvance: ProductDetail = {
  id: "tt-ub-prime-advance",
  name: "Prime Series with Advance Controlling",
  category: "Ultrasonic Baths",
  description: "Prime Series ultrasonic bath with advanced controlling likely refers to a high-end model of an ultrasonic cleaner with enhanced features and advanced control capabilities. Characteristics and features you might find in such a system are Advanced Control Interface, Digital Display, Temperature Control, Ultrasonic Power Control, Multiple Operating Modes, Programmable Features. The Prime Series ultrasonic bath with advanced controlling capabilities is designed to offer precise, efficient, and user-friendly operation for a wide range of cleaning applications in various industries, including laboratories, medical facilities, manufacturing, and research settings.",
  imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/ultrasonic_bath.png",
  mainFeatures: [
    "Advanced Control Interface",
    "Digital Display",
    "Temperature Control",
    "Ultrasonic Power Control",
    "Multiple Operating Modes",
    "Programmable Features"
  ],
  specifications: [
    { label: "Tank", value: "SS304" },
    { label: "Enclosure", value: "SS304" },
    { label: "Power Input", value: "230 VAC" },
    { label: "Degas Mode", value: "Yes" },
    { label: "PSP", value: "Yes" },
    { label: "Chiller", value: "Yes" },
    { label: "Ultrasonic Generator", value: "Advance latest MOSFET/IGBT based SMPS" },
    { label: "Accessories", value: "Lid, basket, drain valve, power cord, operation manual" },
    { label: "Castor Wheel", value: "PU coated castor wheels" }
  ],
  compliance: ["GMP", "CE Certified", "ISO 9001:2015"],
  tables: [
    {
      title: "Product Specifications",
      footerNote: "Note*: Available in customised sizes (6.5 Ltr. to 30 Ltr.)",
      headers: ["SPECIFICATION", "AP_TT_UB_PSAC_30", "AP_TT_UB_PSAC_50"],
      rows: [
        ["Tank Size (Inches)", "15*15*8", "18*18*10"],
        ["Outer Size (Inches)", "23*23*36", "26*26*36"],
        ["Tank", "SS304", "SS304"],
        ["Enclouser", "SS304", "SS304"],
        ["Tank Capacity", "30 Liter", "50 Liter"],
        ["Ultrasonic Power (Watts)", "500W", "750W"],
        ["Chiller", "✓", "✓"],
        ["PSP", "✓", "✓"],
        ["Degas", "✓", "✓"],
        ["U/S Frequency (Khz)", "33±3 khz", "33±3 khz"],
        ["Timer (Min)", "0-99", "0-99"],
        ["Temp (°C)", "10 to 35°C", "10 to 35°C"],
        ["Power Input (VAC)", "230 VAC", "230 VAC"],
        ["Ultrasonic Gen.", "Advance latest MOSFET/IGBT based SMPS", "Advance latest MOSFET/IGBT based SMPS"],
        ["Accessories", "Lid, basket, drain valve, power cord, operation manual", "Lid, basket, drain valve, power cord, operation manual"],
        ["Castor Wheel", "PU coated castor wheels", "PU coated castor wheels"]
      ]
    }
  ]
};