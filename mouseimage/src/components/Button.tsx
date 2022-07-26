import React from "react";

interface ButtonProps {
  selected?: boolean;
  name: string;
  onClick: () => void;
}

function Button({ selected, name, onClick }: ButtonProps) {
  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100px",
        height: "100px",
        padding: "16px",
        boxShadow: `0 0 0 ${selected ? 6 : 1}px black inset`,
      }}
      onClick={onClick}
    >
      <img src={`/images/${name}.png`} width="100%" height="100%" alt={name} />
    </div>
  );
}

export default Button;
