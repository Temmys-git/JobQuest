import React from "react";

const Button = ({text,styles,event})=>{
    return (
        <button  className={styles} onClick={event?event:undefined} >{text}</button>
    )
}

export default Button;