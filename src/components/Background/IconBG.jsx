import React from 'react'
import { motion } from 'framer-motion'

function IconBG() {
  return (
    <motion.img initial={{ scale: 1 }}
    animate={{ y:[0, 80, 0]}}
    transition={{ duration: 2, times: [0, 0.2, 1] }}
     src="https://res.cloudinary.com/daknbj7xw/image/upload/v1661705979/BestCastFM/13477866_spy0iq.png" alt="" />
  )
}

export default IconBG