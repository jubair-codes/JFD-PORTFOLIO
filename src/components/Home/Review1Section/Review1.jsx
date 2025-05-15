import React from 'react';

const Review1 = () => {
    return (
            <section className='w-full flex gap-5'>
                <div className="flex-[0.7] flex gap-8 relative ml-20">
                   <img src="https://kitpapa.net/freelancer/wp-content/uploads/2023/11/testi21.png" alt="" className='rounded-4xl z-10 relative '/>
                   <div className='w-full h-full absolute bg-[#424246] rotate-[-10deg] rounded-4xl'></div>
                </div>
                <div className='flex flex-col gap-2 flex-1 justify-center p-20'>
                    <img src="https://kitpapa.net/freelancer/wp-content/uploads/2023/11/quat.png" alt=""  className='w-18'/>
                    <h2 className='text-2xl font-bold mt-7'>I work with many WordPress coders for the past 10 years and it's hard to find someone with this level of skill and strict attention to detail. He was excellent. Did a perfect job and actually exceeded my expectations. I will hire him again.</h2>
                    <h3 className='mt-10 text-2xl text-[#64F4AB]'>Danielle Dino</h3>
                    <p>Founder of Webcasa</p>
                </div>
            </section>
    );
};

export default Review1;