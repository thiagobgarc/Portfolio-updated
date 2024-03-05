import React from 'react'
import Text from './components/Text'
import SubText from './components/SubText'

const MainPage = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center '>
      <img src="/profic-removebg-preview.png" className='w-[20%] rounded-full bg-gradient-to-r from-transparent to-transparent backdrop-filter backdrop-opacity-50 absolute top-[5rem]' />
    </div>
    <div className='flex flex-col text-white absolute top-1/3 ml-20 '>
        <Text text='Hi, I am Thiago.' />
        <br/>
        <br/>
        <SubText subText='I am a Full Stack Developer.' />
    </div>
    
    </>
  )
}

export default MainPage