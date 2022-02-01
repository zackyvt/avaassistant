import { useEffect, useState } from "react";
import Logo from "../Logo";

interface NavBarProps {
    pages: {[key: string]: string},
    current_page: string,
    set_scroll: (scroll: boolean) => void,
    set_darken: (darken: boolean) => void
}

interface NavItemProps {
    name: string,
    href: string,
    current_page: boolean
}

function NavItem(props: NavItemProps) {
    if (props.current_page) {
        return <a href={props.href} className="cursor-pointer ml-8 font-bold">{props.name}</a>
    } else {
        return <a href={props.href} className="font-bold cursor-pointer ml-8 opacity-50 hover:scale-105 hover:opacity-75">{props.name}</a>
    }
}

interface NavSideBarProps {
    visible: boolean,
    children: JSX.Element[],
    close_sidebar: () => void,
    set_scroll: (scroll: boolean) => void,
    set_darken: (darken: boolean) => void
}

function NavSideBar(props: NavSideBarProps) {
    useEffect(() => {
        props.set_darken(props.visible);
        document.body.classList.remove(!props.visible ? "overflow-y-hidden" : "overflow-y-auto")
        document.body.classList.add(props.visible ? "overflow-y-hidden" : "overflow-y-auto");
        props.set_scroll(!props.visible);
    });
    return (
        <div className={(props.visible ? "shown" : "") + " z-20 navsidebar absolute h-full border-l border-white w-3/4 bg-blue top-0 -right-3/4 p-6"}>
            <img alt="logo" onClick={() => props.close_sidebar()} className="mb-8 black-to-white w-6 cursor-pointer hover:opacity-75" src="/cross.png"/>
            <Logo />
            <div className="flex flex-col mt-8 -ml-8 text-lg gap-3.5">
                {props.children}
            </div>
        </div>
    )
}

export default function NavBar(props: NavBarProps) {
    let [sidebar_view, set_sidebar_view] = useState(false);
    let nav_items = [];
    for (const key in props.pages) {
        nav_items.push(<NavItem key={key} name={key} href={props.pages[key]} current_page={props.current_page == key} />);
    }
    return (
        <div className="flex-grow self-center flex justify-end sm:justify-start">
            <div className="flex-grow flex self-center ml-10 hidden sm:block">
                {nav_items}
            </div>
            <div onClick={() => set_sidebar_view(true)} className="w-10 self-center sm:hidden cursor-pointer hover:opacity-75">
                <div className="w-full bg-white h-1 rounded-md"></div>
                <div className="w-full bg-white h-1 rounded-md mt-1.5"></div>
                <div className="w-full bg-white h-1 rounded-md mt-1.5"></div>
            </div>
            <NavSideBar visible={sidebar_view} close_sidebar={() => set_sidebar_view(false)} set_scroll={props.set_scroll} set_darken={props.set_darken}>
                {nav_items}
            </NavSideBar>
        </div>
    )
}