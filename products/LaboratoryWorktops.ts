import { ProductDetail } from '../types';

export const LaboratoryWorktops: ProductDetail = {
  id: "lf-lwt",
  name: "Laboratory Worktops",
  category: "Laboratory Furniture",
  description: "Made of 16mm thick laboratory grade Compact Laminate Boards (Max Resistance). The panels are made from approved and tested raw materials, compressed under high pressure, resulting in a unique, homogenous panel without joints. Fully enclosed and therefore resistant against the penetration of moisture. The surface is protected with a dual cured urethane acrylic coating which makes it unaffected by solvents and chemicals in extreme working conditions of the laboratory. Easy to clean and disinfect.",
  mainFeatures: [
    "Chemical Resistance Worktops",
    "Granite Options",
    "Epoxy Resin Worktops",
    "16mm thick laboratory grade Compact Laminate Boards",
    "High pressure compressed construction",
    "Moisture resistant"
  ],
  specifications: [
    { label: "Material", value: "16mm thick laboratory grade Compact Laminate Boards (Max Resistance)" },
    { label: "Construction", value: "Approved and tested raw materials, compressed under high pressure" },
    { label: "Panel Type", value: "Unique, homogenous panel without joints" },
    { label: "Moisture Resistance", value: "Fully enclosed and resistant against moisture penetration" },
    { label: "Surface Protection", value: "Dual cured urethane acrylic coating" },
    { label: "Chemical Resistance", value: "Unaffected by solvents and chemicals in extreme working conditions" },
    { label: "Varieties", value: "Chemical Resistance Worktops, Granite, Epoxy Resin Worktops" }
  ],
  compliance: ["ISO 9001:2015", "SEFA 3"],
  regularAttributes: [
    "Applications: Chemical Analysis Labs",
    "Applications: Microbiological Labs",
    "Applications: Pharmaceutical Quality Control",
    "Applications: Research & Development"
  ]
};