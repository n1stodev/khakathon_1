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
    const handleSub = () => {
        alert(`
            Name: ${newUser.name}
            Password: ${newUser.password}
        `)
    }
    return (
        <div className={`login ${login ? 'active' : ''}`}>
            <div className="login__box">
                <BiExit className='login__exit' onClick={() => dispatch(closeLogin())} />
                <h2 className="login__title">WELCOME BACK</h2>
                <form action="" className='login__form' onSubmit={handleSub}>
                    <input value={name} onChange={(e) => e.target.value} type="text" className='login__inp' />
                    <input value={password} onChange={(e) => e.target.value} type={`${eye ? 'password' : 'text'}`} className='login__inp' />
                    {
                        eye ? <AiFillEye className='login__eye' onclick={() => setEye(true)} /> : <AiFillEyeInvisible className='login__eye' onclick={() => setEye(false)} />
                    }
                    <button type="submit" className='login__btn'>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login