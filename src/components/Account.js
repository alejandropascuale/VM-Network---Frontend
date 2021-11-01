import React, { useContext } from 'react';

import { UserContext } from '../App';
import UserLoginHeader from './UserLoginHeader';

const Account = () => {
    const {userLogin} = useContext(UserContext);
    return (
        <>
            <UserLoginHeader />
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
                                    <a href="/">
                                        <i className="fas fa-home more-space"></i>
                                        <h2>Inicio</h2>
                                    </a>
                                </li>
                                <li>
                                    <a href="/user/account/edit">
                                        <i className="far fa-user-circle more-space"></i>
                                        <h2>Datos de la cuenta</h2>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="fas fa-gift more-space"></i>
                                        <h2>Cupones</h2>
                                    </a>
                                </li>
                                <form action="/user/account/delete?_method=DELETE" method="POST" id="delete-form">
                                    <fieldset className="logout-button">
                                        <button type="submit" className="none-decoration" id="delete-user">Eliminar Cuenta</button>
                                        <i className="fas fa-user-times"></i>
                                    </fieldset>
                                </form>
                            </ul>
                        </section>
                        <section className="box-space2">
                            <ul type='none' className="data-form">
                                <li>
                                    <a href="/user/account/my-order">
                                        <i className="fas fa-cart-arrow-down more-space"></i>
                                        <h2>Ver mi Reserva</h2>
                                    </a>
                                </li>
                                <li>
                                    <a href="/user/account/orders">
                                        <i className="fas fa-history more-space"></i>
                                        <h2>Historial de Reservas</h2>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fas fa-heart more-space"></i>
                                        <h2>Mis Favoritos</h2>
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <form action="/user/logout">
                        <fieldset className="logout-button center">
                            <button type="submit" className="none-decoration">Cerrar Sesión</button>
                            <i className="fas fa-sign-out-alt"></i>
                        </fieldset>
                    </form>
                </main>
        </>
    )
}

export default Account
