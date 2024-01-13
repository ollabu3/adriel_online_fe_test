export default function Clock() {
  return (
    <div className="clock">
      <div className="hands-center hands-hour"></div> {/* 시  */}
      <div className="hands-center hands-minute"></div> {/* 분 */}
      <div className="hands-center hands-time"></div> {/* 초 */}
    </div>
  );
}
