
/*
  makeObjects() takes in an array of profile objects, one for each candidate. From these profiles a single skills object is returned
  with keys for each candidate name, and a corresponding value which contains an array of their skills. These skill arrays contain 
  the name of the skill and an array of projects associated with each particular skill.
  A rough example:
  input => fetchedProfiles= [BobProfile, MaryProfile]
  output => skillsObject = {
    Bob : [{javascript skill}, {html skill}, {d3 skill}],
    Mary : [{javascript skill}, {go skill}, {erlang skill}, {node skill}]
  }

*/




const common = {
  candidateName : '',
  skillName : '',
  projects : {
  links : []
}
}

const mesh = {
  name : '',
  description : '',
  link : ''
}


let makeObjects = (fetchedProfiles) => {

    
    let skillsArray = fetchedProfiles.map(profileObj => {
    //loop through the profiles, and keep the candidates name.

    let profileName = profileObj.name;
    let returnObject = {};
    
    profileObj.uniqueProjects.map(proj => {
    //loop through a prfoiles projects. For each project, take its name, description and url link.
      let pName = proj.name;
      let pLink = proj.link;
      let pDescription = proj.description;
     
      
      proj.tags.map((tag, i) => {
      //for each project, loop through its skill tags, ie: javascript, d3 react
        
        if (!returnObject.hasOwnProperty(tag)){
        //if returnObject does not have the skill tag as a key, create a key for that skill and give it a value which
        //represents that candidates association to the skill. ie: the projects they have built using the skill.
          
          let pMesh = {...mesh, 
                       name : pName, 
                       description : pDescription, 
                       link : pLink
                      }
          
          let com = {...common, 
                       skillName : tag,
                       candidateName : profileName,
                       projects : [pMesh]   
                    }
          returnObject[tag] = com;
        } 
        else {
        //if the returnObject already has a key which is the same as the skill tag, then to the key value, a representation
        //of the project which we are currently looped on.
          returnObject[tag].projects.push({...mesh, 
                                           name:pName, 
                                           description:pDescription, 
                                           link:pLink})
        }
        
        
      })
    })



    let returnArray = Object.values(returnObject);    
    /*
      Create an array out of the returnObject: ie:
      returnObject = {javascript : {js object}, d3 : {d3 object}}
      =>
      returnArray = [{js object}, {d3 object}]
    */

    return returnArray;

    })
    
    



    let skillsObject = {};

    for (let i in fetchedProfiles){
    //loop through profiles and associate the correct name to each array of skill objects
      if (i)
        skillsObject[fetchedProfiles[i].name] = skillsArray[i];
    }
    
    
    return skillsObject;

  }


export default makeObjects;

