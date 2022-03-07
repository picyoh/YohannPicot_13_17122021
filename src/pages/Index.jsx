import React from 'react'

import Hero from '../components/index/Hero'
import Features from '../components/index/Features'

function Index() {
    return (
        <main>
            <Hero />
            <section className='features'>
                <h2 className='sr-only'>Features</h2>
                <Features />
            </section>
        </main>
    )
}

export default Index