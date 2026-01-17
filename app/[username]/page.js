import React from 'react'

const Username = async ({params}) => {
  const {username} = await params;
  console.log("params", params);
  return (
    <>
     
    <div className="cover w-full relative">
      <img className='object-cover w-full h-[300]' src="/cover.gif" alt="Cover Image" />
      <div className='absolute -bottom-10 right-[45.9%] border-white border-2 rounded-full'>
       <img className='rounded-full' width={100} height={100} src='/cat.webp'></img>
      </div>
    </div>
    <div className='info flex justify-center flex-col gap-1 items-center  my-11'>
     <div className='font-bold text-lg'>
      @{username}
      </div>
   
    <div className='text-slate-400'>Creating Animated art for Vtt's</div>
    <div className='text-slate-400'>9718 members . 82 posts$15,450/release</div>
  <div className='payment mt-9 flex gap-2 w-[80%]'>
    <div className='Supporters w-1/2 bg-slate-900 text-white rounded-lg p-5'>
      { /*show the list of Supporters*/ }
      <h2 className='font-bold text-lg my-3'>Supporters</h2>
      <ul className='mx-4'>
        <li className="my-2 flex gap-2 items-center">
           <img className='rounded-full' width={27} src='/wired-flat-21-avatar-hover-jumping.gif'></img><span> Aditya donate<span className='font-bold'>$30</span>with a message "I support you lots of love ❤️"</span></li>
        <li className="my-2 flex gap-2 items-center">
           <img className='rounded-full' width={27} src='/wired-flat-21-avatar-hover-jumping.gif'></img><span> Aditya donate<span className='font-bold'>$30</span>with a message "I support you lots of love ❤️"</span></li>
        <li className="my-2 flex gap-2 items-center">
           <img className='rounded-full' width={27} src='/wired-flat-21-avatar-hover-jumping.gif'></img><span> Aditya donate<span className='font-bold'>$30</span>with a message "I support you lots of love ❤️"</span></li>
        <li className="my-2 flex gap-2 items-center"> 
          <img className='rounded-full' width={27} src='/wired-flat-21-avatar-hover-jumping.gif'></img><span> Aditya donate<span className='font-bold'>$30</span>with a message "I support you lots of love ❤️"</span></li>
        
      </ul>
    </div>
    <div className='Makepayments w-1/2 bg-slate-900 text-white rounded-lg p-5'>
    <h2 className='text-2xl font-bold my-4'>Make Payment</h2>
    <div className='flex gap-2 flex-col'>
      <input type="Text" placeholder='Enter Name' className='font-bold bg-slate-800 p-2 rounded-lg text-white w-full'/>
      <input type="Text" placeholder='Enter Message' className='font-bold bg-slate-800 p-2 rounded-lg text-white w-full'/>
      <input type="number" placeholder='Enter Amount' className='font-bold bg-slate-800 p-2 rounded-lg text-white w-full'/>
      <button className='bg-blue-600 p-2 rounded-lg px-4 font-bold'>Pay</button>
    </div>
    <div className='flex gap-2 mt-4 flex-wrap'>
    <button className='bg-slate-800 p-2 rounded-lg'>Pay $10</button>
    <button className='bg-slate-800 p-2 rounded-lg'>Pay $50</button>
    <button className='bg-slate-800 p-2 rounded-lg'>Pay $100</button>
    <button className='bg-slate-800 p-2 rounded-lg'>Pay $500</button>
    <button className='bg-slate-800 p-2 rounded-lg'>Pay $1000</button>
    <button className='bg-slate-800 p-2 rounded-lg'>Pay $10,000</button>
    </div>
    </div>
  </div>
    </div>
    </>
  )
}

export default Username
