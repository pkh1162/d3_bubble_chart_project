
const CHANGE_TAKE_THIS = 'CHANGE_TAKE_THIS';
const CHANGE_COMPARE_TO = 'CHANGE_COMPARE_TO';


const defaultState = {
    takeThis : {},
    compareTo : {}
};

export const controlReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_THIS:
            return state
        case CHANGE_COMPARE_TO:
            return state
        default:
            return state
    }
}