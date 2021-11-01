import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import Header from './Header'

const Register = () => {
    
    const userValidation = (e) => {
        e.preventDefaul();
    }
    
    return (
        <>
            <Header />
            <main className='main-container'>
                <form className='login-form' action='http://localhost:3001/register' method='POST'>

                    <label htmlFor='idEmployee'>Nº legajo</label>
                    <input type='number' id='idEmployee' name='idEmployee' autoFocus/>
                    
                    <label htmlFor='names'>Nombre y Apellido</label>
                    <input type='text' id='names' name='names' />
                    
                    <label htmlFor='userName'>Usuario</label>
                    <input type='text' id='userName' name='userName' />
                    
                    <label htmlFor='password'>Contraseña</label>
                    <input type='password' id='password' name='password' autoComplete='true'/>
                    
                    <label htmlFor='confirm-password'>Repite contraseña</label>
                    <input type='password' id='confirm-password' name='confirm-password' autoComplete='true'/>

                    <button onClick={userValidation} type='submit' id='register-button'><FontAwesomeIcon icon={ faSignInAlt } /></button>
                </form>
            </main>
        </>
    )
}

export default Register
