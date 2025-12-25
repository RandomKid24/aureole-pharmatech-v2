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

// Import Laboratory Furniture
import { CFrameSystem } from './products/CFrameSystem';

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

// Ultrasonic Bath - Eco Series Data
const EcoSeries: ProductDetail = {
  id: "tt-ub-es",
  name: "Eco Series",
  category: "Ultrasonic Baths",
  description: "An ultrasonic bath, also known as an ultrasonic cleaner, is a device that uses ultrasound and a cleaning solvent to clean items. These baths are commonly used in various industries including laboratories, electronics manufacturing, medical facilities, jewellery making, and automotive repair.",
  imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
  mainFeatures: [
    "Energy efficient design",
    "Digital frequency control",
    "Compact footprint",
    "Easy operation",
    "Degas mode",
    "Inbuilt temperature control"
  ],
  specifications: [
    { label: "Tank", value: "SS 304" },
    { label: "Enclosure", value: "SS 304" },
    { label: "Power Input", value: "230 VAC" },
    { label: "Degas Mode", value: "On / Off" },
    { label: "Transducer", value: "Imported make PZT type bonded at the bottom of the tank with weld bond technique" },
    { label: "Ultrasonic Generator", value: "Advance latest MOSFET/IGBT based smps" },
    { label: "Accessories", value: "Lid, Basket, Drain Valve, Powercard, User friendly operation manual" }
  ],
  compliance: ["ISO", "CE", "GMP"],
  tables: [
    {
      title: "Product Specifications",
      headers: ["SPECIFICATION", "AP_TT_UB_ES_3", "AP_TT_UB_ES_5", "AP_TT_UB_ES_10", "AP_TT_UB_ES_22"],
      footerNote: "Available in variable sizes (2 Ltr. to 22 Ltr.)",
      rows: [
        ["Tank Size (L*W*H)", "240*140*100", "235*235*100", "300*240*150", "500*300*150"],
        ["Outer Size (L*W*H) (mm)", "265*162*240", "265*265*250", "325*276*260", "530*320*400"],
        ["Tank", "SS 304", "SS 304", "SS 304", "SS 304"],
        ["Enclosure", "SS 304", "SS 304", "SS 304", "SS 304"],
        ["Tank Capacity", "3 Liter", "5 Liter", "10 Liter", "22 Liter"],
        ["Ultrasonic Power", "100 Watts", "100 Watts", "250 Watts", "400 Watts"],
        ["Heater Power", "100 Watts", "200 Watts", "200 Watts", "500 Watts"],
        ["PSP", "NA", "NA", "NA", "NA"],
        ["Ultrasonic Freq.", "33±3", "40/33±3", "40/33±3", "40/33±3"],
        ["Timer Digital", "0 to 15 min", "0 to 99 min", "0 to 99 min", "0 to 99 min"],
        ["Power Input", "230 VAC", "230 VAC", "230 VAC", "230 VAC"],
        ["Degas Mode", "On / Off", "On / Off", "On / Off", "On / Off"],
        ["Temperature", "45°C (Inbuilt)", "Amb. - 60°C", "Amb. - 60°C", "Amb. - 60°C"],
        ["Transducer", "Imported make PZT type bonded at the bottom of the tank with weld bond technique", "", "", ""],
        ["Ultrasonic Gen.", "Advance latest MOSFET/IGBT based smps", "", "", ""],
        ["Accessories", "Lid, Basket, Drain Valve, Powercard, User friendly operation manual", "", "", ""]
      ]
    }
  ]
};

// Ultrasonic Bath - Prime Series Data
const PrimeSeries: ProductDetail = {
  id: "tt-ub-ps",
  name: "Prime Series",
  category: "Ultrasonic Baths",
  description: "An ultrasonic bath, also known as an ultrasonic cleaner, is a device that uses ultrasound and a cleaning solvent to clean items. These baths are commonly used in various industries including laboratories, electronics manufacturing, medical facilities, jewellery making, and automotive repair.",
  imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
  mainFeatures: [
    "Advanced control system",
    "Multiple frequency options",
    "Heating capability",
    "Digital display",
    "PSP functionality",
    "Degas mode"
  ],
  specifications: [
    { label: "Tank", value: "SS 304" },
    { label: "Enclosure", value: "SS 304" },
    { label: "Power Input", value: "230 VAC" },
    { label: "Degas Mode", value: "On / Off" },
    { label: "Transducer", value: "Imported make PZT type bonded at the bottom of the tank with weld bond technique" },
    { label: "Ultrasonic Generator", value: "Advance latest MOSFET/IGBT based smps" },
    { label: "Accessories", value: "Lid, Basket, Drain Valve, Powercard, User friendly operation manual" }
  ],
  compliance: ["ISO", "CE", "GMP"],
  tables: [
    {
      title: "Product Specifications",
      headers: ["SPECIFICATION", "AP_TT_UB_PS_6.5", "AP_TT_UB_PS_20", "AP_TT_UB_PS_30"],
      footerNote: "Available in variable sizes (6.5 Ltr. to 30 Ltr.)",
      rows: [
        ["Tank Size (L*W*H) (inches)", "12*6*6", "14*12*8", "15*15*8"],
        ["Outer Size (L*W*H) (inches)", "15*9.8*15.4", "17.4*16*16.8", "19.2*19.8*19"],
        ["Tank", "SS 304", "SS 304", "SS 304"],
        ["Enclosure", "SS 304", "SS 304", "SS 304"],
        ["Tank Capacity", "6.5 Liter", "20 Liter", "30 Liter"],
        ["Ultrasonic Power", "150 Watts", "400 Watts", "500 Watts"],
        ["Heater Power", "500 Watts", "500 Watts", "500 Watts"],
        ["PSP", "Yes", "Yes", "Yes"],
        ["Ultrasonic Freq.", "25/33/40±3", "25/33/40±3", "25/33/40±3"],
        ["Timer Digital", "0 to 99 min", "0 to 99 min", "0 to 99 min"],
        ["Power Input", "230 VAC", "230 VAC", "230 VAC"],
        ["Degas Mode", "On / Off", "On / Off", "On / Off"],
        ["Temperature", "Amb. - 60°C", "Amb. - 60°C", "Amb. - 60°C"],
        ["Transducer", "Imported make PZT type bonded at the bottom of the tank with weld bond technique", "", ""],
        ["Ultrasonic Gen.", "Advance latest MOSFET/IGBT based smps", "", ""],
        ["Accessories", "Lid, Basket, Drain Valve, Powercard, User friendly operation manual", "", ""]
      ]
    }
  ]
};

// Water Bath - Constant
const ConstantWaterBath: ProductDetail = {
  id: "tt-wb-c",
  name: "Constant",
  category: "Water Baths",
  description: "A water bath is a testing cabinet which used in many industries and laboratories. The container's main substance for testing the specimen is a heated water. The samples are kept inside them to test their behavior in rising temperature. This machine has very distinct applications. It is utilized in biological labs to incubate sensitive which are unable to be kept in direct dry heat. This water bath is successfully used in R&D laboratory, microbiology, quality control, blood bank, pathology, chemical, food processing industry area in Pharmaceutical, Healthcare, Institutions & Food Industry.",
  imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
  mainFeatures: [
    "Constant temperature control",
    "Digital display",
    "Stainless steel construction",
    "Safety features",
    "Overshoot & Water Level Low Cut Off",
    "Stainless Steel Heater Cover Tray",
    "Gabled Lid included"
  ],
  specifications: [
    { label: "Temperature Range", value: "Ambient + 5 to 99.9°C" },
    { label: "Resolution", value: "0.1°C" },
    { label: "Control Accuracy", value: "± 0.5°C" },
    { label: "Uniformity", value: "± 0.5°C" },
    { label: "Timer", value: "0 to 9999 Min" },
    { label: "Safety Feature", value: "Overshoot & Water Level Low Cut Off" },
    { label: "Heater Cover Tray", value: "Stainless Steel" },
    { label: "Gabled Lid", value: "Stainless Steel" }
  ],
  compliance: ["ISO", "CE", "GMP"],
  tables: [
    {
      title: "Product Specifications",
      headers: ["FEATURE", "UNIT", "AP_TT_WB_6", "AP_TT_WB_14", "AP_TT_WB_20", "AP_TT_WB_28"],
      rows: [
        ["Model", "", "AP_TT_WB_6", "AP_TT_WB_14", "AP_TT_WB_20", "AP_TT_WB_28"],
        ["Capacity", "Lit", "6", "14", "20", "28"],
        ["Inner Dimensions L x D x H", "Mm", "300 x 150 x 150", "320 x 300 x 150", "500 x 300 x 150", "500 x 300 x 250"],
        ["Heater Power", "kW", "0.5", "1", "2.25", "2.25"],
        ["Temperature Range", "°C", "Ambient + 5 to 99.9", "Ambient + 5 to 99.9", "Ambient + 5 to 99.9", "Ambient + 5 to 99.9"],
        ["Resolution", "°C", "0.1", "0.1", "0.1", "0.1"],
        ["Control Accuracy", "°C", "± 0.5", "± 0.5", "± 0.5", "± 0.5"],
        ["Uniformity", "°C", "± 0.5", "± 0.5", "± 0.5", "± 0.5"],
        ["Timer", "Min", "0 to 9999", "0 to 9999", "0 to 9999", "0 to 9999"],
        ["Safety feature", "", "Overshoot & Water Level Low Cut Off", "", "", ""],
        ["Heater Cover Tray", "", "Stainless Steel", "", "", ""],
        ["Gabled Lid", "", "Stainless Steel", "", "", ""],
        ["Concentric Ring Lid", "", "3 Holes", "6 Holes", "12 Holes", "12 Holes"]
      ]
    }
  ]
};

// Water Bath - Circulating
const CirculatingWaterBath: ProductDetail = {
  id: "tt-wb-circ",
  name: "Circulating",
  category: "Water Baths",
  description: "A water bath is a testing cabinet which used in many industries and laboratories. The container's main substance for testing the specimen is a heated water. The samples are kept inside them to test their behavior in rising temperature. This machine has very distinct applications. It is utilized in biological labs to incubate sensitive which are unable to be kept in direct dry heat. This water bath is successfully used in R&D laboratory, microbiology, quality control, blood bank, pathology, chemical, food processing industry area in Pharmaceutical, Healthcare, Institutions & Food Industry.",
  imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
  mainFeatures: [
    "Circulation system for uniform temperature",
    "Digital control with high accuracy",
    "Stainless steel construction",
    "Safety features",
    "Overshoot & Water Level Low Cut Off",
    "Stainless Steel Heater Cover Tray",
    "Gabled Lid included"
  ],
  specifications: [
    { label: "Temperature Range", value: "Ambient + 5 to 95°C" },
    { label: "Resolution", value: "0.1°C" },
    { label: "Control Accuracy", value: "± 0.3°C" },
    { label: "Uniformity", value: "± 0.3°C" },
    { label: "Timer", value: "0 to 9999 Min" },
    { label: "Safety Feature", value: "Overshoot & Water Level Low Cut Off" },
    { label: "Heater Cover Tray", value: "Stainless Steel" },
    { label: "Gabled Lid", value: "Stainless Steel" },
    { label: "Circulation", value: "Built-in pump" }
  ],
  compliance: ["ISO", "CE", "GMP"],
  tables: [
    {
      title: "Product Specifications",
      headers: ["FEATURE", "UNIT", "AP_TT_WBC_05", "AP_TT_WBC_14", "AP_TT_WBC_28"],
      footerNote: "Industries Served: Healthcare - Hospitals (OT, Micro, Pathology, Blood Bank Labs), Pharmaceuticals - Quality, R&D, Production, Institutes - Research Labs, Food Industries - QC, Testing Labs",
      rows: [
        ["Model", "", "AP_TT_WBC_05", "AP_TT_WBC_14", "AP_TT_WBC_28"],
        ["Capacity", "Lit", "5", "14", "28"],
        ["Inner Dimensions L x D x H", "Mm", "300 x 150 x 150", "320 x 300 x 150", "500 x 300 x 250"],
        ["Heater Power", "kW", "0.5", "1.5", "2"],
        ["Temperature Range", "°C", "Ambient + 5 to 95", "Ambient + 5 to 95", "Ambient + 5 to 95"],
        ["Resolution", "°C", "0.1", "0.1", "0.1"],
        ["Control Accuracy", "°C", "± 0.3", "± 0.3", "± 0.3"],
        ["Uniformity", "°C", "± 0.3", "± 0.3", "± 0.3"],
        ["Timer", "Min", "0 to 9999", "0 to 9999", "0 to 9999"],
        ["Safety feature", "", "Overshoot & Water Level Low Cut Off", "", ""],
        ["Heater Cover Tray", "", "Stainless Steel", "", ""],
        ["Gabled Lid", "", "Stainless Steel", "", ""],
        ["Concentric Ring Lid", "", "3 Holes", "6 Holes", "12 Holes"]
      ]
    }
  ]
};

// Water Bath - Steam Bath
const SteamBath: ProductDetail = {
  id: "tt-wb-sb",
  name: "Steam Bath",
  category: "Water Baths",
  description: "A Steam bath is a advance version in water bath. It is designed such a way to reach and maintain 100 degree temperature. Steam bath is useful in many industries and laboratories. This machine is essential in Microbiology & Production Departments for substance testing the specimen is a heated water. The samples are kept inside them to test their behavior in rising temperature. This Steam bath is successfully used in microbiology, quality control, production Dept. in Pharmaceutical, Healthcare, Institutions & Food Industry.",
  imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
  mainFeatures: [
    "Steam heating system",
    "Can reach and maintain 100°C temperature",
    "Essential for Microbiology & Production Departments",
    "Safety features",
    "Overshoot & Water Level Low Cut Off",
    "Stainless Steel Validation Port"
  ],
  specifications: [
    { label: "Temperature Range", value: "Ambient + 5 to 100°C" },
    { label: "Resolution", value: "0.1°C" },
    { label: "Control Accuracy", value: "± 2°C" },
    { label: "Uniformity", value: "± 2°C" },
    { label: "Timer", value: "0 to 9999 Min" },
    { label: "Safety Feature", value: "Overshoot & Water Level Low Cut Off" },
    { label: "Validation Port", value: "Stainless Steel" },
    { label: "Stand and Trolley", value: "Stainless Steel with Heavy Wheels" },
    { label: "Heating Method", value: "Steam" }
  ],
  compliance: ["ISO", "CE", "GMP"],
  tables: [
    {
      title: "Product Specifications",
      headers: ["FEATURE", "UNIT", "AP_TT_SB_45", "AP_TT_SB_65", "AP_TT_SB_85"],
      footerNote: "Industries Served: Pharmaceuticals - QC, Microbiology, Production Labs, Institutes - Microbiology, Research Labs, Food Industries - QC, Testing Labs",
      rows: [
        ["Model", "", "AP_TT_SB_45", "AP_TT_SB_65", "AP_TT_SB_85"],
        ["Capacity", "Lit", "45", "65", "85"],
        ["Inner Dimensions L x D x H", "Mm", "500 x 300 x 325", "500 x 300 x 425", "500 x 400 x 150"],
        ["Heater Power", "kW", "1.5", "3", "5"],
        ["Suitable for Bottles/Flasks", "Lits", "1 x 12 no's", "5 x 2 no's", "5 x 4 no's"],
        ["Temperature Range", "°C", "Ambient + 5 to 100", "Ambient + 5 to 100", "Ambient + 5 to 100"],
        ["Resolution", "°C", "0.1", "0.1", "0.1"],
        ["Control Accuracy", "°C", "±2", "±2", "±2"],
        ["Uniformity", "°C", "±2", "±2", "±2"],
        ["Timer", "Min", "0 to 9999", "0 to 9999", "0 to 9999"],
        ["Safety feature", "", "Overshoot & Water Level Low Cut Off", "", ""],
        ["Validation Port", "", "Stainless Steel", "", ""],
        ["Stand and Trolley", "", "Stainless Steel with Heavy Wheels", "", ""]
      ]
    }
  ]
};

// Oil Bath Data
const OilBath: ProductDetail = {
  id: "tt-wb-ob",
  name: "Oil Bath",
  category: "Water Baths",
  description: "An oil bath, commonly used in chemistry laboratories, involves immersing reaction vessels or samples in heated oil to maintain stable and controlled temperatures, crucial for sensitive experiments and reactions. Moreover it has unique design to achieve upto 250°C.",
  imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
  mainFeatures: [
    "High temperature capability up to 250°C",
    "Oil-based heating for stable temperature control",
    "Precise control for sensitive experiments",
    "Safety features",
    "Over Temperature & Thermostatic safety",
    "Stainless Steel Stand with Heavy Wheels"
  ],
  specifications: [
    { label: "Temperature Range", value: "50 to 250°C" },
    { label: "Resolution", value: "1°C" },
    { label: "Control Accuracy", value: "± 2°C" },
    { label: "Uniformity", value: "± 3°C" },
    { label: "Timer", value: "0 to 9999 Min" },
    { label: "Safety Feature", value: "Over Temperature & Thermostatic" },
    { label: "Stand", value: "Stainless Steel with Heavy Wheels" },
    { label: "Heating Medium", value: "Oil" }
  ],
  compliance: ["ISO", "CE", "GMP"],
  tables: [
    {
      title: "Product Specifications",
      headers: ["FEATURE", "UNIT", "AP_TT_OB_45", "AP_TT_SB_65", "AP_TT_SB_85"],
      footerNote: "Industries Served: Pharmaceuticals, R&D Institute, Research Institute, Microbiology. Note*: Available in variable sizes (1 Ltr. to 20 Ltr.)",
      rows: [
        ["Model", "", "AP_TT_OB_45", "AP_TT_SB_65", "AP_TT_SB_85"],
        ["Capacity", "Lit", "01", "03", "20"],
        ["Vessel Dimensions OD", "Mm", "150", "200", "400"],
        ["Heater Power", "kW", "0.4", "1.0", "2.5"],
        ["Suitable for Bottles / Flasks", "Lits", "01", "03", "20"],
        ["Temperature Range", "°C", "50 to 250", "", ""],
        ["Resolution", "°C", "1", "", ""],
        ["Control Accuracy", "°C", "±2", "", ""],
        ["Uniformity", "°C", "±3", "", ""],
        ["Timer", "Min", "0 to 9999", "", ""],
        ["Safety feature", "", "Over Temperature & Thermostatic", "", ""],
        ["Stand Slask", "", "Stainless Steel with Heavy Wheels", "", ""]
      ]
    }
  ]
};

// Dry Bath Data
const DryBath: ProductDetail = {
  id: "tt-wb-db",
  name: "Dry Bath",
  category: "Water Baths",
  description: "Digital Dry Bath Incubator is designed for maintaining constant temperature of samples in test tubes inserted in the aluminum block sockets. It is widely used for pathology laboratory, IVF Center, Pharmaceutical laboratory, Food & Dairy industries, PCR - analysis extraction of DNA and RNA from cell cultures, etc.",
  imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
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
  compliance: ["ISO", "CE", "GMP"],
  tables: [
    {
      title: "Product Specifications",
      headers: ["FEATURE", "VALUE"],
      footerNote: "Industries Served: Pharmaceuticals, R&D Institute, Research Institute, Microbiology. Note*: Available in Customised Blocks",
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

// Chilled Circulating Bath Data
const ChilledCirculatingBath: ProductDetail = {
  id: "tt-wb-ccb",
  name: "Chilled Circulating Bath",
  category: "Water Baths",
  description: "A chilled circulating bath is a specialized piece of equipment commonly used in laboratory settings to maintain low temperatures for various applications such as cooling samples, apparatus, or reactions. It works by circulating chilled fluid, typically water or a refrigerant, through a cooling coil or jacket surrounding the sample or vessel. This ensures uniform and precise cooling, allowing researchers to carry out experiments requiring controlled temperatures. Chilled circulating baths are essential tools in fields such as chemistry, biology, and materials science, where maintaining specific temperature conditions is crucial for accurate results and product integrity.",
  imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
  mainFeatures: [
    "Cooling capability for low temperature applications",
    "Circulation system for uniform cooling",
    "Temperature control with high accuracy",
    "Digital interface",
    "Specialized for laboratory settings",
    "Cooling samples, apparatus, or reactions"
  ],
  specifications: [
    { label: "Temperature Range", value: "-10 to Ambient (Optional)" },
    { label: "Resolution", value: "1°C" },
    { label: "Control Accuracy", value: "± 1°C" },
    { label: "Uniformity", value: "± 2°C" },
    { label: "Timer", value: "NA (Not Applicable)" },
    { label: "Safety Feature", value: "Water Level Low Cut Off" },
    { label: "Circulating Pipe", value: "Silicon with insulating cover" },
    { label: "Cooling Power", value: "750W - 2500W" }
  ],
  compliance: ["ISO", "CE", "GMP"],
  tables: [
    {
      title: "Product Specifications",
      headers: ["FEATURE", "UNIT", "AP_TT_CCB_06", "AP_TT_CCB_10", "AP_TT_CCB_20"],
      footerNote: "Industries Served: Pharmaceuticals - Quality, R&D, Production Labs, Institutes - R&D Labs, Food Industries - QC, Testing Labs",
      rows: [
        ["Model", "", "AP_TT_CCB_06", "AP_TT_CCB_10", "AP_TT_CCB_20"],
        ["Capacity", "Lit", "06", "10", "20"],
        ["Cooling Power", "kW", "750", "1250", "2500"],
        ["Circulation Flow", "LMP", "9", "15", "20"],
        ["Temperature Range", "°C", "-10 to Ambient (Optional)", "", ""],
        ["Resolution", "°C", "1", "", ""],
        ["Control Accuracy", "°C", "±1", "", ""],
        ["Uniformity", "°C", "±2", "", ""],
        ["Timer", "Min", "NA (Not Applicable)", "", ""],
        ["Safety feature", "", "Water Level Low Cut Off", "", ""],
        ["Circulating Pipe", "", "Silicon with insulating cover", "", ""]
      ]
    }
  ]
};

// Refrigerated Circular Bath Data
const RefrigeratedCircularBath: ProductDetail = {
  id: "tt-rcb",
  name: "Refrigerated Circular Bath",
  category: "Refrigerated Circular Bath",
  description: "The refrigerated circulating bath allows researchers to achieve precise and consistent temperature control over a wide range, usually from below room temperature to sub-zero temperatures. This makes it suitable for various applications such as cooling reactions, maintaining samples at specific temperatures, or controlling the temperature of analytical instruments like spectrophotometers and chromatography systems.",
  imageUrl: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2000&auto=format&fit=crop",
  mainFeatures: [
    "Precise temperature control over wide range",
    "Sub-zero temperature capability",
    "Cooling reactions and maintaining samples",
    "Controlling temperature of analytical instruments",
    "Suitable for spectrophotometers and chromatography systems",
    "Advanced refrigeration system"
  ],
  specifications: [
    { label: "Temperature Range", value: "-20 to 150 (Optional)" },
    { label: "Resolution", value: "1°C" },
    { label: "Control Accuracy", value: "± 2°C" },
    { label: "Uniformity", value: "± 3°C" },
    { label: "Timer", value: "0 to 9999 Min" },
    { label: "Safety Feature", value: "Over Temperature & Water Level Low Cut Off" },
    { label: "Circulating Pipe", value: "Silicon with insulating cover" },
    { label: "Cooling Power", value: "1250W - 3500W" }
  ],
  compliance: ["ISO", "CE", "GMP"],
  tables: [
    {
      title: "Product Specifications",
      headers: ["FEATURE", "UNIT", "AP_TT_RCB_06", "AP_TT_RCB_10", "AP_TT_RCB_20"],
      footerNote: "Industries Served: Pharmaceuticals - Quality, R&D, Production Labs, Institutes - R&D Labs, Food Industries - QC, Testing Labs",
      rows: [
        ["Model", "", "AP_TT_RCB_06", "AP_TT_RCB_10", "AP_TT_RCB_20"],
        ["Capacity", "Lit", "06", "10", "20"],
        ["Cooling Power", "kW", "1250", "2500", "3500"],
        ["Circulation Flow", "LMP", "9", "15", ""],
        ["Temperature Range", "°C", "-20 to 150 (Optional)", "", ""],
        ["Resolution", "°C", "1", "", ""],
        ["Control Accuracy", "°C", "±2", "", ""],
        ["Uniformity", "°C", "±3", "", ""],
        ["Timer", "Min", "0 to 9999", "", ""],
        ["Safety feature", "", "Over Temperature & Water Level Low Cut Off", "", ""],
        ["Circulating Pipe", "", "Silicon with insulating cover", "", ""]
      ]
    }
  ]
};

// Air Sampler - Basic Model Data
const BasicModelAirSampler: ProductDetail = {
  id: "tt-as-bm",
  name: "Basic Model",
  category: "Air Sampler",
  description: "Advanced air sampling system with comprehensive features for environmental monitoring and quality control applications. Designed for high-precision microbial air monitoring in pharmaceutical and laboratory environments.",
  imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
  mainFeatures: [
    "High-precision sampling flow rate",
    "Large data storage capacity",
    "Advanced user and location configuration",
    "Long battery life with Lifep04 technology",
    "Wi-fi communication capability",
    "Comprehensive audit trail for compliance"
  ],
  specifications: [
    { label: "Sampling Flow Rate", value: "Available in 25, 50, 100, 200 litr/min" },
    { label: "Volume", value: "25 to 2000 L" },
    { label: "Location", value: "1000 locations" },
    { label: "Sample Recipes", value: "1000 recipes" },
    { label: "Sampling Head", value: "1.00 mm 219 holes, anodized aluminum" },
    { label: "Display", value: "4.3\" Tft Lcd (272 X 480)" },
    { label: "Battery", value: "10 hours sampling backup (Lifep04)" },
    { label: "Weight", value: "2.7 kg" }
  ],
  compliance: ["ISO", "CE", "GMP"],
  tables: [
    {
      title: "Air Sampler - Salient Features",
      headers: ["FEATURE", "VALUE"],
      footerNote: "Industries Served: Pharmaceuticals (Quality, R&D, Production Labs), R&D Institute, Research Institute, Microbiology, Food Industries (QC, Testing Labs). Note*: Available in Customised Blocks",
      rows: [
        ["Sampling Flow Rate", "Available in 25, 50, 100, 200 litr/min"],
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
        ["Operating Environments", "Temperature: 5 - 30 c; Humidity: 10 - 80% Rh"],
        ["Storage Environments", "Temperature: 5 - 40 c; Humidity: 10 - 80% Rh"],
        ["Warranty", "1 year"]
      ]
    }
  ]
};

// Air Sampler - 21 CFR Model Data (SCRAPPED FROM IMAGES 1:1)
const CFRModelAirSampler: ProductDetail = {
  id: "tt-as-21cfr",
  name: "21 CFR Model",
  category: "Air Sampler",
  description: "Compliant air sampling system meeting 21 CFR Part 11 requirements.",
  imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
  mainFeatures: [
    "Web-based software for seamless data downloading",
    "Secure password mechanism for login, abort samples, calibration service, battery charging etc.",
    "Automatic synchronization data transfer of sample data",
    "Configurable features like add, edit, view, enable/disable, discard for different configurations like group, users, location, recipe, remarks, report formats",
    "Unique feature such as display sample data records and audit trail records with filters for getting specific records details on device directly"
  ],
  specifications: [
    { label: "Login Screen", value: "Aspirating head quick bayonet fixing system for easy manipulation, Touch screen Interface, 100 or 200 ltr / minute flow rate available, Continue use with customized volumes, Device and software, fully 21 CFR - part -11 - compliant" },
    { label: "Home Screen (Data options)", value: "Data download through Wi-Fi, Directional data transfer, Multiple Sampler can connect with web host, Single and multi run options" },
    { label: "Sample Data Search", value: "1000 / 10000 / 100000 Sample Data Cycle storage option available (Optional), 10000 / 50000 / 150000 Audit Trail Events storage options available with more than 75 audit trails types, 10 Hours Battery Backup, Robust Sampler Design, Easy and Fast Charging" },
    { label: "Sample Running / Completed / Summary", value: "Group creation option depending on permissions" },
    { label: "Audit Trail Search & Reports", value: "Smart user management with multiple level, Password authentication, Cycle data and audit trail data templates, Design option" }
  ],
  compliance: ["USFDA 21 CFR Part 11"],
  tables: [] // Removed hallucinated technical matrix
};

// Featured products for the home page sticky scroll component
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
    imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/walk_in_chamber.png",
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
    imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/deep_freezer.png",
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
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=2000&auto=format&fit=crop",
    stats: [
      { label: "Systems", value: "C-Frame/H-Frame" },
      { label: "Safety", value: "Fume Hoods" }
    ]
  }
];

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
  "Eco Series": EcoSeries,
  "Prime Series": PrimeSeries,
  "Constant": ConstantWaterBath,
  "Circulating": CirculatingWaterBath,
  "Steam Bath": SteamBath,
  "Oil Bath": OilBath,
  "Dry Bath": DryBath,
  "Chilled Circulating Bath": ChilledCirculatingBath,
  "Refrigerated Circular Bath": RefrigeratedCircularBath,
  "Basic Model": BasicModelAirSampler,
  "21 CFR Model": CFRModelAirSampler,
  "Stainless Steel Items & Accessories": StainlessSteelAccessories,
  "C-Frame System": CFrameSystem
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
          "Prime Series"
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
          "Refrigerated Circular Bath"
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
        title: "Accessories",
        items: [
          "Stainless Steel Items & Accessories"
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
      }
    ]
  }
];