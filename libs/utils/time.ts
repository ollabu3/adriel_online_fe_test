// HH:MM:SS
export const convertTimeToFull = (
  hour: number,
  minute: number,
  second: number
) => {
  const newHour = convertTimeToTwoLength(hour);
  const newMinute = convertTimeToTwoLength(minute);
  const newSecond = convertTimeToTwoLength(second);

  return `${newHour}:${newMinute}:${newSecond}`;
};

// 1 -> 01
export const convertTimeToTwoLength = (time: number) => {
  const initTime = time;
  const convertTime =
    initTime >= 10 ? String(initTime) : "0" + String(initTime);
  return convertTime;
};
