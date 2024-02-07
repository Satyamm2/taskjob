import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword, setError, setShowPassword } from '../../redux/slices/login';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    // const [username, setUsername] = useState('kminchelle');
    // const [password, setPassword] = useState('0lelplR');
    // const [error, setError] = useState('');
    // const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const { username, password, error, showPassword } = useSelector((state) => state.login);

    const handleLogin = async (e) => {
        e.preventDefault();

        const requestBody = {
            username: username,
            password: password
        };

        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.message);
                return;
            }

            const data = await response.json();
            console.log("success");
            const token = data.token;

            localStorage.setItem('token', token);
            navigate('/product-list');
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An error occurred while logging in. Please try again.');
        }

    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                    onChange={(e) => dispatch(setUsername(e.target.value))}
                    className="block border border-gray-300 p-2 mb-2"
                />
                <div className="flex gap-1">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        onChange={(e) => dispatch(setPassword(e.target.value))}
                        className="block border border-gray-300 p-2 mb-2 pr-10"
                    />
                    <button
                        type="button"
                        // onClick={() => setShowPassword(!showPassword)}
                        onClick={() => dispatch(setShowPassword(!showPassword))}
                        className="px-3 h-8 bg-gray-200 hover:bg-gray-300"
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;