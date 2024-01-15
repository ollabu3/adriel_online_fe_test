import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { timeState } from "../../../recoil/atoms/timeAtom";
import { rotateMinute, rotateTransformDegree } from "../../../libs/utils/time";

function Minute() {
  const { minute } = useRecoilValue(timeState);
  const minuteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rotateMinuteHand = () => {
      const currentSecond = minuteRef.current;
      if (currentSecond) {
        const rotate = rotateMinute(minute);
        currentSecond.style.transform = rotateTransformDegree(rotate);
      }
    };
    rotateMinuteHand();
  }, [minute]);

  return <div ref={minuteRef} className="hands-center hands-minute"></div>;
}

export default Minute;
