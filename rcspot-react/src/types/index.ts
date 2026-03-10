export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  rating: number;
}

export interface ContactInfo {
  id: number;
  type: 'email' | 'phone' | 'chat';
  title: string;
  description: string;
  value: string;
  icon: string;
  availability?: string;
}

export interface PaymentForm {
  fullName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}
