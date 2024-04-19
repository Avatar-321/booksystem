import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import "./login.css";

function LoginComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => { // Make the function asynchronous
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', { username, password });
            if (response.data && response.data.token) {
                setMessage('Login successful');
                localStorage.setItem('token', response.data.token); // Store token in local storage
            } else {
                setMessage('Login failed');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setMessage('Invalid username or password');
            } else {
                setMessage('An error occurred during login');
                console.error('Error:', error);
            }
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default LoginComponent;
