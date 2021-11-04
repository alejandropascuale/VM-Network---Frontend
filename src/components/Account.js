import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../App';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faCartArrowDown, faHistory, faHeart, faUserTimes, faSignInAlt, faFileInvoice } from '@fortawesome/free-solid-svg-icons'

const Account = () => {
    const {userLogin} = useContext(UserContext);
    return (
        <main>
            <section className="box-space">
                <div className="align-image-user">
                    <img src={userLogin.avatar} alt="userAvatar" className="user-image" />
                </div>
                <div className="align-titles">
                    <h3>{userLogin.names}</h3>
                </div>
            </section>
            <div className="flex-row">
                <section className="box-space1">
                    <ul type='none' className="data-form">
                        <li>
                            <Link to="/account/edit">
                                <FontAwesomeIcon icon={faUserCircle} />
                                <h2>Datos de la cuenta</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="/account/receipts">
                                <FontAwesomeIcon icon={faFileInvoice} />
                                <h2>Mis Recibos de Sueldo</h2>
                            </Link>
                        </li>
                        <form action="" method="POST" id="delete-form">
                            <div className='delete-account-container'>
                                <FontAwesomeIcon icon={faUserTimes} />
                                <button type="submit" className="delete-user-button" id="delete-user">Eliminar Cuenta</button>
                            </div>
                        </form>
                    </ul>
                </section>
                <section className="box-space2">
                    <ul type='none' className="data-form">
                        <li>
                            <Link to="/user/account/orders">
                                <FontAwesomeIcon icon={faHistory} />
                                <h2>Historial de Mensajes</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <FontAwesomeIcon icon={faHeart} />
                                <h2>Mis Contactos</h2>
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
            <form action="http://localhost:3001/api/users/logout">
                <fieldset className="logout-button-container">
                    <FontAwesomeIcon icon={faSignInAlt} />
                    <button type="submit" className="logout-button">Cerrar Sesión</button>
                </fieldset>
            </form>
        </main>
    )
}

export default Account
