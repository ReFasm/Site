import React from "react";
import Link from "next/link";
import styles from "../styles/style.module.css";
import Icon from "./Icon";

interface Props {
  href: string;
  icon: string;
  title: string;
  additionalClasses?: Array<string>;
  iconAdditionalClasses?: Array<string>
}

export function NavbarLink(props: Props) {
  return (
    <Link href={props.href}>
      <a
        className={
          styles.animated_in + " " + " " + styles.pl_15 + " " +  props.additionalClasses?.join(" ")
        }
      >
        <Icon icon_id={props.icon} extClassname={props.iconAdditionalClasses}></Icon>
        {props.title}
      </a>
    </Link>
  );
}
