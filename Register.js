import React, { useState } from 'react'

function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const register = (e) => {
        e.preventDefault();
        fetch(`https://localhost/9000/register`, {
            mode: 'no-cors',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });
    };
    return (
        <div>

            <h1> REGISTER</h1>
            <form onSubmit={register}>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username" />
                <br />

                <input type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password" />
                <br />
                <button type="submit"> Register</button>
            </form>
        </div>
    )
}

export default Register
