import React, { useState, createContext } from 'react';
import useMobile from '../hooks/useIsMobile';
import useToggle from '../dashboard/hooks/useToggle';



export const MobileContext = createContext();


function MobileViewContext({ children }) {
    const { isMobile } = useMobile();
    const { open, handleToggle, setOpen } = useToggle();
    
    return (
        <MobileContext.Provider value={{ isMobile, open, handleToggle, setOpen}}>
            {children}
        </MobileContext.Provider>
    )
}

export default MobileViewContext;