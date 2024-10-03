import React, { useState, useEffect } from 'react'

const Appointment = ({ className }) => {
    return (
        <>
            <div className={`w-full bg-white py-8 px-10 flex items-center justify-center ${className}`}>
                <div className='max-w-[1600px] w-full'>
                    <div className='flex justify-between'>
                        <span className='flex gap-3'>
                            <select name="" id="" className='px-2 w-60 bg-white border rounded border-gray-400/70 text-sm'>
                                <option value="Same Drop-off Location">Same Drop-off Location</option>
                            </select>
                            <span className='flex items-center font-semibold text-blue-700'><span>Add a Discount Code </span><span className='ml-2 text-2xl text-gray-300'><ion-icon name="alert-circle-outline"></ion-icon></span></span>
                        </span>
                        <span className='text-blue-600 font-semibold'>
                            View/Edit/Cancel
                        </span>
                    </div>
                    <div className='flex gap-5 mt-2 w-full'>
                        <div className='p-3 border border-gray-400/70 h-[70px] w-[30%]'>
                            <h3 className='text-[13px] font-semibold text-gray-500'>Pick-up Location</h3>
                        </div>
                        <div className='flex h-[70px] w-1/4'>
                            <div className='p-3 border border-gray-400/70 h-[70px] w-1/2 rounded-l'>
                                <h3 className='text-[13px] font-semibold text-gray-500'>Pick-up Date</h3>
                            </div>
                            <div className='p-3 border border-gray-400/70 h-[70px] w-1/2 rounded-r'>
                                <h3 className='text-[13px] font-semibold text-gray-500'>Pick-up Time</h3>
                                <select name="" id="" className='w-full mt-2 bg-white'>
                                    <option value="">17:00</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex h-[70px] w-1/4'>
                            <div className='p-3 border border-gray-400/70 h-[70px] w-1/2 rounded-l'>
                                <h3 className='text-[13px] font-semibold text-gray-500'>Drop-off Date</h3>
                            </div>
                            <div className='p-3 border border-gray-400/70 h-[70px] w-1/2 rounded-r'>
                                <h3 className='text-[13px] font-semibold text-gray-500'>Drop-off Time</h3>
                                <select name="" id="" className='w-full mt-2 bg-white'>
                                    <option value="">17:00</option>
                                </select>
                            </div>
                        </div>
                        <div className='bg- flex-grow h-[70px] flex items-center justify-center font-bold text-black bg-yellow-400'>
                            View Vehicle
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appointment