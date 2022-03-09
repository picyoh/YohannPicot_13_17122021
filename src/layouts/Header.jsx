import React from 'react';
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';

import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'

function Header() {
    
    const dispatch = useDispatch();
    const access = useSelector((state) => state.access);
    const firstName = useSelector((state) => state.name.firstName);

    const handleLogOut = () => {
        dispatch({type: "logOut"});
    }

    return (
        <nav className='main-nav'>
            <Link className='main-nav-logo' to='/'>
                <img className='main-nav-logo-image' src='/img/argentBankLogo.png' alt='logo' />
                <h1 className='sr-only'>Argent Bank</h1>
            </Link>
            {
                (access) ? (
                    <div>
                        <Link className='main-nav-item' to='/profile'>
                            <FaUserCircle />
                            {firstName}
                        </Link>
                        <Link className='main-nav-item' to='/'onClick={handleLogOut} >
                            <FaSignOutAlt />
                            Sign Out
                        </Link>
                    </div>
                ) : (
                    <Link className='main-nav-item' to='/login'>
                        <FaUserCircle />
                        Sign In
                    </Link>
                )
            }
        </nav>
    )
}

export default Header 
