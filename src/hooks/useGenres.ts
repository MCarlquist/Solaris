import { useEffect, useState } from "react";
import { getGenres } from "@/services/tauri";

export function useGenres() {
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    getGenres().then((genres) => {
      setGenres(genres);
    });
  }, []);

  return genres;
}
