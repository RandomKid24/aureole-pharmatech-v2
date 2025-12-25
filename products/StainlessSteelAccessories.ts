import { ProductDetail } from '../types';

export const StainlessSteelAccessories: ProductDetail = {
  id: "tt-ss-acc",
  name: "Stainless Steel Items & Accessories",
  category: "Table Top Instruments",
  description: "High-quality stainless steel accessories and components for laboratory equipment including test tube racks, weight rings, exposing stands, swab plates, and lids & stands. Engineered for durability and high-grade sterilization standards in pharmaceutical and research environments.",
  imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
  mainFeatures: [
    "High-grade SS 304 / SS 316 construction",
    "Corrosion resistant and easy to sterilize",
    "Precision engineered for laboratory compatibility",
    "Ergonomic designs for easy manipulation",
    "Customizable sizes for specific applications",
    "Durable finish suitable for cleanroom use"
  ],
  specifications: [
    { label: "Material", value: "SS 304 / SS 316 L Grade" },
    { label: "Finish", value: "Mirror / Matte / Electro-polished" },
    { label: "Application", value: "Laboratories, QC, R&D, Production" },
    { label: "Durability", value: "Acid and Alkali resistant" },
    { label: "Customization", value: "Available as per client requirement" }
  ],
  compliance: ["GMP Standards", "ISO Certified", "FDA Compliant Materials"],
  regularAttributes: [
    "Test Tube Racks - Sheet",
    "Test Tube Racks - Wire Mesh",
    "Weight Rings",
    "Exposing Stands",
    "Swab Plates - Box",
    "Swab Plates - Plate",
    "Swab Plates - Perforated",
    "Lid & Stands - Tray",
    "Lid & Stands - Blocks",
    "Lid & Stands - Mesh Rack"
  ],
  tables: [
    {
      title: "Available Accessory Range",
      headers: ["CATEGORY", "AVAILABLE TYPES", "TYPICAL APPLICATION"],
      rows: [
        ["Test Tube Racks", "Sheet Type / Wire Mesh Type", "Sample Organization & Transport"],
        ["Weight Rings", "Vinyl Coated / Specialized", "Stabilizing Volumetric Flasks"],
        ["Swab Plates", "Box / Plate / Perforated", "Environmental Monitoring & Sampling"],
        ["Stands", "Exposing / Lid & Stands", "Equipment Support & Component Storage"],
        ["Storage Blocks", "Custom Perforated Blocks", "Precision Tool Holding"]
      ],
      footerNote: "All items are manufactured with high-precision CNC machining for smooth edges and safety."
    }
  ]
};