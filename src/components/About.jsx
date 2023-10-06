import React, {useState} from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

import Modal from './Modal';
import ChatGPT from './ChatGPT';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>

        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  const [showModal, setShowModal] = useState(false)
  const [showChat, setShowChat] = useState(false)

  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a full-stack software developer, and I absolutely love it! From crafting stunning user interfaces
         that captivate, to building robust back-end systems that handle data seamlessly, I do it all.
          I'm driven by constant learning and innovation, staying ahead of the curve in emerging technologies. 
          Whether it's coding elegant algorithms or perfecting user experiences, I pour my dedication into every project. 
          Expect nothing less than sheer technological excellence and a touch of magic in everything I create!
      </motion.p><br />
      <div>
        <button onClick={() => setShowModal(true)}
            variants={fadeIn("", "", 0.1, 1)}
              className='button-85 role="button"'>
          <h2 className={styles.sectionHeadText}>Check out my certifications!</h2>
        </button>
      </div>
      <button onClick={() => setShowChat(true)}
            variants={fadeIn("", "", 0.1, 1)}
              className='button-86' role="button" id='wrapper'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
            </svg>
        </button>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <div id='img-wrapper'>
            <div><img src="src\assets\certifications\c3.png" alt="" /></div>
            <div><img src="src\assets\certifications\c9.png" alt="" /></div>
            <div><img src="src\assets\certifications\c6.png" alt="" /></div>
            <div><img src="src\assets\certifications\c4.png" alt="" /></div>
            <div><img src="src\assets\certifications\c5.png" alt="" /></div>
            <div><img src="src\assets\certifications\c8.png" alt="" /></div>
            <div><img src="src\assets\certifications\c7.png" alt="" /></div>
            <div><img src="src\assets\certifications\c2.png" alt="" /></div>
            <div><img src="src\assets\certifications\c1.png" alt="" /></div>
            <div><img src="src\assets\certifications\c10.png" alt="" /></div>
          </div>
      </Modal>
      <ChatGPT isVisible={showChat} onClose={() => setShowChat(false)}>
        <div id=''>
          
        </div>
      </ChatGPT>
      

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
// this is breaking it