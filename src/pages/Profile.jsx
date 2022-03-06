import React from 'react'

import Welcome from '../components/Welcome'
import Account from '../components/Account'

function Profile() {

    return (
        <main className='main bg-dark'>
            <Welcome />
            <Account />
        </main>
    );
}

export default Profile