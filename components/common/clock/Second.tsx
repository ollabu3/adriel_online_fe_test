import { useEffect, useMemo, useRef } from "react";
import { useRecoilValue } from "recoil";
import { timeState } from "../../../recoil/atoms/timeAtom";
import { rotateSecond, rotateTransformDegree } from "../../../libs/utils/time";

function Second() {
  const { second } = useRecoilValue(timeState);
  const secondRef = useRef<HTMLDivElement>(null);
  const rotateSecondHands = useMemo(() => {
    const rotate = rotateSecond(second);
    return rotateTransformDegree(rotate);
  }, [second]);
  console.log(second);
  return (
    <div
      ref={secondRef}
      className="hands-center hands-seconds"
      style={rotateSecondHands}
    ></div>
  );
}

export default Second;
