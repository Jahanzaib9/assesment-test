import { motion, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./Progressbar.module.css";

function Progressbar({ value }) {
  let amount = 4995505;
  const progressTextRef = useRef(null);
  const amountTextRef = useRef(null);

  useEffect(() => {
    const progressText = progressTextRef.current?.textContent;
    if (progressText != null) {
      animate(parseInt(progressText), value, {
        duration: 2,
        onUpdate: (cv) => {
          progressTextRef.current.textContent = cv.toFixed(2);
        },
      });
    }

    const amountText = amountTextRef.current?.textContent;
    if (amountText != null) {
      animate(parseInt(amountText), amount, {
        duration: 2,
        onUpdate: (cv) => {
          amountTextRef.current.textContent = cv.toFixed(0);
        },
      });
    }
  }, [amount, value]);
  return (
    <div className={styles["progressbar-container"]}>
      <div className={styles["flex-space-between"]}>
        <h3>
          <b>Stage 1</b>
        </h3>
        <div className={styles["progressbar-text-container"]}>
          <span ref={progressTextRef}>0</span>
          <span>% SOLD</span>
        </div>
      </div>
      <div className={styles["progressbar"]}>
        <motion.div
          className={styles["bar"]}
          animate={{
            width: `${value}%`,
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
        ></motion.div>
        <span className={styles["amount-span"]}>
          <span>$</span>
          <span ref={amountTextRef}>0</span>
          <span> {"/$558550 total RAISED"}</span>
        </span>
      </div>
    </div>
  );
}

export default Progressbar;
