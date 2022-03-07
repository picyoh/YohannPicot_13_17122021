import React from 'react'
import {Link} from 'react-router-dom'

function Error(){
    return(
        <main className='main bg-dark error'>
            <h2>Error</h2>
            <p>An error occured!</p>
            <p>Get back to <Link to='/' >Home page</Link></p>
        </main>
    )
}

export default Error