
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the Apex Advocates AI Legal Assistant. 
Your role is to provide general information about legal concepts, explain common legal terms, and help users understand the practice areas of Apex Advocates (Corporate, Labour, IP, Sports Law, etc.).

Strict Rules:
1. DISCLAIMER: You MUST explicitly state in your first response that you are an AI assistant and NOT a lawyer, and your answers are for informational purposes only.
2. ADVICE: Do NOT provide specific legal advice for individual cases. 
3. CALL TO ACTION: Direct users to schedule a consultation with the firm's real human lawyers for specific legal matters.
4. FIRM DETAILS: Apex Advocates was founded by Yahaya Oruma Othman, Esq., is based in Lagos, Nigeria, and has a decade of excellence in high-stakes corporate and dispute resolution practice.

Tone: Professional, authoritative, helpful, and concise.`;

export async function askLegalAssistant(prompt: string) {
  // Always create a new instance right before use to ensure the most up-to-date API key is used
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 800,
      }
    });

    return response.text;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I am unable to connect to my legal database at this moment. Please contact our Lagos office directly for immediate assistance.";
  }
}