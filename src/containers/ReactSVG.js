import { connect } from "react-redux";
import React from "react";
import * as d3 from 'd3';
import styles from '../index.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {forceCollide, forceY, forceXCombine, simulation, width, height, scaleCircle, scaleL, changeWidth} from "../common_code/forces";


import CircleGroup from '../components/CircleGroup';
import InformationContainer from '../containers/InformationContainer';
import { updateBubblePositions, pickBubble, newSimulation } from "../actions/reactSVGActions";
import { bobData } from '../common_code/tempData';

//let scaleCircle = d3.scaleSqrt().domain([0,20]).range([5,80]);
/*
simulation
    .force("forceX", d3.forceX(forceXCombine).strength(0.03))
    .force("forceY", d3.forceY(forceY).strength(0.03))
    .force("collide", d3.forceCollide(forceCollide))
*/
  //.force("many", d3.forceManyBody().strength(-200))


const sty = {
    transition : 'opacity 1000ms ease-out'
}




class ReactSVG extends React.Component {
    constructor(props){
        super(props);          
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("in should, nextProps", nextProps.width);
        //changeWidth('Should', nextProps.width);
        //console.log("in should, nextState", nextState);
        //console.log("in should", this.props.data);
        //console.log("in should", bobData);
        
       // changeWidth();
        //this.props.sim.stop();
        let context = this;
        this.props.sim.nodes(nextProps.data).on('tick', function () {
            //console.log("component will mount");
            //props.updatePositions(props.data);
            context.forceUpdate();

        }).alphaTarget(0.5).restart()
        
         //console.log("in should", this.props.data);

            return true;
    }


    componentDidMount() {
        let props = this.props;
        let context = this;
        
        
        this.props.sim.nodes(props.data).on('tick', function () {
        //console.log("component will mount", props.data);
        //props.updatePositions(props.data);
        context.forceUpdate();
    })
    //console.log("sim13 is: ", this.props.sim);
    
    }

    bubbleClick = (e) => {
        console.log("this ha been clicked", this.props.data[e.target.parentElement.id]);
        let currentBubble = this.props.data[e.target.parentElement.id];
        //console.log("in bubbleCLick", this.props);

        currentBubble ? this.props.pickBubble(currentBubble) : null;
        currentBubble && !document.getElementById('information') ? changeWidth('Bubble') : null;
        
        if (!currentBubble && document.getElementById('information')){
            changeWidth();
            this.props.pickBubble();
        }
        
        
        /*this.setState({
        currentBubble : this.state.positions[e.target.parentElement.id]
        })*/
    }

    mouseOver = (e) => {
       // console.log(e.target.parentElement.firstChild);
        e.target.parentElement.firstChild.style.stroke = "yellow";
         e.target.parentElement.firstChild.style.strokeWidth = 2;
        
       // e.target.style.fill = e.target.attributes.fill.value;
    }

    mouseOut = (e) => {
       e.target.parentElement.firstChild.style.strokeWidth = 1;
       e.target.parentElement.firstChild.style.stroke = 'black'; 
       //e.target.parentElement.firstChild.attributes.fill.value;
    }
    
    render() {
        //console.log("in render", this.props.data);
        //console.log("in reactSVG, width of svg container", document.getElementById('react_SVG'))
        
        return (
            
            <div className='graphicsContainer' style={{textAlign: 'center'}}>
                <svg className='svgContainer' id="react_SVG" onClick={this.bubbleClick} style={{width : this.props.width, height : height}}>      
                    {this.props.data.map((d, i) => {
                       
                        return( <g onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className={i} id={i} key={i}>
                            <CircleGroup id={i} key={i} radius={scaleCircle(d.name.length)} data={this.props.data[i]}/>
                            <text style={{stroke:"black", fontSize: scaleL(scaleCircle(d.name.length)) + "px"}} x={this.props.data[i].x-scaleCircle(d.name.length)/1.5} y={this.props.data[i].y}> {this.props.data[i].name}</text>
                        </g>
                        )})}
                </svg>
                {this.props.currentBubble && 
                     <InformationContainer key='info' className='informationContainer' bubblePicked={this.props.currentBubble}/>         
                }
                
                
            </div>
        )
    }
}







const mapStateToProps = (state, ownProps) => {
    //console.log("this is the state", state);
    return {
        data : state.reactSVGReducer.data,
        currentBubble : state.reactSVGReducer.bubblePicked,
        sim : state.reactSVGReducer.react_simulation,
        width : state.reactSVGReducer.svg_width        //added to get access to the data
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updatePositions: (data) => {
            dispatch(updateBubblePositions(data))
        },
        pickBubble : (bubblePicked) => {
            dispatch(pickBubble(bubblePicked))
        },
        newSimulation : () => {
            dispatch(newSimulation())
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ReactSVG);



