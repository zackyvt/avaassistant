interface CommandItem {
    name: string,
    description: string,
    usage: string,
    alias: string
}

function CommandItem(props: CommandItem) {
    return (
        <tr className="border-b">
            <td className="font-bold text-center">{ props.name }</td>
            <td className="pt-3 pb-3">{ props.description }</td>
            <td>{ props.usage }</td>
            <td>{ props.alias }</td>
        </tr>
    )
}

function CommandsListHeader() {
    return (
        <thead className="font-bold">
            <tr className="border-b text-sm sm:text-base">
                <td className="text-center pt-3.5 pb-3.5">Name</td>
                <td>Description</td>
                <td>Usage</td>
                <td>Alias</td>
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