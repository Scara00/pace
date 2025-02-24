"use client";
import React from "react";

interface CustomButtonProps {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  style,
}) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export default CustomButton;
