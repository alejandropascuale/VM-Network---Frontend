import React, { useContext } from 'react'
import { UserContext } from '../App';

import UserAccount from './UserAccount';
import AdminAccount from './AdminAccount';
import Login from './Login'

const Home = () => {
    const {userLogin} = useContext(UserContext);
    
    if(userLogin && typeof userLogin != 'undefined' && userLogin.profile === 'usuario'){
        return (
            <UserAccount />
        )
    } else if (userLogin && typeof userLogin != 'undefined' && userLogin.profile === 'admin') {
        return (
            <AdminAccount />
        )
    } else {
        return (
            <Login />
        )
    }
}

export default Home
