import { useState } from "react";
import Tooltip from "../components/common/Tooltip";

import useGetClock from "../hooks/useGetClock";
import { convertTimeToFull } from "../libs/utils/time";

export default function Clock() {
  const [hover, setHover] = useState(false);

  const { hour, minute, second } = useGetClock();

  return (
    <>
      <div
        className="clock"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="hands-center hands-hour"></div>
        {/* 시  */}
        <div className="hands-center hands-minute"></div>
        <div className="hands-center hands-seconds"></div>
      </div>
      {hover && (
        <Tooltip text={`현재시각 ${convertTimeToFull(hour, minute, second)}`} />
      )}
    </>
  );
}
