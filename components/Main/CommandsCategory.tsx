import { useState } from "react";

interface CommandCategoryButtonProps {
    name: string,
    category_id: string,
    current_category: boolean,
    button_clicked: (category_id: string) => void
}

function CommandCategoryButton(props: CommandCategoryButtonProps) {
    if (props.current_category) {
        return (
            <button className="transition-all ml-2 lg:ml-0 mt-3 font-medium w-64 h-12 bg-gradient-to-r from-pink to-purple text-white rounded-md">{props.name}</button>
        )
    } else {
        return (
            <button onClick={() => props.button_clicked(props.category_id)} className="transition-all ml-2 lg:ml-0 mt-3 font-bold w-64 h-12 bg-white text-black rounded-md opacity-25 hover:opacity-50">{props.name}</button>
        )
    }
}

interface CommandCategory {
    name: string,
    category_id: string
}

interface CommandsCategoryProps {
    commands_categories: CommandCategory[],
    current_category: string,
    set_current_category: (category_id: string) => void
}

export default function CommandsCategory(props: CommandsCategoryProps) {
    return (
        <div className="flex flex-row lg:flex-col flex-wrap justify-center sm:justify-start">
            {
                props.commands_categories.map((x) => 
                    <CommandCategoryButton key={x.category_id} button_clicked={props.set_current_category} name={x.name} category_id={x.category_id} current_category={x.category_id == props.current_category} />
                )
            }
        </div>
    )
}