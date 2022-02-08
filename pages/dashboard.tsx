import Page from "../components/Page";

export default function Dashboard() {
    return (
        <Page page="404 Not Found">
            <div className="flex-col items-center text-center flex justify-center flex-grow pt-20">
                <h1 className="font-bold text-3xl sm:text-4xl">:(</h1>
                <p className="mt-3.5 text-sm sm:text-base">The Dashboard is currently under development.</p>
                <button className="transition-all font-bold p-3.5 pl-5 pr-5 bg-pink
        mt-10 rounded-lg text-sm hover:scale-105" onClick={() => window.location.href = "/"}>Return to Home</button>
            </div>
        </Page>
    )
}