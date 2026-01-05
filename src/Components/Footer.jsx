import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              YourBrand
            </h2>
            <p className="mt-3 text-sm">
              Building modern, scalable web applications with clean UI and
              reliable backend systems.
            </p>
          </div>

          
          <div>
            <h3 className="text-2xl font-bold-xl font-medium text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">About</a></li>
              <li><a href="#" className="hover:text-blue-600">Projects</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Connect
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Email: <span className="font-medium">example@email.com</span></li>
              <li>Phone: <span className="font-medium">+91-XXXXXXXXXX</span></li>
              <li className="flex gap-4 mt-3">
                <a href="#" className="hover:text-blue-600">GitHub</a>
                <a href="#" className="hover:text-blue-600">LinkedIn</a>
                <a href="#" className="hover:text-blue-600">Twitter</a>
              </li>
            </ul>
          </div>

        </div>

   
        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer
