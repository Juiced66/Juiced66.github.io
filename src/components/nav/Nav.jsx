import React from "react";
import NavItems from "./NavItems";

export default function Nav({ pannels, handleClick }) {
  return (
    <nav>
      {pannels.map((pannel, index) => {
        return (
          <NavItems
            key={`navItem-${index}`}
            value={pannel.title}
            clickHandler={() => handleClick(index)}
          />
        );
      })}
    </nav>
  );
}
