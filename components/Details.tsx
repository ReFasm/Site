import React, { Fragment } from "react";
import { Input } from "./Input";
import { TitleWithDesc } from "./TitleWithDesc";

export default function Details() {
  return (
    <Fragment>
      <details id="details">
        <summary >Customize</summary>
        <p style={{marginTop: "5px"}}></p>
        <TitleWithDesc  icon="&#xea18;" title="NSFW"></TitleWithDesc>
        <Input id="nsfw" required name="nsfw" type="checkbox" />
        <p/>
        <TitleWithDesc icon="&#xe72e;" title="Password"></TitleWithDesc>
        <p />
        <Input id="nsfw" required name="nsfw" type="password" />
      </details>
    </Fragment>
  );
}
