import React from "react";
import styles from "../styles/style.module.css";
import Icon from "./Icon"

interface createUrlType {
  createUrl: any
}

export function CreateLink({
  createUrl
}:createUrlType) {
  return <><h1 className="center">Shorten a link</h1>
        <div className="box grid">
          <p>
            <span style={{
          paddingBottom: "15px"
        }}>
            <Icon icon_id="&#xE71B;"></Icon>
            <span className="pr_15">URL</span>
            </span>
            <p />
            <input id="urlBox" type="url" name="url" placeholder="Input any URL" required className={styles.tertiary}></input>
            <button onClick={createUrl} className={styles.animated_in_alt} type="submit"><i className={styles.icon + " " + styles.animated_in_alt}>&#xe72a;</i></button>
          </p>
        </div></>;
}
  