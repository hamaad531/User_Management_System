import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser }) => { // Make sure to destructure setLoginUser from props
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const login = () => {
        const { email, password } = user;
        axios.post('http://localhost:9002/login', user)
            .then(res => {
                alert(res.data.message);
                setLoginUser(res.data.user);
                navigate('/');
            })
            .catch(error => alert('An error occurred'));
    };

    const navigateToRegister = () => {
        navigate('/register');
    };

    return (
        <div className='login'>
            <h1>Login</h1>
            <input type='email' name='email' value={user.email} placeholder='email' onChange={handleChange} />
            <input type='password' name='password' value={user.password} placeholder='password' onChange={handleChange} />
            <div className='button' onClick={login}>Login</div>
            <div>or</div>
            <div className='button' onClick={navigateToRegister}>Register</div>
        </div>
    );
};

export default Login;
