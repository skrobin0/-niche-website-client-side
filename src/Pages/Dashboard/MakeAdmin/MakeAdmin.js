import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../../Shared/Footer/Footer';
import MenuBar from '../../Shared/MenuBar/MenuBar';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch("https://blooming-everglades-02705.herokuapp.com/admins", {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
          alert('admin added successfully');
        console.log(data);
      };

    return (
      <>
      <MenuBar></MenuBar>
        <div className = 'text-center'>
            <h1 className="text-success">Make a Admin</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-success my-3"
          type="submit"
          value="Done"/>
        </form>
        </div>
        <Footer></Footer>
      </>  
    );
};

export default MakeAdmin;