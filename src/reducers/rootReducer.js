import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import reactSVGReducer from './reactSVGReducer';

const rootReducer = combineReducers({
    counterReducer,
    reactSVGReducer
});

export default rootReducer;