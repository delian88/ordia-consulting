
import React from 'react';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ServiceFeature {
  title: string;
  detail: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: React.ReactNode;
  features: ServiceFeature[];
  testimonials?: Testimonial[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
