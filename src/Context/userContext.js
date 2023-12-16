import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(null);

  const loginUser = (userData, token) => {
    setUser(userData);
    setUserToken(token);
    localStorage.setItem('userToken', token);
  };


  const logoutUser = () => {
    setUser(null);
    setUserToken(null);
    localStorage.removeItem('userToken');
  };



  // Check localStorage for tokens on initial load
  useEffect(() => {
    const storedUserToken = localStorage.getItem('userToken');

    if (storedUserToken) {
      setUserToken(storedUserToken);
    }
   
  }, []);

  const contextValue = {
    user,
    userToken,
    loginUser,
    logoutUser,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
