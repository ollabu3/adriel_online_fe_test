import { useRecoilValue } from "recoil";
import { timeState } from "../../../recoil/atoms/timeAtom";
import { convertTimeToFull } from "../../../libs/utils/time";
import TooltipContainer from "./TooltipContainer";
import styles from "../../../styles/common/tooltip.module.css";

function CurrentTimeTooltip() {
  const time = useRecoilValue(timeState);

  return (
    <TooltipContainer>
      <p className={styles.text}>{`현재시각 ${convertTimeToFull(
        time.hour,
        time.minute,
        time.second
      )}`}</p>
    </TooltipContainer>
  );
}

export default CurrentTimeTooltip;
