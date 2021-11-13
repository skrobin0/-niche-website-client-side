import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <img style = {{width:"100%", height:680}} src = "https://i.ibb.co/F0NcLcy/Pu-Xip-AW3-AXUz-UJ4u-Yyx-PKC-1200-80.jpg" alt = ""/>

            <Link to = "/"> <button className = "btn btn-danger mt-3">Go Back</button></Link>
        </div>
    );
};

export default Error;