import React from "react";
import { reviews } from "../static/jobStatic";
import Stars from "./Stars";
import { FaRegStar } from "react-icons/fa";


const Reviews = ({isRated,point})=>{
    return(
        <div className="mt-6 flex-[0.7] ">
        <h2 className="text-xl ">Reviews</h2>
            <ul className="text-left">
                {
                    reviews.map(({id,description},index)=>{
                        return (
                            <li key={id} className={`flex justify-between  items-center rounded-sm shadow-md px-7 py-4 mb-4 ${isRated&&point+1 === id && "shadow-ms shadow-[#a8c8c2]"}`}>
                            <p >{description}</p>
                            { 
                                point+1 === id ?
                                <Stars
                                isRated={isRated} 
                                point={point}/>
                                :
                               <div className="flex justify-end gap-4 flex-[0.7]">
                                   {
                                      Array(5).fill(0).map((star,index)=>{
                                        return <FaRegStar key={index}/>
                                    })
                                   }
                               </div>
                            }
                        </li>
                        )
                    })

                }
            </ul>
        </div>
    )
}
export default Reviews