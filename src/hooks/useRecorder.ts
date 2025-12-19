import { writeFile, readFile, BaseDirectory } from "@tauri-apps/plugin-fs";

export function useRecorder() {
  let mediaRecorder: MediaRecorder | null = null;
  let chunks: BlobPart[] = [];

  async function start() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (e) => {
      chunks.push(e.data);
    };

    mediaRecorder.start();
  }

  async function stop(): Promise<Blob> {
    return new Promise((resolve) => {
      if (!mediaRecorder) return;

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        chunks = [];
        resolve(blob);
      };

      mediaRecorder.stop();
    });
  }

  return { start, stop };
}

export async function saveRecording(blob: Blob, filename: string) {
  const buffer = await blob.arrayBuffer();
  const bytes = new Uint8Array(buffer);

  await writeFile(`recordings/${filename}.webm`, bytes, {
    baseDir: BaseDirectory.AppData,
  });
}

export async function loadRecording(filename: string): Promise<Blob> {
  const bytes = await readFile(`recordings/${filename}.webm`, {
    baseDir: BaseDirectory.AppData,
  });

  return new Blob([bytes], { type: "audio/webm" });
}

export async function playRecording(filename: string) {
  const blob = await loadRecording(filename);
  const url = URL.createObjectURL(blob);

  const audio = new Audio(url);
  audio.play();
}
