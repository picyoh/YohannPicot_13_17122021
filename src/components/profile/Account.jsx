import React from 'react'
import { useSelector } from 'react-redux';
import { getTransactions } from '../../services/dataManager'

function Account() {
    const firstName = useSelector((state) => state.name.firstName)
    const accounts = getTransactions(firstName);
    const accountsList = accounts.map((account, index) => {
        return (
            <section className='account' key={index}>
                <div className='account-content-wrapper'>
                    <h3 className='account-title'>Argent Bank {account.name} (x{account.amount})</h3>
                    <p className='account-amount'>$ {account.balance}</p>
                    <p className='account-amount-description'>Avalable Balance</p>
                </div>
                <div className='cta'>
                    <button className='transaction-button'>View Transactions</button>
                </div>
            </section>
        )
    })
    return (
        <>
            {accountsList}
        </>
    )
}

export default Account