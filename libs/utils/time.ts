// 1 -> 01
export const convertTimeToFull = (time: number) => {
  const initTime = time;
  const convertTime =
    initTime >= 10 ? String(initTime) : "0" + String(initTime);
  return convertTime;
};
