import Navbar from "./components/Navbar";
import CartDisplay from "./components/CartDisplay";
import React, {useState, useEffect} from "react";

const Shop = () => {

    useEffect(() => {
      fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
      const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
      // console.log(data);

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
        <CartDisplay />
        <h1>Welcome to the shop!</h1>
        <div>
          {items.map(item => {
            <h3>{item.name}</h3>
          })}
        </div>
      </div>
    );
};
  
export default Shop;