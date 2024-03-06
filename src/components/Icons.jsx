import React from 'react'
import { motion } from 'framer-motion'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import resume from '../assets/resume.svg'
import myResume from '../assets/myResume.pdf'

const iconVariants = [
  { icon: github, link: 'https://github.com/thiagobgarc' },
  { icon: linkedin, link: 'https://www.linkedin.com/in/thiago-bueno-garcia-34604a25a/' },
  { icon: resume, link: `${myResume}` } // Replace '/path/to/resume' with the actual path to your resume
];

const Icons = () => {
  return (
    <motion.div className='flex items-center justify-center mt-[27rem] p-0 gap-4' initial={{ y: 0, opacity: 0 }} animate={{ y:15, opacity: 1 }} transition={{ duration: 0.9 }}>
      {iconVariants.map((icon, index) => (
        <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer" className={`icon-image hover:scale-150 duration-300 w-[10%] mt-[-7rem] lg:mt-[-2rem] sm:mt-[-2rem] lg:top-[-2rem] sm:top-[-2rem] lg:w-[3.5%] sm:w-[7%] mb-[2rem] lg:mb-0 sm:mb-0 download=${true}`}>
          <img src={icon.icon} alt={`Icon ${index}`} />
        </a>
      ))}
    </motion.div>
  )
}

export default Icons