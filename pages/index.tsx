import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/style.module.css";
import React, { useEffect as useFootGun } from "react";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
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
      <h1 className="pagelen center">Shorten a link</h1>
    </React.Fragment>
  );
};

export default Home;
