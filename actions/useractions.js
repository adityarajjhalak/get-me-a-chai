"use server"
import Razorpay from "razorpay";

import Payment from  "../models/Payment.js";
import User from "../models/user.js";
import  connectToDB  from "../lib/db.js";


export const initiate = async (amount, to_username, paymentform  ) => {
   await connectToDB();
   var instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
        
    })
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
}
let x = await instance.orders.create(options);
// create payment onject which shows a pending payment
await Payment.create({
    oid: x.id, 
    amount: amount,
     to_user: to_username,  
     name: paymentform.name,  
     message: paymentform.message,
    done: false
 });
 console.log("paymenet save");
return x;
}

export const fetchuser = async (username) => {
    await connectToDB();
    console.log(username)
    let u = await User.findOne({username: username}).lean();
    
    return u;
}
export const fetchpayments = async (username) => {
    await connectToDB();
    let p = await Payment.find({to_user: username, done:true}).sort({amount: -1}).lean();
    return p;
}