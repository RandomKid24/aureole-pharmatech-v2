
import { ProductItem, StandardItem, ProductCategory } from './types';

// Import All Products
import { StabilityChamber } from './products/StabilityChamber';
import { BODIncubator } from './products/BODIncubator';
import { ColdChamber } from './products/ColdChamber';
import { DeepFreezer } from './products/DeepFreezer';
import { UltraLowDeepFreezer } from './products/UltraLowDeepFreezer';
import { PhotostabilityChamber } from './products/PhotostabilityChamber';
import { PharmaRefrigerator } from './products/PharmaRefrigerator';
import { HotAirOven } from './products/HotAirOven';
import { VacuumOven } from './products/VacuumOven';
import { MuffleFurnace } from './products/MuffleFurnace';

// Import Walk-In Products
import { WalkInHumidityChamber } from './products/WalkInHumidityChamber';
import { WalkInColdChamber } from './products/WalkInColdChamber';
import { WalkInBODIncubator } from './products/WalkInBODIncubator';
import { WalkInDeepFreezer } from './products/WalkInDeepFreezer';

import { 
  NAV_LINKS, 
  MANIFESTO_ITEMS, 
  VENTURES, 
  SOFTWARE_CONTENT, 
  CAREERS_CONTENT, 
  CONTACT_INFO, 
  MARQUEE_TEXT, 
  ABOUT_CONTENT, 
  SERVICE_INTRO, 
  SERVICE_FEATURES, 
  SERVICE_LOCATIONS 
} from './CompanyData';

export { 
  NAV_LINKS, 
  MANIFESTO_ITEMS, 
  VENTURES, 
  SOFTWARE_CONTENT, 
  CAREERS_CONTENT, 
  CONTACT_INFO, 
  MARQUEE_TEXT, 
  ABOUT_CONTENT, 
  SERVICE_INTRO, 
  SERVICE_FEATURES, 
  SERVICE_LOCATIONS 
};

// Featured products for the home page sticky scroll component
// Fix: Added the missing PRODUCTS export as requested by StickyScroll.tsx
export const PRODUCTS: ProductItem[] = [
  {
    id: 1,
    title: "Stability Chambers",
    subtitle: "Precision Environmental Control",
    description: "Our stability chambers are engineered to provide accurate and consistent temperature and humidity conditions for pharmaceutical testing.",
    imageUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1000&auto=format&fit=crop",
    stats: [
      { label: "Accuracy", value: "±0.2°C" },
      { label: "Humidity", value: "±2% RH" }
    ]
  },
  {
    id: 2,
    title: "Walk-In Chambers",
    subtitle: "Industrial Scale Solutions",
    description: "Designed for bulk storage and large-scale industrial applications requiring precise controlled environments.",
    imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop",
    stats: [
      { label: "Capacity", value: "Up to 50KL" },
      { label: "Compliance", value: "21 CFR P11" }
    ]
  },
  {
    id: 3,
    title: "Ultra Low Freezers",
    subtitle: "Deep Cold Storage",
    description: "Advanced freezers designed for critical storage of biological samples at temperatures down to -86°C.",
    imageUrl: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2000&auto=format&fit=crop",
    stats: [
      { label: "Temp Range", value: "-86°C" },
      { label: "Reliability", value: "Dual Sensor" }
    ]
  },
  {
    id: 4,
    title: "Laboratory Furniture",
    subtitle: "Ergonomic Workspaces",
    description: "Customized laboratory furniture systems designed for durability and functionality in modern labs.",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop",
    stats: [
      { label: "Systems", value: "C-Frame/H-Frame" },
      { label: "Safety", value: "Fume Hoods" }
    ]
  }
];

// Map names to their detailed specification objects
export const DETAILED_PRODUCTS = {
  "Humidity Chamber / Stability Chamber": StabilityChamber,
  "BOD Incubator": BODIncubator,
  "Cold Chamber": ColdChamber,
  "Deep Freezer (upto -20°C / upto -40°C)": DeepFreezer,
  "Ultra Low Deep Freezer (-80°C)": UltraLowDeepFreezer,
  "Photostability Chamber": PhotostabilityChamber,
  "Pharma Refrigerator / Dual Zone Chamber": PharmaRefrigerator,
  "Hot Air Oven": HotAirOven,
  "Vacuum Oven": VacuumOven,
  "Muffle Furnace": MuffleFurnace,
  "Walk In Humidity Chamber": WalkInHumidityChamber,
  "Walk In Cold Chamber": WalkInColdChamber,
  "Walk In BOD Incubator": WalkInBODIncubator,
  "Walk In Deep Freezer": WalkInDeepFreezer
};

export const PRODUCT_CATALOG: ProductCategory[] = [
  {
    id: "stability",
    title: "Stability Chambers",
    description: "Stability chambers are precision-engineered environmental control systems designed to provide accurate and consistent temperature and humidity conditions. They play a vital role in the pharmaceutical industry, ensuring that products maintain their quality, safety, and efficacy throughout their intended shelf life.",
    groups: [
      {
        title: "Walk In Chambers",
        items: [
          "Walk In Humidity Chamber",
          "Walk In Cold Chamber",
          "Walk In BOD Incubator",
          "Walk In Deep Freezer"
        ]
      },
      {
        title: "Humidity & Stability",
        items: [
          "Humidity Chamber / Stability Chamber",
          "Photostability Chamber"
        ]
      },
      {
        title: "Incubators & Ovens",
        items: [
          "BOD Incubator",
          "Hot Air Oven",
          "Vacuum Oven",
          "Muffle Furnace"
        ]
      },
      {
        title: "Temperature Control",
        items: [
          "Cold Chamber",
          "Deep Freezer (upto -20°C / upto -40°C)",
          "Ultra Low Deep Freezer (-80°C)",
          "Pharma Refrigerator / Dual Zone Chamber"
        ]
      }
    ]
  },
  {
    id: "tabletop",
    title: "Table Top Instruments",
    description: "Table top instruments are compact, versatile laboratory devices designed to support a wide range of quality control, research, and testing applications. With precise temperature regulation, agitation, cleaning, and analytical support, these instruments are essential tools.",
    groups: [
      {
        title: "Ultrasonic Baths",
        items: [
          "Eco Series",
          "Prime Series",
          "Prime Series with Chilling",
          "Prime Series with Advance Controlling",
          "Prime Series with Heating & Shaking",
          "Industrial Series"
        ]
      },
      {
        title: "Water Baths",
        items: [
          "Constant",
          "Circulating",
          "Steam Bath",
          "Oil Bath",
          "Dry Bath",
          "Chilled Circulating Bath"
        ]
      },
      {
        title: "Refrigerated Circular Bath",
        items: [
          "Standard Cooling Bath"
        ]
      },
      {
        title: "Air Sampler",
        items: [
          "Basic Model",
          "21 CFR Model"
        ]
      },
      {
        title: "Stainless Steel Items & Accessories",
        items: [
          "Custom SS Labware"
        ]
      }
    ]
  },
  {
    id: "furniture",
    title: "Laboratory Furniture",
    description: "Laboratory furniture systems designed to provide ergonomic, durable, and functional workspaces for modern laboratories.",
    groups: [
      {
        title: "Frame Systems",
        items: [
          "C-Frame System",
          "H-Frame System",
          "Plinth & Pedestal System"
        ]
      },
      {
        title: "Work Surfaces",
        items: [
          "Laboratory Worktops"
        ]
      },
      {
        title: "Safety Equipment",
        items: [
          "Fume Cupboards"
        ]
      },
      {
        title: "Installations",
        items: [
          "Laboratory Fittings",
          "Hardware"
        ]
      },
      {
        title: "Storage Solutions",
        items: [
          "Storage Cabinets",
          "Lab Accessories"
        ]
      }
    ]
  }
];
