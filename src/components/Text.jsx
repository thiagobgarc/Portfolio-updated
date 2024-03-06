import React from 'react'
import { motion } from 'framer-motion'

const text = ({ text }) => {
  return (
        <motion.h3 className='text-7xl text-[#f8f8f2] text-zinc-300 text-center' initial={{ x: -40, opacity: 0 }} animate={{ x: 10, opacity: 1 }} transition={{ duration: 1 }}>
          {text}
        </motion.h3>
  )
}

export default text