export interface Car {
  id: string;
  name: string;
  category: 'Electric' | 'Hybrid' | 'SUV' | 'Sedan' | 'Luxury';
  image: string;
  price: number;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  fuelEfficiency: string;
  features: string[];
  available: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  location: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export interface BookingDetails {
  location: string;
  pickupDate: string;
  returnDate: string;
  carType: string[];
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  type?: 'text' | 'carRecommendation' | 'booking' | 'error';
  data?: any;
}

export interface CarRecommendation {
  car: Car;
  score: number;
  reasoning: string[];
}