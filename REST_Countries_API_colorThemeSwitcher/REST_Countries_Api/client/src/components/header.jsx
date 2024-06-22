import React, { useState } from "react";
import DarkIcon from "../assets/darkicon.svg";
import LightIcon from "../assets/lighticon.svg";
import "./header.css";

const header = () => {
  const [theme, setTheme] = useState(false);

  const handleThemeChange = () => {
    setTheme(!theme);
  };

  return (
    <div className="header_container">
      <div className="headerContent">
          <div className="header_title">
            <p>where in the world?</p>
          </div>
          <div className="themeButton">
            <button onClick={handleThemeChange}>
              <img src={theme ? DarkIcon : LightIcon} />
              <p>{theme ? "Dark Mode" : "Light Mode"}</p>
            </button>
          </div>
      </div>
    </div>
  );
};

export default header;
