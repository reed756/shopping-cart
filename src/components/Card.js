const Card = (props) => {
    return (
        <div>
            <img alt="" src={props.image}></img>
            <h3>{props.name}</h3>
            <input></input>
            <button>+</button>
            <button>-</button>
            <button>ADD TO CART</button>
        </div>
    )
}

export default Card