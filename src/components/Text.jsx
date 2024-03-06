import React from 'react'
import { motion } from 'framer-motion'

const text = ({ text }) => {
  return (
        <motion.h3 className='text-7xl text-[#f8f8f2] text-zinc-300' initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          {text}
        </motion.h3>
  )
}

export default text