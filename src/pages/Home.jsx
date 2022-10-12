import React from 'react'

export default function Home() {
    const buttonLogin = () => {
        document.location.href='/login';
    }


    return (
        <div className='page-container' style={{fontSize : '32px'}}>
            <button onClick={buttonLogin}>로그인</button>
        </div>
    )
}
