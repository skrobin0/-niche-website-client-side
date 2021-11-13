import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MenuBar from '../../Shared/MenuBar/MenuBar';

const MyOrder = () => {

    const [myOrder, setMyOrder] = useState([]);
    const {users} = useAuth();

    useEffect(() => {
        fetch(`https://blooming-everglades-02705.herokuapp.com/orders/${users?.email}`)
        .then(res => res.json())
        .then(data => setMyOrder(data))
    }, [users.email]);
    console.log(myOrder);

    const myDelete = id => {
         
        fetch(`https://blooming-everglades-02705.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('Delete Done')
                const total = myOrder.filter(data => data._id !==id);
                setMyOrder(total);
            }
            
        } )
    }

    return (
        <div>
             <MenuBar></MenuBar>
            <h1 className ="text-center text-success">My Order : {myOrder.length}</h1>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Product</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                {myOrder.map((data, index) => (
                <tbody>
                    <tr>
                    <th scope="row">{index}</th>
                    <td>{users.displayName}</td>
                    <td>{users.email}</td>
                    <td>{data.PlaceName}</td>
                    <button onClick = {() => myDelete(data._id)} className="btn btn-danger">Remove</button>
                    </tr>
                </tbody>
                ))}
            </table>       
        </div>
    );
};

export default MyOrder;