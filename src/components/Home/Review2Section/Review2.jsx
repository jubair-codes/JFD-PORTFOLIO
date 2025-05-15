import React from 'react';

const Review2 = () => {
    return (
            <section className='w-full flex gap-5 mt-50'>
                <div className='flex flex-col gap-2 flex-1 justify-center p-20'>
                    <img src="https://kitpapa.net/freelancer/wp-content/uploads/2023/11/quat.png" alt=""  className='w-18'/>
                    <h2 className='text-2xl font-bold mt-7'>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!</h2>
                    <h3 className='mt-10 text-2xl text-[#64F4AB]'>Amman Payne</h3>
                    <p>CEO of Figma</p>
                </div>
                <div className="flex-[0.7] flex gap-8 relative mr-20">
                   <img src="https://kitpapa.net/freelancer/wp-content/uploads/2023/11/testimonials-img.jpg" alt="" className='rounded-4xl z-10 relative '/>
                   <div className='w-full h-full absolute bg-[#424246] rotate-[-10deg] rounded-4xl'></div>
                </div>
            </section>
    );
};

export default Review2;