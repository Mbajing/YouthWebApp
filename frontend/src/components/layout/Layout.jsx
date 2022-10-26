import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./layout.css";

function Layout({ children }) {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__container">{children}</div>
    </div>
  );
}

export default Layout;
