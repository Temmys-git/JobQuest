import React, { useEffect, useRef, useState } from "react";
import cheers from '../assets/images/joblisting_pic.jpeg';
import {Link} from 'react-router-dom';
import Button from "./Button";
import { jobs } from "../static/jobStatic";
import Header from "../components/Header";
import Pagignate from "../components/Paginate";


const Home = ()=>{
    const [jobLists,setJobLists] = useState(jobs);
    const [search,setSearch] = useState('');
    const [isSearch,setIsSearch] = useState(false)
    const browseId = useRef(null);
    const [currentPage,setCurrentPage] = useState(1);
    const [jobPerPage,setJobPerPage] = useState(6);
    const lastIndex = currentPage*jobPerPage //1 * 6 = 6;
    const firstIndex = lastIndex-jobPerPage //6 - 6 = 0;
    const currentJobs = jobLists.slice(firstIndex,lastIndex);
    const totalPage = Math.ceil(jobLists.length/jobPerPage);//4
   
    const filterJobs2 = (jobs)=>{
        return jobs.filter(job=>job.title.toLowerCase().includes(search.toLowerCase()))
    }
    
    const handleSearch = (e)=>{
        const value = e.target.value;
        setSearch(value)
        console.log(value)
        if(value.length === 0){
            setIsSearch(false)
        }else{
            setIsSearch(true)
        }
    }

    const filterJobs = isSearch ?  filterJobs2(jobLists) : filterJobs2(currentJobs)

    const paginationProps = {jobLists,totalPage,firstIndex,lastIndex,currentPage,setCurrentPage,setIsSearch,setSearch}

    const browseJob = ()=>{
        const id = browseId.current.getAttribute('id').slice(1);
        const element = document.getElementById(id);
        const position = element.offsetTop;
        console.log(position)
        window.scroll({
            left:0,
            top:position
        })
    }
    return (
        <section className="container" >
            {/* section1 */}
            <section >
            {/* text */}

            <article className="flex items-center gap-9  pt-16">
              <div  className="flex-[0.5]" >
              <h1 className=" text-5xl font-sans font-[900]"> We link you up with job recruiters</h1>
                <p className="mt-6">Connecting you with top recruiters to find your perfect job match. Explore opportunities, receive career guidance, and advance your career with our support. Your next job is just a connection away.</p>
                <button onClick={browseJob} ref={browseId} id='#browse' className='px-7 py-3 rounded-lg capitalize bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%] text-white text-[0.9rem] mt-8 font-sans'>browse job</button>
                {/* <Button text='browse job' styles='px-7 py-3 rounded-lg capitalize bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%] text-white text-[0.9rem] mt-8 font-sans'/> */}
              </div>
           <div className="h-[350px] flex-[0.5]">
           <img src={cheers} alt="" className="w-full h-full rounded-lg" />
           </div>
            </article>
            {/* image */}
        </section>

        {/* section2 */}

        <section className="mt-16">
            <h1 id='browse' className=" text-center text-5xl  font-sans font-[900] mx-auto mt-3 mb-8"> Search for available jobs</h1>

            {/* search */}
            <form  className="flex relative ">
                <input type="text" name="search" value={search}  placeholder="search for job" onChange={(e)=>handleSearch(e)} className="pl-9 w-full h-[85px] shadow border rounded-lg placeholder:text-lg placeholder:text-[#8f8f91]  placeholder:font-sans capitalize outline-0 focus:shadow-lg" />
                <Button text='search' styles= 'absolute top-[-19px] text-lg right-5 px-9 py-4 capitalize rounded-lg bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%] text-white text-[0.9rem] mt-8 font-sans'/>
            </form>
            
                
            {/* list of jobs */}
            <article className="flex  flex-wrap justify-center gap-5 mt-10">
                {
                    filterJobs.length == 0 ? <h1 className="text-4xl text-bolder">Job is not available</h1>: filterJobs.map((job)=>{
                        const {id,image,title,description} = job
                        return (
                            <div key={id} className="w-[29%] rounded-lg bg-white shadow pb-4 ">
                                <img src={image} alt={title} className="w-full h-[160px] rounded-t-lg"/>
                               <div className="px-5">
                               <h1 className="font-bold text-lg mt-5">{title}</h1>
                                <p>{description.slice(0,70)}.... <Link to={`/jobs/${id}`} className="text-[#448c7f]">learn more</Link></p>
                                {id}
                                <Link to='/applyJob' className='text-lg text-center  w-full py-2 capitalize rounded-md bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%] hover:bg-[#4fc4af] text-white text-[0.9rem] mt-4 font-sans block'>apply</Link>
                               </div>
                            </div>
                        )
                      
                    })
                }
            </article>

               <Pagignate paginationProps={paginationProps}/>


        </section>
        </section>
        
    )
}

export default Home;