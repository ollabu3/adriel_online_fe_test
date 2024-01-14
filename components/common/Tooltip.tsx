import { useEffect, useRef } from "react";
import styles from "../../styles/common/tooltip.module.css";

export default function Tooltip() {
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getCurrentPosition = (e: MouseEvent) => {
      const currentTooltip = tooltipRef.current;

      if (currentTooltip) {
        const tooltipHeight = currentTooltip.offsetHeight; // 툴팁의 height 사이즈
        const x = e.clientX;
        const y = e.clientY - tooltipHeight; // 현재 마우스 위치에서  - height 사이즈
        currentTooltip.style.left = x + "px";
        currentTooltip.style.top = y + "px";
      }
    };

    window.addEventListener("mousemove", getCurrentPosition);
    return () => {
      window.removeEventListener("mousemove", getCurrentPosition);
    };
  }, []);

  return (
    <div ref={tooltipRef} className={styles.tooltip}>
      <p className={styles.text}>tooltip</p>
    </div>
  );
}
