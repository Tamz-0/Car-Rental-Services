import { generateGeminiResponse } from './gemini';
import { ChatMessage } from '../types';

export const generateResponse = async (userInput: string): Promise<ChatMessage> => {
  return generateGeminiResponse(userInput);
};