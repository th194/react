import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const buttonLogin = () => {
        <Link to="/login" />
    }


    return (
        <div className='page-container' style={{fontSize : '32px'}}>
            <button onClick={buttonLogin}>로그인</button>
        </div>
    )
}
