import { DemoCard } from "@/components/DemoCard";
import "./App.css";
import Sidebar from "@/components/SideBar";
import MainWindow from "@/components/MainWindow";

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="content">
        <Sidebar />
        <MainWindow />
      </div>
    </div>
  );
}
