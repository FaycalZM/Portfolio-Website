import React from 'react'
import Project from './Project'

const GridContainer = ({ list }) => {
    return (
        <div className='grid grid-cols-3 gap-x-8 gap-y-4 justify-center content-center mt-4'>
            {
                list.map((item, index) => {
                    return <Project key={index} index={index} project={item} />
                })
            }
        </div>
    )
}

export default GridContainer