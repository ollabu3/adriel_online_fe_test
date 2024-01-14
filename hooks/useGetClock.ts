import { useRecoilState } from "recoil";

import { useEffect } from "react";
import { dateState } from "../recoil/atoms/timeAtom";

function useGetClock() {
  const [date, setDate] = useRecoilState(dateState);

  useEffect(() => {
    const getCurrentDate = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(getCurrentDate);
  }, []);

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
}

export default useGetClock;
