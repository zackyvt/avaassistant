import type { NextPage } from 'next'
import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Main/Hero'
import Page from '../components/Page'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Page page="Home">
      <Hero/>
    </Page>
  )
}

export default Home
