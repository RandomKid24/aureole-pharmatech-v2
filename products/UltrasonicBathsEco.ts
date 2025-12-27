import { ProductDetail } from '../types';

export const UltrasonicBathsEco: ProductDetail = {
  id: "tt-ub-eco",
  name: "Eco Series",
  category: "Ultrasonic Baths",
  description: "An ultrasonic bath, also known as an ultrasonic cleaner, is a device that uses ultrasound and a cleaning solvent to clean items. These baths are commonly used in various industries including laboratories, electronics manufacturing, medical facilities, jewellery making, and automotive repair.",
  imageUrl: "https://v5.airtableusercontent.com/v3/f/as/s/1740614400000/FfLpW4R7_S7uS-f4m0-s7g/T8p_PzV-w8gZ-vX9v_S7uS-f4m0-s7g/ultrasonic_bath.png",
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
  compliance: ["GMP", "CE Certified", "ISO 9001:2015"],
  tables: [
    {
      title: "Product Specifications",
      footerNote: "Available in variable sizes (2 Ltr. to 22 Ltr.)",
      headers: ["SPECIFICATION", "AP_TT_UB_ES_3", "AP_TT_UB_ES_5", "AP_TT_UB_ES_10", "AP_TT_UB_ES_22"],
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
        ["Transducer", "Imported make PZT type bonded with weld bond technique", "-", "-", "-"],
        ["Ultrasonic Gen.", "Advance latest MOSFET/IGBT based smps", "-", "-", "-"],
        ["Accessories", "Lid, Basket, Drain Valve, Powercard, Manual", "-", "-", "-"]
      ]
    }
  ]
};