import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { load } from "@tauri-apps/plugin-store";
import {
  create,
  BaseDirectory,
  readFile,
  writeFile,
  writeTextFile,
  readTextFile,
} from "@tauri-apps/plugin-fs";

type SettingsForm = {
  APIToken: string;
};

const readSettingsFile = async () => {
  const content = await readTextFile("settings.json", {
    baseDir: BaseDirectory.AppData,
  });
  console.log(content);
};

readSettingsFile();

export const Settings = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      APIToken: "",
    },
  });

  async function loadStore() {
    const store = await load("settings.json");
    const apiToken = await store.get<{ apiToken: string }>("apiToken");
    console.log(apiToken);
  }
  loadStore();

  const onSubmitForm: SubmitHandler<SettingsForm> = async (data) => {
    const contents = JSON.stringify({ apiToken: data.APIToken });
    await writeTextFile("settings.json", contents, {
      baseDir: BaseDirectory.AppData,
    });

    const store = await load("settings.json");
    console.log(data.APIToken);
    await store.set("apiToken", data.APIToken);
    await store.save();
    const apiToken = await store.get<{ apiToken: string }>("apiToken");
    console.log(apiToken);
  };

  return (
    <div className="settings w-full max-w-md">
      <h1 className="text-4xl mb-4">Settings</h1>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <FieldGroup>
          <Field>
            <FieldLabel>Hugging Face Access Token</FieldLabel>
            <Controller
              name="APIToken"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="Username" />
              )}
            />
            <FieldDescription>Enter your access token</FieldDescription>
          </Field>
        </FieldGroup>
        <Button variant={"default"} size={"sm"} type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};
