import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser=useLoaderData();

    const handleUpdate=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name;
        const email=form.email;
        const updatedUser={name,email}

        fetch(`http://localhost:5000/update/${loadedUser._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',

            },
            body:JSON.stringify(updatedUser)
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });


    }
    return (
        <div>
            <p>information on {loadedUser.name}</p>
            <form onSubmit={handleUpdate}>
                <input type="text" defaultValue={loadedUser?.name} />
                <br />
                <input type="email" defaultValue={loadedUser?.email}/>
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Update;