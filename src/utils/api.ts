import { BookingDetails, Car } from '../types';

// Mock API endpoints
// In a real application, these would call actual backend services

// Timeout function to simulate API latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Get available cars
export const getAvailableCars = async (): Promise<Car[]> => {
  await delay(800);
  // This would normally fetch from a real API
  return (await import('../data/cars')).cars;
};

// Get car recommendations based on booking details
export const getCarRecommendations = async (bookingDetails: BookingDetails): Promise<Car[]> => {
  await delay(1500);
  // This would normally use the backend AI to analyze preferences and return recommendations
  return (await import('../data/cars')).getRecommendedCars(bookingDetails);
};

// Submit a booking
export const submitBooking = async (carId: string, bookingDetails: BookingDetails): Promise<{ success: boolean; bookingId?: string; error?: string }> => {
  await delay(2000);
  
  // In a real application, this would send the booking to a backend service
  // For demo purposes, always return success
  return {
    success: true,
    bookingId: `BOOK-${Math.floor(Math.random() * 10000)}`
  };
};

// Submit contact form
export const submitContactForm = async (formData: any): Promise<{ success: boolean; error?: string }> => {
  await delay(1500);
  
  // For demo purposes, always return success
  return {
    success: true
  };
};