"use server"
import Razorpay from "razorpay";

import Payment from  "../models/Payment.js";

import user from "../models/user.js";
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
let x =await instance.orders.create(options);
// create payment onject which shows a pending payment
await Payment.create({oid: x.id, amount: amount, to_user: to_username,  name: paymentform.name,  message: paymentform.message, });
return x;
}