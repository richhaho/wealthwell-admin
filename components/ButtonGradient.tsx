"use client";

import { FC } from "react";

interface ButtonGradientProps {
  title: string;
  onClick: any;
}

const ButtonGradient: FC<ButtonGradientProps> = ({title = "Gradient Button", onClick = () => {}}) => {
  return (
    <button className="btn btn-gradient animate-shimmer" onClick={onClick}>
      {title}
    </button>
  );
};

export default ButtonGradient;
