import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function Routes() {
  //for routing to the different pages add path and component name
  //reference website https://reactrouter.com/web/guides/quick-start
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}
export default Routes;
