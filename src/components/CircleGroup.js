import React from 'react';


const CircleGroup = (props) => {
  let d = props.data;
  
  return(
    <circle key={props.id} 
            stroke="black" 
            strokeWidth='2' 
            cx={d.x} cy={d.y} 
            fill={d.color} 
            r={props.radius} 
            className={props.id}></circle>   
   )
}

export default CircleGroup;
