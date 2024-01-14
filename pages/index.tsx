import { useEffect, useState } from "react";

import { convertTimeToFull } from "../libs/utils/time";
import { useRecoilState } from "recoil";
import { timeState } from "../recoil/atoms/timeAtom";
import Hour from "../components/common/clock/Hour";
import Minute from "../components/common/clock/Minute";
import Second from "../components/common/clock/Second";

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
        <Hour />
        <Minute />
        <Second />
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
