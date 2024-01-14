import { useEffect, useState } from "react";
import Tooltip from "../components/common/Tooltip";

import { convertTimeToFull } from "../libs/utils/time";
import { useRecoilState } from "recoil";
import { timeState } from "../recoil/atoms/timeAtom";

export default function Clock() {
  const [hover, setHover] = useState(false);
  const [time, setTime] = useRecoilState(timeState);

  useEffect(() => {
    const getCurrentDate = setInterval(() => {
      const currentDate = new Date();
      const hour = currentDate.getHours();
      const minute = currentDate.getMinutes();
      const second = currentDate.getSeconds();
      setTime({
        hour,
        minute,
        second,
      });
    }, 1000);
    return () => clearInterval(getCurrentDate);
  }, []);

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
        <Tooltip
          text={`현재시각 ${convertTimeToFull(
            time.hour,
            time.minute,
            time.second
          )}`}
        />
      )}
    </>
  );
}
