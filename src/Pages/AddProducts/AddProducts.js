import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Shared/Footer/Footer';
import MenuBar from '../Shared/MenuBar/MenuBar';

const AddProducts = () => {

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
   
    axios.post('https://blooming-everglades-02705.herokuapp.com/watches', data)
    .then(res => {
      console.log(res);
      if(res.data.insertedId){
        alert('Product added successfully');
        reset();
       }
      } )
  }
    return (
        <div>
              <MenuBar></MenuBar>

             <h1 className="mt-5 text-center text-success">Please Add Products</h1>
            <div className="login-box ">
                  <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">

                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                          {...register("place name")}
                          placeholder="Place Name"
                          className="p-2 m-2 w-100"
                        />
                        <br />
                        <input
                          {...register("price")}
                          placeholder="Price"
                          type="number"
                          className="p-2 m-2 w-100"
                        />
                        <br />
                        <input
                          {...register("description")}
                          placeholder="Description"

                          className="p-2 m-2 w-100"
                        />
                        <br />

                        <input
                          {...register("image", { required: true })}
                          placeholder="Image url"
                          className="p-2 m-2 w-100"
                        />
                        <br />

                        <input type="submit" value="Confirm" className="btn btn-success w-50 mb-2" />
                      </form>

                    </div>
                  </div>
                </div>

                <Footer></Footer>
        </div>
    );
};

export default AddProducts;


