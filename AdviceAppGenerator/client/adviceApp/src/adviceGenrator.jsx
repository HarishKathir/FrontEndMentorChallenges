import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./adviceGenerator.css";
import Mobiledivider from "../../../FemStarter/advice-generator-app-main/images/pattern-divider-mobile.svg";
import Desktopdivider from "../../../FemStarter/advice-generator-app-main/images/pattern-divider-desktop.svg";
import Dice from "../../../FemStarter/advice-generator-app-main/images/icon-dice.svg";
import { useMediaQuery } from "react-responsive";

const adviceGenrator = () => {
  const [advice, setAdvice] = useState([]);
  const [roll, setRoll] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);

  const isMobile = useMediaQuery({ query: "(max-width:375px)" });
  console.log(isMobile);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const result = response.data.slip;
      setAdvice([result]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRoll = useCallback(() => {
    const now = Date.now();
    if (now - lastClickTime >= 2000) {
      setRoll(!roll);
      setLastClickTime(now);
    } else {
      alert("Please wait before clicking again.");
    }
  }, [roll, lastClickTime]);

  useEffect(() => {
    fetchData();
  }, [roll]);

  return (
    <div className="container">
      {advice.length > 0 ? (
        advice.map((d, i) => (
          <div key={i}>
            <p className="adviceId">Advice #{d.id}</p>
            <p className="adviceText">"{d.advice}"</p>
            <img
              className="divider"
              src={isMobile ? Mobiledivider : Desktopdivider}
              alt=""
            />
          </div>
        ))
      ) : (
        <p>loading ... </p>
      )}
      {advice.length > 0 && (
        <button className="diceButton" onClick={handleRoll}>
          <img src={Dice} alt="dice" />
        </button>
      )}
    </div>
  );
};

export default adviceGenrator;
