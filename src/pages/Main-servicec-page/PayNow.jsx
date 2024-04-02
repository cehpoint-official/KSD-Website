import React from 'react'
import icon1 from "../../asset/payNow-img/upi-img.png"
import icon2 from "../../asset/payNow-img/rozar-pay.png"
import icon3 from "../../asset/payNow-img/pay-pal.png"
import icon4 from "../../asset/payNow-img/stripe.png"

const PayNow = () => {
    return <>
        <div className='paynowImg p-4'>
            <div className='bg-white mx-28 px-20 mb-20'>
                <div className='text-center'>
                    <p className='text-3xl font-semibold py-12'>Pay Now</p>
                </div>
                <div className='grid grid-cols-12 gap-10 pb-20'>
                    <div className='col-span-12 md:col-span-6 p-6'>
                        <div className=''>
                            <label for="name" className="form-label text-slate-600 my-4 ">Order No.</label> <br />
                            <input type="text" className="form-control w-full my-4" id="name" placeholder="Enter Order Number" />
                        </div>
                        <div className=''>
                            <label for="name" className="form-label text-slate-600 my-4 ">Amount(INR)</label> <br />
                            <input type="text" className="form-control w-full mt-4" id="name" placeholder="Enter Amount INR" />
                        </div>

                        <div className='mt-8 '>
                            <p className='text-slate-600 my-4 text-lg'>Select Payment Option</p>

                            <div class="flex items-center  mb-4">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-200 border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-radio-1" class="ms-2 flex cursor-pointer items-center text-sm font-medium cursor-pointer text-gray-900 dark:text-gray-300 space-x-5">
                                    <img src={icon1} alt="" className='ms-4' />
                                    <div className=''>
                                        <p className='text-lg '>UPI</p>
                                        <p className='text-sm text-slate-500'>Pay By UPI</p>
                                    </div>
                                </label>
                            </div>
                            <div class="flex items-center mb-4">
                                <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-200 border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-radio-2" class="ms-2 flex items-center text-sm font-medium cursor-pointer text-gray-900 dark:text-gray-300 space-x-5">
                                    <img src={icon2} alt="" className='ms-4' />
                                    <div className=''>
                                        <p className='text-lg '>Razor pay</p>
                                        <p className='text-sm text-slate-500'>Pay by Razor Pay</p>
                                    </div>
                                </label>
                            </div>
                            <div class="flex items-center mb-4">
                                <input id="default-radio-3" type="radio" value="" name="default-radio" class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-200 border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-radio-3" class="ms-2 flex items-center text-sm font-medium cursor-pointer text-gray-900 dark:text-gray-300 space-x-5">
                                    <img src={icon3} alt="" className='ms-4' />
                                    <div className=''>
                                        <p className='text-lg '>paypal</p>
                                        <p className='text-sm text-slate-500'>Pay by PayPal</p>
                                    </div>
                                </label>
                            </div>
                            <div class="flex items-center mb-4">
                                <input id="default-radio-4" type="radio" value="" name="default-radio" class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-200 border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-radio-4" class="ms-2 flex items-center text-sm font-medium text-gray-900 cursor-pointer dark:text-gray-300 space-x-5">
                                    <img src={icon4} alt="" className='ms-4' />
                                    <div className=''>
                                        <p className='text-lg '>Stripe</p>
                                        <p className='text-sm text-slate-500'>Pay by Stripe</p>
                                    </div>
                                </label>
                            </div>

                        </div>

                        <button className='bg-[#ff0000] py-2 px-4 w-full mt-8 text-white font-semibold'>Pay With UPI</button>


                    </div>

                    <div className='col-span-12 md:col-span-6 block p-6 bg-slate-100'>
                        <div className='mt-16'>
                            <label for="name" className="form-label text-xl font-semibold my-4 ">Your UPI ID.</label> <br />
                            <input type="text" className="form-control w-full my-4" id="name" placeholder="Enter Your UPI ID" />
                        </div>
                        <div className='flex justify-end mt-2'>
                            <button className='bg-blue-600 px-4  py-2 text-white text-lg font-semibold'>PAY<i class="bi bi-currency-rupee"></i>5000</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </>
}

export default PayNow