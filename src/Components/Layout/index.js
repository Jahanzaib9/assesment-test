import React, { useEffect, useRef, useState } from "react";
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  const containerRef = useRef(null);
  const bgRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const bgs = bgRefs.current;

    container.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      // const mouseY = e.clientY;
      const centerX = window.innerWidth / 2;
      // const centerY = window.innerHeight / 2;

      bgs.forEach((bg, i) => {
        const speed = i * 0.04;
        const x = (mouseX - centerX) * speed;
        // const y = (mouseY - centerY) * speed;

        bg.style.transform = `translate(${-x}px`;
      });
    });

    return () => {
      container.removeEventListener("mousemove", () => {});
    };
  }, []);

  const [isPopped, setIsPopped] = useState(false);

  useEffect(() => {
    setIsPopped(true);
  }, []);

  return (
    <div className={styles["parallax-container"]} ref={containerRef}>
      <div
        className={styles["parallax-bg"]}
        ref={(el) => (bgRefs.current[0] = el)}
        id={styles["parallax-bg-1"]}
      >
        <div
          className={styles.comment_box}
          id={styles[isPopped ? "comment-box-rendered" : "comment-box"]}
        >
          <p className={styles.comment_text}>
            <b>
              I heard the FUD
              <br /> king is all in on <br /> $MBLK
            </b>
          </p>
        </div>
      </div>
      <div
        className={styles["parallax-bg"]}
        ref={(el) => (bgRefs.current[1] = el)}
        id={styles["parallax-bg-2"]}
      ></div>
      <div
        className={styles["parallax-bg"]}
        id={styles["parallax-bg-3"]}
        ref={(el) => (bgRefs.current[2] = el)}
      ></div>

      {children}
    </div>
  );
};
