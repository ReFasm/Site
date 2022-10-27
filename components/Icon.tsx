import { FC } from "react"
import styles from "../styles/style.module.css";

interface Props {
    icon_id:string,
    extClassname?:Array<string>
}

export default function Icon(props:Props): JSX.Element {
    return (
        <i className={styles.icon + " " + styles.animated_in + " " + props.extClassname?.join(" ")}>{props.icon_id}</i>
    )
} 