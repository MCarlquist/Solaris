import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ChordSelect } from "./ui/ChordSelect";

export const Studio = () => {
  return (
    <div className="studio">
      <h1>Create</h1>
      <p className="text-muted-foreground">
        Capture your musical ideas and let Sonaris help you expand them
      </p>
      <Card className="bg-transparent text-white">
        <CardHeader>
          <CardTitle>Chord Progression</CardTitle>
          <CardDescription>
            Build your harmonic composition by entering a chord progression.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <ChordSelect />
            <Button>Add Chord</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
