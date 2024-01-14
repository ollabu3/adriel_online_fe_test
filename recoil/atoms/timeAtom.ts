import { atom } from "recoil";
import { TimeType } from "../../type/recoil/timeAtom";

const currentDate = new Date();

export const timeState = atom<TimeType>({
  key: "time",
  default: {
    hour: currentDate.getHours(),
    minute: currentDate.getMinutes(),
    second: currentDate.getSeconds(),
  },
});
