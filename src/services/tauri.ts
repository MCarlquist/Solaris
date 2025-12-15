import { invoke } from "@tauri-apps/api/core";

export async function getChords(): Promise<string[]> {
  return invoke("get_chords");
}
