import "./App.css";
import "./styles/main.scss";
import Sidebar from "@/components/SideBar";
import { Routes, Route } from "react-router";
import { Studio } from "./components/Studio";
import { Library } from "./components/Library";
import { Explorer } from "./components/Explorer";
import { Settings } from "./components/Settings";

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="content">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Studio />} />
            <Route path="/library" element={<Library />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
