import React from 'react';

const Footer = () => {
    return (
        <footer className='w-screen bg-[#1D1E20] mt-20'>
            <div className='w-[80%] mx-auto flex justify-between h-34 items-center'>
                <a href="#">
                    <img src="https://kitpapa.net/freelancer/wp-content/uploads/2023/11/LogoMakr-7YDcDM.png" alt="logo" className='w-30 mr-5'/>
                </a>
                <p>© 2025 – All rights Reserved by Jubair Alam.</p>
                <ul className='flex gap-7'>
                    <li>
                        <a href="#">
                            <img src="https://icones.pro/wp-content/uploads/2021/05/symbole-twitch-logo-icone-jaune.png" alt="" className='h-12 w-12 bg-gray-800 p-3 rounded-2xl hover:bg-gray-300 transition'/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://th.bing.com/th/id/OIP.wCAHFhBfXOpk_3ZwRmQglgHaHa?rs=1&pid=ImgDetMain" alt="" className='h-12 w-12 bg-gray-800 p-3 rounded-2xl hover:bg-gray-300 transition'/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://thumbnail.imgbin.com/22/11/23/imgbin-computer-icons-social-media-logo-social-media-pQTWWP2j4PrkGaj5CDZYfrjKw_t.jpg" alt="" className='h-12 w-12 bg-gray-800 p-3 rounded-2xl hover:bg-gray-300 transition'/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;