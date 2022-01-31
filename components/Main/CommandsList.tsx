interface CommandItem {
    name: string,
    description: string,
    usage: string
}

function CommandItem(props: CommandItem) {
    return (
        <tr className="border-b">
            <td className="font-bold text-center">{ props.name }</td>
            <td className="p-3.5 pl-0 pr-0">{ props.description }</td>
            <td>{ props.usage }</td>
        </tr>
    )
}

function CommandsListHeader() {
    return (
        <thead className="font-bold">
            <tr className="border-b text-sm sm:text-base">
                <td className="text-center p-3.5 w-fit">Name</td>
                <td>Description</td>
                <td>Usage</td>
            </tr>
        </thead>
    )
}

interface CommandsListProps {
    commands_list: CommandItem[]
}

export default function CommandsList(props: CommandsListProps) {
    return (
        <table className="table-fixed w-full">
            <CommandsListHeader/>
            <tbody className="text-xs sm:text-sm">
                {
                    props.commands_list.map((x) => <CommandItem key={x.usage} {...x}/>)
                }
            </tbody>
        </table>
    )
}