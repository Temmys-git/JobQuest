import React, { useEffect, useState } from "react";
import { FaRegTrashAlt,FaEye } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
// import { jobs } from "../static/jobStatic";
import { Link, useParams } from "react-router-dom";
import { myAccountData } from "../static/myAccountData";
import { useDispatch, useSelector } from "react-redux";
import { deleteJob, getJobs, getMyJobs } from "../../features/jobSlice";
import { Circles } from "react-loader-spinner";


const MyAccount = ({modal,setModal})=>{
    const [value,setValue] = useState(0);

    const {myJobs,status} = useSelector((state)=>state.jobs);
    console.log(myJobs)
    const dispatch = useDispatch();

    const fetchJobs = async(id)=>{
        await dispatch(getJobs(id)).unwrap()
    }
    const fetchMyJobs = async(id)=>{
        await dispatch(getMyJobs()).unwrap()
    }

    useEffect(()=>{
        fetchJobs()
    },[])
    useEffect(()=>{
        fetchMyJobs()
    },[])
    
    const jobs = myAccountData[value].data

    const _deleteJob = async(id)=>{
        await dispatch(deleteJob(id)).unwrap();
    }
    return(
        <>
            <section className="container ">
                <h1 className="text-center mt-16 text-5xl font-bold">My Account</h1>
            <div className="flex justify-between mt-8">
                {
                    myAccountData.map((data,index)=>{
                        const {id,tab} = data
                        return (
                            <button key={id} onClick={()=>setValue(index)} className={`mt-5 py-4 rounded-br-md border-bf-[2px] bg-gray-100  capitalize flex-[0.5] font-[400] border-[green] ${index === value && "border-b-[2px] border-green-500" }`}>{tab}</button>
                        )
                    })
                }
                
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

                              myJobs?.length === 0  ? (
                                <div>
                                    <Link to="/postJobs" className="text-center block text-lg cursor-pointer">Post job </Link>
                                   
                                </div>
                              ):(
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
                                                        <p> {job.applicants.length}</p>
                                                    </div>
                                           </div>
                                                </div>):(
                                            <div>
                                                {/* <p className="text-yellow-500">Pending</p> */}
                                                <p className="text-green-500">Accepted</p>
                                                {/* <p className="text-red-500">Declined</p> */}
                                                <button onClick={()=>setModal(true)} className="px-2 py-1 mx-auto block rounded-lg capitalize bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%] text-white text-[0.9rem] mt-1 font-sans" >rate</button>
                                            </div>
    
                                           )
                                            }
                                        </div>
                                    )
                                })
                              )
                            
                        )
                }
            </div>
                    </div>

            </section>
        {/* <h1>hello</h1> */}
        </>
    )
}

export default MyAccount