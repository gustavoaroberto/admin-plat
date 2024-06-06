import React from "react";
import styles from "./styles.module.css";

interface ILogoProps {
  width?: string;
  height?: string;
}

export default function Logo({ width, height }: ILogoProps) {
  return (
    <div style={{ width, height }} className={styles.logo}>
      <img src="/images/logo.svg" alt="logo" />
    </div>
  );
}
