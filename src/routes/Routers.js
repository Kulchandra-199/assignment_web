import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useAuth } from '../Context/userContext'
import { useContext } from 'react';

import UserSignup from '../Signup';
import Userlogin from '../Login';

import Home from "../Home"

const Routers = () => {


//   const { adminToken } = useAuth();
//   console.log(adminToken)
//   const isAdmin = adminToken !== null;
  return (
    <Router>
      <Routes>

     
  <Route path="/" element={<UserSignup />} />
      <Route path="/usersignup" element={<UserSignup />} />
      <Route path="/userlogin" element={<Userlogin />} />
      <Route path='/home' element={<Home/>}/>


      </Routes>

      {/* {isAdmin ? (
        <>
         
        </>
      ) : (
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      )} */}
    </Router>
  );
};

export default Routers;