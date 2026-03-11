import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Razorpay from "razorpay";
import connectToDB from "@/lib/db";
import Payment from "@/models/Payment";

export const POST = async (request) => {
    await connectToDB();
    let body = await request.formData();                
    body = Object.fromEntries(body);
     let p = await Payment.findOne({oid: body.razorpay_order_id});
     if(!p) {
        return NextResponse.json({success: false, message: "Payment not found in database"});
     }
     console.log(body);
     let xx =  validatePaymentVerification(
      {
      order_id: body.razorpay_order_id, 
      payment_id: body.razorpay_payment_id
    }, 
      
        body.razorpay_signature,
      
        process.env.RAZORPAY_KEY_SECRET);
      
     // verify the payment 
        if(xx) {
            const updatePayment = await Payment.findOneAndUpdate({oid: body.razorpay_order_id}, {done: true}, {new: true});
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatePayment.to_user}?paymentdone=true`);
        }  
        else {
          return NextResponse.json({success: false, message: "Payment verification failed"})
        }
}                                                                                                     