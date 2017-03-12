import { goodColour, badColour, commonColour, neutralColour } from './forces'



let getCommon = (profile1, profile2, colorChange) => {
//Finds skills common to both profiles being compared, and turns the bubbles an appropriate colour.
  return [...profile1].filter(d => {
    for (let i in profile2){
      if (d.skillName === profile2[i].skillName){
        if (colorChange){
            d.color = colorChange;
        }
        return d.skillName === profile2[i].skillName  
      }
    }
     
  })
}


let getUnique = (profile1, profile2, colorChange) => {
//Finds skills unique to profile1, and change the bubble associated with that skill an appropriate color

  return [...profile1].filter(d => {
    for (let i in profile2){
      if (d.skillName === profile2[i].skillName){
          return false;  
      }
      else if (d.skillName !== profile2[i].skillName && Number(i) === profile2.length-1){
         if (colorChange){
              d.color = colorChange;
          }
          return d;
      }
    }  
  })  
}






export const sortBubbles = (skillsObject, takeThis, compareTo) => {
    
    if (takeThis === compareTo){
        return getCommon(skillsObject[takeThis], skillsObject[compareTo], neutralColour);
    }
    else {
        //finds skills common to both profiles
        let common = getCommon(skillsObject[takeThis], skillsObject[compareTo], commonColour);
        
        //find unique skills to first profile selected (takeThis)
        let uniqueToTakeThis = getUnique(skillsObject[takeThis], skillsObject[compareTo], goodColour);
        
        //find unique skills to second profile selected (compareTo)
        let uniqueToCompareTo = getUnique(skillsObject[compareTo], skillsObject[takeThis], badColour);
        
        //add common, uniqueToTakeThis, and uniqueToCompareTo and add them to a single array.
        let allSkills = [];
        allSkills = allSkills.concat(common);
        allSkills = allSkills.concat(uniqueToTakeThis);
        allSkills = allSkills.concat(uniqueToCompareTo);

        return allSkills;
    }
}


export const findProfile = (nameIdentifer, profiles) => {
//finds the profile associated with the nameIdentifier given

    for (let i in profiles){
        if (profiles[i].name === nameIdentifer){
            return profiles[i];
        }
    }
}


