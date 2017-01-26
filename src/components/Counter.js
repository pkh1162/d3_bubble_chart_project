import React from 'react';

const Counter = (props) => {
    return (
        <div>
            <button onClick={props.addCount}>Add</button>
            <button onClick={props.minusCount}>Minus</button>
            <p>{props.count}</p>
        </div>
    )
}

export default Counter;