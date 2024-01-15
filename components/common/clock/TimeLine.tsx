import React, { memo } from "react";

function TimeLine() {
  return (
    <ul>
      {new Array(60).fill("").map((_, index: number) => (
        <li
          key={`line-${index}`}
          className={`clock-line ${index % 5 === 0 ? "clock-main" : ""}`}
          style={{ transform: `rotate(${index * 6}deg)` }}
        >
          |
        </li>
      ))}
    </ul>
  );
}

export default memo(TimeLine);
