import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { timeState } from "../../../recoil/atoms/timeAtom";
import { rotateHour, rotateTransformDegree } from "../../../libs/utils/time";

function Hour() {
  const { hour } = useRecoilValue(timeState);

  const rotateHourHand = useMemo(() => {
    const rotate = rotateHour(hour);
    return rotateTransformDegree("hour", rotate);
  }, [hour]);

  return <div className="hands-center hands-hour" style={rotateHourHand}></div>;
}

export default Hour;
