import React from 'react';

const Information = (props) => {  
  
  if (props.data){

    let projects = props.data.projects || props.data.uniqueProjects;
    return (
    <div id="information" className={props.classProp}>
      <h2>{props.data.candidateName ? (props.data.candidateName + ' : ' + props.data.skillName) : "Unique Projects"}</h2>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Description</th>
            {props.data.uniqueProjects ? <th>Tags</th> : null}
          </tr>
        </thead>
        <tbody>
        {projects === undefined ? "" : projects.map((d,i) => {
            return <tr key={i}>
              <td><a target='_blank' href={d.link}>{d.name}</a></td>
              <td> { d.description } </td>
              {d.tags ? <td>{d.tags ? d.tags.map(t => "[" + t + "] ") : ""}</td> : null}
              
              </tr>
          })}      
        </tbody>
      </table>
    </div>
  )
}
else {
  return null
}
  
}

Information.propTypes = {
  data : React.PropTypes.object.isRequired
}


export default Information;