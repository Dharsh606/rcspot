import { ContactInfo } from '../types';

export const contactInfo: ContactInfo[] = [
  {
    id: 1,
    type: 'email',
    title: 'Email Support',
    description: 'Get in touch via email',
    value: 'gurudhaya2536@gmail.com',
    icon: 'fas fa-envelope',
    availability: 'Response within 24 hours'
  },
  {
    id: 2,
    type: 'phone',
    title: 'Phone Support',
    description: 'Call us directly',
    value: '+91 6352417891',
    icon: 'fas fa-phone-alt',
    availability: 'Mon-Sat: 9 AM - 8 PM IST'
  },
  {
    id: 3,
    type: 'chat',
    title: 'Live Chat',
    description: 'Chat with our team',
    value: '#',
    icon: 'fas fa-comments',
    availability: 'Available 24/7'
  }
];
