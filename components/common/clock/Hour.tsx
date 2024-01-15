import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { timeState } from "../../../recoil/atoms/timeAtom";
import { rotateHour, rotateTransformDegree } from "../../../libs/utils/time";

function Hour() {
  const { hour } = useRecoilValue(timeState);

  const rotateHourHand = useMemo(() => {
    const rotate = rotateHour(hour);
    console.log({ hour, rotate, transform: rotateTransformDegree(rotate) });
    return rotateTransformDegree(rotate);
  }, [hour]);

  return <div className="hands-center hands-hour" style={rotateHourHand}></div>;
}

export default Hour;
