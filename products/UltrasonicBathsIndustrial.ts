import { ProductDetail } from '../types';

export const UltrasonicBathsIndustrial: ProductDetail = {
  id: "tt-ub-industrial",
  name: "Industrial Series",
  category: "Ultrasonic Baths",
  description: "Heavy-duty ultrasonic cleaning systems designed for industrial and large-scale applications. These systems are engineered to handle continuous operation in demanding environments, offering superior cleaning power and durability for industrial parts, automotive components, and large laboratory batches.",
  imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/ultrasonic_bath.png",
  mainFeatures: [
    "Industrial grade construction",
    "High power output",
    "Large capacity",
    "Robust design",
    "Heavy-duty transducers",
    "Continuous operation capability"
  ],
  specifications: [
    { label: "Frequency", value: "20/40/80 kHz" },
    { label: "Power", value: "500W - 2000W" },
    { label: "Capacity", value: "10L - 100L" },
    { label: "Construction", value: "Industrial grade SS 316 / SS 304" },
    { label: "Generator", value: "High-power MOSFET based SMPS" },
    { label: "Heating", value: "High-capacity immersion heaters" }
  ],
  compliance: ["GMP", "CE Certified", "ISO 9001:2015"]
};