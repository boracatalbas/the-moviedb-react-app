import React from "react";
import "./navbar.scss";
import NavbarList from "./navbarList";
import { navItemLeft, navItemRight } from "./navbarItems.js";

export default function Navbar() {
  return (
    <div class="nav">
      <NavbarList items={navItemLeft} />
      <NavbarList items={navItemRight} />
    </div>
  );
}
