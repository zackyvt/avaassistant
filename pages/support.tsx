import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ContactForm from '../components/Main/ContactForm'
import Page from '../components/Page'

const Home: NextPage = () => {
    return (
        <Page page="Support">
            <Toaster/>
            <main className="mt-16">
                <h1 className="font-bold text-3xl text-center sm:text-left">Support</h1>
                <p className="mt-3 text-base text-center sm:text-left">Submit your questions or queries below!</p>
                <div className="flex mt-10 w-full">
                    <ContactForm />
                </div>
            </main>
        </Page>
    )
}

export default Home
