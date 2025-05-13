import React from 'react';

const Navbar = () => {
    return (
        <nav className='w-full justify-between flex items-center h-28 text-white text-[1.3rem]'>
            <div>
                <ul className='flex items-center gap-7'>
                    <li>
                        <a href="#">
                            <img src="https://kitpapa.net/freelancer/wp-content/uploads/2023/11/LogoMakr-7YDcDM.png" alt="logo" className='w-30 mr-5'/>
                        </a>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className='flex items-center gap-7'>
                    <li>
                        <a href="#" className='bg-gray-700 py-3 px-7 rounded-2xl'>
                            =
                        </a>
                    </li>
                    <li>
                        <a href="#" className='bg-amber-400 py-3 px-7 rounded-2xl text-gray-950'>
                            Contact Me
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;