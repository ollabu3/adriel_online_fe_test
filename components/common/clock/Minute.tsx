import { useRecoilValue } from "recoil";
import { timeState } from "../../../recoil/atoms/timeAtom";
import { useMemo } from "react";

function Minute() {
  const { minute } = useRecoilValue(timeState);

  console.log({ minute });

  const degreeMinute = useMemo(() => {}, []);

  return <div id="minute" className="hands-center hands-minute"></div>;
}

export default Minute;
