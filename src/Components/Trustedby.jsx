import React from 'react'
import { company_logos } from '../assets/assets'
const Trustedby = () => {
    return (
        <div className='     bg-[radial-gradient(circle_at_65%_50%,rgba(59,130,246,0.35),transparent_60%)]
                dark:bg-[radial-gradient(circle_at_65%_50%,rgba(59,130,246,0.25),#020617_70%)] pt-17 dark:bg-gray-900 h-[220px]'>
            <h2 className='text-3xl text-center   font-extrabold  dark:text-white max-sm:text-xl'>Trusted By Leading Companies</h2>

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

export default Trustedby
