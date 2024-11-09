import './App.css'
import List from './List.jsx'

function App() {
    const fruits = [
        { id:1 ,name: "apple", calories : 95},
        { id:2 ,name: "orange", calories : 45},
        { id:3 ,name: "banana", calories : 105},
        { id:4 ,name: "coconut", calories : 156}, 
        { id:5 ,name: "pineapple", calories : 37}
    ];


    const vegetables = [
        { id: 1, name: "carotte", calories: 41 },
        { id: 2, name: "brocoli", calories: 34 },
        { id: 3, name: "épinard", calories: 23 },
        { id: 4, name: "tomate", calories: 18 },
        { id: 5, name: "courgette", calories: 17 }
    ];
    
    const desserts = [];
    
    return(
        <>
            <List items={fruits} category="Fruits" ></List>
            <List items={vegetables} category="Vegetables" ></List>
            <List items={desserts} category="Desserts" ></List>
        </>
    )
}

export default App
