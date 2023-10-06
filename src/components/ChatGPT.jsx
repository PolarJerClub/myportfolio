import React, {useState} from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ChatGPT = ({ isVisible, onClose, children }) => {
    if ( !isVisible) return null;

    const handleClose =(e) => {
        if( e.target.id === "wrapper") onClose();
    }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center z-1000 h-[100vh] w-[100vw] overflow-y-auto' id="wrapper"
        onClick={handleClose}>
        <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
        <div className='bg-white p-2 rounded'>{children}</div>
    </div>
  )
}

export default ChatGPT