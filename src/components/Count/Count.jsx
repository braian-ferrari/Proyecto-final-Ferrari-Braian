import React from 'react';

const Count = ({ count, handleCount, stock }) => {
    const incrementCount = () => {
        if (count < stock) handleCount(count + 1);
    };

    const decrementCount = () => {
        if (count > 1) handleCount(count - 1);
    };

    return (
        <div>
            <button type="button" className="btn btn-info" onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button type="button" className="btn btn-info" onClick={incrementCount}>+</button>
        </div>
    );
};

export default Count;
