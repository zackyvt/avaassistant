interface LogoProps {
    size?: string
}

export default function Logo(props: LogoProps) {
    return (
        <div className={ props.size + " w-8 h-10 text-3xl font-bold relative cursor-pointer" } onClick={() => window.location.href = "/"}>
            <p className="absolute">A</p>
            <p className="absolute top-2 left-3">A</p>
        </div>
    )
}