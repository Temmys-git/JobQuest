import React, { useState } from 'react';
import Button from '../pages/Button';
import { Link } from 'react-router-dom';
import { links } from '../static/links';
import NavigationLinks from './NavigationLinks';

const Header = () => {
    const [isLoggedIn] = useState(false)

    return (
        <header className=' text-white bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%]  py-6 '>
          <div className='flex justify-between items-center container'>
            <h1 className='text-3xl'>JobQuest</h1>

        <nav >
            <ul className=' flex gap-7' >
                {
                    links.map(link=>{
                        return <NavigationLinks key={link.id}  link={link}/>
                    })
                }
            </ul>
        </nav>

           {
            isLoggedIn ? (
                <div className='flex gap-2 items-center'>
            <p>Welcome Fatai Uth...</p>
            <Link to="/myAccount" className='capitalize'>my account</Link>
            <Button text='logout' styles='capitalize px-4 py-3 rounded-lg border-[2px] border-white text-white text-[0.9rem] font-sans' />
        </div>
           ):( 
                 <div className=''>
                <Link to='/login' className='mr-5'>Login</Link>
               <Link to='/register'> <Button text='sign up' styles='capitalize px-4 py-3 rounded-lg border-[2px] border-white text-white text-[0.9rem] font-sans' /></Link>
              
            </div>

           )
           }
            </div>
        </header>
    )
}

export default Header;