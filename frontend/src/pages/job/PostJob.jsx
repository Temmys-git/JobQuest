import React, { useEffect, useState } from 'react'
import { MdOutlineUploadFile, MdUploadFile } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { storeJob } from '../../../features/jobSlice';
import { Navigate, useNavigate } from 'react-router-dom';


const PostJob = () => {
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [image,setImage] = useState('');
  const [imageFile,setImageFile] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const {_id} = useSelector((state)=>state.user)
  const {user,status} = useSelector((state)=>state.user)
// console.log(_id)

  const data = {title,description,image:imageFile,user:user?._id}

  const  createJob = async(e)=>{
      e.preventDefault();
      await dispatch(storeJob(data)).unwrap();
      navigate('/')
  }

  const handleImage = (e)=>{
    const file = e.target.files[0];
    setImageFile(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    console.log(file)
    fileReader.onload = function(e){
      setImage(e.target.result)
      console.log(e.target.result)
    }

  }

  return (
    <section>
    <h1 className='text-center my-9 text-5xl font-bold font-sans capitalize  bg-clip-text text-transparent bg-gradient-to-tl from-[#448c7f]  from-[50%] to-[50%] to-[#9ad9cc] py-3 '> post job</h1>

    <form onSubmit={(e)=>createJob(e)} encType='multipart/form-data' className=' max-w-[500px] mx-auto'> 
        <div className='mb-5 relative'>
              {
                image ?(
                <div className='w-full  h-[200px]'>
                    <img src={image} alt='' className='w-full h-full'/>
                </div>):
              <div  className='w-full  h-[200px]'>
                <label htmlFor='image' className='block w-full h-full bg-slate-100 text-center pt-20 rounded-lg text-slate-500 '>Upload a image for job description</label>
                <MdOutlineUploadFile  className=' text-4xl text-slate-500 absolute top-10 left-56 '/>
            </div>
              }
            <input type="file" id='image' name="image" onChange={(e)=>handleImage(e)}  className='hidden' />
           
        </div>
        <div className='mb-5'>
            <label className='capitalize block mb-2'>title</label>
            <input type="text" name="title"  className='w-full  py-4 pl-4 outline-none bg-slate-100  rounded-lg'
            onChange={(e)=>setTitle(e.target.value)} placeholder='e.g Mechanic'/>
        </div>

        <div>
             <label className='capitalize block mb-2'>description</label>
              <textarea name="description" onChange={(e)=>setDescription(e.target.value)} placeholder='Tell us about the job' className='w-full h-[100px]  py-4 pl-4 outline-none bg-slate-100  rounded-lg'></textarea>

        </div>

        <button type='submit'
        className='mt-7 px- block uppercase rounded-lg w-full py-4 text-white bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%]'>post job</button>
    </form>
</section>
  )
}

export default PostJob