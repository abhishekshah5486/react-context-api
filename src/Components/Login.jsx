import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h2>Login</h2>
            <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            placeholder='Username'
            />
            { " " }
            <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Password'
            />
        </div>
    )
}

export default Login;
