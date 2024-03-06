import React from 'react'
import figma from './assets/figma.svg'
import reactLogo from './assets/react.svg'
import astro from './assets/astro.svg'
import docker from './assets/docker.svg'
import flutter from './assets/flutter.svg'
import git from './assets/git.svg'
import gitLab from './assets/gitlab.svg'
import go from './assets/go.svg'
import linux from './assets/linux.svg'
import python from './assets/python.svg'
import vite from './assets/vite.svg'
import './App.css'
import { motion } from 'framer-motion'


const frameWorks = [
    figma,
    reactLogo,
    astro,
    docker,
    flutter,
    git,
    gitLab,
    go,
    linux,
    python,
    vite
]

const Framework = () => {
  return (
    <motion.div className='flex flex-wrap gap-2 items-center justify-center w-[90%] lg:w-[30%] sm:w-[70%] mb-[5rem] lg:mb-[5rem] sm:mb-[5rem]' initial={{ x: -70, opacity: 0 }} animate={{ x: 5, opacity: 1 }} transition={{ duration: 1.5 }}>
      {frameWorks.map((framework, index) => (
        <img key={index} src={framework} alt={`Framework ${index}`} 
            className={`framework-image hover:scale-150 duration-300`}
        />
      ))}
    </motion.div>
  )
}

export default Framework