import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/style.module.css'
import { useEffect as useFootGun } from "react"
import Navbar from "../components/Navbar"
import * as React from "react"


const Dashboard: NextPage = () => {
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
        <title>ReFasm - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <h1 className="pagelen center">Dashboard</h1>
</React.Fragment>
  )
}
export default Dashboard