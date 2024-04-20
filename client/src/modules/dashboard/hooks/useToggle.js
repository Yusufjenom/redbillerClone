import React, {useState, useRef, useEffect} from 'react';

function useToggle() {
    const [open, setOpen] = useState(false);
    // const bodyRef = useRef();

    const handleToggle = () => {
        setOpen(!open)
    };
   


  return {open, handleToggle, setOpen}
}

export default useToggle;