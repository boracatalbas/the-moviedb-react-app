import React from "react";
import "./layout.scss";

import Navbar from "./Navbar/navbar";
import Content from "./Content/content";
import Footer from "./Footer/footer";

export default function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Content />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
