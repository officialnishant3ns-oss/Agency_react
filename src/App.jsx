import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

function App() {
  //for local storage there we use 
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')

    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme]
  )



  return (
    <>
      <div className='dark:bg-black relative '>
        <Navbar theme={theme} setTheme={setTheme} />
      </div>
      <div className=''>
        <Hero />
      </div>
      <h1 className='text-green-400  text-3xl text-center  '>hello Agency.Ai</h1>
    </>
  )
}

export default App
