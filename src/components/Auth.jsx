import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Auth({ children }){
    const isLoading = useSelector((state) => state.loading)
    const access = useSelector((state) => state.access)
    console.log(access)
    if(isLoading) return null;
    return (access) ? children : <Navigate to="/signin" />
}

export default Auth