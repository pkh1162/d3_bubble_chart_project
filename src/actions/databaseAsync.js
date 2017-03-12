import fetch from "isomorphic-fetch";

export const REQUESTING_PROFILE_DATA = 'REQUESTING_PROFILE_DATA';
export const RECEIVED_PROFILE_DATA = 'RECEIVED_PROFILE_DATA';
export const RECEIVE_SKILLS_DATA = 'RECEIVE_SKILLS_DATA';

const PROFILES_URL = 'https://localhost:3001/';

export const requestingProfileData = () => {
    return {
        type : 'REQUESTING_PROFILE_DATA'
    }   
};

export const receivedProfileData = (data) => {
    return {
        type : 'RECEIVED_PROFILE_DATA',
        profiles: data
    }
}

export const receiveSkillsData = (data) => {
    return {
        type : 'RECEIVE_SKILLS_DATA',
        skills : data
    }
}

    

export const getProfiles = () => {
  
    return (dispatch) => {
        dispatch(requestingProfileData());

        fetch(PROFILES_URL)
            .then( response => {
                if (response.status >= 400){
                    throw new Error("Bad response from server");
                }
                return response.json();     
            })
            .then( profile_data => {
                dispatch(receivedProfileData(profile_data));

            })
    }
}

export const getSkillsData = () => {
    return (dispatch) => {
        fetch(PROFILES_URL)
            .then( response => {
                if (response.status >= 400){
                    throw new Error("BAd response from server");
                }
                return response.json();
            })
            .then(skills_data => {
                dispatch(receiveSkillsData(skills_data));
            })
    }
}