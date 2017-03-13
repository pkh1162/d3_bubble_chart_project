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

CircleGroup.propTypes = {
  id : React.PropTypes.number.isRequired,
  data : React.PropTypes.object.isRequired,
  x : React.PropTypes.number,
  y : React.PropTypes.number,
  radius : React.PropTypes.number.isRequired,
  color : React.PropTypes.string,
}

export default CircleGroup;
