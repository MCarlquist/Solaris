import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "",
});

export async function gemini() {
  return {
    chordProgression: async (key: string, genre: string) => {
      console.log(key, genre);
      const response = await ai.models.generateContent({
        contents: `Generate a chord progression in the key of ${key} in the style of ${genre} only give the the chords and no explanation`,
        model: "gemini-2.0-flash",
      });

      return response.text;
    },
    keyword: async (key: string, genre: string) => {
      const response = await ai.models.generateContent({
        contents: `Generate 4 to 6 keyword in the key of ${key} in the style of ${genre}. Only give the the keywords and no explanation`,
        model: "gemini-2.0-flash",
      });

      // Parse the response text into an array of keywords
      const text = response.text || "";
      // Split by commas, newlines, or bullet points and clean up
      const keywords = text
        .split(/[,\n•\-\*]/)
        .map((keyword) => keyword.trim())
        .filter((keyword) => keyword.length > 0 && !keyword.match(/^\d+\.?$/)); // Remove empty strings and standalone numbers
      return keywords;
    },
  };
}
