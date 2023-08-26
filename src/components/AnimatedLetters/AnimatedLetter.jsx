import React, { useState } from 'react'

const AnimatedLetter = ({ letter, startingIndex, index }) => {
    const [letterClass, setLetterClass] = useState('animated-letter');
    return (
        <span
            className={letterClass}
            onAnimationEnd={(e) => {
                setLetterClass('animated-letter-hover');
                e.currentTarget.classList.remove('animateHover'); // to keep the 'rubberBand' animation even after unhovering the letters 
            }}
            onMouseEnter={(e) => {
                e.currentTarget.classList.add('animateHover');
            }}
            style={{
                animationDelay: letterClass == 'animated-letter' ? `${1 + (startingIndex + index) / 10}s` : '0.1s',
            }}
        >{letter}</span>
    )
}

export default AnimatedLetter