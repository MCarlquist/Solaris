import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useChords } from "@/hooks/useChords";

interface Props {
  value?: string;
  onChange: (chord: string) => void;
}

export const ChordSelect = ({ value, onChange }: Props) => {
  const chords = useChords();

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select your chord" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Chords</SelectLabel>
          {chords.map((chord: any) => (
            <SelectItem key={chord} value={chord}>
              {chord}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
