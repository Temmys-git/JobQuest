import React, { useState } from 'react'
import { MdUploadFile } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { application } from '../static/userStatic';
import { useDispatch,useSelector } from 'react-redux';
import { applyJob } from '../../features/applicantSlice';

const ApplyJob = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [applicant,setApplicant] = useState(application);

    const data = {...applicant,job:id}
    const handleApply = async(e)=>{
        e.preventDefault();
        console.log(data)
        await dispatch(applyJob(data)).unwrap();
        
    }

    return (
    <section>
        <h1 className='text-center my-9 text-5xl font-bold font-sans capitalize  bg-clip-text text-transparent bg-gradient-to-tl from-[#448c7f]  from-[50%] to-[50%] to-[#9ad9cc] py-3 '> Apply for job</h1>

        <form className=' max-w-[500px] mx-auto' onSubmit={(e)=>handleApply(e)}> 
           
            <div className='mb-5'>
                <label className='capitalize block mb-2'>full name</label>
                <input type="text"  className='w-full  py-4 pl-4 outline-none bg-slate-100  rounded-lg' value={applicant.name} onChange={(e)=>setApplicant({...applicant,name:e.target.value})}/>
            </div>
            <div className='mb-5'>
                <label className='capitalize block mb-2'>email</label>
                <input type="email" className='w-full  py-4 pl-4 outline-none bg-slate-100  rounded-lg' value={applicant.email} onChange={(e)=>setApplicant({...applicant,email:e.target.value})}/>
            </div>
            <div className='mb-5'>
                <label className='capitalize block mb-2'>phone number</label>
                <input type="tel" className='w-full  py-4 pl-4 outline-none bg-slate-100  rounded-lg' value={applicant.phone} onChange={(e)=>setApplicant({...applicant,phone:e.target.value})}/>
            </div>
            <div className='mb-5'>
                <label className='capitalize block mb-2'>age</label>
                <input type="number" className='w-full  py-4 px-4 outline-none bg-slate-100  rounded-lg' value={applicant.age} onChange={(e)=>setApplicant({...applicant,age:e.target.value})}/>
            </div>
            <div className='mb-5g '>
                <label className='capitalize block mb-2'>qualification</label>
                <div className=' flex gap-6'>
                    <div className='mb-5'>
                        <label className='mr-3'>O'level</label>
                        <input type="radio" name='qualification' value={applicant.qualification} onChange={(e)=>setApplicant({...applicant,qualification:e.target.value})}/>
                    </div>
                    <div className='mb-3'>
                        <label className='mr-3'>Bsc</label>
                        <input type="radio" name='qualification' value={applicant.qualification} onChange={(e)=>setApplicant({...applicant,qualification:e.target.value})}/>
                    </div>
                </div>
            </div>
            <div className='mb-5'>
                <label className='capitalize block mb-2'>gender</label>
                <div className='mb-5 flex gap-6'>
                    <div className='mb-5'>
                        <label className='mr-3'>male</label>
                        <input type="radio" name='gender' value={applicant.gender} onChange={(e)=>setApplicant({...applicant,gender:'male'})}/>
                    </div>
                    <div className='mb-5'>
                        <label className='mr-3'>female</label>
                        <input type="radio" name='gender' value={applicant.gender} onChange={(e)=>setApplicant({...applicant,gender:'female'})}  />
                    </div>
                </div>
            </div>

            <div className='mb-5'>
            <label className='capitalize block mb-2'>comments</label>
            <textarea name="comment" placeholder='Tell us about your work experience' className='w-full h-[200px]  py-4 pl-4 outline-none bg-slate-100  rounded-lg' value={applicant.comment} onChange={(e)=>setApplicant({...applicant,comment:e.target.value})}></textarea>
            </div>
    
            <button type='submit' className='  mt-7 px- block uppercase rounded-lg p-4 text-white bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%]'>apply</button>
        </form>
    </section>
  )
}

export default ApplyJob