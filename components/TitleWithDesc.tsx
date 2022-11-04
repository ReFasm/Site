import React from "react";
import Icon from "./Icon";
import styles from "../styles/style.module.css";
interface Props {
  icon: string;
  title: string;
}

export function TitleWithDesc(props: Props) {
  return (
    <React.Fragment>
      <i className={styles.icon}>{props.icon}</i>
      <span className="pr_15"  style={{verticalAlign:"middle", fontWeight:"bold"}}>{props.title}</span>
    </React.Fragment>
  );
}
