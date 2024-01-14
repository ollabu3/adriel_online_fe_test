import { useState } from "react";
import Tooltip from "../components/common/Tooltip";

import useGetClock from "../hooks/useGetClock";

export default function Clock() {
  const [hover, setHover] = useState(false);

  const { hour, minute, second } = useGetClock();

  console.log({
    hour,
    minute,
    second,
  });

  return (
    <>
      <div
        className="clock"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="hands-center hands-hour"></div> {/* 시  */}
        <div className="hands-center hands-minute"></div> {/* 분 */}
        <div className="hands-center hands-seconds"></div> {/* 초 */}
      </div>
      {hover && <Tooltip />}
    </>
  );
}
