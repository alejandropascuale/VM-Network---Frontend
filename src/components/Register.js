import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import Header from './Header'

const Register = () => {
    return (
        <>
            <Header />
            <main className='main-container'>
                <form className='login-form'>

                    <label htmlFor='id-employee'>Nº legajo</label>
                    <input type='number' id='id-employee' name='id-employee' autoFocus/>
                    
                    <label htmlFor='first-name'>Nombre y Apellido</label>
                    <input type='text' id='first-name' name='first-name' />
                    
                    <label htmlFor='user-name'>Usuario</label>
                    <input type='text' id='user-name' name='user-name' />
                    
                    <label htmlFor='password'>Contraseña</label>
                    <input type='password' id='password' name='password' />
                    
                    <label htmlFor='password'>Repite contraseña</label>
                    <input type='password' id='password' name='password' />

                    <button type='submit' id='login-button'><FontAwesomeIcon icon={ faSignInAlt } /></button>
                </form>
            </main>
        </>
    )
}

export default Register
