import axios from "axios";

export const pharmacyChatbot = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "Message missing" });
    }

    // --- 1. HARD-CODED SAFETY INTERCEPTOR (Red Flags) ---
    const emergencyKeywords = ["overdose", "suicide", "chest pain", "can't breathe", "poisoning"];
    if (emergencyKeywords.some(word => message.toLowerCase().includes(word))) {
      return res.json({ 
        reply: "⚠️ EMERGENCY: If you are experiencing chest pain, difficulty breathing, or a suspected overdose, please stop this chat and call emergency services (102 or 108 in India) immediately." 
      });
    }

    // --- 2. LEGAL BOUNDARY PROMPT ---
   const systemInstruction = `
ROLE: Informational Pharmacy AI.
PERMITTED NAMES: You may mention common OTC ingredients like Paracetamol (fever), ORS (dehydration), Antacids (acidity), and Vitamin C.
STRICT RESTRICTIONS:
1. Do not mention specific Schedule H brand names (like 'Vicks Action 500' or 'D'Cold'). Stick to ingredients.
2. If asked for a "cure," clarify that these manage symptoms.
3. Every response MUST start with: "Disclaimer: Informational only. Consult a pharmacist."
4. Max 8 lines.
`.trim();

    const API_KEY = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`;

    const response = await axios.post(
      url,
      {
        contents: [
          {
            role: "user",
            parts: [{ text: `${systemInstruction}\n\nUSER QUERY: ${message}` }]
          }
        ],
        generationConfig: {
          temperature: 0.1, // Lower temperature = more factual, less creative
          maxOutputTokens: 300,
        }
      },
      { headers: { "Content-Type": "application/json" } }
    );

    const reply = response.data.candidates[0].content.parts[0].text;
    res.json({ reply });

  } catch (error) {
    console.error("Gemini Error:", error.response?.data || error.message);
    res.status(500).json({ reply: "Medical database busy. Please try again." });
  }
};