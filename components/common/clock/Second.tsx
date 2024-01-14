import { useRecoilValue } from "recoil";
import { timeState } from "../../../recoil/atoms/timeAtom";
import { useMemo } from "react";
import { rotateSecond } from "../../../libs/utils/time";

function Second() {
  const { second } = useRecoilValue(timeState);

  const rotateSecondHands = useMemo(() => {
    const rotate = rotateSecond(second);
    return rotate;
  }, [second]);

  return <div className="hands-center hands-seconds"></div>;
}

export default Second;
