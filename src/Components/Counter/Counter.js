import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseBtn = () =>{
        const counts = count + 1;
        setCount(counts)
    }
    const decreaseBtn = () =>{
        const decreasing= count - 1;
        setCount(decreasing)
    }
  
    // const increaseBtn = ()=> setCount(count + 1);
    // const decreaseBtn = () =>setCount(count - 1);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increaseBtn}>Increase</button>
            <button onClick={decreaseBtn}>Decrease</button>
        </div>
    );
};

export default Counter;