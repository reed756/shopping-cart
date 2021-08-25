import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar 
        class = "nav-bar"
        home = "HOME"
        shop = "SHOP"
        homeUrl = "http://localhost:3000/"
        shopUrl = "http://localhost:3000/shop"
      />
      <div className="head-wrapper">
        <h1>Welcome to the Website for all things Fortnite</h1>
      </div>
      <img
        alt="Fortnite characters stood in a row"
        src="https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg"
      ></img>
      <div className="subhead-wrapper">
        <h3>What is Fortnite?</h3>
      </div>
      <p>
      Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite: Save the World, a cooperative hybrid-tower defense-shooter-survival game for up to four players to fight off zombie-like creatures and defend objects with traps and fortifications they can build; Fortnite Battle Royale, a free-to-play battle royale game in which up to 100 players fight to be the last person standing; and Fortnite Creative, in which players are given complete freedom to create worlds and battle arenas. Save the World and Battle Royale were released in 2017 as early access titles, while Creative was released on December 6, 2018. While the Save the World and Creative versions have been successful for Epic Games, Fortnite Battle Royale in particular became an overwhelming success and a cultural phenomenon, drawing more than 125 million players in less than a year, earning hundreds of millions of dollars per month, and $9 billion in revenue in its first two years.
      </p>
      <Footer 
        class="foot-wrapper"
        footer="© James Reed 2021"
      />
    </div>
  );
};

export default App;
