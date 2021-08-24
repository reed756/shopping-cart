import Navbar from "./components/Navbar";
import CartDisplay from "./components/CartDisplay";

const Shop = () => {
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
      </div>
    );
};
  
export default Shop;