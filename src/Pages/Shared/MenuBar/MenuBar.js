import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './MenuBar.css'

const MenuBar = () => {

    const {users, logOut} = useAuth();

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand">Greninja Watch</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav d-flex align-items-center justify-content-center navbar-nav ms-auto mb-2 mb-lg-0 fs-5">

                        <Link to = '/home' className='item'>

                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page">Home</a>
                        </li>
                        </Link>

                        <Link to = '/explore' className='item'>

                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page">Explore</a>
                        </li>
                        </Link>

                        <Link to = '/dashboard' className='item'>

                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page">Dashboard</a>
                        </li>
                        </Link>
                        
                    {   
                        users.email && <p className ="text-white pt-2" > Hi {users.displayName} {} </p>}

                        { 
                        users.email ?
        
                        <button className ="m-2" onClick = {logOut}> Logout </button>
        
                        :
                    
                        <Link to = '/login' className='item'>

                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page">Login</a>
                        </li>
                        </Link>
}

                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MenuBar;