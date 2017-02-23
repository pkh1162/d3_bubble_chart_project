import { variables } from './tempData'



//Returns array of objects common to both inputs
let getCommon = (common1, common2, colorChange) => {

    console.log("in get common", common1, common2);

  return [...common1].filter(d => {
    for (let i in common2){
      if (d.name === common2[i].name){
        if (colorChange){
            d.color = colorChange;
        }
        return d.name == common2[i].name  
      } 
    }  
  })
}


let getUnique = (unique, common, colorChange) => {
  return [...unique].filter(d => {
    for (let i in common){
      if (d.name == common[i].name){
          return false;  
      }
      else if (d.name !== common[i].name && i==common.length-1){
          if (colorChange){
              d.color = colorChange;
          }
          return d;
      }
    }  
  })  
}






export const dataManipulation = (takeThis, compareTo) => {

    console.log("data pop:", takeThis, compareTo);
    if (takeThis === compareTo){
        return getCommon(variables[takeThis], variables[compareTo], 'yellow');
        //return variables[takeThis];
    }
    else {
        //find common to both
        let common = getCommon(variables[takeThis], variables[compareTo], 'white');
        console.log("common to both are: ", common);
        
        //find unique to take_this
        let uniqueToTakeThis = getUnique(variables[takeThis], variables[compareTo], 'green');
        console.log("unique to source: ", uniqueToTakeThis);
        
        //find unique to compareTo
        let uniqueToCompareTo = getUnique(variables[compareTo], variables[takeThis], 'red');
        console.log("common to target are: ", uniqueToCompareTo);
        
        //add them to object, and return it
        let all = [];
        all = all.concat(common);
        all = all.concat(uniqueToTakeThis);
        all = all.concat(uniqueToCompareTo);
        
        return all;
    }
}



//console.log(getUnique(Bob, Mary));  //Get unique to Bob compared to Mary
//console.log(getUnique(Bob, Bob));   //Returns no data
//console.log(getCommon(Bob, Mary));  //Get common between Mary and Bob
//console.log(getCommon(Bob, Bob));   //Get all of Bobs data

//console.log(pop);
