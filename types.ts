
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: React.ReactNode;
  features: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
