const ExperienceListItem = ({ bioRef }) => {
    const scrollToStart = () => {
        bioRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='relative dark:text-white flex flex-col gap-12 pb-12'>
            {/* Center continuous line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-3 bottom-12 w-1 dark:bg-gray-200 bg-gray-600 rounded duration-300" />

            {/* ROW 1: ITEM 1 (LEFT) */}
            <div className='flex justify-between items-start relative z-10'>
                {/* Left */}
                <div className='w-[42%] sm:w-[40%]'>
                    <h3 className='bg-white dark:bg-slate-800 text-black dark:text-white font-semibold p-3 rounded-b-lg rounded-s-lg duration-300'>
                        Programmer
                    </h3>
                    <p className='italic p-3 text-sm duration-300'>
                        In my work as a programmer at VIT, I work in different branches of programming. From web development to python scripting
                    </p>
                    <h4 className='p-3 text-dark dark:text-white text-sm font-semibold duration-300'>
                        2022 august - present
                    </h4>
                    <h5 className='p-3 bg-white dark:bg-slate-800 text-black dark:text-white text-sm font-semibold w-fit rounded-b-lg rounded-s-lg duration-300'>
                        Venezolana de Industria Tecnológica
                    </h5>
                </div>
                {/* Center Circle */}
                <div className='w-[5%] flex justify-center pt-3'>
                    <div className="w-5 h-5 rounded-full ring-4 ring-red-400 bg-white" />
                </div>
                {/* Right */}
                <div className="w-[42%] sm:w-[40%]" />
            </div>

            {/* ROW 2: ITEM 2 (RIGHT) */}
            <div className='flex justify-between items-start relative z-10'>
                {/* Left */}
                <div className='w-[42%] sm:w-[40%]' />
                {/* Center Circle */}
                <div className='w-[5%] flex justify-center pt-3'>
                    <div className="w-5 h-5 rounded-full ring-4 ring-red-400 bg-white" />
                </div>
                {/* Right */}
                <div className="w-[42%] sm:w-[40%]">
                    <h3 className="bg-white dark:bg-slate-800 text-black dark:text-white p-3 font-semibold rounded-b-lg rounded-s-lg duration-300">
                        Frontend Developer
                    </h3>
                    <p className="p-3 text-sm italic text-dark dark:text-white duration-300">
                        I was in a work simulation, where we worked as a whole team. We developed an application to be able to have online medical consultations.
                    </p>
                    <h4 className="p-3 text-dark dark:text-white text-sm font-semibold duration-300">
                        2024 november - december
                    </h4>
                    <h5 className="p-3 rounded bg-white dark:bg-slate-800 text-black dark:text-white text-sm font-semibold w-fit duration-300">
                        No Country
                    </h5>
                </div>
            </div>

            {/* ROW 3: ITEM 3 (LEFT) */}
            <div className='flex justify-between items-start relative z-10'>
                {/* Left */}
                <div className='w-[42%] sm:w-[40%]'>
                    <h3 className='bg-white dark:bg-slate-800 text-black dark:text-white font-semibold p-3 rounded-b-lg rounded-s-lg duration-300'>
                        IT and logistics support specialist
                    </h3>
                    <p className='italic p-3 text-sm duration-300'>
                        My responsibilities include data management, the coordination of processes in the corporate system, and the development and implementation of new modules and customizations.
                    </p>
                    <h4 className="p-3 text-dark dark:text-white text-sm font-semibold duration-300">
                        2025 october - december
                    </h4>
                    <h5 className='p-3 bg-white dark:bg-slate-800 text-black dark:text-white text-sm font-semibold w-fit rounded-b-lg rounded-s-lg duration-300'>
                        BAYCOR
                    </h5>
                </div>
                {/* Center Circle */}
                <div className='w-[5%] flex justify-center pt-3'>
                    <div className="w-5 h-5 rounded-full ring-4 ring-red-400 bg-white" />
                </div>
                {/* Right with Scroll to Top SVG */}
                <div className="w-[42%] sm:w-[40%] flex justify-end items-end pt-12">
                    <div className='rotate-180'>
                        <svg
                            onClick={scrollToStart}
                            className='motion-safe:animate-bounce dark:invert duration-300 cursor-pointer'
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
                            />
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1" />
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceListItem;