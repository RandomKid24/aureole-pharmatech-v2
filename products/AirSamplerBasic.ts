import { ProductDetail } from '../types';

export const AirSamplerBasic: ProductDetail = {
  id: "tt-as-basic",
  name: "Basic Model",
  category: "Air Samplers",
  description: "Advanced air sampling system with comprehensive features for environmental monitoring and quality control applications. Designed for high-precision microbial air sampling in cleanrooms and controlled environments.",
  imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/ultrasonic_bath.png", // Using a placeholder as no specific image URL was provided for this new asset
  mainFeatures: [
    "High-precision sampling flow rate",
    "Extensive storage for recipes and locations",
    "Long battery backup for field operations",
    "Wi-fi communication for data management",
    "Intuitive 4.3\" Tft Lcd display",
    "Durable anodized aluminum sampling head",
    "Comprehensive audit trail records"
  ],
  specifications: [
    { label: "Sampling Flow Rate", value: "25, 50, 100, 200 ltr/min" },
    { label: "Volume", value: "25 to 2000 L" },
    { label: "Location", value: "1000 locations" },
    { label: "Sample Recipes", value: "1000 recipes" },
    { label: "Sampling Delay", value: "0 to 300 seconds" },
    { label: "Delay Between Runs", value: "0 to 600 seconds" },
    { label: "Sampling Head", value: "1.00 mm 219 holes, anodized aluminum" },
    { label: "Weight", value: "2.7 kg" },
    { label: "Battery Lifep04", value: "10 hours sampling backup" },
    { label: "Communication", value: "Wi-fi" },
    { label: "Display", value: "4.3\" Tft Lcd (272 X 480)" },
    { label: "Warranty", value: "1 year" }
  ],
  regularAttributes: [
    "Industries Served: Pharmaceuticals - Quality, R&D, Production Labs",
    "Industries Served: Food Industries - QC, Testing Labs",
    "Industries Served: Institutes - R&D Labs"
  ],
  compliance: ["GMP", "CE Certified", "ISO 9001:2015"],
  tables: [
    {
      title: "Air Sampler - Salient Features",
      headers: ["FEATURE", "VALUE"],
      rows: [
        ["Sampling Flow Rate", "Available in 25, 50, 100, 200 ltr/min"],
        ["Volume", "25 to 2000 L"],
        ["Location", "1000 locations"],
        ["Sample Recipes", "1000 recipes"],
        ["Sampling Delay", "0 to 300 seconds"],
        ["Delay Between Runs", "0 to 600 seconds"],
        ["Group Configurations", "100 groups"],
        ["Users Configurations", "1000 users"],
        ["Remarks Configurations", "1000 marks"],
        ["Sample Data Records", "100000 to 500000 records"],
        ["Audit Trail Records", "500000 to 1500000 records"],
        ["Sampling Head", "1.00 mm 219 holes, anodized aluminum"],
        ["Weight", "2.7 kg"],
        ["Calibration", "Annual Calibration is recommended"],
        ["Battery Lifep04", "10 hours sampling backup"],
        ["Battery Charger", "14 to 16 Vdc with 1.5a"],
        ["Communication", "Wi-fi"],
        ["Display", "4.3\" Tft Lcd (272 X 480)"],
        ["Operating Environments", "Temperature: 5 - 30°c; Humidity: 10 - 80% Rh"],
        ["Storage Environments", "Temperature: 5 - 40°c; Humidity: 10 - 80% Rh"],
        ["Warranty", "1 year"]
      ]
    }
  ]
};