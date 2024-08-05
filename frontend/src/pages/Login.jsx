import React, { useEffect, useRef, useState } from 'react';
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Login =()=> {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {status,user,error} = useSelector((state)=>state.user)
    console.log(user)
    console.log(error)
    const _user = {email,password}

    const handleLogin =async(e)=>{
        e.preventDefault();
        await dispatch(login(_user)).unwrap();

    }

    useEffect(()=>{
        if(user){
            navigate('/')
        }
    },[user])
   

    return (
        <section>

           <div className='mx-auto max-w-[1000px]  mt-24 '>
           
          
          
            <div className='  flex text-white text-center '>
                <div className='rounded-lg flex-[0.5] bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%]'>
                    <div className='mt-5'>
                        <h1 className='font-bold mt-16 font-sans text-5xl'>Hello, friends</h1>
                        <p className='mt-9 text-lg px-24'>Enter your personal details and start journey with us</p>
                        <Link to='/register' className=' mx-auto mt-7 max-w-[200px] block uppercase rounded-full py-4 text-white border-[2px] border-white'>sign up</Link>
                    </div>
                </div>

                <div className='flex-[0.5] mx-auto mt-20 px-11'>
                        <h1 className='text-center font-sans text-3xl bg-clip-text text-transparent bg-gradient-to-tl from-[#448c7f]  from-[50%] to-[50%] to-[#9ad9cc] font-bold mb-6'>Sign in to jobQuest</h1>
                        {/* form to sign in */}
                    {/* <form  onSubmit={handleLogin(e)}> */}
                    <form >
                <div className='relative'>
                    <div className='flex gap-2 items-center absolute top-[14px] left-[20px]'>
                         <PiEnvelopeSimpleThin className=' text-xl font-bold text-slate-600 mt-1'/>
                    </div>
                    <input type="email" name="email" placeholder='Email' className='w-full py-4 text-black  outline-none bg-slate-100  rounded-lg placeholder:text-slate-400 pl-12' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='relative mt-9 '>
                    <div className='flex gap-2 items-center absolute top-[14px] left-[20px]'>
                         <RiLockPasswordFill className=' text-xl font-bold text-slate-600 mt-1'/>
                    </div>
                    <input type="password" name="password" placeholder='Password' className='w-full py-4  text-black outline-none bg-slate-100  rounded-lg   placeholder:text-slate-400 pl-12' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
               <button type='submit' onClick={(e)=>handleLogin(e)} className=' mx-auto mt-7 px-16 block uppercase rounded-full py-4 text-white bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%]'>{status==='pending'? 'pending':'sign in'}</button>
            </form>

                </div>

            </div>
           </div>

        </section>
        )
    }
export default Login;
