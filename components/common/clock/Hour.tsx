import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { timeState } from "../../../recoil/atoms/timeAtom";
import { rotateHour, rotateTransformDegree } from "../../../libs/utils/time";

function Hour() {
  const { hour } = useRecoilValue(timeState);
  const hourRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rotateHourHand = () => {
      const currentHour = hourRef.current;
      if (currentHour) {
        const rotate = rotateHour(hour);
        currentHour.style.transform = rotateTransformDegree(rotate);
      }
    };
    rotateHourHand();
  }, [hour]);

  return <div ref={hourRef} className="hands-center hands-hour"></div>;
}

export default Hour;
