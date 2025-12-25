import { ProductDetail } from '../types';

export const CFrameSystem: ProductDetail = {
  id: "lf-cfs",
  name: "C-Frame System",
  category: "Laboratory Furniture",
  description: "The suspended bench system is supported on heavy-duty steel frames fully carrying the worktops. Under-bench cabinets are suspended on the frames and can be relocated with simple hand tools. All sides and middle frames are constructed without a vertical front leg to avoid obstruction for the user. Frames are constructed from 60×30×2 mm rectangular steel section. Legs are supplied with adjustment feet ±15 mm to correct eventual unevenness of the floor. All frame-work are pre-treatment epoxy powder coated.",
  imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
  mainFeatures: [
    "PP Powder Coating Finish",
    "Imported Hardwares",
    "Better Flexibility",
    "Easy to install",
    "Easy to clean"
  ],
  specifications: [
    { label: "Frame Material", value: "60×30×2 mm rectangular steel section" },
    { label: "Finish", value: "Pre-treatment epoxy powder coated" },
    { label: "Leg Adjustment", value: "±15 mm adjustment feet for floor correction" },
    { label: "Construction", value: "No vertical front leg for user access" },
    { label: "Cabinets", value: "Suspended and relocatable with hand tools" }
  ],
  compliance: ["SEFA Standards", "ISO Certified", "GMP Compliant"]
};