import { ProductDetail } from '../types';

export const UltrasonicBathsPrimeHeatingShaking: ProductDetail = {
  id: "tt-ub-prime-heating-shaking",
  name: "Prime Series with Heating & Shaking",
  category: "Ultrasonic Baths",
  description: "The Prime Series ultrasonic bath with heating and shaking capabilities is a sophisticated laboratory instrument designed to meet the demanding requirements of modern research and industrial applications. Its combination of ultrasonic cleaning, precise temperature control, and mechanical agitation offers users a versatile and efficient solution for a wide range of sample treatment and processing tasks.",
  imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/ultrasonic_bath.png",
  mainFeatures: [
    "Heating capabilities",
    "Shaking capabilities",
    "Sophisticated laboratory instrument",
    "Meets demanding research and industrial applications",
    "Ultrasonic cleaning",
    "Precise temperature control"
  ],
  specifications: [
    { label: "Working Temperature Range", value: "Ambient -60°C" },
    { label: "Display Resolution", value: "1°C" },
    { label: "Temperature Capacity", value: "±1°C" },
    { label: "Ultrasonic Frequency", value: "33 kHz, ±3" },
    { label: "Bath Capacity", value: "20 L" },
    { label: "Adjustable Shaking Frequency", value: "20-45 RPM" },
    { label: "Shaking Stroke", value: "50 mm" },
    { label: "Mains Power Supply", value: "230 VAC, 10 A, 50 Hz" }
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
      headers: ["SPECIFICATION", "AP_TT_UB_PSHS_20"],
      rows: [
        ["Working Temp Range (°C)", "Ambient -60"],
        ["Display Resolution (°C)", "1"],
        ["Temp Capacity (°C)", "±1"],
        ["Ultrasonic Freq (Khz)", "33 khz, ±3"],
        ["Bath Capacity (L)", "20"],
        ["Adjustable Shaking freq (RPM)", "20-45"],
        ["Shaking Stroke (mm)", "50"],
        ["Internal Bath Dimensions (mm)", "485*300*150"],
        ["External Bath Dimensions (mm)", "655*380*425"],
        ["Tray Size (mm)", "385*260*65"],
        ["Mains Power Supply", "230 VAC, 10 A, 50 Hz"]
      ]
    }
  ]
};