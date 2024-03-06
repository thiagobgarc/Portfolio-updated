import React from 'react'
import { motion } from 'framer-motion'

const SubText = ({ subText}) => {
  return (
    <motion.h3 className='text-5xl text-[#f8f8f2] text-zinc-300' initial={{ x: -30, opacity: 0 }} animate={{ x: 55, opacity: 1 }} transition={{ duration: 0.7 }}>
        {subText}
    </motion.h3>
  )
}

export default SubText