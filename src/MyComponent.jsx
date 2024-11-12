import React, {useState} from "react";

function MyComponent(params) {
    const [name, setName] = useState("Gest")
    const [quantity, setQuantity] = useState(0)
    const [comment, setComment] = useState("No Comment")
    const [payment, setPayment] = useState("No selected")
    const [shipping, setShipping] = useState("Delivery")

    const onChangeName = (event) => {
        setName(event.target.value);
    } 
    
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    } 

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    } 
    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    } 
    const handleShippingChange = (event) => {
        setShipping(event.target.value);
    }

    return (
        <>
            <input value= {name} onChange={onChangeName}></input>
            <p>The name is : {name}</p>
            <p>Number of letters :  {name.length}</p>
            
            <hr />
            <input value= {quantity} onChange={handleQuantityChange} type="number"></input>
            <p>The quantity is : {quantity}</p>
            
            <hr />
            <textarea value={comment} onChange={handleCommentChange}></textarea> 
            <p> <b> The comment is :</b> {comment}</p>
           
            <hr />
            <label for="payment-method">Choisissez votre moyen de paiement :</label>
            <select id="payment-method" name="payment-method" onChange={handlePaymentChange}>
                <option value="" disabled selected>Sélectionnez un mode de paiement</option>
                <option value="visa">Visa</option>
                <option value="mastercard">MasterCard</option>
                <option value="giftcard">Gift Card</option>
            </select>
            <p> <b> Payment card is :</b> {payment}</p>
            <hr />
            <label htmlFor="">
                <input type="radio" checked= {shipping === "Pick Up"}  value="Pick Up" onChange={handleShippingChange}/>
                Pick Up
            </label>
            <label htmlFor="">
                <input type="radio" checked= {shipping === "Delivery"}  value="Delivery" onChange={handleShippingChange}/>
                Delivery
            </label>
            <p> Shipping : {shipping}</p>
        </>
    )
}


export default MyComponent