"use client";
import React, { useState } from "react";
import styles from "./home.module.css";
interface CustomButtonProps {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const CustomButtonFunny: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  style,
}) => {
  const [shaking, setShaking] = useState(false);

  const handleMouseOver = () => {
    setShaking(true);
    setTimeout(() => setShaking(false), 500); // durata dell'animazione
  };
  const handleclick = () => {
    setShaking(true);
    setTimeout(() => setShaking(false), 500); // durata dell'animazione
  };

  return (
    <button
      onClick={handleclick}
      style={style}
      className={shaking ? styles.shake : ""}
      onMouseOver={handleMouseOver}>
      {text}
    </button>
  );
};

export default CustomButtonFunny;
