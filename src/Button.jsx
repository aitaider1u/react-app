

function Button() {

    let count = 0;

    const handleClick = (name) => {
        if(count < 3 ){
            count++;
            console.log(`${name}, you clicked on me ${count} time/s`)
        }else{
            console.log(`${name} stop clicking me`)
        }
    }

    const handleClickEvent = (e) => {
        console.log(e);
        e.target.textContent = "OUCH !";
    }

    return(
        <button onDoubleClick={ (e) => handleClickEvent(e)}>Click me 🥰</button>
    )
}

export default Button;