import Navbar from "./components/Navbar";
import CartDisplay from "./components/CartDisplay";
import React, {useState, useEffect} from "react";
import Card from "./components/Card";

const Shop = () => {
    useEffect(() => {
      fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const [cartnumber, setCartNumber] = useState(0);

    const fetchItems = async () => {
      const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
      const items = await data.json();
      console.log(items);
      setItems(items.data);
    }

    return (
      <div>
        <Navbar 
          home = "HOME"
          shop = "SHOP"
          homeUrl = "http://localhost:3000/"
          shopUrl = "http://localhost:3000/shop"
        />
        <CartDisplay 
          cartnumber={cartnumber}
        />
        <h1>Welcome to the shop!</h1>
        <div>
          {items.map(item => (
            <Card 
              key={item.itemId}
              name={item.item.name}
              image={item.item.images.icon}
            />
          ))}
        </div>
      </div>
    );
};
  
export default Shop;