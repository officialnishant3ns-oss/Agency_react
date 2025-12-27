import React from 'react'
import assets, { company_logos } from '../assets/assets'

function Hero() {
    return (
        <div className="       bg-[radial-gradient(circle_at_65%_50%,rgba(59,130,246,0.35),transparent_60%)]
                dark:bg-[radial-gradient(circle_at_65%_50%,rgba(59,130,246,0.25),#020617_70%)]   dark:bg-gray-900 h-[1600px] pt-45 flex flex-col items-center pl-28 pr-28 max-sm:pt-20 max-sm:pl-10 max-sm:pr-10 ">

            <div className='flex items-center m-10 gap-3 h-12 w-95 max-sm:h-11 max-sm:w-66 border-2 border-gray-200 rounded-4xl justify-center dark:text-white '>
                <img className='w-25 max-sm:w-20' src={assets.group_profile} alt="groupPhoto" />
                <p className='text-xl font-bold max-sm:text-xs max-sm:font-medium '>Trusted By 10K+ People</p>
            </div>
            <h1 className="text-gray-600 mt-8 text-8xl font-extrabold text-center dark:text-white max-sm:text-4xl">
                Turning imagination into <span className="text-blue-600">digital</span> impact.
            </h1>
            <p className="text-gray-500 pt-10 text-xl font-medium text-center max-w-3xl mx-auto dark:text-white max-sm:pt-6 max-sm:text-xs max-sm:pl-9 max-sm:pr-9">
                Creating meaningful connections and turning big ideas into interactive digital experiences.
            </p>
            <div className='pt-15 max-sm:pt-10'>
                <img className="w-full max-w-7xl" src={assets.hero_img} alt="" />
            </div>
            <h2 className='text-3xl font-extrabold dark:text-white mt-15 max-sm:text-xl'>Trusted By Leading Companies</h2>
            
            <div className='flex justify-center items-center mt-10 gap-x-15 max-sm:flex-wrap max-sm:gap-y-7'>
                {company_logos.map((logo, index) => (
                    <img
                        key={index} src={logo}
                        alt="" className="w-25 h-8 max-sm:h-6  max-sm:w-18 gap-y-20 "
                    />
                ))}
            </div>

        </div>
    )
}

export default Hero
