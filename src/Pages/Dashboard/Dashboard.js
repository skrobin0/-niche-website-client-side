import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AddProducts from '../AddProducts/AddProducts';
import ManageAllOrder from '../Home/ManageAllOrder/ManageAllOrder';
import MyOrder from "../Home/MyOrder/MyOrder";
import useAuth from '../Hooks/useAuth';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageServices from './ManageServices/ManageServices';
import Pay from "./Pay/Pay";
import Review from './Review/Review';

const Dashboard = () => {

    let { path, url } = useRouteMatch();
    const {users, logOut} = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`https://blooming-everglades-02705.herokuapp.com/admins/${users?.email}`)
          .then((res) => res.json())
          .then((data) => {
            if (data[0]?.role === "admin") {
              setIsAdmin(true);
            } else {
              setIsAdmin(false);
            }
          });
      }, [users?.email]);
      console.log(isAdmin);


    return (
        <div>

            
            <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link to="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Home</span>
                </Link>
               {!isAdmin && ( <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <Link to={`${url}/review`} class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Review</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to={`${url}/myorder`} class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">My Order</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to={`${url}/pay`} class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Pay</span>
                        </Link>
                    </li>
                   {users.email &&(  
                     <li onClick = {logOut}>  <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">LogOut</span></li>
                   )}
                    
                    
                   
                </ul>
               )}
                
                <hr/>
    
                {isAdmin && (<div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle"/>
                        <span class="d-none d-sm-inline mx-1">ADMIN</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                    <Link to={`${url}/makeAdmin`}>
                        <li><a class="dropdown-item">Make Admin...</a></li>
                    </Link>

                    <Link to={`${url}/manageorder`}>
                        <li><a class="dropdown-item">Manage All Order</a></li>
                    </Link>

                    <Link to={`${url}/manageservices`}>
                        <li><a class="dropdown-item">Manage Services</a></li>
                    </Link>

                    <Link to={`${url}/addproducts`}>
                        <li><a class="dropdown-item">Add Product</a></li>
                    </Link>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" onClick = {logOut}>Sign out</a></li>
                    </ul>
                </div> )}
                
            </div>
        </div>

        <div class="col-md-9">
        <Switch>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`${path}/manageorder`}>
                <ManageAllOrder></ManageAllOrder>
              </Route>
              <Route exact path={`${path}/addproducts`}>
                <AddProducts></AddProducts>
              </Route>
              <Route exact path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route exact path={`${path}/myorder`}>
                <MyOrder></MyOrder>
              </Route>
              <Route exact path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <Route exact path={`${path}/manageservices`}>
                <ManageServices></ManageServices>
              </Route>
            </Switch>
        </div>
    </div>
</div>
        </div>
    );
};

export default Dashboard;