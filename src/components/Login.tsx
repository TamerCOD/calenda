
import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: login,
            password: password
        });

        if (error) {
            setError("Ты здесь чужой, ты не аматикая, надо пройти посвящение у Турукмакто (@NUR_tishenbekuulu)");
        } else {
            navigate("/dashboard");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="w-full max-w-sm p-8 space-y-4 bg-black rounded-xl shadow-xl">
                <h1 className="text-xl font-bold">Вход</h1>
                <input
                    type="text"
                    className="w-full p-2 rounded bg-gray-800"
                    placeholder="Логин"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                <input
                    type="password"
                    className="w-full p-2 rounded bg-gray-800"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin} className="w-full bg-magenta-500 hover:bg-magenta-600 p-2 rounded">
                    Войти
                </button>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
        </div>
    );
}
