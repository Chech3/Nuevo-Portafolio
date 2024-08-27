import React from 'react'
// import ExperienceListItemRight from './ExperienceListItemRight'

const ExperienceListItem = () => {
    return (
        <div className='dark:text-white flex justify-between sm:h-full md:48 lg:h-48'>
            {/*left*/}
            <div className='w-1/3'>
                {/* Job Title */}
                <h3 className='bg-white dark:bg-slate-800 text-black dark:text-white  font-semibold p-3 rounded-b-lg rounded-s-lg duration-300 w-32 sm:w-full md:w-full lg:w-full  '>Programmer </h3>
                {/* job desc */}
                <p className='italic p-3 text-sm duration-300'>
                    In my work as a programmer at VIT, I work in different branches of programming. From web development to python scripting
                </p>

                {/* job date */}
                <h4 className='p-3 text-dark dark:text-white text-sm font-semibold duration-300'>2023 august - present</h4>

                {/* job company */}
                <h5 className='p-3 bg-white dark:bg-slate-800 text-black dark:text-white text-sm font-semibold w-fit rounded-b-lg rounded-s-lg duration-300'>Venezolana de Industria Tecnológica</h5>
            </div>
            {/* center */}
            <div className='w-1/6 flex justify-center'>
                {/* Line */}
                <div className="w-1 h-80 dark:bg-gray-200 bg-gray-600 rounded relative duration-300">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 "></div>
                </div>
            </div>
            {/* right */}
            <div className="w-1/3 "> 
                {/* JOB TITLE */}
                <h3 className="bg-white dark:bg-slate-800 text-black dark:text-white p-3 font-semibold rounded-b-lg rounded-s-lg duration-300 ">
                    Developer
                </h3>
                {/* JOB DESC */}
                <p className="p-3 text-sm italic text-dark dark:text-white duration-300">
                I hope to be able to fill this text with your company's information 🫢
                </p>
                {/* JOB DATE */}
                <h4 className="p-3 text-dark dark:text-white text-sm font-semibold duration-300">
                    2024 - XXXX
                </h4>
                {/* JOB COMPANY */}
                <h5 className="p-3 rounded bg-white dark:bg-slate-800 text-black dark:text-white text-sm font-semibold w-fit duration-300">
                    Next Company
                </h5>
            </div>
            

        </div>

    )
}

export default ExperienceListItem