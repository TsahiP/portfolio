import Aurora from "@/components/background/aurora";
import { ModeToggle } from "@/components/mode-toggle";
import React from "react";

const NavBar = () => {
  return (
    <div >
      <ModeToggle />
      <Aurora />
    </div>
  );
};

export default NavBar;
