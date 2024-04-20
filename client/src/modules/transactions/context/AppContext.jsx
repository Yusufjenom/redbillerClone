import React, { createContext } from 'react';
import banks from '../_data/bank-list.json';
import { __services } from "../../config/dataConfig";
export const AppContext = createContext()
export const AppProvider = ({ children }) => {
  const contextValues = {
    services: __services,
    banks: banks,
    bank_logos: banks.reduce((obj, cur) => {
      return { ...obj, [cur.bank_code]: cur }
    }, {})
  }
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  )
}
