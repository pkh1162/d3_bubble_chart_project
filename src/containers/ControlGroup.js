import { connect } from 'react-redux';
import React from 'react';
import * as d3 from "d3";

import Controls from '../components/Controls';

import { simulation, forceXSplitByCandidate, forceXSplit, forceRemoveBad, forceRemoveGood, forceXCombine } from '../common_code/forces';

import { updateTakeThis, updateCompareTo } from '../actions/controlActions';
import { getProfile } from '../actions/reactSVGActions';
import { getProfiles, getSkillsData } from '../actions/databaseAsync';






class ControlGroup extends React.Component {

    componentWillMount() {
        this.props.getAllProfiles();        //Retrieves profiles from database and initialises selections to the first profile retrieved        
      }

    byCandidate () {
        simulation
        .force("forceX", d3.forceX(forceXSplitByCandidate).strength(0.05))
        .alphaTarget(0.3)   
        .restart()
    }
  
    byTag () {
        simulation
        .force("forceX", d3.forceX(forceXSplit).strength(0.03))
        .alphaTarget(0.3)   
        .restart()
    }
  
    byTheGood () {
        simulation
        .force("forceX", d3.forceX(forceRemoveBad).strength(0.03))
        .alphaTarget(0.5)   
        .restart()
    }
  
    byTheBad () {
        simulation
        .force("forceX", d3.forceX(forceRemoveGood).strength(0.03))
        .alphaTarget(0.5)   
        .restart()
    }
  
    mesh () {
        simulation
        .force("forceX", d3.forceX(forceXCombine).strength(0.04))
        .alphaTarget(0.3)   
        .restart()
    }

    render() {
        if (!this.props.requestingData){
            return(
                <Controls split={this.byTag} 
                    profiles={this.props.profiles} 
                    relayTakeThis={this.props.relayThisPick} 
                    relayCompareTo={this.props.relayCompareTo} 
                    candidate={this.byCandidate} byGood={this.byTheGood} 
                    byBad={this.byTheBad} 
                    mesh={this.mesh}/>
            )
        }
        else {
            return <h1>Still Loading</h1>
        }
        
    }
}





ControlGroup.propTypes = {
    profiles : React.PropTypes.array.isRequired,
    requestingData : React.PropTypes.bool,
    currentTakeThis : React.PropTypes.string.isRequired,
    currentcompareTo : React.PropTypes.string 
}


const mapStateToProps = (state, ownProps) => {
    return {
        profiles : state.reactSVGReducer.profiles,
        requestingData : state.reactSVGReducer.requestingData,
        currentTakeThis: state.reactSVGReducer.takeThis,
        currentcompareTo: state.reactSVGReducer.compareToThis,
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        relayThisPick : (data) => {
            dispatch(getProfile())                          //Sets current profile to null in order to get rid of candidate details
            dispatch(updateTakeThis(data.target.value))     //Updates first selection and changes scale
            dispatch(getSkillsData())                       //Updates bubbles to reflect both selections
        },
        relayCompareTo : (data) => {
            dispatch(getProfile())                          //See relayThisPick,  
            dispatch(updateCompareTo(data.target.value))    //updates second selection.
            dispatch(getSkillsData())                       ///////////////////////////////////////
        },
        getAllProfiles : () => {
            dispatch(getProfiles());                        //Retrieves profiles from database and initialises selections to the first profile retrieved
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlGroup);


