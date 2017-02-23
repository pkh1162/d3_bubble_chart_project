import { connect } from 'react-redux'
import React from 'react';
import pic from '../images/obi_wan.jpg';
import {profiles} from '../common_code/tempData';
//import {actionCreator} from 'actionCreatorPath'


class CandidatePage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let bubbleData = this.props.currentBubble;
        if (bubbleData){
            var profile = profiles[bubbleData.candidateName];
        }
        
        console.log("in candidate page", this.props.currentBubble);
        
            {if (bubbleData){
                return (<div>
            <h2>{bubbleData ? bubbleData.candidateName : 'hello'}</h2>
            <img src={profiles[bubbleData.candidateName].image} width={200} height={200}/>
            <p>Name : {profile.name}</p>
            <p>Email : {profile.email_address}</p>
            <p>Phone : {profile.phone}</p>
            <p>Github : {profile.github}</p>
            <p>Portfolio : {profile.portfolio}</p>
            <p>Unique Projects : {profile.uniqueProjects.length}</p>
            <p>Statement : {profile.statement}</p>
            </div>)
        }
        else{
        return null;
    }}
            
        
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        currentBubble : state.reactSVGReducer.bubblePicked
    }
}

/*
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch(actionCreator)
        }
    }
}
*/

export default connect(mapStateToProps, null)(CandidatePage);

