import React from 'react';

const WorkTogether = () => {
    return (
        <section className='w-full mt-50'>
            <div className="py-15 px-30 flex mx-auto flex-col gap-5 relative justify-center items-center bg-[#1D1E20] rounded-[50px] w-[90%]">
                <div className='w-20 h-1 bg-[#327A56]'></div>
                <h3 className=' text-3xl font-bold'>Let's Work Together</h3>
                <p className='text-center text-lg'>The technological revolution is changing aspect of our lives, and the fabric of society itself. it’s also changing the way we learn and what we learn</p><a href="#" className='bg-amber-400 py-3 text-[20px] px-7 rounded-2xl text-gray-950'>
                            Contact Me
                </a>
                {/* floating corners */}
                <img src="https://kitpapa.net/freelancer/wp-content/uploads/2023/11/corner-effect-2.png" alt="" className='absolute top-0 left-0'/>
                <img src="https://kitpapa.net/freelancer/wp-content/uploads/2023/11/corner-effect-1.png" alt="" className='absolute bottom-0 right-0'/>
            </div>
        </section>
    );
};

export default WorkTogether;