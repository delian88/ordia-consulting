
import React from 'react';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
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
  additionalContent?: string;
  icon: React.ReactNode;
  features: ServiceFeature[];
  imageUrl?: string;
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