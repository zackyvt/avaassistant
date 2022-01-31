// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOffbSaN-oGL0XK80f5i9C60gsjs3sBNw",
    authDomain: "avaassistant-twitch.firebaseapp.com",
    databaseURL: "https://avaassistant-twitch-default-rtdb.firebaseio.com",
    projectId: "avaassistant-twitch",
    storageBucket: "avaassistant-twitch.appspot.com",
    messagingSenderId: "191966141504",
    appId: "1:191966141504:web:f4ec47d9d4f694b04e53a5"
};

const app = initializeApp(firebaseConfig);

import { getDatabase, ref, child, get } from "firebase/database";

interface CommandsList {
    name: string,
    description: string,
    usage: string
}

interface CommandCategory {
    name: string,
    category_id: string,
    commands_list: CommandsList[]
}

export async function getCommandsList(): Promise<{data: CommandCategory[]}> {
    const dbRef = ref(getDatabase());
    let snapshot = await get(child(dbRef, `commands`));
    if (snapshot.exists()) {
        let data = [];
        let value = snapshot.val();
        for(const key in value) {
            let commands_list = [];
            for(const command_key in value[key].commands_list) {
                commands_list.push({
                    usage: command_key,
                    name: value[key].commands_list[command_key].name,
                    description: value[key].commands_list[command_key].description
                });
            }
            data.push({
                name: value[key].name,
                category_id: key,
                commands_list: commands_list
            });
        }
        return {data: data};
    } else {
        return {data: []};
    }
}