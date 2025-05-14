import React from 'react';

const Facts = () => {
    return (
        <section className='w-full h-screen'>
            {/* after third section there had been a view all btn.. it stands here, because it had no place to live */}
            <div className='w-full flex justify-center'>
                <a href="#" className='bg-gray-100 py-3 px-5 rounded-2xl font-bold text-gray-900 w-fit text-[18px] shadow-gray-300 shadow-lg hover:bg-gray-950 hover:text-gray-50 transition'>View All</a>
            </div>
        </section>
    );
};

export default Facts;