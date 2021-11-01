import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import Header from './Header'

const Register = () => {
    const [errors , setErrors] = useState();

    const userValidation = (e) => {
        e.preventDefault();

        let registerForm = document.querySelector('#register-form');
        let errorsForm = {};
        
        let password = document.querySelector('#password').value;
        let confirmPassword = document.querySelector('#confirm-password').value;
        if (password !== confirmPassword) {
            console.log('error en contraseña');
            errorsForm.password = 'las contraseñas deben ser iguales';
            setErrors(errorsForm);
        } else {
            registerForm.submit();
        }
    }
    
    return (
        <>
            <Header />
            <main className='main-container'>
                <form className='login-form' id='register-form' action='http://localhost:3001/api/users/register' method='POST'>

                    <label htmlFor='idEmployee'>Nº legajo</label>
                    <input type='number' id='idEmployee' name='idEmployee' autoFocus/>
                    
                    <label htmlFor='names'>Nombre y Apellido</label>
                    <input type='text' id='names' name='names' />
                    
                    <label htmlFor='userName'>Usuario</label>
                    <input type='text' id='userName' name='userName' />
                    
                    <label htmlFor='password'>Contraseña</label>
                    <input type='password' id='password' name='password' autoComplete='true'/>
                    
                    <label htmlFor='confirm-password'>Repite contraseña</label>
                    <input className={errors && errors.password? 'is-invalid': ''} type='password' id='confirm-password' name='confirm-password' autoComplete='true'/>
                    {errors && errors.password? <p className='text-danger'>{errors.password}</p>: ''}

                    <button onClick={userValidation} type='submit' id='register-button'><FontAwesomeIcon icon={ faSignInAlt } /></button>
                </form>
            </main>
        </>
    )
}

export default Register
