interface FooterSectionProps { 
    title: string,
    links: { [key: string]: string }
}

interface FooterLinkProps { 
    name: string,
    href: string
}

function FooterLink(props: FooterLinkProps) {
    return (
        <a href={ props.href } className="transition-all mb-1 opacity-50 hover:opacity-75 font-medium cursor-pointer">{ props.name }</a>
    )    
}

export default function FooterSection(props: FooterSectionProps) {
    let footer_link_items = [];
    for(const key in props.links) {
        footer_link_items.push(<FooterLink key={key} name={ key } href={ props.links[key] }/>);
    }
    return (
        <div className="mr-6 sm:mr-12 mb-3 sm:mb-0">
            <h2 className="font-medium text-sm sm:text-base">{ props.title }</h2>
            <div className="text-xs mt-2 flex flex-col">
                { footer_link_items }
            </div>
        </div>
    )
}