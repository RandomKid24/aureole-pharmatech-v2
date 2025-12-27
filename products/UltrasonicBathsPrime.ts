import { ProductDetail } from '../types';

export const UltrasonicBathsPrime: ProductDetail = {
  id: "tt-ub-prime",
  name: "Prime Series",
  category: "Ultrasonic Baths",
  description: "An ultrasonic bath, also known as an ultrasonic cleaner, is a device that uses ultrasound and a cleaning solvent to clean items. These baths are commonly used in various industries including laboratories, electronics manufacturing, medical facilities, jewellery making, and automotive repair.",
  imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/ultrasonic_bath.png",
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
  compliance: ["GMP", "CE Certified", "ISO 9001:2015"],
  tables: [
    {
      title: "Product Specifications",
      footerNote: "Note*: Available in variable sizes (6.5 Ltr. to 30 Ltr.)",
      headers: ["SPECIFICATION", "AP_TT_UB_PS_6.5", "AP_TT_UB_PS_20", "AP_TT_UB_PS_30"],
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
        ["Transducer", "Imported make PZT type bonded at the bottom of the tank with weld bond technique", "-", "-", "-"],
        ["Ultrasonic Gen.", "Advance latest MOSFET/IGBT based smps", "-", "-", "-"],
        ["Accessories", "Lid, Basket, Drain Valve, Powercard, User friendly operation manual", "-", "-", "-"]
      ]
    }
  ]
};