import * as d3 from "d3"


//console.log("client width", document.getElementByClass("graphicsContainer").);
export let width = document.body.clientWidth;
export const height = 500;
export const baseWidth = document.body.clientWidth;

export const baseScaleCircle = d3.scaleSqrt().domain([0,20]).range([10,80]);
export let scaleCircle = d3.scaleSqrt().domain([0,20]).range([10,80]);
export const scaleL = d3.scaleLinear().domain([5,80]).range([6,25]);



export const simulation = d3.forceSimulation();
export const sim2 = d3.forceSimulation();
        
export const changeWidth = (x, y) => {
  console.log("in changeWIdth, react_SVG", width);
  let temp = document.getElementById('react_SVG').width.animVal;  
  let lower = x ? document.getElementById('react_SVG').width.animVal.value/60 : 20;
  let higher = x ? document.getElementById('react_SVG').width.animVal.value/30 : 40
  console.log("lower:", lower);
  console.log("higher", higher);
  //scaleCircle = d3.scaleSqrt().domain([0,20]).range([5,30])
  /*switch (x) {
    case 'Bubble' : 
      width = temp * 0.7;
      break;
    case 'Should' : 
      console.log("in should cond :", y)
      width = 1349
    default : 
      width = window.screen.availWidth;
  }


  if (x === 'Bubble'){
    console.log("in bubble")
    width = temp * 0.7
  }
  else if (x === 'Should'){
    console.log("in sssoso")
    width = 1049;
  }
  else{
    width=200;
  }
*/
  console.log("sssss", x)
  console.log("number of elements: ", document.getElementsByTagName('circle').length)
  scaleCircle = x ? d3.scaleSqrt().domain([0,20]).range([lower,higher]) : baseScaleCircle;
  
 
  width =  x ? document.getElementById('react_SVG').width.animVal.value * 0.7 : baseWidth;

}

export const forceXCombine = (d) => {
  console.log(width);
  //let currentWidth = document.getElementById('react_SVG').width;
  return width/2 
}

export const forceXSplit = (d) => {
  if (d.color === 'yellow' || d.color === 'purple'){
    return width/2.1;
  }
  else {
    return d.color == 'white' ? width/2 : width * -0.4 ;
  }
  
}

export const forceXSplitByCandidate = (d) => {
  //return d.candidateName == "Bob" ? width/1.3 : width/5.5;

  if (d.color === 'white'){
    return width/2.1
  }
  else if (d.color === 'red'){
    return width/1.3
  }
  else if (d.color === 'green'){
    return width/5
  }
  else {
    return width/2;
  }


}
       
export const forceRemoveGood = (d) => {

  do {
    var random = Math.random() * (2 - (-2)) - 2;
  } while(random > -1.5 && random < 1.5);

console.log(random);
  if (d.color === 'yellow' || d.color === 'purple'){
    return width/2.1;
  }
  else {
    return d.color == 'red' ? width/2 : width * -0.4 ;
  }
  
  //return d.noSkill ? width/2 : width*2
}       

       
export const forceRemoveBad = (d) => {
  if (d.color === 'yellow' || d.color === 'purple'){
    return width/2.1;
  }
  else {
    return d.color == 'green' ? width/2 : width * -0.4 ;
  }
  
}       

export const forceY = (d) => {
  return height/2
}


export const forceCollide = (d) => {
  return scaleCircle(d.name.length) + 5
}




