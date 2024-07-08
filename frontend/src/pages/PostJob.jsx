import React, { useEffect } from 'react'
import { MdOutlineUploadFile, MdUploadFile } from "react-icons/md";


const PostJob = () => {

  const fetchJob = async()=>{

    const response = await fetch('http://localhost:8000/jobs');
    const data = await response.json();
    console.log(data)
  }

  useEffect(()=>{
    fetchJob();
  },[])
  return (
    <section>
    <h1 className='text-center my-9 text-5xl font-bold font-sans capitalize  bg-clip-text text-transparent bg-gradient-to-tl from-[#448c7f]  from-[50%] to-[50%] to-[#9ad9cc] py-3 '> post job</h1>

    <form className=' max-w-[500px] mx-auto'> 
        <div className='mb-5 relative'>
            <div  className='w-full  h-[200px]'>
                <label htmlFor='image' className='block w-full h-full bg-slate-100 text-center pt-20 rounded-lg text-slate-500 '>Upload a image for job description</label>
                <MdOutlineUploadFile  className=' text-4xl text-slate-500 absolute top-10 left-56 '/>
            </div>
            <input type="file" id='image' className='hidden' />
           
        </div>
        <div className='mb-5'>
            <label className='capitalize block mb-2'>title</label>
            <input type="text"  className='w-full  py-4 pl-4 outline-none bg-slate-100  rounded-lg'
            placeholder='e.g Mechanic'/>
        </div>

        <div>
             <label className='capitalize block mb-2'>description</label>
              <textarea name="comment" placeholder='Tell us about your work experience' className='w-full h-[100px]  py-4 pl-4 outline-none bg-slate-100  rounded-lg'></textarea>

        </div>

        <button type='submit' className='  mt-7 px- block uppercase rounded-lg w-full py-4 text-white bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%]'>apply</button>
    </form>
</section>
  )
}

export default PostJob