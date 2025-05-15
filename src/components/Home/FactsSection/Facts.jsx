import React from 'react';

const Facts = () => {
    return (
        <section className='w-full h-screen'>
            {/* after third section there had been a view all btn.. it stands here, because it had no place to live */}
            <div className='w-full flex justify-center'>
                <a href="#" className='bg-gray-200 py-3 px-5 rounded-2xl text-gray-900 w-fit text-[22px] shadow-gray-300 shadow-lg hover:bg-gray-950 hover:text-gray-50 transition'>View All</a>
            </div>
            <div className='flex gap-5 w-full mt-25'>
                <div className="flex-1">
                    <div className="flex-1 flex gap-5">
                        <div className='flex-1 p-5 bg-[#1d1e20] flex items-center justify-center flex-col rounded-tl-4xl rounded-bl-4xl py-15'>
                            <h2 className='text-[70px] font-bold text-[#64F4AB]'>100+</h2>
                            <p className='text-[20px] font-bold'>Happy Clients</p>
                        </div>
                        <div className='flex-1 p-5 bg-[#1d1e20] flex items-center justify-center flex-col py-15'>
                            <h2 className='text-[70px] font-bold text-[#64F4AB]'>167</h2>
                            <p className='text-[20px] font-bold'>Projects Done</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex-1 flex gap-5">
                        <div className='flex-1 p-5 bg-[#1d1e20] flex items-center justify-center flex-col'>
                            <h2 className='text-[70px] font-bold text-[#64F4AB]'>60</h2>
                            <p className='text-[20px] font-bold'>Top Reviews</p>
                        </div>
                        <div className='flex-1 p-5 bg-[#1d1e20] flex items-center justify-center flex-col py-15 rounded-tr-4xl rounded-br-4xl'>
                            <h2 className='text-[70px] font-bold text-[#64F4AB]'>10+</h2>
                            <p className='text-[20px] font-bold'>Year Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facts;