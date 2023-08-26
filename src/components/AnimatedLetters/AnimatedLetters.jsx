import React, { useState } from 'react'
import './index.css'
import 'animate.css'
import AnimatedLetter from './AnimatedLetter'


const AnimatedLetters = ({ animatedText, animatedTextClass, startingIndex }) => {

    return <p className={`${animatedTextClass}`}>
        {
            animatedText.map((letter, i) => {
                return <AnimatedLetter
                    key={i}
                    index={i}
                    letter={letter}
                    startingIndex={startingIndex}
                />
            })

        }
    </p>

}

export default AnimatedLetters