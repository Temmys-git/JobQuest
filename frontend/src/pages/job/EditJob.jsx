import React, { useEffect, useState } from 'react'
import { MdOutlineUploadFile, MdUploadFile } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { editJob, getSingleJob } from '../../../features/jobSlice';
import { useParams } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';


const EditJob = () => {
  const  {status,singleJob} = useSelector((state)=>state.jobs);
  const [title,setTitle] = useState(singleJob?.title);
  const [description,setDescription] = useState(singleJob?.description);
  const [image,setImage] = useState(singleJob?.imageUrl);
  const [imageFile,setImageFile] = useState('');
  const dispatch = useDispatch();
  const {id} = useParams();

  const {user:{_id}} = useSelector((state)=>state.user);

  const payload = {
  title,description,image:imageFile,user:_id,id:singleJob?._id
  }

//   const payload = {
//     id,
//     data:{title,description,image:imageFile,user:_id,id:singleJob?._id}
//   }
  const fetchSingleJob = async()=>{
    await dispatch(getSingleJob(id)).unwrap();
}

useEffect(()=>{
    fetchSingleJob()
},[id])


  const updateJob = async(e)=>{
      e.preventDefault();
      await dispatch(editJob(payload)).unwrap();
  }

  const handleImage = (e)=>{
    const file = e.target.files[0];
    if(file){
            setImageFile(file);
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = function(e){
            setImage(e.target.result)
            console.log(e.target.result)
    }
    }

  }

  console.log(title)


  return (
    <section>
        {
            status === 'pending'?(
                <div className='mx-auto  mt-32 w-[max-content]'>
                    <Circles
                    height="80"
                    width="80"
                    color="#448c7f"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
            />
                </div>
            ):(
                
                <div>
                    <h1 className='text-center my-9 text-5xl font-bold font-sans capitalize  bg-clip-text text-transparent bg-gradient-to-tl from-[#448c7f]  from-[50%] to-[50%] to-[#9ad9cc] py-3 '> edit job</h1>

<form onSubmit={(e)=>updateJob(e)} encType='multipart/form-data' className=' max-w-[500px] mx-auto'> 
    <div className='mb-5 '>
            <label htmlFor="image" className='block w-full h-full'>
                <img src={image} alt='' className='w-full h-full' />
            </label>
        <input type="file" id='image' name="image" onChange={(e)=>handleImage(e)}  className='hidden' />
       
    </div>
    <div className='mb-5'>
        <label className='capitalize block mb-2'>title</label>
        <input type="text" name="title"  className='w-full  py-4 pl-4 outline-none bg-slate-100  rounded-lg'
        onChange={(e)=>setTitle(e.target.value)} value={title} placeholder='e.g Mechanic'/>
    </div>

    <div>
         <label className='capitalize block mb-2'>description</label>
          <textarea name="description" onChange={(e)=>setDescription(e.target.value)} value={description} placeholder='Tell us about your work experience' className='w-full h-[100px]  py-4 pl-4 outline-none bg-slate-100  rounded-lg'></textarea>

    </div>

    <button type='submit'
    className='mt-7 px- block capitalize rounded-lg w-full py-4 text-white bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%]'>edit job</button>
</form>
                </div>
            )
        }

</section>
  )
}

export default EditJob