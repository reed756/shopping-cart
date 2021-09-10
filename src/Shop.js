import Navbar from "./components/Navbar";
import CartDisplay from "./components/CartDisplay";
import React, {useState, useEffect} from "react";
import Card from "./components/Card";
import './styles/Shop.css';
import Footer from './components/Footer';

const Shop = () => {
    useEffect(() => {
      fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const [cartnumber, setCartNumber] = useState(0);
    const [itemnumber, setItemNumber] = useState(0);

    const fetchItems = async () => {
      const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
      const items = await data.json();
      console.log(items);
      setItems(items.data);
    }

    function handleChange(event) {
      setItemNumber(Number(event.target.value));
      console.log(itemnumber);
    }

    function increment() {
      setItemNumber(itemnumber + 1);
    }

    function decrement() {
      setItemNumber(itemnumber - 1);
    }

    function addToCart() {
      setCartNumber(cartnumber + itemnumber);
      setItemNumber(0);
    }

    return (
      <div>
        <Navbar 
          class = "nav-bar"
          home = "HOME"
          shop = "SHOP"
          // homeUrl = "https://reed756.github.io/shopping-cart"
          // shopUrl = "https://reed756.github.io/shopping-cart/shop"
        />
        <CartDisplay 
          cartnumber={cartnumber}
          class="display-wrapper"
        />
        <div className="heading-wrapper">
          <h1>Welcome to the shop!</h1>
        </div>
        <div className="shop-grid">
          {items.map(item => (
            <Card 
              key={item.itemId}
              name={item.item.name}
              image={item.item.images.icon}
              number={itemnumber}
              onChange={handleChange}
              onIncrement={increment}
              onDecrement={decrement}
              addToCart={addToCart}
            />
          ))}
        </div>
        <Footer 
          class="foot-wrapper"
          footer="© James Reed 2021"
        />
      </div>
    );
};
  
export default Shop;