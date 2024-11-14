import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee}) => {
    

    const {_id,name,quantity,supplier,taste,category,details,photo}=coffee;

    const handleDelete=(id)=>{
        console.log(id);

        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            // Swal.fire({
            //   title: "Deleted!",
            //   text: "Your file has been deleted.",
            //   icon: "success",
            // });

            fetch(`http://localhost:5000/coffee/${_id}`,{
                method:'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount>0){
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                }
            })
            console.log('delete confirmed')
          }
        });
    }
    return (
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{quantity}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View</button>
              <Link to={`updatecoffee/${_id}`}>
                <button className="btn btn-primary">Edit</button>
              </Link>
              <button
                className="btn btn-primary"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;