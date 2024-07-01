import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { jobs } from '../static/jobStatic';
import Button from '../pages/Button';

const Job = ()=> {
    const {id} = useParams();
    const [singleJob,setSingleJob] = useState({});
    const [show,setShow] = useState(false)
    const [isLoading,setLoading] = useState(true)

    const getSingleJob = ()=>{
        const jobItem = jobs.find(job=>job.id === Number(id));
        setSingleJob(jobItem)
    }
    // getSingleJob();

    useEffect(()=>{
        setLoading(false)
        getSingleJob();
    },[])

    const {title,image,description} = singleJob
    console.log(singleJob)
    if(isLoading){
        return <h1>Loading....</h1>
    }
    return (
       <section className='container pb-28 px-4'>
            <h1 className='text-center text-5xl my-20 font-sans  font-[700]'>{title}</h1>
            <article className='flex flex-col md:flex-row items-center gap-6'>
           <div className='flex-[0.5] w-[75d%] h-[400px]'>
            
                <img src={image} alt={title} className='w-full h-full rounded-lg'/>
           </div>
            <div className='text-center flex-[0.5]'>
                <h2 className='text-[#448c7f] font-sans text-2xl'>{title}</h2>
                <p className='my-3'>{show?description:description.slice(0,200)}.... <button onClick={()=>setShow(!show)} className='text-[#448c7f]'>{show?'show less':'show more'}</button>  </p>
                <Button text="Apply now" styles="w-full text-lg py-2.5 bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%] text-white mt-5 rounded-md"/>
            </div>
            </article>

       </section>
    )
}

export default Job