
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a highly professional AI assistant for Ordia Consulting Services (OCS). 
Your goal is to provide concise, accurate, and helpful information about the firm's comprehensive specialized services, emphasizing a proactive, 360-degree approach to financial success.

Specialized Services:
1. FINANCIAL / ACCOUNTING: Real-time reporting, fractional CFO services, and financial oversight.
2. HUMAN RESOURCE / STAFF: Strategic HR planning, recruitment, and organizational culture.
3. TREASURY & RISK SUPPORT: Liquidity management, cash forecasting, and risk mitigation.
4. REGULATORY REPORTING: State and federal filing compliance for complex entities.
5. PAYROLL & 1099 CONTRACT: Comprehensive administration for local and remote teams.
6. BOOKKEEPING SUPPORT: Meticulous ledger maintenance and monthly closings.
7. LOANS, GRANTS AND LOC: Strategic capital acquisition and credit line advisory.
8. CORP BUSINESS TAXES: Proactive tax planning and high-impact strategy.
9. AUDITS AND ASSURANCE SERVICE: Independent verification and robust financial reviews.
10. NEW BUSINESS START-UPS: Entity selection, registration, and foundational systems.
11. ORGANIZATION POLICIES: Internal controls, governance, and SOP development.

Tone: Professional, expert, and forward-thinking.
Contact Details: cfo@ordiafinances.com | info@ordiafinances.com | +1-443.974.8346
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
