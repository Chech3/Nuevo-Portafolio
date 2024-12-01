import React from 'react'
// import ExperienceListItemRight from './ExperienceListItemRight'

const ExperienceListItem = ({bioRef}) => {
    const scrollToStart = () => {
        bioRef.current.scrollIntoView({ behavior: 'smooth' })
        

        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
        }, 1000);
    };
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
                <h4 className='p-3 text-dark dark:text-white text-sm font-semibold duration-300'>2023 march - present</h4>

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
                    Fronted Developer
                </h3>
                {/* JOB DESC */}
                <p className="p-3 text-sm italic text-dark dark:text-white duration-300">
                I was in a work simulation, where we worked as a whole team. We developed an application to be able to have online medical consultations.
                </p>
                {/* JOB DATE */}
                <h4 className="p-3 text-dark dark:text-white text-sm font-semibold duration-300">
                    2024  november - december
                </h4>
                {/* JOB COMPANY */}
                <h5 className="p-3 rounded bg-white dark:bg-slate-800 text-black dark:text-white text-sm font-semibold w-fit duration-300">
                    No Country
                </h5>

                <div className=' mt-20 rotate-180'>
                    {/* BIOGRAPHY SCROLL SVG */}
                    <svg
                        onClick={scrollToStart}
                        className='motion-safe:animate-bounce dark:invert duration-300'
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                    >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                    </svg>
                </div>
            </div>


        </div>

    )
}

export default ExperienceListItem