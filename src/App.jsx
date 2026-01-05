import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Trustedby from './Components/Trustedby'
import Footer from './Components/Footer'

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
        <Trustedby />
      </div>
         <div><Footer /></div>
    </>
  )
}

export default App
