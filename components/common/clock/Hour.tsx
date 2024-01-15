import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { timeState } from "../../../recoil/atoms/timeAtom";
import { rotateHour, rotateTransformDegree } from "../../../libs/utils/time";

function Hour() {
  const { hour, minute } = useRecoilValue(timeState);
  const hourRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rotateHourHand = () => {
      const currentHour = hourRef.current;
      if (currentHour) {
        const rotate = rotateHour(hour, minute);
        currentHour.style.transform = rotateTransformDegree(rotate);
      }
    };
    rotateHourHand();
  }, [hour, minute]);

  return <div ref={hourRef} className="hands-center hands-hour"></div>;
}

export default Hour;
