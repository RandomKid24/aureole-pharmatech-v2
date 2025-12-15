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
  action?: 'home' | 'about' | 'products' | 'services' | 'software' | 'careers'; // Added 'careers'
}

export interface VentureItem {
  year: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

// New Types for Product Page
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

// New Types for Services Page
export interface ServiceFeature {
  title: string;
  description: string;
  icon: string; // Identifier for the icon component
}

export interface ServiceLocation {
  city: string;
  x: number; // Percentage 0-100 from left
  y: number; // Percentage 0-100 from top
}

// New Types for Software Page
export interface SoftwareFeature {
  label: string;
}

export interface SoftwareBenefit {
  title: string;
  description: string;
}

// New Types for Careers Page
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