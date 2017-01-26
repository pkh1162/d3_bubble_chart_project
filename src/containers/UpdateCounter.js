import { connect } from 'react-redux';
import { addCountAction, minusCountAction } from '../actions/counterActions';

import Counter from '../components/Counter';


const mapStateToProps = (state, ownProps) => {
    return {
        count : state.counterReducer.count
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addCount : () => {
            dispatch(addCountAction())
        },
        minusCount : () => {
            dispatch(minusCountAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);