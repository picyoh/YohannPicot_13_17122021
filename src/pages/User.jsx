import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Signin from '../components/Signin'
import Profile from '../layouts/Profile'


function User() {

    return (
        <main className='main bg-dark'>
            <Routes>
                <Route path='/login' element={ <Signin /> } />
                <Route path='/profile' element={ <Profile /> } />
            </Routes>
        </main>
    )
}

export default User