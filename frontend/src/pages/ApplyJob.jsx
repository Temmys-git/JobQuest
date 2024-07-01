import React from 'react'
import { MdUploadFile } from "react-icons/md";


const ApplyJob = () => {
  return (
    <section>
        <h1 className='text-center my-9 text-5xl font-bold font-sans capitalize  bg-clip-text text-transparent bg-gradient-to-tl from-[#448c7f]  from-[50%] to-[50%] to-[#9ad9cc] py-3 '> Apply for job</h1>

        <form className=' max-w-[500px] mx-auto'> 
            <div className='mb-5 relative'>
                <div  className='w-full  h-[200px]'>
                    <label htmlFor='image' className='block w-full h-full bg-slate-100 text-center pt-20 rounded-lg text-slate-500 '>Upload a image for job description</label>
                    <MdUploadFile  className=' text-4xl text-slate-500 absolute top-10 left-56 '/>
                </div>
                <input type="file" id='image' className='hidden' />
               
            </div>
            <div className='mb-5'>
                <label className='capitalize block mb-2'>full name</label>
                <input type="text"  className='w-full  py-4 pl-4 outline-none bg-slate-100  rounded-lg'/>
            </div>
            <div className='mb-5'>
                <label className='capitalize block mb-2'>email</label>
                <input type="email" className='w-full  py-4 pl-4 outline-none bg-slate-100  rounded-lg'/>
            </div>
            <div className='mb-5'>
                <label className='capitalize block mb-2'>phone number</label>
                <input type="tel" className='w-full  py-4 pl-4 outline-none bg-slate-100  rounded-lg' />
            </div>
            <div className='mb-5g '>
                <label className='capitalize block mb-2'>qualification</label>
                <div className=' flex gap-6'>
                    <div className='mb-5'>
                        <label className='mr-3'>O'level</label>
                        <input type="radio" name='qualification' />
                    </div>
                    <div className='mb-3'>
                        <label className='mr-3'>Bsc</label>
                        <input type="radio" name='qualification' />
                    </div>
                </div>
            </div>
            <div className='mb-5'>
                <label className='capitalize block mb-2'>gender</label>
                <div className='mb-5 flex gap-6'>
                    <div className='mb-5'>
                        <label className='mr-3'>male</label>
                        <input type="radio" name='gender' />
                    </div>
                    <div className='mb-5'>
                        <label className='mr-3'>female</label>
                        <input type="radio" name='gender' />
                    </div>
                </div>
            </div>

            <div className='mb-5'>
            <label className='capitalize block mb-2'>comments</label>
            <textarea name="comment" placeholder='Tell us about your work experience' className='w-full h-[200px]  py-4 pl-4 outline-none bg-slate-100  rounded-lg'></textarea>
            </div>
    
            <button type='submit' className='  mt-7 px- block uppercase rounded-lg p-4 text-white bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%]'>apply</button>
        </form>
    </section>
  )
}

export default ApplyJob