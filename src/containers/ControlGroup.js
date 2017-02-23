import { connect } from 'react-redux';
import React from 'react';
import Controls from '../components/Controls';

import { simulation, forceXSplitByCandidate, forceXSplit, forceRemoveBad, forceRemoveGood, forceXCombine } from '../common_code/forces';
import * as d3 from "d3";

import { pickThis, pickCompareTo, updateTakeThis, updateCompareTo } from '../actions/controlActions';






class ControlGroup extends React.Component {
    
    
    byCandidate () {
        console.log("in candidate, has been pressed");
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

    thisPicked (e) {
        //console.log("this pick was selected", e.target.value);
    }
    
    compareToThis (e) {
        //console.log("compare to", e.target.value);
    }



    render() {
        return(
            <Controls split={this.byTag} relayTakeThis={this.props.relayThisPick} relayCompareTo={this.props.relayCompareTo} candidate={this.byCandidate} byGood={this.byTheGood} byBad={this.byTheBad} mesh={this.mesh}/>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        currentTakeThis: state.reactSVGReducer.takeThis,
        currentcompareTo: state.reactSVGReducer.compareToThis,
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        relayThisPick : (data) => {
            //console.log("in dispatch of controls: ", data.target);
            dispatch(updateTakeThis(data.target.value))
            dispatch(pickThis(data.target.value))
        },
        relayCompareTo : (data) => {
            //console.log("in dispatch of compare to:", data.target);
            dispatch(updateCompareTo(data.target.value))
            dispatch(pickCompareTo(data.target.value));
        }

    }
}

export default connect(null, mapDispatchToProps)(ControlGroup);


//export default ControlGroup;