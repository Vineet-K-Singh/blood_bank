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
import MapContainer from "./container/map";
import Admin from "./admin/admin";
import DonorDetail from "./admin/donor_details";
import RequestorDetail from "./admin/requestor_details";
import HostDetail from "./admin/host_details";
import VolunteerDetail from "./admin/volunteer_details"

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
            <Route path="/map" component={MapContainer} />
            <Route path="/admin" component={Admin} />
            <Route path="/donorDetail" component={DonorDetail} />
            <Route path="/requestorDetail" component={RequestorDetail} />
            <Route path="/hostDetail" component={HostDetail} />
            <Route path="/volunteerDetail" component={VolunteerDetail} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
