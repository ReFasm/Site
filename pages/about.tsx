import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect as useFootGun } from "react"
import Navbar from "../components/Navbar"


const Dashboard: NextPage = () => {
  return (
<div>
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
        <title>ReFasm - About</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <h1 className="pagelen center">About</h1>
</div>
  )
}
export default Dashboard