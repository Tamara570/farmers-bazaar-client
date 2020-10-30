import React from 'react';
import './Form.css'

export default function SignupForm () {
    return (
        <div>
            <form action="register">
                <h2>Sign up</h2>
                <label for="email">Email</label>
                <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    required
                />
                <label for="psw">Password</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    id="psw"
                    required
                />
                <label for="psw">Confirm password</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    id="psw"
                    required
                />
                <button type="submit">Submit</button>
            </form>


    </div>
    )
}
