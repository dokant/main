export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}
