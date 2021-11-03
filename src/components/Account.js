import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../App';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faGift, faCartArrowDown, faHistory, faHeart, faUserTimes, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

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
                            <Link to="/user/account/edit">
                                <FontAwesomeIcon icon={faUserCircle} />
                                <h2>Datos de la cuenta</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="/account/receipts">
                                <FontAwesomeIcon icon={faGift} />
                                <h2>Mis Recibos de Sueldo</h2>
                            </Link>
                        </li>
                        <form action="/user/account/delete?_method=DELETE" method="POST" id="delete-form">
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
                            <Link to="/user/account/my-order">
                                <FontAwesomeIcon icon={faCartArrowDown} />
                                <h2>Ver mi Reserva</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/account/orders">
                                <FontAwesomeIcon icon={faHistory} />
                                <h2>Historial de Reservas</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <FontAwesomeIcon icon={faHeart} />
                                <h2>Mis Favoritos</h2>
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
            <form action="/user/logout">
                <fieldset className="logout-button-container">
                    <FontAwesomeIcon icon={faSignInAlt} />
                    <button type="submit" className="logout-button">Cerrar Sesión</button>
                </fieldset>
            </form>
        </main>
    )
}

export default Account
