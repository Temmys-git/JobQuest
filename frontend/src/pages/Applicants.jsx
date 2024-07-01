import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { jobs } from '../static/jobStatic';
import { users } from '../static/userStatic';
import { FaPlus,FaMinus } from "react-icons/fa6";
import Button from './Button';


const Applicants =()=>{
    const {id} = useParams();
    const [singleJob,setSingleJob] = useState({});
    const [itemId,setItemId] = useState(null)
    const [show,setShow] = useState(false)
    


    const getSingleJob = ()=>{
        const jobItem = jobs.find(job=>job.id === Number(id));
        setSingleJob(jobItem)
    }
    // getSingleJob();

    useEffect(()=>{
        getSingleJob();
    },[])

    return (
        <section className='container '>
            <h1 className="text-center my-9 text-5xl font-bold font-sans capitalize  bg-clip-text text-transparent bg-gradient-to-tl from-[#448c7f]  from-[50%] to-[50%] to-[#9ad9cc] py-3 ">{singleJob.title} applicants</h1>
            {
                users.map(user=>{
                    const {name,email,phone,qualification,gender,comment,age,id} = user
                    return (
                        <div key={id} className='flex flex-col md:flex-row justify-between md:items-center '>
                           <div className='md:flex-[0.98]  shadow-md p-4 rounded-lg'>
                            
                                <div className='flex gap-5   my-2 md:items-center '>
                                    <h1 className='text-lg font-sans font-[600] md:flex-[0.2] '>{name}</h1>
                                    <p className=' md:flex-[0.2]'>{email}</p>
                                    <p className=' md:flex-[0.2] '>{phone}</p>
                                    <p className=' md:flex-[0.2] '>{qualification}</p>
                                    
                                    <div className='md:flex-[0.2]  '>
                                       
                                       {
                                        itemId === id ? <FaMinus className='w-[max-content] mx-auto cursor-pointer text-red-500 ' onClick={()=>setItemId(null)}/> : <FaPlus className='w-[max-content] mx-auto cursor-pointer text-green-500' onClick={()=>setItemId(id)}/>
                                        
                                       }
                                    </div>
                                
                                </div>
                               {
                           
                                itemId === id &&  <div className='  border-t'>
                                    <div className='flex justify-between'>
                                  
                                   <div className={` flex-[0.8]  ${show&&'flex-[0.8]'}`}>
                                   <p className='font-bold text-lg my-3 capitalize from-[#448c7f]  from-[50%] to-[50%] to-[#9ad9cc]'>Comment</p>
                                    <p className=''>{show?comment:comment.slice(0,66)}.... <button onClick={()=>setShow(!show)} className='text-[#448c7f]'>{show?'show less':'show more'}</button>  </p>
                                    
                                    </div>
                                    <div>
                                        <p className='font-bold text-lg my-3 capitalize from-[#448c7f]  from-[50%] to-[50%] to-[#9ad9cc]'>age</p>
                                        <p className=' md:flex-[0.2] '>{age}</p>
                                    </div>
                                    <div>
                                        <p className='font-bold text-lg my-3 capitalize from-[#448c7f]  from-[50%] to-[50%] to-[#9ad9cc]'>gender</p>
                                        <p className=' md:flex-[0.2]'>{gender}</p>
                                        </div>
                                    </div>

                                </div>


                               }
                           </div>

                        <div className='flex gap-2  mt-5 self-center'>
                                <button className='capitalize bg-green-500 text-white md:bg-white p-3 rounded-lg md:text-green-500'>accept</button>
                                <button className='capitalize bg-red-500 text-white md:bg-white p-3 rounded-lg md:text-red-500'>decline</button>
                            </div>
                        </div>
                    )
                })
            }
        </section>

    )
}

export default Applicants