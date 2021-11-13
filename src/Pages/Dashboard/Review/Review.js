import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import MenuBar from '../../Shared/MenuBar/MenuBar';

const Review = () => {

    const { register, handleSubmit } = useForm();

    const {users} = useAuth();

    const onSubmit = (data) => {
        fetch("https://blooming-everglades-02705.herokuapp.com/review", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
          alert('review added successfully');
    
        console.log(data);
      };

    return (
      <>
      <MenuBar></MenuBar>
        <div className= "text-center">
            <h1 className = 'text-success'>Review Here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field my-3"
          name="email"
          value={users?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field my-3"
          name="name"
          value={users?.displayName}
          type="name"
          {...register("name", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-success my-3"
          type="submit"
          value="Submit"
        />
      </form>
        </div>
        <Footer></Footer>
      </>
    );
};

export default Review;