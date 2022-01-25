import React from 'react'
import { useNavigate } from 'react-router-dom';

import { useStore, useSelector } from 'react-redux';
import { setLoading } from '../services/store'

import { FaUserCircle } from "react-icons/fa"

import { getAccess } from '../services/dataManager'

function Signin() {
    
    const navigate = useNavigate();
    
    const store = useStore();
    const isLoading = useSelector((state) => state.loading)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // set Loading
        store.dispatch(setLoading(true));
        // get users inputs 
        const currentMail = e.target[0].value;
        const currentPsw = e.target[1].value;
        // send inputs to server
        const accessGranted = getAccess(currentMail, currentPsw);
        // move to profile
        // console.log(accessGranted)
        if (accessGranted){
            navigate('/user/profile');
        }
    }
    return (
        <section className='sign-in-content'>
            <FaUserCircle />
            <h1>Sign In</h1>
            {isLoading &&
                <div className='submitting'>Submitting...</div>
            }
            <form onSubmit={ handleSubmit } >
                <div className='input-wrapper'>
                    <label htmlFor='username'>Username</label>
                    <input type="mail" id="username" name="username" required />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className='input-remember'>
                    <input type="checkbox" id='rememberMe' name='rememberme' />
                    <label htmlFor='remember-me'>Remember Me</label>
                </div>
                <button className='sign-in-button'>Sign In</button>
            </form>
        </section>
    )
}

export default Signin