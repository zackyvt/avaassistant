import Logo from "../Logo";
import Navbar from "./Navbar";

interface HeaderProps {
    page: string,
    set_scroll: (scroll: boolean) => void,
    set_darken: (darken: boolean) => void
}

export default function Header(props: HeaderProps) {
    return (
        <header className="flex w-full bg-blue text-white pt-8 font-sans">
            <Logo />
            <Navbar pages={{
                "Home": "/",
                "Commands": "/commands",
                "Support": "/support"
            }} current_page={ props.page } set_scroll={props.set_scroll} set_darken={props.set_darken}/>
            <img alt="twitch logo" className="w-8 h-8 self-center border-white border-2 rounded-md hidden sm:block" src="/twitch.png"/>
        </header>
    )
}