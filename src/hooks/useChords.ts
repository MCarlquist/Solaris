import { useEffect, useState } from "react";
import { getChords } from "@/services/tauri";

export function useChords() {
  const [chords, setChords] = useState<string[]>([]);

  useEffect(() => {
    getChords().then((chords) => {
      setChords(chords);
    });
  }, []);

  return chords;
}
