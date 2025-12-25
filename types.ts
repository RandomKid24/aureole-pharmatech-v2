
export interface TechnicalTable {
  title: string;
  headers: string[];
  rows: string[][];
  footerNote?: string;
}

export interface ProductDetail {
  id: string;
  name: string;
  category: string;
  description: string;
  mainFeatures: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  tables?: TechnicalTable[];
  compliance: string[];
  regularAttributes?: string[];
  addOnsAttributes?: string[];
  imageUrl?: string;
}

export interface ManifestoItem {
  letter: string;
  title: string;
  description: string;
}

export interface ProductItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface NavLink {
  label: string;
  href: string;
  action?: 'home' | 'about' | 'products' | 'services' | 'software' | 'careers';
}

export interface VentureItem {
  year: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export interface StandardItem {
  title: string;
  subtitle: string;
}

export interface ProductSubCategory {
  title: string;
  items: string[];
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  groups: ProductSubCategory[];
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceLocation {
  city: string;
  x: number;
  y: number;
}

export interface SoftwareFeature {
  label: string;
}

export interface SoftwareBenefit {
  title: string;
  description: string;
}

export interface JobPosting {
  title: string;
  experience: string;
  type: string;
  status: 'Open' | 'Closed';
  qualifications: string[];
  responsibilities: string[];
}

export interface CareerBenefit {
  title: string;
  description: string;
}
