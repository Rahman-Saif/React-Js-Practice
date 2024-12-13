import React from 'react'
import { Link } from 'react-router';

const CoffeeCard = ({coffee}) => {

    const handleDelete=(id)=>{

        fetch(`http://localhost:5000/coffee/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data=>console.log(data))
    }
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Coffee!
            <div className="badge badge-secondary">{coffee.name}</div>
          </h2>
          {/* <p>View</p> */}
          <button>View</button>
          <div className="card-actions justify-end">
            {/* <div className="badge badge-outline"></div>
            <div className="badge badge-outline"></div> */}
            <Link to={`/updateTour/${coffee._id}`}>
              <button>Edit</button>
            </Link>

            <button onClick={() => handleDelete(coffee._id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeCard
