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

/*
  시계는 360도
  초침은 1분 동안 360도 -> 60초동안 360도씩 돌아감 -> 1초에 6도 돌아감
  분침은 1시간 동안 360도 -> 60분 동안 360도 -> 1분 동안 6도 
  시침은 12시간 동안 360도 -> 1시간에 30도 
  */
export const rotateHour = (hour: number) => {
  const oneDegree = 30;
  return (hour % 12) * oneDegree;
};

export const rotateMinute = (minute: number) => {
  const oneSecondToDegree = 6;
  return minute * oneSecondToDegree;
};

export const rotateSecond = (second: number) => {
  const oneSecondToDegree = 6;
  return second * oneSecondToDegree;
};

export const rotateTransformDegree = (degree: number) => {
  return `translate3D(-50%, 0, 0) rotate(calc(${degree}deg))`;
};

// 타임존 한국 시간
export const koreaDate = () => {
  return new Date().toLocaleString("en-US", {
    timeZone: "Asia/Seoul",
  });
};
