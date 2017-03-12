import { connect } from "react-redux";
import React from "react";

import { width, height, scaleCircle, scaleL, changeWidth} from "../common_code/forces";


import CircleGroup from '../components/CircleGroup';
import Information from '../components/Information';
import { pickBubble, getProfile } from "../actions/reactSVGActions";
import { getProfiles, getSkillsData} from '../actions/databaseAsync';



class ReactSVG extends React.Component {
    
    componentWillMount() {
        this.props.loadSkillsData();    //sets the initial state of the bubbles to be the bubbles from the first profile retrieved from database       
    }

    shouldComponentUpdate(nextProps, nextState) {
        //When the state of the application changes, this function is called, which in turn updates the simulation with the new bubble data
        
        let context = this;     //Sets context to be ReactSVG component

        this.props.sim.nodes(nextProps.data).on('tick', function () {
        //This function takes in the array of bubbles displayed on screen and updates their x and y coordinates on every tick, 
        //it also updates the react component to display the new positions of the bubbles.
      
            context.forceUpdate();      //Forces react to update this component

        }).alphaTarget(0.5).restart()   //Restarts simulation with a 'kick' of 0.5
        
            return true;
    }


    bubbleClick = (e) => {
        let currentBubble = this.props.data[e.target.parentElement.id];
 
        if (currentBubble){
            this.props.pickBubble(currentBubble);           //Sets the currentBubble state to the bubble picked.
            this.props.retrieveProfile(currentBubble);      //Retrieves the profile of the bubble picked.
        }
        
        currentBubble && !document.getElementById('information') ? changeWidth('BUBBLE') : null;    
        //If bubble is chosen and a profile is currently being displayed, change the width of the reactSVG component to include profile 

        
        
        if (!currentBubble && document.getElementById('information')){
        //if surrounding bubble area is clicked.     
            changeWidth();                      //Sets reactSVG width to full screen
            this.props.pickBubble();            //Sets currentBubble to null
            this.props.retrieveProfile(null);   //Sets profile to null
        }
    }

    mouseOver = (e) => {
        //styles bubble on mouseover
        e.target.parentElement.firstChild.style.stroke = "yellow";
        e.target.parentElement.firstChild.style.strokeWidth = 2;
    }

    mouseOut = (e) => {
        //styles bubble on mouseout
        e.target.parentElement.firstChild.style.strokeWidth = 2;
        e.target.parentElement.firstChild.style.stroke = 'black'; 
    }
    
    render() {
        
        return (
            
            <div className='graphicsContainer' style={{textAlign: 'center'}}>
                <svg className='svgContainer' id="react_SVG" onClick={this.bubbleClick} style={{width : width, height : height}}>      
                    {this.props.data.map((d, i) => {
                       
                        return( <g onMouseOver={this.mouseOver} 
                                onMouseOut={this.mouseOut} 
                                className={i} id={i} 
                                key={i}>
                            <CircleGroup id={i} key={i} radius={scaleCircle(d.skillName.length)} data={this.props.data[i]}/>
                            <text 
                                style={{stroke:"black", fontSize: scaleL(scaleCircle(d.skillName.length)) + "px"}} 
                                x={this.props.data[i].x-scaleCircle(d.skillName.length)/1.5} 
                                y={this.props.data[i].y}> 
                                    {this.props.data[i].skillName}
                            </text>
                        </g>
                        )})}
                </svg>
                {this.props.currentBubble && 
                     <Information key='info' classProp='informationRowOne' data={this.props.currentBubble}/>         
                }
                
                
            </div>
        )
    }
}







const mapStateToProps = (state, ownProps) => {
    return {
        data : state.reactSVGReducer.data,
        currentBubble : state.reactSVGReducer.bubblePicked,
        sim : state.reactSVGReducer.react_simulation,
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        pickBubble : (bubblePicked) => {
            dispatch(pickBubble(bubblePicked))
        },
        retrieveProfile : (bubblePicked) => {
            dispatch(getProfile(bubblePicked))
        },
        getAllProfiles : () => {
            dispatch(getProfiles());
        },
        loadSkillsData : () => {
            dispatch(getSkillsData())
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ReactSVG);



