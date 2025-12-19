import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { ChordSelect } from "./ui/ChordSelect";
import "../styles/studio.scss";
import { ButtonGroup } from "./ui/button-group";
import { gemini } from "@/hooks/useGemini";
import { GenreSelect } from "./ui/GenreSelect";
import { CircleXIcon } from "lucide-react";

type IFormInput = {
  initialChord: string;
  genre: string;
};

export const Studio = () => {
  const { control, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      initialChord: "",
      genre: "",
    },
  });

  const [initialChord, setInitialChord] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(false);
  const [chords, setChords] = useState("");
  const currentChordValue = watch("initialChord");
  const genreValue = watch("genre");
  const [keyword, setKeyword] = useState<string[]>([]);

  const onSetChord = () => {
    setSelected(true);
    setInitialChord(currentChordValue);
    console.log(currentChordValue);
  };

  const changeChord = () => {
    setSelected(false);
    setInitialChord("");
    reset();
  };

  const createChordProgression: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    setSelected(true);
    const chordProgression = await (
      await gemini()
    ).chordProgression(data.initialChord, data.genre);

    setChords(chordProgression || "");
    const keywords = await (
      await gemini()
    ).keyword(data.initialChord, data.genre);

    setKeyword(keywords || []);
    setLoading(false);
    reset();
  };

  const removeKeyword = (index: number) => {
    setKeyword((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="studio">
      <h1>Create</h1>
      <p className="text-muted-foreground">
        Capture your musical ideas and let Sonaris help you expand them
      </p>
      <form onSubmit={handleSubmit(createChordProgression)}>
        <Card className="bg-transparent text-white w-2/5">
          <CardHeader>
            <CardTitle>Chord Progression</CardTitle>
            <CardDescription>
              In which key would you like to start?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Controller
                name="initialChord"
                control={control}
                render={({ field }) => (
                  <ChordSelect {...field} disabled={loading} />
                )}
              />

              <Button
                onClick={onSetChord}
                className="btn"
                type="button"
                disabled={!currentChordValue}
              >
                Use this Chord
              </Button>
              <Button
                className="btn bg-red-700"
                disabled={!currentChordValue}
                onClick={changeChord}
              >
                Change Chord
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start gap-4">
            {!selected ? (
              <p className=""></p>
            ) : (
              <>
                <div className="chord-ask-block">
                  <p>
                    Do you want to begin creating in the key of {initialChord}?
                  </p>
                </div>
                <Controller
                  name="genre"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <GenreSelect {...field} disabled={loading} />
                  )}
                />
                <div className="chord-ask-block-buttons">
                  <ButtonGroup className="flex gap-3">
                    <Button
                      className="btn"
                      disabled={loading || !genreValue}
                      type="submit"
                    >
                      {loading ? "Creating..." : "Create Chord Progression"}
                    </Button>
                  </ButtonGroup>
                </div>
              </>
            )}
          </CardFooter>
        </Card>
      </form>
      <div className="w-2/6">
        <p className="text-4xl">{chords}</p>
      </div>
      <Card className="bg-transparent text-white w-2/5" hidden={false}>
        <CardHeader>
          <CardTitle>Lyric Keywords</CardTitle>
          <CardDescription>
            Here are some keywords that can be used in the lyrics for{" "}
            {genreValue}:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="inline-flex gap-2 items-center justify-center mb-10">
            {keyword.map((word, index) => (
              <li key={index}>
                {word}{" "}
                <Button
                  size={"icon-sm"}
                  variant={"ghost"}
                  onClick={removeKeyword.bind(this, index)}
                >
                  {" "}
                  <CircleXIcon />
                </Button>
              </li>
            ))}
          </ul>
          <CardTitle>Song Context</CardTitle>
        </CardContent>
        <CardFooter>
          <p>
            <Button>Create Song</Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
