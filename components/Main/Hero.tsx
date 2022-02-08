import Typist from 'react-typist';
import DynamicTypist from '../common/DynamicTypist';

function HeroLeft() {
    return (
        <div className="w-full md:w-3/4 mt-16 md:mt-0 text-center self-center sm:text-left sm:self-start">
            <DynamicTypist phrases={[
                "PERSONALITY", "TECH", "LOVE"
            ]}/>
            <h1 className="font-bold text-4xl sm:text-6xl mt-6">AvaAssistant</h1>
            <p className="mt-10 text-sm sm:text-base opacity-70">
                <span className="leading-7">
                    Hey! My name is Ava, your personal assistant. I use my many talents to play as a “Twitch Bot”, where I provide you with some advanced features and commands for your Stream! My features include alert notifications, translations support, stream configuration, viewer engagement commands, and more. I will do my best to assist you!
                </span>
            </p>
            <button className="transition-all font-bold p-3.5 pl-5 pr-5 bg-gradient-to-r from-pink to-purple
        mt-12 rounded-lg text-sm hover:scale-105" onClick={() => window.location.href = "https://www.twitch.tv/avaassistant"}>INVITE THE BOT</button><br className="sm:hidden" />
            <button className="transition-all font-bold p-3.5 pl-5 pr-5 bg-white
        mt-5 sm:mt-10 rounded-lg text-sm hover:scale-105 text-black sm:ml-5" onClick={() => window.location.href = "/commands"}>VIEW COMMANDS</button>
        </div>
    )
}

function HeroRight() {
    return (
        <div className="ml-0 md:ml-12 mt-0 md:-mt-16">
            <div className="p-2 rounded-md w-full h-fit bg-gradient-to-r from-pink to-purple hover:from-purple hover:to-pink transition-all ease-in flex flex-col justify-between">
                <img className="max-h-72 sm:max-h-96 md:max-h-full object-cover rounded-md hover:opacity-95" alt="avaassistant screenshot" src="https://addons.mozilla.org/user-media/previews/full/249/249437.png?modified=1622136457" />
            </div>
        </div>
    )
}

export default function Hero() {
    return (
        <main className="md:mt-32 mt-10 flex-grow flex flex-col-reverse md:flex-row">
            <HeroLeft />
            <HeroRight />
        </main>
    )
}