import React from 'react'

function Account() {

    return (
        <section className='account'>
            <div className='account-content-wrapper'>
                <h3 className='account-title'>Argent Bank Checking</h3>
                <p className='account-amount'>$</p>
                <p className='acount-amount-description'>Balance</p>
            </div>
            <div className='account-content-wrapper cta'>
                <button className='transaction-button'>View Transactions</button>
            </div>
        </section>
    )
}

export default Account