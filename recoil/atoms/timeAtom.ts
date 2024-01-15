import { atom } from "recoil";
import type { TimeType } from "../../type/recoil/timeAtom";
import { koreaDate } from "../../libs/utils/time";

const currentDate = new Date(koreaDate());
export const timeState = atom<TimeType>({
  key: "time",
  default: {
    hour: currentDate.getHours(),
    minute: currentDate.getMinutes(),
    second: currentDate.getSeconds(),
  },
});
