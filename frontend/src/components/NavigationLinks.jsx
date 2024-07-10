import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLinks = ({link,styles})=>{
    const {route,page} = link;
    return (
        <li className='text-lg capitalize'> <Link to={`${route}`}>{page}</Link> </li>
    )
}

export default NavigationLinks