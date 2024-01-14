import styles from "../../styles/common/tooltip.module.css";

// 툴팁은 마우스 포인터 우상단에 위치 하며, 마우스의 움직임을 따라 지속적으로 포지션이 업데이트 되어야 함
export default function Tooltip() {
  return (
    <div className={styles.tooltip}>
      <p className={styles.text}>tooltip</p>
    </div>
  );
}
