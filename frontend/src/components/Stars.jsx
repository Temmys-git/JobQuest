import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";


const Stars =({isRated,handleStars,handleRating,point,styles})=>{
    
    return (
        <div className="flex gap-5 justify-center ">
        {
            Array(5).fill(0).map((star,index)=>{
                return (

                   <div key={index}>
                       {isRated ? index <= point ? <FaStar  className={`${styles} ${isRated&&index<=point&&"text-[#448c7f]"}`} onClick={()=>handleStars(index)}/>:<FaRegStar className={`${styles}  ${isRated&&index<=point&&"text-red-500"}`} onClick={()=>handleStars(index)}/>:<FaRegStar className={`${styles}  ${isRated&&index<=point&&"text-red-500"}`} onClick={()=>handleStars(index)}/>}

                    </div>
                )
            })
        }
       
    </div>
    )
}

export default Stars