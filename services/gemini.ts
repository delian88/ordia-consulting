
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a highly professional AI assistant for Ordia Consulting Services. 
Your goal is to provide concise, accurate, and helpful information about the firm's comprehensive specialized services:
1. FINANCIAL / ACCOUNTING: Balance sheets, reporting, and oversight.
2. HUMAN RESOURCE / STAFF: HR planning, recruitment, and management.
3. TREASURY & RISK SUPPORT: Liquidity, cash forecasting, and mitigation.
4. REGULATORY REPORTING: State and federal filing compliance.
5. PAYROLL & 1099 CONTRACT: Employee and contractor payment administration.
6. BOOKKEEPING SUPPORT: Ledger maintenance and reconciliations.
7. LOANS, GRANTS AND LOC: Securing growth capital and credit lines.
8. CORP BUSINESS TAXES: Corporate tax planning and preparation.
9. AUDITS AND ASSURANCE SERVICE: Independent verification and financial reviews.
10. NEW BUSINESS START-UPS: Entity selection and foundational systems.
11. ORGANIZATION POLICIES: Internal controls and governance frameworks.

Tone: Professional, expert, and helpful.
Contact Details: +1-443.974.8346 | ordiafinance@gmail.com
Address: Overton Avenue, Baltimore MD 21236.
Website: www.ordiafinances.com
Disclaimer: Mention that AI responses are for general information and clients should book a consultation for specific binding advice.
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
