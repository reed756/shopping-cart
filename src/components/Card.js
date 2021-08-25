const Card = (props) => {
    return (
        <div>
            <img 
                alt="" 
                src={props.image}
            ></img>
            <h3>
                {props.name}
            </h3>
            <input 
                value={props.number}
                onChange={props.onChange}
                type="number"
            >
            </input>
            <button
                onClick={props.onIncrement}
            >+</button>
            <button
                onClick={props.onDecrement}
            >-</button>
            <button
                onClick={props.addToCart}
            >ADD TO CART</button>
        </div>
    )
}

export default Card