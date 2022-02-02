function HeroLeft() {
    return (
        <div className="w-full md:w-3/4 mt-16 md:mt-0 text-center self-center sm:text-left sm:self-start">
            <h1 className="font-bold text-4xl sm:text-6xl">AvaAssistant</h1>
            <p className="mt-8 leading-7 text-sm sm:text-base">
                Hey! My name is Ava, your personal assistant. I use my many talents to play as a “Twitch Bot”, where I provide you with some advanced features and commands for your Stream! My features include alert notifications, translations support, stream configuration, viewer engagement commands, and more. I will do my best to assist you! 
            </p>
            <button className="font-bold p-3.5 pl-5 pr-5 bg-pink
        mt-10 rounded-lg text-sm hover:scale-105">INVITE THE BOT</button><br className="sm:hidden"/>
        <button className="font-bold p-3.5 pl-5 pr-5 bg-white
        mt-5 sm:mt-10 rounded-lg text-sm hover:scale-105 text-black sm:ml-5" onClick={() => window.location.href = "/commands"}>VIEW COMMANDS</button>
            <p className="italic font-bold text-sm mt-10">... a bot with personality</p>
        </div>
    )
}

function HeroRight() {
    return (
        <div className="md:w-full lg:-mt-20 md:ml-16 lg:ml-32 w-3/4 sm:w-2/4 self-center sm:self-start max-w-2xl">
            <img alt="avaassistant screenshot" className="w-full border-4 border-pink" src="https://addons.mozilla.org/user-media/previews/full/249/249437.png?modified=1622136457"/>
        </div>
    )
}

export default function Hero() {
    return (
        <main className="md:mt-32 mt-10 flex-grow flex flex-col-reverse md:flex-row">
            <HeroLeft/>
            <HeroRight/>
        </main>
    )
}