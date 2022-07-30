import type { NextPage } from 'next'
import { Fragment } from 'react';
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Navbar/>
    </Fragment>
  )
}

export default Home
