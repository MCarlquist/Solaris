import { digits, loader, Matrix, vu, wave } from "@/components/ui/matrix";

export default function MainWindow() {
  return (
    <div className="main-window">
      <Matrix
        rows={7}
        cols={7}
        frames={wave}
        fps={20}
        loop
        ariaLabel="Wave animation"
      />
    </div>
  );
}
