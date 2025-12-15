import { Cog, Compass, KeyboardMusic, Library } from "lucide-react";
import { Button } from "./ui/button";
import { NavLink } from "react-router";

export default function SideBar() {
  return (
    <nav className="main-nav flex-1">
      <div className="h-screen flex flex-col">
        <h1 className="text-4xl text-center mb-10 logo-name">Sonaris</h1>
        <ul className="top">
          <NavLink to="/">
            <KeyboardMusic />
            Studio
          </NavLink>
          <NavLink to="/library">
            <Library />
            Library
          </NavLink>
          <NavLink to="/explorer">
            <Compass />
            Explorer
          </NavLink>
        </ul>
        <div className="bottom">
          <NavLink to="/settings">
            <Cog />
            Settings
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
