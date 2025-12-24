import { OpenAI } from "openai";
import { readTextFile, BaseDirectory } from "@tauri-apps/plugin-fs";

export async function ai() {
  const store = await readTextFile("settings.json", {
    baseDir: BaseDirectory.AppData,
  });
  const apiKey = JSON.parse(store).apiToken;

  if (!apiKey) {
    throw new Error(
      "API token not found in store. Please configure your API token first.",
    );
  }

  const client = new OpenAI({
    baseURL: "https://router.huggingface.co/v1",
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  });

  return {
    chordProgression: async (key: string, genre: string) => {
      const chatCompletion = await client.chat.completions.create({
        model: "openai/gpt-oss-120b:groq",
        messages: [
          {
            role: "user",
            content: `Generate a chord progression in the key of ${key} in the style of ${genre} only give the the chords and no explanation`,
          },
        ],
      });

      return chatCompletion.choices[0].message.content;
    },
    keyword: async (key: string, genre: string) => {
      const chatCompletion = await client.chat.completions.create({
        model: "openai/gpt-oss-120b:groq",
        messages: [
          {
            role: "user",
            content: `Generate one word lyric ideas for a song in the key of ${key} in the style of ${genre}. Only give the words and no explanation. there should only be one word per lyric idea and no more than five lyric ideas.`,
          },
        ],
      });

      const text = chatCompletion.choices[0].message.content || "";
      // Split by commas, newlines, or bullet points and clean up
      const keywords = text
        .split(/[,\n•\-\*]/)
        .map((keyword) => keyword.trim())
        .filter((keyword) => keyword.length > 0 && !keyword.match(/^\d+\.?$/)); // Remove empty strings and standalone numbers
      return keywords;
    },
  };
}
