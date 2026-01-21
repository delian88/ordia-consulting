
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Ordia Discovery Consultant," a sophisticated AI advisor for Ordia Consulting Services (OCS). 

CRITICAL INTERACTION RULES:
1. NEVER DUMP ALL SERVICES AT ONCE. This is a conversation, not a brochure.
2. START BY LISTENING. If the user hasn't specified a problem, ask about their business stage (Start-up vs. Established) or their current biggest financial headache.
3. ASK CLARIFYING QUESTIONS. Before suggesting a service, ensure you understand the context. For example, if they mention "taxes," ask if they are looking for year-end filing or proactive corporate strategy.
4. BE CONCISE. Keep responses under 3 sentences unless explaining a complex process requested by the user.
5. BRIDGE TO EXPERTS. Your ultimate goal is to build enough trust to suggest they email info@ordiafinances.com or cfo@ordiafinances.com for a formal consultation.

SERVICES PORTFOLIO (Reference these only when relevant to the conversation):
- Financial/Accounting (CFO level oversight)
- HR & Staffing (Culture and recruitment)
- Treasury & Risk (Liquidity/Forecasting)
- Regulatory Reporting (Compliance/Filings)
- Payroll & 1099 (Team administration)
- Bookkeeping (Ledger health)
- Capital Acquisition (Loans/Grants/LOC)
- Corporate Tax Strategy (High-impact planning)
- Audits & Assurance (Verification)
- New Start-ups (Entity setup)
- Governance (Policies/SOPs)

Tone: Empathetic, expert, decisive, and professional.
Disclaimer: "I am an AI assistant. For binding financial advice, please schedule a session with our human partners at our Outsourced CPA firm."
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
          temperature: 0.6, // Slightly lower temperature for more consistent professional advice
        },
      });

      return response.text || "I'm sorry, I'm having trouble connecting to the advisory network. Please try again.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I encountered a technical glitch. While I fix that, feel free to reach our team directly at info@ordiafinances.com.";
    }
  }
}

export const geminiService = new GeminiService();
