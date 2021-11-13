import React, { useEffect, useState } from 'react';
import MenuBar from '../../Shared/MenuBar/MenuBar';


const ManageServices = () => {

    const [manage, setManage] = useState([]);


    useEffect(() => {
        fetch('https://blooming-everglades-02705.herokuapp.com/watches')
        .then(res => res.json())
        .then(data=> setManage(data))
    }, [])

    const handleDelete = id => {
         
        fetch(`https://blooming-everglades-02705.herokuapp.com/watches/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('Delete Done')
                const total = manage.filter(data => data._id !==id);
                setManage(total);
            }
            
        } )
    }

    return (
        <>
        <MenuBar></MenuBar>
        <div>
            <h1 className='text-success text-center'>my tour {manage.length}</h1>

            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Available</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                {manage.map((data, index) => (
                <tbody>
                    <tr>
                    <th scope="row">{index}</th>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td>{data.available}</td>
                    <button onClick = {() => handleDelete(data._id)} className="btn btn-danger">Remove</button>
                    </tr>
                </tbody>
                ))}
            </table>
        </div>
      </>  
    );
};

export default ManageServices;