import React from 'react'
import {Link} from 'react-router-dom'

function Error(){
    return(
        <main>
            <h2>Error.</h2>
            <p>An error appened!</p>
            <p>Get back to <Link to='/' >Home page</Link></p>
        </main>
    )
}

export default Error