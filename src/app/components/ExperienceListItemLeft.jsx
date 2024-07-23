import React from 'react'
import ExperienceListItemRight from './ExperienceListItemRight'

const ExperienceListItem = () => {
    return (
        <div className='dark:text-white flex justify-between h-48'>
            {/*left*/}
            <div className='w-1/3'>
                {/* Job Title */}
                <div className='bg-white dark:bg-slate-800 text-black dark:text-white  font-semibold p-3 rounded-b-lg rounded-s-lg '>Lorem ipsum dolor sit amet.</div>
                {/* job desc */}
                <div className='italic p-3 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime perspiciatis dolores sunt eos velit debitis.</div>

                {/* job date */}
                <div className='p-3 text-dark dark:text-white text-sm font-semibold'>2023 august - present</div>

                {/* job company */}
                <div className='p-3 bg-white dark:bg-slate-800 text-black dark:text-white text-sm font-semibold w-fit rounded-b-lg rounded-s-lg '>Job Company</div>
            </div>
            {/* center */}
            <div className='w-1/6 flex justify-center'>
                {/* Line */}
                <div className="w-1 h-full dark:bg-gray-200 bg-gray-600 rounded relative">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
            </div>
            
            {/* right */}

            <ExperienceListItemRight />



        </div>

    )
}

export default ExperienceListItem