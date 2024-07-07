import React, { useState } from "react";
import { FaRegTrashAlt,FaEye } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
// import { jobs } from "../static/jobStatic";
import { Link } from "react-router-dom";
import { myAccountData } from "../static/myAccountData";


const MyAccount = ({modal,setModal})=>{
    const [value,setValue] = useState(0);
    
    const jobs = myAccountData[value].data
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
                

                        {
                            jobs.map(job=>{
                                return(
                                    <div key={job.id} className="flex justify-between shadow-md items-center  mt-7 p-4 ">
                                        <p className="text-lg font-sans font-[600] flex-[0.5]">{job.title}</p>
                                        {
                                            value === 0 ? (<div className="flex-[0.5]">

                                                <div className=" flex justify-between ">
                                            <LuPencil className="text-2xl text-green-500 cursor-pointer" />
                                                <FaRegTrashAlt className="text-red-500 text-2xl cursor-pointer"/>
                                                <div className="flex items-center gap-6 ">
                                                    <Link to={`/myAccount/job/${job.id}/applicants`}><FaEye className="text-blue-500 text-2xl cursor-pointer"/> </Link>
                                                    <p> 67</p>
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
                        }
                    </div>

            </section>
        </>
    )
}

export default MyAccount