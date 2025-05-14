import React from 'react';

const Project3 = () => {
    return (
            <section className='w-full py-50 flex gap-5'>

                <div className='flex flex-col gap-7 flex-[0.8] justify-center p-10'>
                    <small className='text-green-400 text-[18px]'>-- Project 3</small>
                    <h2 className='text-4xl font-bold'>Branding Nice Studio</h2>
                    <p className='text-[1.2rem]'>The technological revolution is changing aspect of our lives, and the fabric of society itself. it’s also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There’s no imperative to be an expert at doing everything when you can.</p>
                    <a href="#" className='py-3 rounded-2xl text-amber-400 w-fit text-[20px]'>➜ Read More</a>
                </div>
                <div className="flex-1 flex gap-8 relative">
                   <img src="https://kitpapa.net/freelancer/wp-content/uploads/2023/11/project-reasturent-2.jpg" alt="" className='rounded-4xl z-10 relative'/>
                   <div className='w-full h-full absolute bg-[#424246] rotate-[10deg] rounded-4xl'></div>
                </div>
            </section>
    );
};

export default Project3;