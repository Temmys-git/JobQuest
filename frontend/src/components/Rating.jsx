import React, { useState } from "react";
import Stars from "./Stars";
import Reviews from "./Review";

const Rating =({setModal})=>{
    const [point,setPoint] = useState(0);
    const [isRated,setIsRated] = useState(false)

    const handleStars =(index)=>{
        setPoint(index)
        setIsRated(true)
    }

    return(
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.7)] ">
                <div className="max-w-[1000px] text-center bg-white min-h-[400px]  mx-auto mt-6 py-6 rounded-md">
                 <div className="flex items-center justify-around">
                    <div>
                    <h1 className="text-xl capitalize">rate us</h1>
                        <p className="text-lg  mb-3">How would you rate your experience with this job</p>
                        <Stars
                        isRated={isRated} 
                        point={point}
                        handleStars={handleStars}
                        styles="text-3xl cursor-pointer "
                        />
                    </div>
                        <Reviews
                        isRated={isRated} 
                        point={point}/>
                 </div>

                    <div className="flex gap-5 mt-6 w-[max-content] mx-auto">
                        <button className="bg-gray-200 px-6 py-3 rounded-md" onClick={()=>setModal(false)} >Cancel</button>
                        <button className="bg-[#448c7f] px-6 py-3 rounded-md text-white">Done</button>
                    </div>
                </div>
        </div>
    )

}

export default Rating;