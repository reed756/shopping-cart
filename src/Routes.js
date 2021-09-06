import { HashRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";

const Routes = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </Router>
  );
};

export default Routes;