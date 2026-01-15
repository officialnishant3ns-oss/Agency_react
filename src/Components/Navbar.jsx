import React, { useState, useEffect } from 'react'
import assets from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'



const Navbar = ({ theme, setTheme }) => {
    // const [theme, setTheme] = useState('light')    //isko as a props lana hoga from main file app.jsx
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className='flex justify-evenly items-center p-4 fixed top-0 left-0 w-full z-50 bg-white dark:bg-black shadow-md '>
            <div>
                <img
                    className='max-sm:w-38 mr-42'
                    src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="Logo" />

            </div>

            <div>

                <ul className={`flex gap-6 text-2xl font-extrabold  max-sm:flex-col  max-sm:bg-purple-600 max-sm:h-full max-sm:min-h-screen max-sm:w-60 max-sm:fixed top-0 border-0 right-0 max-sm:pt-20 max-sm:pl-5  max-sm:transition-transform ${sidebarOpen ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}>

                    <img
                        onClick={() => setSidebarOpen(false)}
                        className="sm:hidden w-6 absolute right-5 top-5 cursor-pointer"
                        src={assets.close_icon} alt="" />

                    <li>
                        <NavLink
                            to="/"
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) => `hover:underline  ${isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-600 dark:text-white'}`}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/services"
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) => `hover:underline  ${isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-600 dark:text-white'}`}                        >
                            Service
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/ourWork"
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) => `hover:underline  ${isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-600 dark:text-white'}`}                        >
                            Our Work
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/testomonial"
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) => `hover:underline  ${isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-600 dark:text-white'}`}                        >
                            Testomonial
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div
                className='flex gap-10 items-center cursor-pointer '
            >
                <div className='sm:hidden cursor-pointer flex justify-center items-center h-9 w-9 rounded-full border-2 border-gray-400'>
                    <img
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className='w-6 h-6  sm:hidden cursor-pointer'
                        src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
                        alt="" />
                </div>
                <div>
                    <img
                        onClick={() => setSidebarOpen(true)}
                        className="w-8 sm:hidden cursor-pointer "
                        src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
                        alt="" />
                </div>
                <div
                    className=' max-sm:hidden cursor-pointer flex justify-center items-center h-12 w-12 rounded-full border-2 border-gray-400'
                >
                    <img
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className='w-6 h-6 '
                        src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
                        alt="" />
                </div>

                <Link
                    to='/connect'
                    className=" max-sm:hidden inline-flex items-center justify-center text-2xl bg-blue-700 text-white   border-3 border-gray-900 rounded-3xl px-5 py-3"
                >
                    Connect  <img src={assets.arrow_icon} width={15} alt="" />
                </Link>
            </div>
        </div >
    )
}

export default Navbar
