import React from 'react'
import Text from './components/Text'
import SubText from './components/SubText'
import Framework from './Framework'
import { motion } from 'framer-motion'

const MainPage = () => {
  const [language, setLanguage] = React.useState('en')

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en')
  }

  return ( 
    <>
      <motion.div className='flex flex-col items-center justify-center' initial={{ y: 0, opacity: 0 }} animate={{ y:25, opacity: 1 }} transition={{ duration: 0.5 }}>
        <img src="/profic-removebg-preview.png" className='w-[20%] rounded-full bg-gradient-to-r from-transparent to-transparent backdrop-filter backdrop-opacity-50 absolute top-[5rem]' />
      </motion.div>
      <div className='flex flex-col text-white absolute top-[33rem] ml-20 '>
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
        <Framework />
        <button onClick={toggleLanguage} className='absolute bottom-[40rem] left-[110rem] text-2xl'>
          {language === 'en' ? (
            <span role="img" aria-label="American Flag">🇺🇸</span>
          ) : (
            <span role="img" aria-label="Brazilian Flag">🇧🇷</span>
          )}
        </button>
      </div>
    </>
  );
}

export default MainPage