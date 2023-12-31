import { Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Faviorites from "./pages/Faviorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>

        <Route path="/new-meetup">
          <NewMeetup />
        </Route>

        <Route path="/faviorites">
          <Faviorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
