import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useGenres } from "@/hooks/useGenres";

interface Props {
  value?: string;
  onChange: (genre: string) => void;
  disabled?: boolean;
}

export const GenreSelect = ({ value, onChange, disabled }: Props) => {
  const genres = useGenres();

  return (
    <Select value={value} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger className="w-50">
        <SelectValue placeholder="Select your genre" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Genres</SelectLabel>
          {genres.map((genre: any) => (
            <SelectItem key={genre} value={genre}>
              {genre}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
