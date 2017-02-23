import { dataManipulation } from './dataLogic';
import bobPic from '../images/obi_wan.jpg';
import maryPic from '../images/mary_berry.jpg'



//Profile object: An object which describes an overview of the candidate

export const bobProfile = {
  name : 'Bob Prudence',
  email_address : 'bobbyP@blah.com',
  phone : '079030379320',
  github : 'http://www.github.com/pkh1162',    // or if no page: 'blank'
  portfolio : 'bobbyP@blah.com',
  image : bobPic,
  uniqueProjects : [
    {
      name : 'project1 web',
      description : 'this is the project description of project one',
      tags : ['javascript', 'react', 'd3']
    }, 
    {
      name : 'project2 web',
      description : 'this is the project description of project two',
      tags : ['javascript', 'php', 'ruby']
    }, 
    {
      name : 'project3 web',
      description : 'this is the project description of project three',
      tags : ['go', 'react', 'node']
    },
     {
      name : 'project4 web',
      description : 'this is the project description of project four',
      tags : ['javascript', 'react', 'd3']
    }, 
  ],
  statement : 'dkdkm lskdslkdslk ldskdslkdsk ldksmdlskldksm lkdslkdsmsdlk lskmsdklmsd lkdmsldsmdsl ldkdslkmsd lksdldksmsdlml dslkmds'
  
}


export const maryProfile = {
  name : 'Mary Cautious',
  email_address : 'bobbyP@blah.com',
  phone : '079030379320',
  github : 'http://www.github.com/pkh1162',    // or if no page: 'blank'
  porfolio : 'bobbyP@blah.com',
  image : maryPic,
  uniqueProjects : [
    {
      name : 'project1 web',
      description : 'this is the project description of project one',
      tags : ['javascript', 'react', 'd3']
    }, 
    {
      name : 'project2 web',
      description : 'this is the project description of project two',
      tags : ['javascript', 'php', 'ruby']
    }, 
    {
      name : 'project3 web',
      description : 'this is the project description of project three',
      tags : ['go', 'react', 'node']
    }
  ],
  statement : 'dkdkm lskdslkdslk ldskdslkdsk ldksmdlskldksm lkdslkdsmsdlk lskmsdklmsd lkdmsldsmdsl ldkdslkmsd lksdldksmsdlml dslkmds'
  
} 


/////////////////////////////////////////////////////////////////////////



//Generate individual data objects from a profile object.
export const bobData = [
  {
    candidateName : "Bob",
    name : "Javascript",
    size : 500,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474647313/s8_fznp9k.jpg",
    front : true,
    color : "#51AF0F",
    hasSkill : true,
    sameSkill : false,
    noSkill : false,
    state : "Cunique",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  },
  {
    candidateName : "Bob",
    name : "React",
    size : 100,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    front : false,
    color : "red",
    hasSkill : false,
    sameSkill : false,
    noSkill : true,
    state : "Cmiss",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }    
  },
  {
    candidateName : "Bob",
    name : "D3",
    size : 200,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    front : false,
    color : "#51AF0F",
    hasSkill : true,
    sameSkill : false,
    noSkill : false,
    state : "Cunique",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  },
  {
    candidateName : "Bob",
    name : "Redux",
    size : 340,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    front : false,
    color : "white",
    hasSkill : false,
    sameSkill : false,
    noSkill : true,
    state : "CPRmiss",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  },
  {
    candidateName : "Bob",
    name : "Flux",
    size : 340,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    front : false,
    color : "#51AF0F",
    hasSkill : true,
    sameSkill : false,
    noSkill : false,
    state : "CPunique",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  },
  {
    candidateName : "Bob",
    name : "Go",
    size : 340,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    front : false,
    color : "#51AF0F",
    hasSkill : true,
    sameSkill : false,
    noSkill : false,
    state : "CPunique",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  },
  {
    candidateName : "Bob",
    name : "Python",
    size : 340,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    front : false,
    color : "#51AF0F",
    hasSkill : true,
    sameSkill : false,
    noSkill : false,
    state : "Cunique",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  }
];

export const maryData = [
    {
    candidateName : "Mary",
    name : "React",
    size : 240,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    front : false,
    color : "red",
    hasSkill : true,
    sameSkill : false,
    noSkill : false,
    state : "CPRunique",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  },
  {
    candidateName : "Mary",
    name : "Javascript",
    size : 340,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    front : false,
    color : "red",
    hasSkill : true,
    sameSkill : false,
    noSkill : false,
    state : "CPRunique",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  },
  {
    candidateName : "Mary",
    name : "Erlang",
    size : 440,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    front : false,
    color : "red",
    hasSkill : true,
    sameSkill : false,
    noSkill : false,
    state : "Cunique",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  },
  {
    candidateName : "Mary",
    name : "Elm",
    size : 340,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    front : false,
    color : "red",
    hasSkill : true,
    sameSkill : false,
    noSkill : false,
    state : "Cunique",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  },
  {
    candidateName : "Mary",
    name : "Flux",
    size : 40,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    front : true,
    color : "white",
    hasSkill : false,
    sameSkill : true,
    noSkill : false,
    state : "Cneut",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  },
  {
    candidateName : "Mary",
    name : "MongoDB",
    size : 340,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    front : true,
    color : "white",
    hasSkill : false,
    sameSkill : true,
    noSkill : false,
    state : "Cneut",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  },
  {
    candidateName : "Mary",
    name : "Python",
    size : 340,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    front : true,
    color : "white",
    hasSkill : false,
    sameSkill : true,
    noSkill : false,
    state : "Cneut",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  }
];


export const resources = [
    {
    candidateName : "Resources",
    name : "Javascript",
    size : 150,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    color : "purple",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  },
  {
    candidateName : "Resources",
    name : "MongoDB",
    size : 150,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    color : "purple",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  },
  {
    candidateName : "Resources",
    name : "Git",
    size : 150,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    color : "purple",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  },
  {
    candidateName : "Resources",
    name : "Books",
    size : 150,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    color : "purple",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  },
  {
    candidateName : "Resources",
    name : "D3",
    size : 150,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    color : "purple",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  },
  {
    candidateName : "Resources",
    name : "React",
    size : 150,
    image : "http://res.cloudinary.com/dxqcxsull/image/upload/v1474996631/spriteNo9_agzrze.png",
    color : "purple",
    projects : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    },
    resources : {
      any : true,
      links : ["http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/", "http://flowingdata.com/2012/08/02/how-to-make-an-interactive-network-visualization/"]
    }
  }
];
///////////////////////////////////////////////////////


//Create this object from a database call
export const variables = {
    Bob : bobData,
    Mary : maryData,
    Resources : resources
}

export const profiles = {
    Bob : bobProfile,
    Mary : maryProfile,
    Resources : resources
}

export const retrieveData = (dataName, takeThis, compareTo) => {

    console.log("in retrieve data: ", takeThis, compareTo);
    return dataManipulation(takeThis, compareTo);
    //console.log("in temp data retrive data, and the dataName is: ", dataName);
    return variables[dataName];
}