import React from 'react'
import { motion } from 'framer-motion'

const SubText = ({ subText}) => {
  return (
    <motion.h3 className='text-5xl text-[#f8f8f2] text-zinc-300 text-center' initial={{ x: -50, opacity: 0 }} animate={{ x: 15, opacity: 1 }} transition={{ duration: 1.2 }}>
        {subText}
    </motion.h3>
  )
}

export default SubText