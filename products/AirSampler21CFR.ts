import { ProductDetail } from '../types';

export const AirSampler21CFR: ProductDetail = {
  id: "tt-as-21cfr",
  name: "21 CFR Model",
  category: "Air Samplers",
  description: "A high-performance air sampling system specifically engineered to meet the stringent requirements of USFDA 21 CFR Part 11. This model features an integrated web-based ecosystem for total data integrity, secure electronic records, and advanced user management, making it the definitive choice for regulated pharmaceutical environments.",
  imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/ultrasonic_bath.png",
  mainFeatures: [
    "Fully compliant with 21 CFR Part 11 regulations",
    "Web-based software for seamless data synchronization",
    "Secure password mechanism for all critical operations",
    "Advanced audit trail with multilevel search and reporting",
    "Directional data transfer through Wi-Fi connectivity",
    "Smart user management with password authentication",
    "Aspirating head quick bayonet fixing system",
    "Robust sampler design with easy and fast charging"
  ],
  specifications: [
    { label: "Flow Rate", value: "100 or 200 ltr / minute available" },
    { label: "Sample Storage", value: "Up to 100,000 Sample Data records" },
    { label: "Audit Trail Storage", value: "Up to 150,000 Audit Trail Events" },
    { label: "Battery Backup", value: "10 Hours continuous operation" },
    { label: "Communication", value: "Wi-Fi enabled data transfer" },
    { label: "Compliance", value: "21 CFR Part 11 compliant software" },
    { label: "User Management", value: "Multilevel secure access control" },
    { label: "Interface", value: "High-resolution touch screen interface" }
  ],
  regularAttributes: [
    "Configurable features: Add, edit, view, enable/disable for groups and users",
    "Customizable report formats and remarks configurations",
    "On-device display of filtered sample and audit trail records",
    "Cycle data and audit trail data templates included",
    "Automatic synchronization of sample data"
  ],
  compliance: ["21 CFR Part 11", "GMP", "ISO 9001:2015", "CE Certified"],
  galleryItems: [
    { label: "Login & Secure Access", imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/ultrasonic_bath.png" },
    { label: "Data Search Interface", imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/ultrasonic_bath.png" },
    { label: "Audit Trail Reports", imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/ultrasonic_bath.png" }
  ]
};