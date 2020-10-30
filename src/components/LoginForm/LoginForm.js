import React from 'react'
import './LoginForm.css'



export default function LoginForm () {
    return (
        <div>
            <form action="login">
                <h2>Login</h2>
                <label for="email">Enter email</label>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    id="email"
                    required
                />
                <label for="psw">Enter password</label>
                <input
                    type="password"
                    placeholder="Password"
                    name="psw"
                    id="psw"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}