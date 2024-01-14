import { useRecoilValue } from "recoil";
import { timeState } from "../../../recoil/atoms/timeAtom";

function Second() {
  const { second } = useRecoilValue(timeState);

  console.log({ second });

  return <div id="second" className="hands-center hands-seconds"></div>;
}

export default Second;
