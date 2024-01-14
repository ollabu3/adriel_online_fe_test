import { useRecoilValue } from "recoil";
import { timeState } from "../../../recoil/atoms/timeAtom";

function Hour() {
  const { hour } = useRecoilValue(timeState);

  console.log({ hour });

  return <div id="hour" className="hands-center hands-hour"></div>;
}

export default Hour;
