import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface PageProps {
    page: string,
    children: JSX.Element | JSX.Element[],
}

export default function Page(props: PageProps) {
    let setScrollable = (scroll: boolean) => {
        //
    };
    let [darken, setDarken] = useState(false);
    return (
        <div className="min-h-screen bg-blue flex flex-col">
            <Head>
                <title>{props.page}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
                <meta charSet="UTF-8" />
                <meta name="title" content="AvaAssistant - a bot with personality" />
                <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                <meta name="keywords" content="commands, bot, twitch, avaassistant" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
            </Head>
            <div className={(darken ? "" : "hidden") + " bg-black opacity-50 absolute z-10 w-full h-full inset-0"}></div>
            <div className="flex-grow pr-10 pl-10 sm:pr-12 sm:pl-12 md:pl-16 md:pr-16 lg:pr-20 lg:pl-20 xl:pr-24 xl:pl-24 2xl:pl-36 2xl:pr-36 flex flex-col">
                <Header page={props.page} set_scroll={setScrollable} set_darken={setDarken} />
                <div className="text-white pt-8 font-sans pb-28 flex-grow flex flex-col">
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}