import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';
import Footer from '../Shared/Footer/Footer';
import MenuBar from '../Shared/MenuBar/MenuBar';


const Explore = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://blooming-everglades-02705.herokuapp.com/watches')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    }, []);

    if (products.length === 0) {
        return (
          <div class="text-center m-5">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        );
      }
    return (
        <div>
            <MenuBar></MenuBar>
             <div className="container text-center">
             
             <div className ="mt-3"> <h1 className="text-center text-secondary">
                <i className="far fa-2x fas fa-comments text-success"></i> Our{" "}
                <span className="text-warning">Collection</span>  <i className="far fa-2x fas fa-comments text-success"></i>
            </h1> </div>
             <div className="row g-4 card-group p-3">
             {
                 products.map(product => <Product
                 
                    key = {product.key}
                    product = {product}
                 ></Product>
                       
                 )
             }
             </div>
         </div> 
         <Footer></Footer>
        </div>
    );
};

export default Explore;