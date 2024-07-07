import React from 'react';
import { links } from '../static/links';
import NavigationLinks from './NavigationLinks';


const Footer =()=>{
    const year = new Date().getFullYear();

    return(
        <footer className='mt-24 text-white pt-12 bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%]'>
            <div className="container">

                    <div className='flex justify-between'>
                                    <div className='flex-[0.4] '>
                                <h1 className='text-3xl'>JobQuest</h1>
                                <p className='text-white mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolore non vel quo nostrum tempora doloremque facere quod eius mollitia?</p>
                            </div>

                            <ul className=' flex gap-7' >
                                {
                                    links.map(link=>{
                                        return <NavigationLinks key={link.id} link={link}/>
                                    })
                                }
                            </ul>
                    </div>
                <div className='border-t border-[#fff] py-5 mt-4'>
                <p className='w-[max-content] ml-auto'>@{year} all copy right reserved</p>
                </div>
                </div>
        </footer>
    )
}

export default Footer