import React, { useState } from 'react'
import { BiExit } from 'react-icons/bi'
import './Login.css'
import { useSelector, useDispatch } from 'react-redux'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { closeLogin } from '../../context/action/action'

function Login() {
    const [eye, setEye] = useState(false)
    let dispatch = useDispatch()
    let login = useSelector(s => s.login)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    let newUser = {
        name,
        password
    }
    const handleSub = (e) => {
        e.preventDefault()
        alert(`
            Name: ${newUser.name}
            Password: ${newUser.password}
        `)
    }
    console.log(eye)
    return (
        <div className={`login ${login ? 'active' : ''}`}>
            <div className="login__box">
                <BiExit className='login__exit' onClick={() => dispatch(closeLogin())} />
                <h2 className="login__title">WELCOME BACK</h2>
                <form action="" className='login__form' onSubmit={handleSub}>
                    <input required value={name} onChange={(e) => setName(e.target.value)} type="text" className='login__inp' />
                    <input requiredvalue={password} onChange={(e) => setPassword(e.target.value)} type={`${eye ? 'text' : 'password'}`} className='login__inp' />
                    {
                        eye ? <AiFillEye className='login__eye' onClick={() => setEye(!eye)} /> : <AiFillEyeInvisible className='login__eye' onClick={() => setEye(!eye)} />
                    }
                    <button type="submit" className='login__btn'>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login