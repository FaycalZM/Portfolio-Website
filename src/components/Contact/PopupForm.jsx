import React from 'react'

const PopupForm = ({ popupAnimation, messageTXT }) => {
    return (
        <div
            style={popupAnimation}
            className='popup fixed z-10 right-[5%] bottom-6 bg-primary-yellow text-very-dark-blue font-medium py-2 px-4 capitalize'
        >
            {messageTXT}
        </div>
    )
}

export default PopupForm