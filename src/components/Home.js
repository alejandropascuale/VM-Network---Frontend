import React, { useContext } from 'react'
import { UserContext } from '../App';

import Account from './Account';
import Login from './Login'

const Home = () => {
    const {userLogin} = useContext(UserContext);
    
    if(userLogin && typeof userLogin != 'undefined'){
        return (
            <Account />
        )
    } else {
        return (
            <Login />
        )
    }
}

export default Home
