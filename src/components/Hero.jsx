import React, { useState, useEffect } from 'react'
import Appointment from './Appointment'

const Hero = () => {
    const [scrolledToTop, setScrolledToTop] = useState(false)
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const element = document.getElementById('appointment');
        console.log({
            fromY: window.scrollY,
            scrollPosition,
            elemtPos: element.offsetTop
        });

        if (element && element.offsetTop <= scrollPosition) {
            setScrolledToTop(true);
        } else {
            setScrolledToTop(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <section id='appointment' className='h-[700px] w-full flex items-start' style={{ backgroundImage: `url("//images.hertz.com/content/Intl/1920x900_Hero_Banner/hero_summer_eucorp.jpg")` }}>
            <div className='flex flex-col justify-center items-start h-[530px] p-8 w-full'>
                <div className='w-full'>
                    <h1 className=' text-white text-5xl mb-10'>Hertz Rental Car. Let’s Go!</h1>
                    <Appointment className={scrolledToTop ? 'fixed top-16 right-0 left-0 shadow-[0px_3px_5px_0px_rgba(4,4,0000)] rounded-b h-48' : 'static rounded shadow-[0_0px_10px_0.01px_rgb(4,4,0010)] border-b-[7px] border-yellow-400 h-52'} />
                </div>
            </div>
        </section>
    )
}

export default Hero