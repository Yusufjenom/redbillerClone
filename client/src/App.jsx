import { useState, useContext } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import MobileViewContext from './modules/contexts/mobileViewContext';


function App() {
  
  return (
    <>
      <MobileViewContext>
        <RouterProvider router={router} />
      </MobileViewContext>
    </>
  )
};

export default App;
