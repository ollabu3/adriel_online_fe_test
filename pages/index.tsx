import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { koreaDate } from "../libs/utils/time";
import { timeState } from "../recoil/atoms/timeAtom";
import Hour from "../components/common/clock/Hour";
import Minute from "../components/common/clock/Minute";
import Second from "../components/common/clock/Second";
import CurrentTimeTooltip from "../components/common/tooltip/CurrentTimeTooltip";

export default function Clock() {
  const [hover, setHover] = useState(false);
  const setTime = useSetRecoilState(timeState);

  useEffect(() => {
    const getCurrentDate = setInterval(() => {
      const currentDate = new Date(koreaDate);
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
        <div className="hands-dot"></div>
        <Hour />
        <Minute />
        <Second />
      </div>
      {hover && <CurrentTimeTooltip />}
    </>
  );
}
