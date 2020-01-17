import React from "react";
import styles from "./ShareBar.module.css";

const ShareBar = () => {
  return (
    <div className={styles["share-button"]}>
      <span><i className="fas fa-share-alt"></i> 分享</span>
      <a href="https://baidu.com"><i className="fab fa-facebook-f"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
      <a href="#"><i className="fab fa-linkedin-in"></i></a>
    </div>
  );
};

export default ShareBar;
