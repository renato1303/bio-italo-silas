export interface FeatureCardData {
  id: string;
  title: string;
  description: string;
  tag: string;
  badgeIcon?: string;
  bgImage: string;
  buttonText: string;
  link: string;
  highlights: string[];
  ctaVariant: 'blue' | 'purple' | 'green' | 'amber';
  popular?: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    level: 'A1' | 'A2' | 'B1' | 'B2';
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  highlight: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'teste' | 'cursos' | 'mentoria';
}
