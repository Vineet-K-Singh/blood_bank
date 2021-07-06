import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./container/home";
import SignIn from "./container/sign_in";
import SignUp from "./container/sign_up";
import Main from "./container/main";
import Donate from "./container/donate";
import Register from "./container/register";
import Request from "./container/request";
import SearchDonor from "./container/search_donor";
import Nearby from "./container/nearby";
import Host from "./container/host";
import Volunteer from "./container/volunteer";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/main" component={Main} />
            <Route path="/donate" component={Donate} />
            <Route path="/register" component={Register} />
            <Route path="/request" component={Request} />
            <Route path="/searchDonor" component={SearchDonor} />
            <Route path="/nearby" component={Nearby} />
            <Route path="/host" component={Host} />
            <Route path="/volunteer" component={Volunteer} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
