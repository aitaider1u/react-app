import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }

    const reset = () => {
        setCount(0);
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
            <div classNa