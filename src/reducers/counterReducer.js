let defaultState = {
    count : 0
}

const counterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_COUNT' :
            return {...state, count : state.count+1 };
        case 'MINUS_COUNT' : 
            return {...state, count : state.count-1};
        default : 
            return state;
    }
}

export default counterReducer;