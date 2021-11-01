import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import LogoNombre from '../assets/images/Logo-nombre.jpg'
import Logo from '../assets/images/Logo-solo.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { UserContext } from '../App';

const UserLoginHeader = () => {
    const {userLogin} = useContext(UserContext);
    return (
        <header>
            <div className='logo-icon display-mobile'>
                <Link to='/' exact='true'>
                    <img src={Logo} alt='logo'></img>
                </Link>
            </div>
            <div className='logo-name display-desktop' >
                <Link to='/' exact='true'>
                    <img src={LogoNombre} alt='logo'></img>
                </Link>
            </div>
            <div className='display-desktop'>
                <img src={userLogin.avatar} alt="user-avatar" className="user-image-header"/>
            </div>
            <div className='display-mobile bars-container'>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    )
}

export default UserLoginHeader