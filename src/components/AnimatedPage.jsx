import React from 'react'
import { motion } from 'framer-motion'

const animations = {
    initial: {
        opacity: 0,
        x: -100
    },
    animate: {
        opacity: 1,
        x: 0
    },
    exit: {
        opacity: 0,
        x: 100
    },
}
const AnimatedPage = ({ children }) => {

    return (
        <motion.div
            className='w-[90%] pb-2'
            variants={animations}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{
                type: "spring",
                delay: 0.25,
                stiffness: 200,
                bounce: 0.25
            }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage