import * as d3 from "d3"

export const height = 500;    

export let width = document.body.clientWidth;           //width used when a bubble has been chosen
export const baseWidth = document.body.clientWidth;     //baseWidth used when initiialised

export let scaleCircle = d3.scaleSqrt().domain([0,20]).range([10,80]);           //scale used when bubble has been chosen
export const baseScaleCircle = d3.scaleSqrt().domain([0,20]).range([10,80]);     //scale used when first initialised
export const scaleL = d3.scaleLinear().domain([5,80]).range([6,25]);             //text scale



export const goodColour = '#2BFF70';     //Colors used for bubbles
export const commonColour = 'white';
export const badColour = 'red';
export const neutralColour = 'yellow';    ////////////////////////



export const simulation = d3.forceSimulation();     //simulation which animates the bubbles



export const changeWidth = (bubblePicked) => {
  /* 
    If changeWidth takes in any non-falsy value, the reactSVG component scales the bubbles
    down to a fraction of the reactSVG component width, and it will also change the width of 
    the reactSVG component to accomodate the Information component. 
  */

  let lower = bubblePicked ? document.getElementById('react_SVG').width.animVal.value/60 : 20; 
  let higher = bubblePicked ? document.getElementById('react_SVG').width.animVal.value/30 : 40;    

  
  scaleCircle = bubblePicked ? d3.scaleSqrt().domain([0,20]).range([lower,higher]) : baseScaleCircle;  
  width =  bubblePicked ? document.getElementById('react_SVG').width.animVal.value * 0.7 : baseWidth;

}




// Forces functions which animate the bubbles based on whatever button is pressed.///////////////////////////

export const forceXCombine = (d) => {
  return width/2 
}

export const forceXSplit = (d) => {
  if (d.color === neutralColour){
    return width/2.1;
  }
  else {
    return d.color === commonColour ? width/2 : width * -0.4 ;
  }
  
}

export const forceXSplitByCandidate = (d) => {

  if (d.color === commonColour){
    return width/2.1
  }
  else if (d.color === badColour){
    return width/1.3
  }
  else if (d.color === goodColour){
    return width/5
  }
  else {
    return width/2;
  }


}
       
export const forceRemoveGood = (d) => {

  if (d.color === neutralColour){
    return width/2.1;
  }
  else {
    return d.color === badColour ? width/2 : width * -0.4 ;
  }
  
}       

       
export const forceRemoveBad = (d) => {
  if (d.color === neutralColour){
    return width/2.1;
  }
  else {
    return d.color === goodColour ? width/2 : width * -0.4 ;
  }
  
}       

export const forceY = (d) => {
  return height/2
}


export const forceCollide = (d) => {
  return scaleCircle(d.skillName.length) + 5
}

// End of forces functions///////////////////////////////////////////////////


