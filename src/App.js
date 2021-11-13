import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AddProducts from "./Pages/AddProducts/AddProducts";
import AuthProvider from "./Pages/Context/AuthProvider";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login";
import Error from "./Pages/Error/Error";
import SingleProduct from "./Pages/Home/SingleProduct/SingleProduct";
import MyOrder from "./Pages/Home/MyOrder/MyOrder";
import ManageAllOrder from "./Pages/Home/ManageAllOrder/ManageAllOrder";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Explore from "./Pages/Explore/Explore";
import PrivateRoute from "./Pages/Private/PrivateRoute";


function App() {
  return (
      

      <AuthProvider>
        <Router>
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/addproducts">
                <AddProducts />
              </Route>
              <Route path="/explore">
                <Explore/>
              </Route>
              <Route path="/myorder">
                <MyOrder />
              </Route>
              <Route path="/manageorder">
                <ManageAllOrder />
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/singleproduct/:serviceId">
                <SingleProduct />
              </PrivateRoute>
              <Route path="/*">
                <Error />
              </Route>
            </Switch>
        </Router>
      </AuthProvider>

      
      
  );
}

export default App;
