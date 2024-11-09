

function List(props){

    const category = props.category; 
    const listItem = props.items.map(fruit => <li key={fruit.id}> {fruit.name}: &nbsp; <b>{fruit.calories}</b> </li>);
    
    if(props.items.length>0){
        return(
            <>
                <div className="list-container">
                    <h3 className="list-category">{category}</h3>
                    <ol className="list">{listItem}</ol>
                </div>
            </> 
        );
    }else {
        return(
            <>
                <div className="list-container">
                    <h3 className="list-category">{category}</h3>
                    <p className="list">Aucun Item</p>
                </div>
            </> 
        );
    }
    
    
}

export default List;