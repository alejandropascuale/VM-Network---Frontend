import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import LogoNombre from '../assets/images/Logo-nombre.jpg'
import Logo from '../assets/images/Logo-solo.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle, faFileInvoice, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { UserContext } from '../App';

const UserLoginHeader = () => {
    const {userLogin} = useContext(UserContext);
    const [sideBar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sideBar);

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
                <Link to='/'>
                <img src={userLogin.avatar} alt="user-avatar" className="user-image-header"/>
                </Link>
            </div>
            <div className='display-mobile bars-container'>
                <FontAwesomeIcon icon={faBars} onClick={showSideBar}/>
            </div>
            <nav className={sideBar? 'display-mobile user-menu active-navBar': 'display-mobile user-menu'} id='navBar'>
                <ul type='none'>
                    <li>
                        <Link to="/user/account/edit" className='side-menu-option'>
                            <FontAwesomeIcon icon={faUserCircle} />
                            <p>Datos de la cuenta</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/account/my-order" className='side-menu-option'>
                            <FontAwesomeIcon icon={faFileInvoice} />
                            <p>Ver mis Recibos</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/account/my-order" className='side-menu-option'>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            <p>Cerrar Sesión</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default UserLoginHeader