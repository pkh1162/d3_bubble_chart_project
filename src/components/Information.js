import React from 'react';

const Information = (props) => {
  //console.log("in information", props);
  
  
  if (props.data){
    return (
    <div id="information" style={{flex: 2}}>
      <h2>{props.data.candidateName + ' : ' + props.data.name }</h2>
      <table>
        <thead>
        <tr><th></th></tr>
        </thead>
        <tbody>
        {props.data.projects == undefined ? "" : props.data.projects.links.map((d,i)=>{
            return <tr key={i}>
              <td><a target='_blank' href={d}>project sjkhsjk sdjsdkjds kjdsjkds kjhdkjds {i}</a></td>
              <td>This is a description of the current project.This is a description of the current project. This is a description of the current project. This is a description of the current project.</td>
              
              </tr>
          })}      
        </tbody>
      </table>
      {/*}
      <h3>Resources</h3>
      <ul>
        {props.data.resources == undefined ? "" : props.data.resources.links.map((d,i)=>{
          return <li key={i}>{d}</li>
        })}
      </ul>
      {*/}
    </div>
  )
}
else {
  return null
}
  
}


export default Information;