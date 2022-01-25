import React from 'react'

import Welcome from './Welcome'
import Account from './Account'

function Profile() {

    return (
        <main className='main bg-dark'>
            <Welcome />
            <Account />
        </main>
    );
}

export default Profile