import { useRecoilValue } from "recoil";
import { timeState } from "../../../recoil/atoms/timeAtom";
import { useMemo } from "react";
import { rotateMinute, rotateTransformDegree } from "../../../libs/utils/time";

function Minute() {
  const { minute } = useRecoilValue(timeState);

  const rotateMinuteHand = useMemo(() => {
    const rotate = rotateMinute(minute);
    console.log({ minute, rotate, transform: rotateTransformDegree(rotate) });
    return rotateTransformDegree(rotate);
  }, [minute]);

  return (
    <div className="hands-center hands-minute" style={rotateMinuteHand}></div>
  );
}

export default Minute;
