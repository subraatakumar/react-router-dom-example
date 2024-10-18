import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../App'
import { Navigate } from 'react-router-dom'

function Contact() {
    const isLogedIn = useContext(AuthContext)

    if (!isLogedIn) {
        return <Navigate to="/" />
    }

    return (
        <div><h1>Contact</h1><p>Masai School</p><p>Bengaluru</p></div>
    )
}

export default Contact