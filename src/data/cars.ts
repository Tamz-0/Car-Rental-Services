import { Car } from '../types';

export const cars: Car[] = [
  {
    id: '1',
    name: 'Tesla Model 3',
    category: 'Electric',
    image: 'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 100,
    seats: 5,
    transmission: 'Automatic',
    fuelEfficiency: '150 Wh/km',
    features: ['Autopilot', 'Heated Seats', 'Premium Sound', 'Supercharging'],
    available: true
  },
  {
    id: '2',
    name: 'Toyota Prius',
    category: 'Hybrid',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 75,
    seats: 5,
    transmission: 'Automatic',
    fuelEfficiency: '4.1L/100km',
    features: ['Lane Assist', 'Adaptive Cruise Control', 'Backup Camera', 'Bluetooth'],
    available: true
  },
  {
    id: '3',
    name: 'Honda CR-V',
    category: 'SUV',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 85,
    seats: 5,
    transmission: 'Automatic',
    fuelEfficiency: '7.5L/100km',
    features: ['Spacious Cargo', 'All-Wheel Drive', 'Apple CarPlay', 'Roof Rack'],
    available: true
  },
  {
    id: '4',
    name: 'BMW 5 Series',
    category: 'Luxury',
    image: 'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 150,
    seats: 5,
    transmission: 'Automatic',
    fuelEfficiency: '8.2L/100km',
    features: ['Leather Seats', 'Premium Audio', 'Parking Assistant', 'Heated Steering'],
    available: true
  },
  {
    id: '5',
    name: 'Ford Mustang',
    category: 'Sedan',
    image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 120,
    seats: 4,
    transmission: 'Manual',
    fuelEfficiency: '12L/100km',
    features: ['Sports Mode', 'Convertible Top', 'Premium Sound', 'Rear Camera'],
    available: true
  },
  {
    id: '6',
    name: 'Chevy Bolt',
    category: 'Electric',
    image: 'https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 90,
    seats: 5,
    transmission: 'Automatic',
    fuelEfficiency: '160 Wh/km',
    features: ['Fast Charging', 'Regenerative Braking', 'Android Auto', 'Apple CarPlay'],
    available: true
  }
];

export const getCarsByCategory = (category: string): Car[] => {
  return cars.filter(car => car.category === category);
};

export const getCarById = (id: string): Car | undefined => {
  return cars.find(car => car.id === id);
};

export const getRecommendedCars = (booking: any): Car[] => {
  // In a real application, this would use AI to filter and recommend
  // cars based on user preferences, but for this demo we'll just return random cars
  const shuffled = [...cars].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};