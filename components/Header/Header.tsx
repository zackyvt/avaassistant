import Logo from "../Logo";
import Navbar from "./Navbar";

interface HeaderProps {
    page: string,
    set_scroll: (scroll: boolean) => void,
    set_darken: (darken: boolean) => void
}

export default function Header(props: HeaderProps) {
    return (
        <header className="flex w-full text-white pt-8 font-sans">
            <Logo />
            <Navbar pages={{
                "Home": "/",
                "Commands": "/commands",
                "Support": "/support"
            }} current_page={ props.page } set_scroll={props.set_scroll} set_darken={props.set_darken}/>
            <button className="hidden transition-all sm:block font-medium h-fit p-2 pl-5 pr-5 bg-white text-black rounded-lg text-sm hover:scale-105">Sign In</button>
        </header>
    )
}