import React from 'react';

const Home = () => {
    return (
        <header className='w-full h-fit flex items-center text-white'>
            <div className='flex flex-col gap-4 flex-1 '>
                <small className='text-green-400 text-[18px]'>-- Introducing</small>
                <h2 className='text-7xl font-bold'>Hello</h2>
                <h2 className='text-8xl font-bold'>I'm JIM <br />Fahad</h2>
                <p className='text-[1.2rem] pr-[10rem]'>Since beginning my journey as a freelance designer nearby 7 years ago, I ‘ve done remote work for agencies, consulted for startup, and collaborated with talented people to create digital products.</p>
                <a href="#" className='bg-amber-400 py-3 px-7 rounded-2xl text-gray-950 w-fit'>Contact Me</a>
            </div>
            <div className='w-fit relative flex-1'>
                <img src="https://kitpapa.net/freelancer/wp-content/uploads/2023/11/green-border-2-768x768.png" alt="" className='w-full mt-5'/>
                    <img src="https://kitpapa.net/freelancer/wp-content/uploads/2023/11/hero-img.png" alt="" className='h-[700px] absolute bottom-0 left-[15%]'/>
                </div>
        </header>
    );
};

export default Home;