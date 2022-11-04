import { Input } from './Input';
import { TitleWithDesc } from "./TitleWithDesc";
import React from "react";
import styles from "../styles/style.module.css";
import Details from "./Details";
import Icon from "./Icon";

interface createUrlType {
  createUrl: any;
}

export function CreateLink({ createUrl }: createUrlType) {
  return (
    <>
      <h1 className="center">Shorten a link</h1>
      <div className="box grid">
        <p>
          <TitleWithDesc icon="&#xE71B;" title="URL" />
          <p />
          <Input id="urlbox" required placeholder="Input any URL" name="url" type="url" />
          <button
            onClick={createUrl}
            className={styles.animated_in_alt}
            type="submit"
          >
            <i className={styles.icon + " " + styles.animated_in_alt}>
              &#xe72a;
            </i>
          </button>
        </p>
        <Details></Details>
      </div>
    </>
  );
}

function undefined({}) {
  return (
    <React.Fragment>
      <Icon icon_id="&#xE71B;"></Icon>
      <span className="pr_15">URL</span>
    </React.Fragment>
  );
}
