import React, {useState} from "react"
import { useRef } from 'react';


function MyComponent(){
    const yearRef = useRef()
    const makeRef = useRef()
    const modelRef = useRef()

    const [cars,setCars] = useState([]);


    function handelAddNewCar(){
        setCars(cs => [...cs,newCar])
    }
    
    function handelRemoveNewCar(index){
        setCars(cs => cs.filter((_, i) => index !=i ))
    } 

    const [newCar, setNewCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang"
    });

    function handleYearChange(event) {
        setNewCar(c => ({...c,year: event.target.value}))    
    }
    
    function handleMakeChange(event) {
        setNewCar(c => ({...c,make: event.target.value}))    
    }

    function handleModelChange(event) {
        setNewCar( c => ({...c,model: event.target.value}))    
    }

    return(
        <>
            <h2>Car List</h2>
            {cars.length ? 
                <div className="container-input">
                    <ul>
                        {cars.map((item, index) => (
                            <li key={index}>
                                {item.year}{" "}{item.model}{" "}{item.make}{" "}
                                <button onClick={() => handelRemoveNewCar(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
                : 
                <p>List is empty</p>
            }
            <hr />
            <div className="container-input" >
                <input type="number" value={newCar.year} ref={yearRef} onChange={handleYearChange} />
                <input type="text" value={newCar.make} ref={makeRef} onChange={handleMakeChange} />
                <input type="text" value={newCar.model} ref={modelRef} onChange={handleModelChange} />
                <button onClick={handelAddNewCar}> Add new cars</button>
            </div>
        </>
        
    )
}

export default MyComponent