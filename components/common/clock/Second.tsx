import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { timeState } from "../../../recoil/atoms/timeAtom";
import { rotateSecond, rotateTransformDegree } from "../../../libs/utils/time";

function Second() {
  const { second } = useRecoilValue(timeState);

  const rotateSecondHands = useMemo(() => {
    const rotate = rotateSecond(second);
    return rotateTransformDegree(rotate);
  }, [second]);

  return (
    <div className="hands-center hands-seconds" style={rotateSecondHands}></div>
  );
}

export default Second;
