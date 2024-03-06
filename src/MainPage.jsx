import React from 'react'
import Text from './components/Text'
import SubText from './components/SubText'
import Framework from './Framework'
import { motion } from 'framer-motion'
import Icons from './components/Icons'

const MainPage = () => {
  const [language, setLanguage] = React.useState('en')

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en')
  }

  return ( 
    <>
    <motion.div className='flex flex-col items-center justify-end absolute top-3 right-10 p-1 rounded-lg px-4 pb-2 shadow-br shadow-[#f8f8f2] bg-gradient-to-br from-gray-800 to-transparent' initial={{ x: 30, opacity: 0 }} animate={{y: 15, x: -15, opacity: 1 }} transition={{ duration: 1 }}>
    <button onClick={toggleLanguage} className='text-2xl text-[#f8f8f2] text-zinc-300 hover:text-blue-300 hover:scale-125 text-center'>
          {language === 'en' ? (
            <span role="img" aria-label="American Flag">🇺🇸</span>
          ) : (
            <span role="img" aria-label="Brazilian Flag">🇧🇷</span>
          )}
        </button>
    </motion.div>
    
      <motion.div className='flex flex-col items-center justify-center' initial={{ y: 0, opacity: 0 }} animate={{ y:25, opacity: 1 }} transition={{ duration: 0.8 }}>
        <img src="/profic-removebg-preview.png" className='lg:w-[15%] rounded-full bg-gradient-to-r from-transparent to-transparent backdrop-filter backdrop-opacity-50 absolute w-[35%] top-[12rem] lg:top-[3rem] sm:top-[12rem] sm:w-[20%] hover:scale-125 hover:shadow hover:shadow-gray-500 duration-300' />
      </motion.div>
      <Icons />
      <div className='flex flex-col text-white items-center justify-center mt-[1.5rem]'>
        {language === 'en' ? (
          <>
            <Text text='Hi, my name is Thiago.' />
            <br/>
            <br/>
            <SubText subText='I am a Full Stack Developer.' />
          </>
        ) : (
          <>
            <Text text='Olá, meu nome é Thiago.' />
            <br/>
            <br/>
            <SubText subText='Eu sou um Desenvolvedor Full Stack.' />
          </>
        )}
        <br/>
        <br/>
        <Framework />     
      </div>
    </>
  );
}

export default MainPage