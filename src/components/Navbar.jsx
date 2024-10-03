import React from 'react'

const Navbar = () => {
    return (
        <div className='flex sticky top-0 justify-between items-center h-16 px-5 py-3 bg-white border-b-4 border-yellow-400'>
            <div className='flex gap-24'>
                <img src="https://images.hertz.com/misc/overlay/hertz-logo-black.png" className="h-8" />
                <ul className='flex gap-4 text-[13px] items-center h-8 text-gray-800'>
                    <li className='hover:text-sky-400 cursor-pointer'>Reservations</li>
                    <li className='hover:text-sky-400 cursor-pointer'>Special Offers</li>
                    <li className='hover:text-sky-400 cursor-pointer'>Locations</li>
                    <li className='hover:text-sky-400 cursor-pointer'>Vehicles</li>
                    <li className='hover:text-sky-400 cursor-pointer'>Product &amp; Services</li>
                    <li className='hover:text-sky-400 cursor-pointer'>Chauffeur Drive</li>
                </ul>
            </div>
            <div className='flex gap-10 font-bold '>
                <div className='flex items-center gap-3 h-min'>
                    <span className='text-yellow-300 text-2xl'><ion-icon name="globe-outline"></ion-icon></span>
                    <p className='text-sm underline'>EN/IN</p>
                </div>
                <button className='px-5 border-l text-xs'>Login/Sign-up</button>
            </div>
        </div>
    )
}

export default Navbar