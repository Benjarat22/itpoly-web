// MyContext.js
import React, { createContext, useContext } from 'react';

// สร้าง Context
const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const value = { basename: '/my-base-url' };  // กำหนดค่า context
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useMyContext = () => useContext(MyContext);
