import { useEffect, useRef, useState } from "react";
import Typist from "react-typist";

function useInterval(callback: () => void, delay: number) {
    const savedCallback = useRef<typeof callback>();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current?.();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

interface DynamicTypistProps {
    phrases: string[]
}

export default function DynamicTypist(props: DynamicTypistProps) {
    let [current_phrase_count, set_current_phrase_count] = useState(0);
    useInterval(() => set_current_phrase_count(current_phrase_count < (props.phrases.length - 1) ? current_phrase_count + 1 : 0), 3000);
    return (
        <div className="flex text-base sm:text-lg w-full justify-center sm:justify-start">
            <p className="font-light mr-1 mb-1.5">A BOT WITH </p>
            <Typist key={current_phrase_count}>
                <span className="font-medium p-1.5 bg-gradient-to-r from-pink to-purple">{props.phrases[current_phrase_count]}</span>
                <Typist.Backspace count={props.phrases[current_phrase_count].length} delay={1000} />
            </Typist>
        </div>
    )
}