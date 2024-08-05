import React, { useEffect, useState } from 'react';
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { RiLockPasswordFill } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../features/userSlice';



const SignUp =()=> {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {status,user} = useSelector((state)=>state.user)
    const _user = {email,password,name} 
 

    const handleSignUp =async(e)=>{
        e.preventDefault()
        await dispatch(register(_user)).unwrap()
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
                    <div className='mt-32'>
                        <h1 className='font-bold mt-16 font-sans text-5xl'>Welcome back!</h1>
                        <p className='mt-7 text-lg px-16'>to keep connected with us, please login to your personal info</p>
                        <Link to='/login' className=' mx-auto mt-7 max-w-[200px] block uppercase rounded-full py-4 text-white border-[2px] border-white'>sign in</Link>
                    </div>
                </div>

                <div className='flex-[0.5] mx-auto mt-20 px-11'>
                        <h1 className='text-center font-sans text-3xl font-[700] text-[#448c7f] mb-6'>Sign up to jobQuest</h1>

                        {/* form to sign up */}

                    <form >
                <div className='relative'>
                    <div className=' absolute top-[15px] left-[20px]'>
                         <RxAvatar className=' text-xl font-bold text-slate-600 mt-1'/>
                    </div>
                    <input type="text" name="name" placeholder='Full Name' className='w-full py-4 bg-slate-100 text-black pl-12 rounded-lg placeholder:text-slate-400' onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='relative mt-9'>
                    <div className=' absolute top-[15px] left-[20px]'>
                         <PiEnvelopeSimpleThin className=' text-xl font-bold text-slate-600 mt-1'/>
                    </div>
                    <input type="email" name="email" placeholder='Email' className='w-full py-4 bg-slate-100 text-black pl-12 rounded-lg placeholder:text-slate-400' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='relative mt-9 '>
                    <div className=' absolute top-[15px] left-[20px]'>
                         <RiLockPasswordFill className=' text-xl font-bold text-slate-600 mt-1'/>
                    </div>
                    <input type="password" name="password" placeholder='Password' className='w-full py-4 bg-slate-100 text-black pl-12 rounded-lg  placeholder:text-slate-400' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
               <button type='submit' className=' mx-auto mt-7 px-16 block uppercase rounded-full py-4 text-white bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%]' onClick={(e)=>handleSignUp(e)}>sign up</button>
            </form>

                </div>

            </div>
           </div>

           <div className="mt-28"></div>
        </section>
        )
    }
export default SignUp;
