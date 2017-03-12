import React from "react";

const Controls = (props) => {
    return (
        <div className='controls'>
            <select onChange={props.relayTakeThis} name='takeThis'>
                {props.profiles.map((profile, index) => {
                    return <option key={index} value={profile.name}>{profile.name}</option>
                })}
               
            </select>
            <select onChange={props.relayCompareTo} name='compareToThis'>
                {props.profiles.map((profile, index) => {
                    return <option key={index} value={profile.name}>{profile.name}</option>
                })}
            </select>

            <button className='byCandidate' onClick={props.candidate}>Candidate</button>
            <button className='byMesh' onClick={props.mesh}>Mesh</button>
            <button className='byGood' onClick={props.byGood}>Good</button>
            <button className='byBad' onClick={props.byBad}>Bad</button>
            <button className='byCommon' onClick={props.split}>Common</button>
        </div>
    )
}

export default Controls;