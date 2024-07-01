import React from "react";
import { FaRegTrashAlt,FaEye } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { jobs } from "../static/jobStatic";
import { Link } from "react-router-dom";

const MyAccount = ()=>{
    return(
        <>
            <section className="container ">
                <h1 className="text-center mt-16 text-5xl font-bold">My Account</h1>

                <h2 className="text-right">Applicants</h2>

                    <div>
                        {
                            jobs.map(job=>{
                                return(
                                    <div key={job.id} className="flex justify-between shadow-md  mt-7 p-4 ">
                                        <p className="text-lg font-sans font-[600] flex-[0.5]">{job.title}</p>
                                        <div className=" flex gap-2 items-center text-green-500">
                                            <LuPencil className="text-2xl cursor-pointer" />
                                        </div>
                                        <FaRegTrashAlt className="text-red-500 text-2xl cursor-pointer"/>
                                        <div className="flex items-center gap-6 ">
                                            <Link to={`/myAccount/job/${job.id}/applicants`}><FaEye className="text-blue-500 text-2xl cursor-pointer"/> </Link>
                                            <p> 67</p>
                                        </div>
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