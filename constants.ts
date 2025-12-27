import { ProductItem, StandardItem, ProductCategory, ProductDetail } from './types';

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

// Import Table Top / Accessories
import { StainlessSteelAccessories } from './products/StainlessSteelAccessories';
import { UltrasonicBathsEco } from './products/UltrasonicBathsEco';
import { UltrasonicBathsPrime } from './products/UltrasonicBathsPrime';
import { UltrasonicBathsPrimeChilling } from './products/UltrasonicBathsPrimeChilling';
import { UltrasonicBathsPrimeAdvance } from './products/UltrasonicBathsPrimeAdvance';
import { UltrasonicBathsPrimeHeatingShaking } from './products/UltrasonicBathsPrimeHeatingShaking';
import { UltrasonicBathsIndustrial } from './products/UltrasonicBathsIndustrial';
import { WaterBathConstant } from './products/WaterBathConstant';
import { WaterBathCirculating } from './products/WaterBathCirculating';
import { WaterBathSteam } from './products/WaterBathSteam';
import { WaterBathOil } from './products/WaterBathOil';
import { DryBath } from './products/DryBath';
import { ChilledCirculatingBath } from './products/ChilledCirculatingBath';
import { RefrigeratedCircularBath } from './products/RefrigeratedCircularBath';
import { AirSamplerBasic } from './products/AirSamplerBasic';
import { AirSampler21CFR } from './products/AirSampler21CFR';

// Import Laboratory Furniture
import { CFrameSystem } from './products/CFrameSystem';
import { HFrameSystem } from './products/HFrameSystem';
import { PlinthSystem } from './products/PlinthSystem';
import { LaboratoryWorktops } from './products/LaboratoryWorktops';
import { FumeCupboards } from './products/FumeCupboards';
import { LaboratoryFittings } from './products/LaboratoryFittings';
import { Hardware } from './products/Hardware';
import { StorageCabinets } from './products/StorageCabinets';
import { LabAccessories } from './products/LabAccessories';

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

// Map names to their detailed specification objects
export const DETAILED_PRODUCTS: Record<string, ProductDetail> = {
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
  "Walk In Deep Freezer": WalkInDeepFreezer,
  "Eco Series": UltrasonicBathsEco,
  "Prime Series": UltrasonicBathsPrime,
  "Prime Series with Chilling": UltrasonicBathsPrimeChilling,
  "Prime Series with Advance Controlling": UltrasonicBathsPrimeAdvance,
  "Prime Series with Heating & Shaking": UltrasonicBathsPrimeHeatingShaking,
  "Industrial Series": UltrasonicBathsIndustrial,
  "Constant": WaterBathConstant,
  "Circulating": WaterBathCirculating,
  "Steam Bath": WaterBathSteam,
  "Oil Bath": WaterBathOil,
  "Dry Bath": DryBath,
  "Chilled Circulating Bath": ChilledCirculatingBath,
  "Refrigerated Circular Bath": RefrigeratedCircularBath,
  "Basic Model": AirSamplerBasic,
  "21 CFR Model": AirSampler21CFR,
  "Stainless Steel Items & Accessories": StainlessSteelAccessories,
  "C-Frame System": CFrameSystem,
  "H-Frame System": HFrameSystem,
  "Plinth & Pedestal System": PlinthSystem,
  "Laboratory Worktops": LaboratoryWorktops,
  "Fume Cupboards": FumeCupboards,
  "Laboratory Fittings": LaboratoryFittings,
  "Hardware": Hardware,
  "Storage Cabinets": StorageCabinets,
  "Lab Accessories": LabAccessories
};

export const PRODUCT_CATALOG: ProductCategory[] = [
  {
    id: "stability",
    title: "Stability Chambers",
    description: "Stability chambers are precision-engineered environmental control systems designed to provide accurate and consistent temperature and humidity conditions.",
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
    description: "Table top instruments are compact, versatile laboratory devices designed to support a wide range of quality control, research, and testing applications.",
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
        title: "Circular Baths",
        items: ["Refrigerated Circular Bath"]
      },
      {
        title: "Air Samplers",
        items: ["Basic Model", "21 CFR Model"]
      },
      {
        title: "Accessories",
        items: ["Stainless Steel Items & Accessories"]
      }
    ]
  },
  {
    id: "furniture",
    title: "Laboratory Furniture",
    description: "Laboratory furniture systems designed to provide ergonomic, durable, and functional workspaces for modern laboratories.",
    groups: [
      {
        title: "PRODUCTS",
        items: [
          "C-Frame System",
          "H-Frame System",
          "Plinth & Pedestal System",
          "Laboratory Worktops",
          "Fume Cupboards",
          "Laboratory Fittings",
          "Hardware",
          "Storage Cabinets",
          "Lab Accessories"
        ]
      }
    ]
  }
];

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
    id: 4,
    title: "Laboratory Furniture",
    subtitle: "Ergonomic Workspaces",
    description: "Customized laboratory furniture systems designed for durability and functionality in modern labs.",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=2000&auto=format&fit=crop",
    stats: [
      { label: "Systems", value: "C-Frame/H-Frame" },
      { label: "Safety", value: "Fume Hoods" }
    ]
  }
];