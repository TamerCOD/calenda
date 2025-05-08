
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Header() {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUserName(data?.user?.email || "");
        };
        fetchUser();
    }, []);

    return (
        <header className="w-full p-4 bg-black text-white flex justify-between items-center">
            <h2 className="text-lg font-semibold">Пользователь: {userName}</h2>
            <button
                onClick={() => supabase.auth.signOut()}
                className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded"
            >
                Выйти
            </button>
        </header>
    );
}
