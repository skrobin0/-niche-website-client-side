import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import MenuBar from '../../Shared/MenuBar/MenuBar';

const SingleProduct = () => {

    const {serviceId} = useParams();
    
    const[item, setItem] = useState({})
    const {reset} = useForm();

    useEffect( () =>{
        fetch(`https://blooming-everglades-02705.herokuapp.com/watches/${serviceId}`)
        .then(res => res.json())
        .then(data => setItem(data))
    } , [])


    const {users} = useAuth();

        const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm();
        
          const onSubmit = (data) => {
            fetch("https://blooming-everglades-02705.herokuapp.com/orders", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then((result) =>               
              console.log(result));
              alert('Order Done')
              
            console.log(data);
            
            
          };

    return (
        <div>
            <MenuBar></MenuBar>
            <div className="container-fluid row mt-3 details-container">
                <div className="col-md-6 col-sm-12">
                    <div class="card mb-3 m-auto">
                    <img src={item.img} class="card-img-top img-thumbnail" alt="..." />
                    <div class="card-body">
                        <h3 class="card-title text-center">{item.name}</h3>
                        <p class="card-text">{item.description}</p>
                        <p class="card-text">Founded :{item.founded}</p>
                        <h4 class="card-text text-center">
                        Price:  {item.price}
                        </h4>
                    </div>
                    </div>
                </div>

            {/* place order part */}
            <div className="col-md-6 col-sm-12 order-form">
            <h1 className="mt-5 text-center text-success">
                Please Confirm Your Order
                </h1>
            <div className=" ">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                <div className="login-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    { item.name &&
                        <input
                        defaultValue={item?.name}
                        {...register("PlaceName")}
                        placeholder="Name"
                        className="p-2 m-2"
                    />
                    }
                    <br />

                    { users.displayName &&
                        <input
                        defaultValue={users?.displayName}
                        {...register("Uname")}
                        placeholder="Name"
                        className="p-2 m-2"
                    />
                    }
                    <br />

                    <input
                        value={users.email}
                        {...register("email", { required: true })}
                        placeholder="Email"
                        className="p-2 m-2"
                    />
                    <br />
                    <input
                        {...register("date", { required: true })}
                        placeholder="date"
                        defaultValue={new Date()}
                        className="p-2 m-2"
                    />
                    <br />
                    <input
                        value={item.price}
                        {...register("price", { required: true })}
                        placeholder="Price"
                        className="p-2 m-2"
                    />
                    <br />
                    <input
                        {...register("location", { required: true })}
                        placeholder="Location"
                        className="p-2 m-2"
                    />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" className="btn btn-success w-50 " />
                    </form>
                </div>
                </div>
            </div>

            </div>
            </div>
        </div>
    );
};

export default SingleProduct;