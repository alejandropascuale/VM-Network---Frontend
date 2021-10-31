import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    return (
        <main className='main-container'>
            <form className='login-form'>
                <label htmlFor='user-name'>Usuario</label>
                <input type='text' id='user-name' name='user-name' autoFocus/>

                <label htmlFor='password'>Contraseña</label>
                <input type='password' id='password' name='password' />

                <button type='submit' id='login-button'><FontAwesomeIcon icon={ faSignInAlt } /></button>
            </form>
        </main>
    )
}

export default Login
