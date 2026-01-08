"use client"
import React,{useState} from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  /*if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
      </>
  }*/
  return (
    <nav className='flex bg-black text-white justify-between px-4 h-13 items-center'>
      <Link href="/" className='logo font-bold flex justify-between items-center'>
        <img src='/source.gif' width={50} alt='' />
        <span>Get me Link chai</span>
      </Link>

      {/*<ul classNameName='flex justify-between gap-4 '>
        <li>Home</li>
        <li>About</li>
        <li>projects</li>
        <li>Sign Up</li>
        <li>Login</li>
     </ul>*/}
      <div className='relative'>
        {session && <><button onClick={()=>setShowdropdown(!showdropdown)} onBlur={()=> {setShowdropdown(false)}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="inline-flex bg-blue-700 hover:bg-blue-800 items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Welcome {session.user.email}
  <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/></svg>
</button>


<div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-[170px] bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-34`}>
    <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
      <li>
        <Link href="/dashboard" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</Link>
      </li>
      <li>
        <Link href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Your Page</Link>
      </li>
      
      <li>
        <Link onClick={()=> signOut()} href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</Link>
      </li>
    </ul>
</div>
</>
}
        
        {session && <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-4 py-2.5 mx-3 text-center leading-5' onClick={() => { signOut() }}>Logout</button>
        }
        {!session && <Link href={"/login"}>
          <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-4 py-2.5 text-center leading-5'>Login</button>
        </Link>}
      </div>
    </nav>
  )
}

export default Navbar
