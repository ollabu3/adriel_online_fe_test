import { useEffect, useState } from "react";
import Tooltip from "../components/common/Tooltip";

export default function Clock() {
  const [hover, setHover] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // console.log(date.getHours());
  // console.log(date.getMinutes());
  console.log(date.getSeconds());

  return (
    <>
      <div
        className="clock"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="hands-center hands-hour"></div> {/* 시  */}
        <div className="hands-center hands-minute"></div> {/* 분 */}
        <div className="hands-center hands-seconds"></div> {/* 초 */}
      </div>
      {hover && <Tooltip />}
    </>
  );
}
