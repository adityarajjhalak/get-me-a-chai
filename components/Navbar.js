import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex bg-black text-white justify-between px-4 h-13 items-center'>
        <div className='logo font-bold'>Get me a chai</div>
     <ul className='flex justify-between gap-4 '>
        <li>Home</li>
        <li>About</li>
        <li>projects</li>
        <li>Sign Up</li>
        <li>Login</li>
     </ul>
    </nav>
  )
}

export default Navbar
