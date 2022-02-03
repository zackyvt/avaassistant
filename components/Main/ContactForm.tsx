import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

interface FormSubmission {
    name: string,
    email: string,
    subject: string,
    content: string
}

function submitForm(form: FormSubmission) {
    toast.success('Form sent successfully!');
}

export default function ContactForm() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [subject, setSubject] = useState('');
    let [content, setContent] = useState('');

    const clearForm = () => {
        setName('');
        setEmail('');
        setSubject('');
        setContent('');
    }

    let send_form = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!(email && name && subject && content)) {
            toast.error("Invalid form submission");
            return;
        }
        let form = {
            name: name,
            email: email,
            subject: subject,
            content: content
        };
        submitForm(form);
        clearForm();
    };

    return (
        <form className="flex flex-col w-full" onSubmit={send_form}>
            <input value={name} onInput={e => setName((e.target as HTMLInputElement).value)} type="text" className="outline-blue text-black rounded-md mb-3 p-2 pr-3 pl-3 text-sm" placeholder="Name..." />
            <input value={email} onInput={e => setEmail((e.target as HTMLInputElement).value)} type="email" className="outline-blue text-black rounded-md mb-3 p-2 pr-3 pl-3 text-sm" placeholder="Email..." />
            <input value={subject} onInput={e => setSubject((e.target as HTMLInputElement).value)} type="text" className="outline-blue text-black rounded-md mb-3 p-2 pr-3 pl-3 text-sm" placeholder="Subject..." />
            <textarea value={content} onInput={e => setContent((e.target as HTMLInputElement).value)} className="outline-blue text-black rounded-md mb-3 p-2 pr-3 pl-3 text-sm h-48" placeholder="Content..."></textarea>
            <button className="transition-all font-medium p-2.5 pl-12 pr-12 bg-pink mt-3 rounded-lg hover:scale-105 text-white self-center sm:self-start">Submit</button>
        </form>
    )
}