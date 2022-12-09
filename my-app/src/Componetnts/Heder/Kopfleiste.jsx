import React from "react";
import "./Heder.css";
import logo from "./logo192.png";

const Kopfleiste = () => (
    <div className="Kopfleiste">
        <h1>MackMackGo</h1>
        <img src={logo} alt="NavBar_Logo" />
    </div>
);

export default Kopfleiste