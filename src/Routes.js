import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";

const Routes = () => {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;