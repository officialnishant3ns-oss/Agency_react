import React from 'react'

const Title = ({ title, description }) => {
  return (
    <div className="text-center px-6 mb-14  dark:bg-gray-900">
      <h2 className="text-6xl max-sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
        {title}
      </h2>

      <p className=" text-2xl max-sm:text-sm w-99 sm-max:font-bold text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  )
}

export default Title
