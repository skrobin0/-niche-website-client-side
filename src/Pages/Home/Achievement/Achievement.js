import React from 'react';

const Achievement = () => {
    return (
        <div className="container-fluid bg-success p-5 m-auto text-center text-white">
        <h2 className="mb-5 text-center">
          <i class="fas fa-2x fa-draw-polygon"></i> Achievement <br />{" "}
          <span>We Earned</span>
        </h2>
        <div className="row">
          <div className="col-md-3 p-3">
            <h2>
              <i class="fas fa-2x fa-hotel"></i> 8
            </h2>
            <p className="fs-5">Show Room</p>
          </div>
          <div className="col-md-3 p-3">
            <h2>
            <i class="fas fa-2x fa-users-cog"></i> 10
            </h2>
            <p className="fs-5">Total Brand</p>
          </div>
          <div className="col-md-3 p-3">
            <h2>
            <i class="fas fa-2x fa-laugh-wink"></i> 605
            </h2>
            <p className="fs-5">Happy Client</p>
          </div>
          <div className="col-md-3 p-3">
            <h2>
            <i class="fas fa-2x fa-clipboard-check"></i> 1280
            </h2>
            <p className="fs-5">Successful Delivery</p>
          </div>
        </div>
      </div>
        
    );
};

export default Achievement;