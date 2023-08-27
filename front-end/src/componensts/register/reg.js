import React, { useState } from 'react';
import axios from 'axios';
import './reg.css'
import { useNavigate } from 'react-router-dom';


const Reg = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })


    }
    const register = (e) => {
        const { name, email, password, reEnterPassword } = user;
        if (name && email && password && (password === reEnterPassword)) {
            axios.post('http://localhost:9002/register', user).then((res) => alert(res.data.message));
            //alert("SUCCESSFULLY REGISTER");
            navigate('/login');
        } else {
            alert("invalid");
        }
    }
    const navigateToLogin = () => {
        navigate('/login');
    };
    return (
        <div className='register'>
            <h1>Register</h1>
            <input type='name' name='name' value={user.name} placeholder='name' onChange={handleChange} />
            <input type='email' name='email' value={user.email} placeholder='email' onChange={handleChange} />
            <input type='password' name='password' value={user.password} placeholder='password' onChange={handleChange} />
            <input type='password' name='reEnterPassword' value={user.reEnterPassword} placeholder='re-enter password' onChange={handleChange} />
            <div className='button' onClick={register}>Register</div>
            <div>or</div>
            <div className='button' onClick={navigateToLogin} >Login</div>
        </div>
    )
}

export default Reg
