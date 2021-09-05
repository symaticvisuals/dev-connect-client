import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Connect from "./pages/Connect";

function Routes() {
  //for routing to the different pages add path and component name
  //reference website https://reactrouter.com/web/guides/quick-start
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/chat" exact component={Chat} />
      <Route path="/connect" exact component={Connect} />
    </Switch>
  );
}
export default Routes;
