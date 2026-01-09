
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a highly professional AI assistant for Ordia Consulting Services. 
Your goal is to provide concise, accurate, and helpful information about the firm's comprehensive services:
1. FINANCIAL / ACCOUNTING: Reporting and analysis.
2. HUMAN RESOURCE / STAFF: HR policies and staffing solutions.
3. TREASURY & RISK SUPPORT: Liquidity and risk management.
4. REGULATORY REPORTING: State and federal compliance.
5. PAYROLL & 1099 CONTRACT: Efficient payment and tax compliance.
6. BOOKKEEPING SUPPORT: Ledger maintenance and transaction tracking.
7. LOANS, GRANTS AND LOC: Funding and credit line assistance.
8. CORP BUSINESS TAXES: Corporate tax planning and filing.
9. AUDITS AND ASSURANCE SERVICE: Independent verification and statements.
10. NEW BUSINESS START-UPS: Foundational consulting for new ventures.
11. ORGANIZATION POLICIES: Internal controls and governance protocols.

Tone: Professional, trustworthy, and knowledgeable.
Disclaimer: AI responses are for informational purposes. Clients should schedule a consultation at +1-443.974.8346 for professional advice.
Address: Overton Avenue, Baltimore MD 21236.
Website: www.ordiafinances.com
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
