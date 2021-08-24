import Navbar from "./components/Navbar";

const Shop = () => {
    return (
      <div>
        <Navbar 
          home = "HOME"
          shop = "SHOP"
          homeUrl = "http://localhost:3000/"
          shopUrl = "http://localhost:3000/shop"
        />
        <h1>Welcome to the shop!</h1>
      </div>
    );
};
  
export default Shop;