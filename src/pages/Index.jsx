import React from 'react'

import Hero from '../index/Hero'
import Features from '../index/Features'

function Index() {
    return (
        <main>
            <Hero />
            <section className='features'>
                <h2 className='sr-only'>Features</h2>
                <Features name={'chat'} />
                <Features name={'money'} />
                <Features name={'security'} />
            </section>
        </main>
    )
}

export default Index