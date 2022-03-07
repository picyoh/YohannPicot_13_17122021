import React from 'react'

import Welcome from '../components/profile/Welcome'
import Account from '../components/profile/Account'

function Profile() {

    return (
        <main className='main bg-dark'>
            <Welcome />
            <Account />
        </main>
    );
}

export default Profile