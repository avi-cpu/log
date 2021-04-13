import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Welcome to HOME</h1>
            <Link to='/register'>REGISTER</Link>
            {/* <Link to='/login'>Login</Link> */}


        </div>
    )
}

export default Home
