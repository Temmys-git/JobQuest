import React, { useEffect, useState } from "react";
import { FaRegTrashAlt,FaEye } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import Cookies from 'js-cookie'
// import { jobs } from "../static/jobStatic";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteJob, getJobs, getMyJobs } from "../../../features/jobSlice";
import { Circles } from "react-loader-spinner";
import { myApplications } from "../../../features/applicantSlice";
import { setJobId, setModal } from "../../../features/appStateSlice";
const MyAccount = ()=>{
    const [value,setValue] = useState(0);
    const [isJob,setIsJob] = useState(false);
    const {myJobs,status} = useSelector((state)=>state.jobs);
    const _myApplications = useSelector((state)=>state.myApplication);
    console.log(_myApplications,'here')
    const dispatch = useDispatch();

    const fetchJobs = async(id)=>{
        await dispatch(getJobs(id)).unwrap()
    }

    const fetchApplications = async()=>{
        await dispatch(myApplications()).unwrap()
    }

    const fetchMyJobs = async(id)=>{
        await dispatch(getMyJobs()).unwrap();
    }

    useEffect(()=>{
        fetchApplications()
    },[])
    useEffect(()=>{
        fetchJobs()
    },[])
    useEffect(()=>{
        fetchMyJobs()
    },[])
    

    const _deleteJob = async(id)=>{
        await dispatch(deleteJob(id)).unwrap();
    }

    const handleJobRating = (id)=>{
        dispatch(setModal(true))
        dispatch(setJobId(id))
        } 
    return(
        <>
            <section className="container ">
                <h1 className="text-center mt-16 text-5xl font-bold">My Account</h1>
            {/* <div className="flex justify-between mt-8">
                {
                    myAccountData.map((data,index)=>{
                        const {id,tab} = data
                        return (
                            <button key={id} onClick={()=>setValue(index)} className={`mt-5 py-4 rounded-br-md border-bf-[2px] bg-gray-100  capitalize flex-[0.5] font-[400] border-[green] ${index === value && "border-b-[2px] border-green-500" }`}>{tab}</button>
                        )
                    })
                }

</div> */}
                <div className="flex justify-between mt-8">

                           <button  onClick={()=>setIsJob(false)} className={`mt-5 py-4 rounded-br-md border-bf-[2px] bg-gray-100  capitalize flex-[0.5] font-[400] border-[green] ${!isJob && "border-b-[2px] border-green-500" }`}>my jobs </button>
                           <button  onClick={()=>setIsJob(true)} className={`mt-5 py-4 rounded-br-md border-bf-[2px] bg-gray-100  capitalize flex-[0.5] font-[400] border-[green] ${isJob && "border-b-[2px] border-green-500" }`}>my application </button>

                </div>
                
                {value === 0  && <h2 className="text-right mt-5">Applicants</h2>}
                    <div>
                    <div>
                
                {
                    status === 'pending' ? (
                        <div className="mx-auto mt-20 w-[max-content]">
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

                             !isJob ? (
                                myJobs?.map(job=>{
                                    return(
                                        <div key={job.id} className="flex justify-between shadow-md items-center  mt-7 p-4 ">
                                            <p className="text-lg font-sans font-[600] flex-[0.5]">{job.title}</p>
                                            {
                                                value === 0 ? (<div className="flex-[0.5]">
    
                                                    <div className=" flex justify-between ">
                                                        {/* edit job */}
                                                <Link to={`myJobs/${job.id}`}>
                                                <LuPencil className="text-2xl text-green-500 cursor-pointer" />
                                                </Link>
                                                    {/* delete job */}
                                                    <FaRegTrashAlt className="text-red-500 text-2xl cursor-pointer"  onClick={()=>_deleteJob(job.id)}/>
                                                    <div className="flex items-center gap-6 ">
                                                        <Link to={`/myAccount/job/${job.id}/applicants`}><FaEye className="text-blue-500 text-2xl cursor-pointer"/> </Link>
                                                        <p> {job?.applicants?.length}</p>
                                                    </div>
                                           </div>
                                                </div>):(
                                            <div>
                                                {/* <p className="text-yellow-500">Pending</p> */}
                                                <p className="text-green-500">Accepted</p>
                                                {/* <p className="text-red-500">Declined</p> */}
                                                <button onClick={handleJobRating} className="px-2 py-1 mx-auto block rounded-lg capitalize bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%] text-white text-[0.9rem] mt-1 font-sans" >rate</button>
                                            </div>
    
                                           )
                                            }
                                        </div>
                                    )
                                })
                              ):
                            //   here
                            _myApplications?.myApplications?.map(application=>{
                                const { status, myJob} = application
                                return (
                                    <div key={application.id} className="flex justify-between shadow-md items-center  mt-7 p-4 ">
                                    <p className="text-lg font-sans font-[600] flex-[0.5]">{myJob.title}</p>
                    
                                    <div>
                                        <p className={`${status === 'pending' && " text-yellow-500 " } ${status === 'accepted' && " text-green-500 " } ${status === 'declined' && 'text-red-500' }`}>{status}</p>
                                      {status === 'accepted'&&  <button onClick={()=>handleJobRating(myJob._id)} className="px-2 py-1 mx-auto block rounded-lg capitalize bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%] text-white text-[0.9rem] mt-1 font-sans" >rate</button>}
                                    </div>
                                </div>
                                )
                            })
                            
                        )
                }
            </div>
                    </div>
            </section>
        </>
    )
}

export default MyAccount