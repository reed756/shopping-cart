const Card = (props) => {
    return (
        <div className="card-wrapper">
            <img 
                alt="" 
                src={props.image}
                className="card-image"
            ></img>
            <h2>
                {props.name}
            </h2>
            <div className="shop-adder">
                <input 
                    value={props.number}
                    onChange={props.onChange}
                    type="number"
                    className="shop-text"
                >
                </input>
                <button
                    onClick={props.onIncrement}
                    className="shop-text"
                >+</button>
                <button
                    onClick={props.onDecrement}
                    className="shop-text"
                >-</button>
                <button
                    onClick={props.addToCart}
                    className="shop-text"
                >ADD TO CART</button>
            </div>
        </div>
    )
}

export default Card