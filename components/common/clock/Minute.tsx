import { useRecoilValue } from "recoil";
import { timeState } from "../../../recoil/atoms/timeAtom";
import { useMemo } from "react";
import { rotateMinute } from "../../../libs/utils/time";

function Minute() {
  const { minute, second } = useRecoilValue(timeState);

  const rotateMinuteHand = useMemo(() => {
    const rotate = rotateMinute(minute);

    return rotate;
  }, [minute]);
  console.log(rotateMinuteHand);

  return <div className="hands-center hands-minute"></div>;
}

export default Minute;
