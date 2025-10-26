import React, { useState } from "react";
import axios from "axios";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const host = process.env.REACT_APP_BACKEND_CONNECTION || "http://localhost:8080";

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${host}/api/auth/login`, {
                username,
                password,
            });
            localStorage.setItem("token", res.data.token);
            window.location.href = "/admin";
        } catch (err) {
            setError("Kullanıcı adı veya şifre hatalı!");
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh", background: "#f5f6fa" }}
        >
            <div className="card p-4 shadow" style={{ width: "350px" }}>
                <h4 className="text-center mb-3">🔒 Admin Girişi</h4>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Kullanıcı adı"
                        className="form-control mb-3"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Şifre"
                        className="form-control mb-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <div className="text-danger mb-2 text-center">{error}</div>}
                    <button className="btn btn-primary w-100">Giriş Yap</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
