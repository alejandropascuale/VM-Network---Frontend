import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    return (
        <main className='main-container'>
            <form className='login-form' action='http://localhost:3001/api/users/login' method='POST'>
                <label htmlFor='userName'>Usuario</label>
                <input type='text' id='userName' name='userName' autoFocus/>

                <label htmlFor='password'>Contraseña</label>
                <input type='password' id='password' name='password' autoComplete='true'/>

                <button type='submit' id='login-button'><FontAwesomeIcon icon={ faSignInAlt } /></button>
            </form>
        </main>
    )
}

export default Login
