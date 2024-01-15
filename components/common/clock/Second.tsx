import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { timeState } from "../../../recoil/atoms/timeAtom";
import { rotateSecond, rotateTransformDegree } from "../../../libs/utils/time";

function Second() {
  const { second } = useRecoilValue(timeState);
  const secondRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rotateSecondHands = () => {
      const currentSecond = secondRef.current;
      if (currentSecond) {
        const rotate = rotateSecond(second);
        currentSecond.style.transform = rotateTransformDegree(rotate);
      }
    };
    rotateSecondHands();
  }, [second]);

  return <div ref={secondRef} className="hands-center hands-seconds"></div>;
}

export default Second;
