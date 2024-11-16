import { list } from "postcss";
import React, {useState} from "react"
import { useRef } from "react";
function MyComponent(){
    const inputFoodRef = useRef();
    
    const [foods,setFoods] = useState(["apple","Orange","Banana"]);
    
    function handleAddFood(){
        const newFood = inputFoodRef.current.value;
        if(newFood === ""){
            alert("Input value is empty");
            return
        }
        inputFoodRef.current.value = "";
        setFoods(f => [...f,newFood]);
    }

    function handleRemoveFood(indexToRemove){
        setFoods(f => f.filter((_, i) => i !== indexToRemove));
    }
    
    return(
        

        <div>
            <label htmlFor=""> Your favorite food is : </label><input ref={inputFoodRef} type="text" /> <button onClick={handleAddFood}>Add it </button>
            <h3>List of food</h3>
            { foods.length > 0 
            ?   
                <ul>
                {foods.map((item,index) => (
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        <p  >{item}</p>
                    </li>
                ))}
                    <p>Number of item : {foods.length}</p>
                </ul>
            :
                <div>The list is empty</div>
            }
        </div>
    )
}

export default MyComponent