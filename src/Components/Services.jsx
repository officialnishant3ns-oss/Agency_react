import React from 'react'
import assets from '../assets/assets'
import Title from './Title'


const Services = () => {
  const services = [
    {
      title: "Web Development", 
      description: "Custom websites and web applications built with modern technologies.",
      icon: assets.ads_icon
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed for optimal user experience.",
      icon: assets.marketing_icon
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android.",
      icon: assets.content_icon
    } ,
    {
      title: "IoT Development", 
      description: "Custom websites and web applications built with modern technologies.",  
      icon: assets.social_icon
    }
  ]

  return (
    <div id='services' className='relative'>
        
       <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />

    <Title 
      title="Our Services"
      description="We offer a wide range of services to help businesses thrive in the digital world."
    />
    </div>
  )
}

export default Services
