import React,{useRef} from 'react';

export const Loader = () => {
    const loader = useRef(null)
    window.onload = () => {
        setTimeout(() => {
            document.body.classList.remove("hidden")
            loader.current.classList.remove("_open")
        }, [1200])
    }

    return (
        <div className="loader _open" ref={loader}>
               <span>A</span>
               <span>K</span>
               <span>V</span>
        </div>
    );
};

