import {connect} from 'react-redux';
import React from 'react';

import Information from '../components/Information';


class InformationContainer extends React.Component {
    
    
    render() {
    //console.log("in infocontainer", this.props);
        return (
            <Information data={this.props.bubblePicked}/>
        )
    }
}





export default connect(null, null)(InformationContainer)