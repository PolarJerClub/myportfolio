import React from 'react';

const Modal = ({ isVisible, onClose, children }) => {
    if ( !isVisible) return null;

    const handleClose =(e) => {
        if( e.target.id === "wrapper") onClose();
    }

    return (
    
        <div className='absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center z-50 h-[70vh] overflow-y-auto' id="wrapper"
        onClick={handleClose}>
            <div className='w-[100%] flex flex-col'>
                <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
                <div className='bg-white p-2 rounded'>{children}</div>
            </div>
        </div>
    
    )
}

export default Modal;