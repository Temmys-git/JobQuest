import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../Button';
import { getSingleJob } from '../../../features/jobSlice';
import { useDispatch, useSelector } from 'react-redux';

const SingleJob = ()=> {
    const {id} = useParams();
    const [show,setShow] = useState(false)
    const dispatch = useDispatch();
    const {singleJob,status} = useSelector((state)=>state.jobs);
    console.log(singleJob)
    const fetchSingleJob = async()=>{
        await dispatch(getSingleJob(id)).unwrap();
    }

    useEffect(()=>{
        fetchSingleJob()
    },[id])
   

    if(status === 'pending'){
        return <h1>Loading....</h1>
    }

    // const {title,imageUrl,description} = singleJob
    return (
       <section className='container pb-28 px-4'>
            <h1 className='text-center text-5xl my-20 font-sans  font-[700]'>{singleJob.title}</h1>
            <article className='flex flex-col md:flex-row items-center gap-6'>
           <div className='flex-[0.5] w-[75d%] h-[400px]'>
            
                <img src={singleJob.imageUrl} alt={singleJob.title} className='w-full h-full rounded-lg'/>
           </div>
            <div className='text-center flex-[0.5]'>
                <h2 className='text-[#448c7f] font-sans text-2xl'>{singleJob.title}</h2>
                <p className='my-3'>{show?singleJob.description:singleJob.description?.slice(0,200)}.... <button onClick={()=>setShow(!show)} className='text-[#448c7f]'>{show?'show less':'show more'}</button>  </p>
                <Button text="Apply now" styles="w-full text-lg py-2.5 bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%] text-white mt-5 rounded-md"/>
            </div>
            </article>
       </section>
    )
}

export default SingleJob