import React from 'react'
import Project from './Project'
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'


const GridContainer = ({ list }) => {


    return (
        <div
            className='
            w-full px-2 tablet:px-0 laptop:p-[4px]
            laptop:grid laptop:grid-cols-3 laptop:gap-x-8 laptop:gap-y-4 laptop:justify-center laptop:content-center mt-4
            tablet:flex tablet:overflow-x-scroll tablet:snap-x tablet:snap-mandatory
        '>
            {
                list.map((item, index) => {
                    return <Project key={index} index={index} project={item} />
                })
            }

            <MdOutlineKeyboardDoubleArrowLeft className='arrow-icon absolute text-4xl text-primary-yellow top-1/2 -translate-y-1/2 left-1 laptop:hidden' />
            <MdOutlineKeyboardDoubleArrowRight className='arrow-icon absolute text-4xl text-primary-yellow top-1/2 -translate-y-1/2 right-1 laptop:hidden' />

        </div>
    )
}

export default GridContainer