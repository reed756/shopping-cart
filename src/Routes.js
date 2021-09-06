import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";

const Routes = () => {
  return (
    <Router basename={window.location.pathname || ''}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </Router>
  );
};

export default Routes;