import React, { useContext } from 'react';
import { UserContext } from '../App';

import UserLoginHeader from './UserLoginHeader';
import GuestHeader from './GuestHeader';


function Header() {
    const {userLogin} = useContext(UserContext);
    
    if(userLogin && typeof userLogin != 'undefined'){
        return (
            <UserLoginHeader />
        )
    } else {
        return (
            <GuestHeader />
        )
    }
}

export default Header;