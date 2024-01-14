import { useRecoilValue } from "recoil";
import { timeState } from "../../../recoil/atoms/timeAtom";
import { rotateHour } from "../../../libs/utils/time";
import { useMemo } from "react";

function Hour() {
  const { hour } = useRecoilValue(timeState);
  const rotateHourHand = useMemo(() => {
    const rotate = rotateHour(hour);
    return rotate;
  }, [hour]);

  console.log(rotateHourHand);

  return <div className="hands-center hands-hour"></div>;
}

export default Hour;
