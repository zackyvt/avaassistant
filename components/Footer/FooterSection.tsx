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
        <a href={ props.href } className="mb-1 opacity-50 hover:opacity-75 font-bold cursor-pointer">{ props.name }</a>
    )    
}

export default function FooterSection(props: FooterSectionProps) {
    let footer_link_items = [];
    for(const key in props.links) {
        footer_link_items.push(<FooterLink key={key} name={ key } href={ props.links[key] }/>);
    }
    return (
        <div className="mr-12">
            <h2 className="font-bold">{ props.title }</h2>
            <div className="text-xs mt-2 flex flex-col">
                { footer_link_items }
            </div>
        </div>
    )
}