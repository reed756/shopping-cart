const CartDisplay = (props) => {
    return (
        <div className={props.class}>
            <p>
                Number of Items in Cart: {props.cartnumber}
            </p>
            <button>
                CHECKOUT
            </button>
        </div>
    )
}

export default CartDisplay