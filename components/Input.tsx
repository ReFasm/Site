import React from "react";
import styles from "../styles/style.module.css"

interface Props {
  id?:string;
  type:string;
  placeholder?:any;
  required?:boolean;
  name:string;
}

export function Input(props:Props) {
  return <input id={props.id} type={props.type} placeholder={props.placeholder} required={props.required} className={styles.tertiary + " " + styles.animated}></input>;
}
  