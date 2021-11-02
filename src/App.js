import React, { useState, useEffect, createContext } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Home from "./components/Home";
import Register from "./components/Register";
import Header from './components/Header';

export const UserContext = createContext(null);

function App() {
  const [userLogin, setUserLogin] = useState();
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  useEffect(()=>{
  if (getCookie('userName') !== '') {
    fetch('http://localhost:3001/api/users')
      .then(response => response.json())
      .then(data => {
        let userCookie = getCookie('userName');
        const user = data.find(u => u.userName === userCookie);
        setUserLogin(user);
      }
      )
    }
  }, [])
  return (
    <UserContext.Provider value={{ userLogin, setUserLogin }}>
      <BrowserRouter>
        <Header />
        <Route path='/' exact={true} component={Home} />
        <Route path='/register' component={Register} />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
