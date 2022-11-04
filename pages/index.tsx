import { CreateLink } from '../components/CreateLink';
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/style.module.css";
import React, { useEffect as useFootGun } from "react";
import Navbar from "../components/Navbar";
import Icon from "../components/Icon";
import { url } from "inspector";
import Details from '../components/Details';

interface urlReturn {
  url:string
}

const Home: NextPage = () => {
  const createUrl = async (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const urlBox:HTMLInputElement|null = document.querySelector("input#urlBox")
    if (!urlBox) { return }
    // value = urlBox.value.
    const res = await fetch('/api/create', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '1be64fcdeb71c376cda8d9e4b106b570'
      },
      method: 'POST',
      body: JSON.stringify({
        url: urlBox.value,
        nsfw:false
      })
    })
    const result = await res.text();
    console.log(result)
  };
  return (
    <React.Fragment>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
      <Head>
        <title>ReFasm - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div className="grid">
        <CreateLink createUrl={createUrl}  />
      </div>
      
    </React.Fragment>
  );
};

export default Home;
