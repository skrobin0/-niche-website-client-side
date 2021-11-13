import React from 'react';
import { Link } from 'react-router-dom';
import "./Product.css"

const Product = ({product}) => {

    const {name, img, _id, available,  description} = product;
    return (
        <div>
                <div className="col-md-4 col-sm-12 mx-auto">
                     <div className="card">
                        <img src={img} class="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <h4 className="card-text">Available :{available}</h4>
                        <p className="card-text">{description.slice(0, 75)}</p>
                         <Link to={`/singleproduct/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                        </Link> 
                        </div>
                    </div>
                </div> 
        </div>
    );
};

export default Product;