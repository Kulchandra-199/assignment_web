import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useAuth } from '../Context/userContext'
import { useContext } from 'react';

import UserSignup from '../Signup';
import Userlogin from '../Login';

import Home from "../Home"

const Routers = () => {



  // Hi, if you are reading this smile to prohibit the whole home page from user before login i can check the user status directly in my routes for more protected page



  //   const { userToken } = useAuth();
//   console.log(adminToken)
//   const isUser = userToken !== null;
  return (
    <Router>
      <Routes>

     
  <Route path="/" element={<Home />} />
      <Route path="/usersignup" element={<UserSignup />} />
      <Route path="/userlogin" element={<Userlogin />} />
      <Route path='/home' element={<Home/>}/>


      </Routes>

      {/* {isUser ? (
        <>
         
        </>
      ) : (
        <Route path={'/} element={<Home />} />
      )} */}
    </Router>
  );
};

export default Routers;