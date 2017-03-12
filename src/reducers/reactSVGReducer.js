
import { findProfile, sortBubbles } from '../common_code/dataLogic';
import {forceCollide, forceY, forceXCombine, simulation, changeWidth } from "../common_code/forces";
import * as d3 from 'd3';
import makeObjects from '../common_code/prepareDbData';

import { REQUESTING_PROFILE_DATA, RECEIVED_PROFILE_DATA, RECEIVE_SKILLS_DATA } from '../actions/databaseAsync';
import {  UPDATE_TAKE_THIS, UPDATE_COMPARE_TO } from '../actions/controlActions';
import {  GET_PROFILE, BUBBLE_PICKED } from '../actions/reactSVGActions';


/*
  The default state begins the simulation used to animate the bubbles
*/
let defaultState = {
        data : [],
        bubblePicked : null,
        currentProfile : null,
        profiles : [],
        skillsObject : {},
        takeThis : '',
        compareTo : '',
        react_simulation : simulation
          .force("forceX", d3.forceX(forceXCombine).strength(0.04))
          .force("forceY", d3.forceY(forceY).strength(0.04))
          .force("collide", d3.forceCollide(forceCollide))
      };


const reactSVGReducer = (state = defaultState, action) => {
    switch (action.type) {
        case BUBBLE_PICKED :
        //Updates bubblePicked to be the bubble clicked on by the user 
          return {...state, bubblePicked : action.bubble}
        
        case UPDATE_TAKE_THIS :
          //Changes width to full screen, updates the first selection and sets bubblePicked to null, which gets rid of candidatePage component 
          changeWidth();
          return {...state, takeThis : action.data, bubblePicked : null}
        case UPDATE_COMPARE_TO :
          //Changes width to full screen, updates the second selection and sets bubblePicked to null, which gets rid of candidatePage component 
          changeWidth();
          return {...state, compareTo : action.data, bubblePicked : null}   
        
        case REQUESTING_PROFILE_DATA :
          return {...state, requestingData : true};
        
        case RECEIVED_PROFILE_DATA :
          //Initialises selections, creates skill objects for profiles and sets profiles to data from database
          return {...state, 
                      requestingData : false, 
                      profiles : action.profiles, 
                      skillsObject : makeObjects(action.profiles), 
                      takeThis : action.profiles[0].name,
                      compareTo : action.profiles[0].name
                 } 
        case GET_PROFILE :
          //If a bubble is picked, then its candidate's profile is retrieved, is not, the profile is set to null and the candidatePage is removed
          if(action.profile){
            return {...state, currentProfile : findProfile(action.profile.candidateName, state.profiles)}
          } 
          else{
            return {...state, currentProfile : null}
          }
        case RECEIVE_SKILLS_DATA :
          /*
            Sends selection names to sortBubbles, which finds the bubbles and sorts them into colours
            based upon whether or not the two profiles being compared either both have the skill or only one
            of them has it. Sets data state to be an array of all bubbles contained within the profiles being
            compared.
          */ 
          return {...state, data : sortBubbles(state.skillsObject, state.takeThis, state.compareTo)}
        default : 
            return state;
    }
}

export default reactSVGReducer;



