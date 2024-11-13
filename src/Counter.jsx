import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount( c => c +3);
        setCount( c => c +1);
        setCount( c => c +1);

    }

    const decrement = () => {
        setCount( c => c - 1);
        setCount( c => c - 1);
        setCount( c => c - 1);
    }

    const reset = () => {
        setCount(c => c = 0);
    }

    const getBackgroundColor =() =>{
        if(count > 0){
            return "count-display-positive";
        }else if(count < 0 ){
            return "count-display-negative";
        }else {
            return "count-display-null";
        }
    }

    return (
        <div className="counter-container">
            <p className={`count-display ${getBackgroundColor()}`}>{count}</p>
            <div className="counter-button-container">
                <button className="container-button" onClick={decrement}>Decrement</button>
                <button className="container-button" onClick={reset}>Reset</button>
                <button className="container-button" onClick={increment}>Increment</button>
            </div>
        </div>
    )

}

export default Counter;