import React from 'react'
import { BiExit } from 'react-icons/bi'
import './Login.css'

function Login() {
    return (
        <div className='login'>
            <div className="login__box">
                <BiExit className='login__exit' />
                <h2 className="login__title">WELCOME BACK</h2>
                <form action="" className='login__form'>
                    <input type="text" className='login__inp' />
                    <input type="text" className='login__inp' />
                </form>
            </div>
        </div>
    )
}

export default Login