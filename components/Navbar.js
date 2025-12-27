import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex bg-black text-white justify-between px-4 h-13 items-center'>
        <div className='logo font-bold flex justify-between items-center'> 
          <img src='/source.gif' width={50} alt=''/>
          <span>Get me a chai</span>
          </div>

     {/*<ul className='flex justify-between gap-4 '>
        <li>Home</li>
        <li>About</li>
        <li>projects</li>
        <li>Sign Up</li>
        <li>Login</li>
     </ul>*/}
     <div>
      <Link href={"/login"}>
      <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-4 py-2.5 text-center leading-5'>Login</button>
      </Link>
     </div>
    </nav>
  )
}

export default Navbar
