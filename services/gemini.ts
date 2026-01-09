
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a highly professional AI assistant for Ordia Consulting Services. 
Your goal is to provide concise, accurate, and helpful information about the firm's services as detailed on their website:
1. Tax Services: Tax Preparation, Tax Planning, IRS Representation.
2. Accounting Services: Bookkeeping/Write-Up, Financial Statements, Payroll Services.
3. Advisory Services: Business Valuation, Business Consulting, Financial Planning, Debt & Financing.

Tone: Professional, trustworthy, and knowledgeable.
Disclaimer: Always mention that AI responses are for informational purposes and clients should schedule a consultation for specific financial advice.
Location: Based in the United States, providing services nationwide.
`;

export class GeminiService {
  /**
   * Generates a chat response using Gemini 3 Flash.
   */
  async chat(message: string, history: { role: 'user' | 'model'; text: string }[] = []) {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "An error occurred while connecting to the assistant. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();
