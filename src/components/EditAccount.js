import React, { useState, useContext } from 'react'

import { UserContext } from '../App';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import Header from './Header'
import { Link } from 'react-router-dom';


const Register = () => {
    const [errors , setErrors] = useState();

    const { userLogin, setUserLogin } = useContext(UserContext);

    const userValidation = (e) => {
        e.preventDefault();

        let registerForm = document.querySelector('#edit-form');
        let errorsForm = {};
        
        let password = document.querySelector('#password').value;
        let confirmPassword = document.querySelector('#confirm-password').value;
        if(password === ''){
            errorsForm.password = 'Ingrese su contraseña para confirmar el cambio';
            setErrors(errorsForm);
        } else if (password !== confirmPassword) {
            errorsForm.confirmPassword = 'las contraseñas deben ser iguales';
            setErrors(errorsForm);
        } else {
            registerForm.submit();
        }
    }
    
    const handleChange = e => {
      const {name, value} = e.target;
      setUserLogin((prevState)=>({
        ...prevState,
        [name]: value
      }))
    }
    
    return (
        <>
            <Header />
            <main className='main-container'>
                <form className='login-form' id='edit-form' action={`http://localhost:3001/api/users/edit/${userLogin.idusers}?_method=PUT`} encType='multipart/form-data' method='POST'>

                    <div className='conteiner-close-button'>
                        <Link to='/' exact='true' className='back-icon'>
                            <FontAwesomeIcon icon={faTimes} />
                        </Link>
                    </div>

                    {/* <div className="align-image-user">
                        <img src={userLogin.avatar} alt="userAvatar" className="user-image" />
                    </div>
                    <input type='file' id='profile-picture' name='profile-picture' /> */}
                    <div className='align-image-user'>
                        <label for="profile-picture"><img className='user-image' src={userLogin.avatar} /></label>
                        <input type="file" id="profile-picture" name="profile-picture" hidden="true" accept="image/*"></input>
                        <p className='edit-msg-avatar'>Edit</p>
                    </div>

                    <label htmlFor='idEmployee'>Nº legajo</label>
                    <input type='number' id='idEmployee' name='idEmployee' defaultValue={userLogin.idEmployee} disabled/>
                    
                    <label htmlFor='names'>Nombre y Apellido</label>
                    <input type='text' id='names' name='names' defaultValue={userLogin.names} onChange={handleChange}/>
                    
                    <label htmlFor='userName'>Usuario</label>
                    <input type='text' id='userName' name='userName' defaultValue={userLogin.userName}/>
                    
                    <label htmlFor='password'>Contraseña</label>
                    <input className={errors && errors.password? 'is-invalid': ''} type='password' id='password' name='password' autoComplete='true' />
                    {errors && errors.password? <p className='text-danger'>{errors.password}</p>: ''}
                    
                    <label htmlFor='confirm-password'>Repite contraseña</label>
                    <input className={errors && errors.confirmPassword? 'is-invalid': ''} type='password' id='confirm-password' name='confirm-password' autoComplete='true'/>
                    {errors && errors.confirmPassword? <p className='text-danger'>{errors.confirmPassword}</p>: ''}

                    <button onClick={userValidation} type='submit' id='register-button'><FontAwesomeIcon icon={ faSignInAlt } /></button>
                </form>
            </main>
        </>
    )
}

export default Register
