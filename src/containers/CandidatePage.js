import { connect } from 'react-redux'
import React from 'react';
import Information from '../components/Information';
import default_pic from '../images/invisible_man.jpg';

class CandidatePage extends React.Component {
   
    render() {
        let profile = this.props.currentBubble;
            {if (profile){
                return (
                <div>
                    <div className='rowTwo'>
                        <div className="detailsBlock">
                            <div className="candidatePicture">
                                { <img src={profile.image} width={150} height={150} alt='Candidate' role='presentation'/> || <img src={default_pic} width={200} height={200} alt='Default invisible man' role='presentation'/> }
                            </div>            
                            <div className="candidateDetails">
                                <table>
                                    <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>{profile.name}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{profile.email_address}</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td>{profile.phone}</td>
                                </tr>
                                <tr>
                                    <td>Github:</td>
                                    <td>{profile.github}</td>
                                </tr>
                                <tr>
                                    <td>Portfolio:</td>
                                    <td>{profile.portfolio}</td>
                                </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="statementBlock">
                            <h2>Candidate Statement</h2>
                            <p>Statement : {profile.statement}</p>
                        </div>
                    </div>

                    <div className='rowThree'>    
                        <div className="projectsBlock">
                            <Information classProp='infoRowThree' data={profile}/>
                        </div>
                    </div>    
                </div>
                )
        }
        else {
        return null;
    }}
            
        
    }
}

CandidatePage.propTypes = {
    currentBubble : React.PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentBubble : state.reactSVGReducer.currentProfile
    }
}

export default connect(mapStateToProps, null)(CandidatePage);

