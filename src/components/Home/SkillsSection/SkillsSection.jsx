import React from 'react';
import cubesIcon from '../../../assets/IMAGES/cubes.png';
import './SkillsSection.css';

const SkillsSection = () => {
    return (
        <section className='w-full py-50 flex gap-5'>
            <div className="flex-1 flex gap-8">
                <div className="flex-1 flex flex-col gap-8 mt-[-30px] mb-[30px]">
                    <div className="flex-1 flex flex-col gap-4 items-center bg-[#1a1a1b] hover:bg-[#00d084] hover-green-shadow rounded-4xl p-9">
                        <img src={cubesIcon} alt="" className='h-28 w-28'/>
                        <h3 className='text-2xl font-bold'>Product Design</h3>
                        <p className='text-[1.2rem] text-center'>The technological revolution is changing aspect </p>
                    </div>
                    <div className="flex-1 flex flex-col gap-4 items-center bg-[#1a1a1b] hover:bg-[#00d084] hover-green-shadow rounded-4xl p-9">
                        <img src={cubesIcon} alt="" className='h-28 w-28'/>
                        <h3 className='text-2xl font-bold'>Logo Design</h3>
                        <p className='text-[1.2rem] text-center'>The technological revolution is changing aspect </p>
                    </div>
                </div>
                <div className="flex-1 gap-8 flex flex-col">
                    <div className="flex-1 flex flex-col gap-4 items-center bg-[#1a1a1b] hover:bg-[#00d084] hover-green-shadow rounded-4xl p-9">
                        <img src={cubesIcon} alt="" className='h-28 w-28'/>
                        <h3 className='text-2xl font-bold'>App Mockup</h3>
                        <p className='text-[1.2rem] text-center'>The technological revolution is changing aspect </p>
                    </div>
                    <div className="flex-1 flex flex-col gap-4 items-center bg-[#1a1a1b] hover:bg-[#00d084] hover-green-shadow rounded-4xl p-9">
                        <img src={cubesIcon} alt="" className='h-28 w-28'/>
                        <h3 className='text-2xl font-bold'>Web Template</h3>
                        <p className='text-[1.2rem] text-center'>The technological revolution is changing aspect </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-7 flex-[0.8] pl-20 justify-center'>
                <small className='text-green-400 text-[18px]'>-- My Skills</small>
                <h2 className='text-4xl font-bold'>Why Hire Me For <br /> Next Project?</h2>
                <p className='text-[1.2rem]'>The technological revolution is changing aspect of our lives, and the fabric of society itself. it’s also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There’s no imperative to be an expert at doing everything when you can.</p>
                <a href="#" className='bg-[#FFB228] py-3 px-7 rounded-2xl text-gray-950 w-fit text-[20px]'>Download CV</a>
            </div>
        </section>
    );
};

export default SkillsSection;