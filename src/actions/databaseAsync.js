import fetch from "isomorphic-fetch";

const temp_profiles = [
    {
   
    name: "Jill Joyous",
    email_address: "jill@joyous.com",
    phone: "12345678910",
    github: "www.github.com/pkh1162",
    portfolio: "portfolio web address",
    image: "http://res.cloudinary.com/dxqcxsull/image/upload/v1489242911/margo_xz7w8d.jpg",
    uniqueProjects: [
        {
            name: "Project ONE",
            description: "This is a description of project ONE",
            link: "Project ONE link",
            tags: [
                "javascript",
                "angular",
                "html"
            ]
        },
        {
            name: "Project TWO",
            description: "This is a description of project TWO",
            link: "Project TWO link",
            tags: [
                "angular",
                "javascript",
                "ruby"
            ]
        },
        {
            name: "Project THREE",
            description: "This is a description of project THREE",
            link: "Project THREE link",
            tags: [
                "android",
                "react",
                "xml",
                "sql",
                "erlang"
            ]
        },
        {
            name: "Project FOUR",
            description: "This is a description of project FOUR",
            link: "Project FOUR link",
            tags: [
                "javascript",
                "react",
                "sql"
            ]
        }
    ],
    statement: "Nunc est sem, ullamcorper et purus ut, tincidunt convallis arcu. Nam viverra justo neque, et maximus orci faucibus at. Cras quis justo vel sapien interdum rutrum sit amet ut ante. Praesent cursus eleifend orci, eu gravida velit dictum a. Pellentesque turpis sem, scelerisque blandit est eu, aliquet scelerisque purus. Donec convallis, leo vitae pharetra porta, diam neque ultricies nisl, in commodo dolor velit condimentum tellus. Maecenas aliquam lectus quam, quis mattis lectus mollis non. Nam vehicula, metus ac dapibus interdum, nisl justo aliquam sem, in sodales risus libero nec elit. Fusce venenatis nisl sed eros volutpat blandit. Maecenas in velit nec risus blandit aliquet sed imperdiet orci.Integer non lobortis eros. Pellentesque turpis sem, scelerisque blandit est eu, aliquet scelerisque purus. Donec convallis, leo vitae pharetra porta, diam neque ultricies nisl, in commodo dolor velit condimentum tellus. Maecenas aliquam lectus quam, quis mattis lectus mollis non. Nam vehicula, metus ac dapibus interdum, nisl justo aliquam sem, in sodales risus libero nec elit. Fusce venenatis nisl sed eros volutpat blandit. Maecenas in velit nec risus blandit aliquet sed imperdiet orci.Integer non lobortis eros. Pellentesque turpis sem, scelerisque blandit est eu, aliquet scelerisque purus. Donec convallis, leo vitae pharetra porta, diam neque ultricies nisl, in commodo dolor velit condimentum tellus. Maecenas aliquam lectus quam, quis mattis lectus mollis non. Nam vehicula, metus ac dapibus interdum, nisl justo aliquam sem, in sodales risus libero nec elit. Fusce venenatis nisl sed eros volutpat blandit. Maecenas in velit nec risus blandit aliquet sed imperdiet orci.Integer non lobortis eros. Pellentesque turpis sem, scelerisque blandit est eu, aliquet scelerisque purus. Donec convallis, leo vitae pharetra porta, diam neque ultricies nisl, in commodo dolor velit condimentum tellus. Maecenas aliquam lectus quam, quis mattis lectus mollis non. Nam vehicula, metus ac dapibus interdum, nisl justo aliquam sem, in sodales risus libero nec elit. Fusce venenatis nisl sed eros volutpat blandit. Maecenas in velit nec risus blandit aliquet sed imperdiet orci.Integer non lobortis eros. Pellentesque turpis sem, scelerisque blandit est eu, aliquet scelerisque purus. Donec convallis, leo vitae pharetra porta, diam neque ultricies nisl, in commodo dolor velit condimentum tellus. Maecenas aliquam lectus quam, quis mattis lectus mollis non. Nam vehicula, metus ac dapibus interdum, nisl justo aliquam sem, in sodales risus libero nec elit. Fusce venenatis nisl sed eros volutpat blandit. Maecenas in velit nec risus blandit aliquet sed imperdiet orci.Integer non lobortis eros."
},
{
    name: "Mary Spellbound",
    email_address: "mary@maryzilla.com",
    phone: "09876543210",
    github: "www.github.com/pkh1162",
    portfolio: "MARY portfolio web address",
    image: "http://res.cloudinary.com/dxqcxsull/image/upload/v1488986641/mary_berry_oa4i1o.jpg",
    uniqueProjects: [
        {
            name: "Project ONE",
            description: "This is a description of project ONE",
            link: "Project ONE link",
            tags: [
                "javascript",
                "go",
                "node"
            ]
        },
        {
            name: "Project TWO",
            description: "This is a description of project TWO",
            link: "Project TWO link",
            tags: [
                "javascript",
                "c#",
                "c++"
            ]
        },
        {
            name: "Project THREE",
            description: "This is a description of project THREE",
            link: "Project THREE link",
            tags: [
                "basic",
                "go",
                "node",
                "python",
                "less"
            ]
        }
    ],
    statement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec vehicula justo, quis porttitor eros. Curabitur rhoncus feugiat sem at ultricies. Quisque vulputate nisl non rhoncus maximus. Vivamus aliquet velit vitae faucibus posuere. Curabitur eget libero feugiat, ullamcorper nisi nec, aliquam lorem. Cras malesuada est non urna faucibus dictum. Suspendisse semper felis in mi fringilla posuere. Integer finibus dictum quam, et accumsan nisi ullamcorper sed. Nam nec porttitor est. Donec sit amet dui dictum, sodales erat vitae, accumsan enim. Curabitur eu suscipit quam. Fusce congue lobortis enim. Maecenas tincidunt pellentesque neque, nec viverra nisi imperdiet a. Duis sit amet leo mi. Aenean auctor dignissim lectus, quis venenatis felis vestibulum vel. Sed elit tellus, suscipit at massa in, aliquam vehicula lacus."
},
{
    name: "Bob Prudence",
    email_address: "bob@bobby.com",
    phone: "12345678910",
    github: "www.github.com/pkh1162",
    portfolio: "portfolio web address",
    image: "http://res.cloudinary.com/dxqcxsull/image/upload/v1488986646/obi_wan_rsujpg.jpg",
    uniqueProjects: [
        {
            name: "Project ONE",
            description: "This is a description of project ONE",
            link: "Project ONE link",
            tags: [
                "javascript",
                "ruby",
                "react"
            ]
        },
        {
            name: "Project TWO",
            description: "This is a description of project TWO",
            link: "Project TWO link",
            tags: [
                "d3",
                "javascript",
                "ruby"
            ]
        },
        {
            name: "Project THREE",
            description: "This is a description of project THREE",
            link: "Project THREE link",
            tags: [
                "android",
                "react"
            ]
        },
        {
            name: "Project FOUR",
            description: "This is a description of project FOUR",
            link: "Project FOUR link",
            tags: [
                "javascript",
                "react",
                "sql"
            ]
        }
    ],
    statement: "Nunc est sem, ullamcorper et purus ut, tincidunt convallis arcu. Nam viverra justo neque, et maximus orci faucibus at. Cras quis justo vel sapien interdum rutrum sit amet ut ante. Praesent cursus eleifend orci, eu gravida velit dictum a. Pellentesque turpis sem, scelerisque blandit est eu, aliquet scelerisque purus. Donec convallis, leo vitae pharetra porta, diam neque ultricies nisl, in commodo dolor velit condimentum tellus. Maecenas aliquam lectus quam, quis mattis lectus mollis non. Nam vehicula, metus ac dapibus interdum, nisl justo aliquam sem, in sodales risus libero nec elit. Fusce venenatis nisl sed eros volutpat blandit. Maecenas in velit nec risus blandit aliquet sed imperdiet orci.Integer non lobortis eros."
}
]



export const REQUESTING_PROFILE_DATA = 'REQUESTING_PROFILE_DATA';
export const RECEIVED_PROFILE_DATA = 'RECEIVED_PROFILE_DATA';
export const RECEIVE_SKILLS_DATA = 'RECEIVE_SKILLS_DATA';


//Once deployment issues have been resolved, the PROFILES_URL will be updated, until then leave as is.
//const PROFILES_URL = 'https://localhost:3001/';
//const PROFILES_URL = 'https://pkh1162.github.io/d3_bubble_chart_project:3001/';




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
    //Comment out this function is database is being used.
        dispatch(receivedProfileData(temp_profiles))  

    }
    
/*  
//Database request::

    return (dispatch) => {
    //Decomment this function if database is being used
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
*/
}

export const getSkillsData = () => {
  
  return (dispatch) => {
  //Comment this function out if database is being used.
      dispatch(receiveSkillsData(temp_profiles))
  }
  
  /*
    return (dispatch) => {
    //Decomment this function if database is being used.
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
    */
}