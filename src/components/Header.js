import React from 'react'
import { Link } from 'react-router-dom'

import LogoNombre from '../assets/images/Logo-nombre.jpg'
import Logo from '../assets/images/Logo-solo.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
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
                <Link to='/register'>
                    <FontAwesomeIcon icon={faUserCircle} />
                    <h3>Register</h3>
                </Link>
            </div>
            <div className='display-mobile bars-container'>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    )
}

export default Header
