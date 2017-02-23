import React from "react";
import { simulation, forceXSplitByCandidate } from '../common_code/forces';
import * as d3 from "d3";


const Controls = (props) => {
    //console.log("in controls", props);
    return (
        <div>
            <select onChange={props.relayTakeThis} name='takeThis'>
                <option value='Resources'>Resources</option>
                <option value='Bob'>Bob</option>
                <option value='Mary'>Mary</option>
            </select>
            <select onChange={props.relayCompareTo} name='compareToThis'>
                <option value='Resources'>Resources</option>
                <option value='Bob'>Bob</option>
                <option value='Mary'>Mary</option>
            </select>

            <button onClick={props.candidate}>Candidate</button>
            <button onClick={props.mesh}>Mesh</button>
            <button onClick={props.byGood}>Good</button>
            <button onClick={props.byBad}>Bad</button>
            <button onClick={props.split}>Split</button>
        </div>
    )
}

export default Controls;