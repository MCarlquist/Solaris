import { invoke } from "@tauri-apps/api/core";

export async function getChords(): Promise<string[]> {
  const response = await invoke<string[]>("get_chords");
  return response;
}

export async function getGenres(): Promise<string[]> {
  const response = await invoke<string[]>("get_genres");
  return response;
}
