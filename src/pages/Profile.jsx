import React from 'react'

import Welcome from '../profile/Welcome'
import Account from '../profile/Account'

function Profile() {

    return (
        <main className='main bg-dark'>
            <Welcome />
            <Account />
        </main>
    );
}

export default Profile