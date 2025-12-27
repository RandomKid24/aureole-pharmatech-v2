import { ProductDetail } from '../types';

export const DryBath: ProductDetail = {
  id: "tt-db-dry",
  name: "Dry Bath",
  category: "Water Baths",
  description: "Digital Dry Bath Incubator is designed for maintaining constant temperature of samples in test tubes inserted in the aluminum block sockets. It is widely used for pathology laboratory, IVF Center, Pharmaceutical laboratory, Food & Dairy industries, PCR - analysis extraction of DNA and RNA from cell cultures, etc.",
  imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/ultrasonic_bath.png",
  mainFeatures: [
    "Contamination-free heating using dry blocks",
    "Compact design for laboratory use",
    "Multiple block options for different tube sizes",
    "Digital control system",
    "Aluminum block sockets for test tubes",
    "Widely used in pathology, IVF, and pharmaceutical labs"
  ],
  specifications: [
    { label: "Temperature Range", value: "+5° above ambient to 100°C" },
    { label: "Timer", value: "1 min to 99hrs 59min or non stop" },
    { label: "Number of holes", value: "24 holes or 48 holes" },
    { label: "Hole Size", value: "0.5, 1.5, 2.0, 5.0, 7.5, 10.0, 15.0 ml tube size" },
    { label: "Dimensions", value: "23L x 23W x 13H cm Approx" },
    { label: "Power", value: "AC 220 V 50/60 Hz" },
    { label: "Weight", value: "4 kg" },
    { label: "Outer Body", value: "Fully SS 304" }
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
      footerNote: "Note*: Available in Customised Blocks",
      headers: ["FEATURE", "VALUE"],
      rows: [
        ["Model", "AP_TT_DB_400"],
        ["Temperature Range", "+5° above ambient to 100°"],
        ["Timer", "1 min to 99hrs 59min or non stop"],
        ["Number of holes", "24 holes or 48 holes"],
        ["Hole Size", "holes can be designed for 0.5, 1.5, 2.0, 5.0, 7.5, 10.0, 15.0 ml tube size"],
        ["Dimensions", "23L x 23W x 13H cm Approx"],
        ["Power", "AC 220 V 50/60 Hz"],
        ["Weight", "4 kg"],
        ["Outer Body", "Fully SS 304"]
      ]
    }
  ]
};