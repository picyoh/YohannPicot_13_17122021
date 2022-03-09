import React from 'react'
import { useNavigate } from 'react-router-dom';

import { useStore, useSelector } from 'react-redux';
import { setLoading } from '../services/store'

import { FaUserCircle } from "react-icons/fa"

import { getAccess } from '../services/dataManager'

function Login() {

    const navigate = useNavigate();

    const store = useStore();
    const isLoading = useSelector((state) => state.loading)
    const access = useSelector((state) => state.access)

    const handleSubmit = (e) => {
        e.preventDefault();
        // set Loading
        store.dispatch(setLoading());
        // get users inputs 
        const currentMail = e.target[0].value;
        const currentPsw = e.target[1].value;
        // check account
        const accessGranted = getAccess(currentMail, currentPsw);
        // move to profile
        if (accessGranted) {
            navigate('/profile');
        }
    }
    return (
        <main className='main bg-dark'>
            <section className='sign-in-content'>
                <FaUserCircle />
                <h1>Sign In</h1>
                {isLoading &&
                    <div className='submitting'>Submitting...</div>
                }
                <form onSubmit={handleSubmit} >
                    <div className='input-wrapper'>
                        <label htmlFor='user-name'>Username</label>
                        <input type="mail" id="user-name" name="user-name" required />
                    </div>
                    <div className='input-wrapper'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className='input-remember'>
                        <label htmlFor='remember-me'>Remember Me</label>
                        <input type="checkbox" id='remember-me' name='remember-me' />
                    </div>
                    <button className='sign-in-button'>Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default Login