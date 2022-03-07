import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Auth({ children }){
    // get loading and access
    const isLoading = useSelector((state) => state.loading)
    const access = useSelector((state) => state.access)
    // render child or signin page
    if(isLoading) return <main className='main bg-dark'></main>;
    return (access) ? children : <Navigate to="/signin" />
}

export default Auth