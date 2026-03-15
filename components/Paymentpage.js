"use client"
import React, {use, useEffect, useState} from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react';
import { initiate } from '../actions/useractions.js';
import { fetchuser, fetchpayments} from '../actions/useractions.js';
const Paymentpage = ({ username }) => {
     const [paymentform, setPaymentsform] = useState({})
     const [currentUser, setcurrentUser] = useState({});
     const [payments, setpayments] = useState([]);
     useEffect(() => {
        getData();
     }, []);
    const handleChange = (e) => {
        setPaymentsform({ ...paymentform, [e.target.name]: e.target.value });
    
    }
const getData = async () => {
    console.log("username", username);
    let u = await fetchuser(username);    
    setcurrentUser(u)
    let dbpayments = await fetchpayments(username);
    setpayments(dbpayments);
    console.log(u, dbpayments);
}

    const pay = async (amount) => {
        if(!paymentform.name || !paymentform.message) {
            alert("Please fill the form");
            return;
        }
        let a = await initiate(amount, username, paymentform);

        var options = {
            "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount * 100, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Get me a chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": a.id, // This is a sample Order ID. Pass the id obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Acme Corp", //your customer's name
                "email": "<email>",
                "contact": "<phone>" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new window.Razorpay(options);

        rzp1.open();


    }
    return (
        <>
            <button  id="rzp-button1" onClick={() => pay(10)}>Pay</button>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


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
                        { /*show the list of Supporters*/}
                        <h2 className='font-bold text-lg my-3'>Supporters</h2>
                        <ul className='mx-4'>
                            {payments.map((p, i) => {
                            
                            return <li key={i} className="my-2 flex gap-2 items-center">
                                <img className='rounded-full' width={27} src='/wired-flat-21-avatar-hover-jumping.gif'></img><span> {p.name} donate<span className='font-bold'>${p.amount}</span>with a message  "{p.message}"</span></li>
                            })}

                        </ul>
                    </div>
                    <div className='Makepayments w-1/2 bg-slate-900 text-white rounded-lg p-5'>
                        <h2 className='text-2xl font-bold my-4'>Make Payment</h2>
                        <div className='flex gap-2 flex-col'>
                            <input onChange={handleChange} value={paymentform.name} name="name" type="Text" placeholder='Enter Name' className='font-bold bg-slate-800 p-2 rounded-lg text-white w-full' />
                            <input onChange={handleChange} value={paymentform.message} name="message" type="Text" placeholder='Enter Message' className='font-bold bg-slate-800 p-2 rounded-lg text-white w-full' />
                            <input onChange={handleChange} value={paymentform.amount} name="amount" type="number" placeholder='Enter Amount' className='font-bold bg-slate-800 p-2 rounded-lg text-white w-full' />
                            <button className='bg-blue-600 p-2 rounded-lg px-4 font-bold'>Pay</button>
                        </div>
                        <div className='flex gap-2 mt-4 flex-wrap'>
                            <button className='bg-slate-800 p-2 rounded-lg'>Pay ₹1000</button>
                            <button className='bg-slate-800 p-2 rounded-lg' onClick={()=> pay(5000)}>Pay ₹50</button>
                            <button className='bg-slate-800 p-2 rounded-lg' onClick={()=> pay(10000)}>Pay ₹100</button>
                            <button className='bg-slate-800 p-2 rounded-lg' onClick={()=> pay(50000)}>Pay ₹500</button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Paymentpage
