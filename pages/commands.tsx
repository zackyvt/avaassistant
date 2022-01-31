import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import { getCommandsList } from '../components/Database'
import CommandsCategory from '../components/Main/CommandsCategory'
import CommandsList from '../components/Main/CommandsList'
import Page from '../components/Page'

interface CommandsList {
    name: string,
    description: string,
    usage: string
}

interface CommandCategory {
    name: string,
    category_id: string,
    commands_list: CommandsList[]
}

const Home: NextPage<{data: CommandCategory[]}> = (props: {data: CommandCategory[]}) => {
    let data = props.data;
    let [current_category, set_current_category] = useState(data[0].category_id);
    return (
        <Page page="Commands">
            <main className="mt-16 text-center sm:text-left">
                <h1 className="font-bold text-3xl">Commands</h1>
                <p className="mt-3 text-base">Below is a list of all of AvaAssistant&apos;s commands.</p>
                <div className="flex mt-8 lg:mt-10 flex-col lg:flex-row">
                    <CommandsCategory current_category={current_category} commands_categories={data} set_current_category={set_current_category} />
                    <div className="lg:ml-20 mt-10 lg:mt-0">
                        <CommandsList commands_list={data.filter((x) => x.category_id == current_category)[0].commands_list} />
                    </div>
                </div>
            </main>
        </Page>
    )
}

export async function getServerSideProps() {
    return {
        props: await getCommandsList()
    }
}

export default Home
