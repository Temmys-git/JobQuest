import React from "react";

const Pagignate =({paginationProps})=> {
    const {totalPage,job,firstIndex,lastIndex,setCurrentPage,currentPage,setIsSearch,setSearch} = paginationProps
    
    const npages = []

    for(let i = 1; i<=totalPage; i++){
        npages.push(i)
    }
    
    const next =()=>{
        setIsSearch(false)
        setSearch('')
        setCurrentPage(currentPage+1)
    }

    const prev =()=>{
        setIsSearch(false)
        setSearch('')
        setCurrentPage(currentPage-1)
    }

    const navigatePage = (page)=>{
        setIsSearch(false)
        setSearch('')
        setCurrentPage(page)
    }

    return (
        <div className="flex justify-between items-center mt-9">
        <p>
<span>{firstIndex} </span> to <span>{lastIndex > job.length ? job.length:lastIndex }</span> of <span>{job.length}</span> </p>
                    <div className="flex   gap-5">
                        <button disabled={currentPage === 1} onClick={prev} className={ `${currentPage === 1 && 'cursor-not-allowed'} text-lg   p-2 capitalize rounded-md bg-gradient-to-tl from-[#9ad9cc] to-[50%] to-[#448c7f] from-[50%] hover:bg-[#4fc4af] text-white text-[0.9rem] mt-4 font-sans`}>prev</button>
                    <div className="flex gap-3 items-center mt-4 ">
                        {
                            npages.map(page=>{
                                return(
                                    <button key={page} onClick={()=>navigatePage(page)} className={`py-1 px-1.5 border-[1px] border-solid ${page===currentPage&&' active'}`}>{page}</button>
                                )
                            })
                        }
                    </div>
                        <button disabled={currentPage === npages.length} onClick={next} className={`${currentPage===npages.length&& 'cursor-not-allowed'} text-lg   p-2 capitalize rounded-md bg-gradient-to-tl from-[#448c7f] to-[50%] to-[#9ad9cc] from-[50%] hover:bg-[#4fc4af] text-white text-[0.9rem] mt-4 font-sans`} >next</button>
                    </div>

        </div>
    )
}

export default Pagignate