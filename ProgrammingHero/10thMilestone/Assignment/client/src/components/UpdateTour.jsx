import React from 'react'
import { useLoaderData } from 'react-router'

const UpdateTour = () => {

    const coffee=useLoaderData();

    const handleAddCoffee = (e) => {
      e.preventDefault();

      const form = e.target;

      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const destination = form.destination.value;
      const hotel = form.hotel.value;
      const money = form.money.value;
      const address = form.address.value;
      const phone = form.phone.value;

      const newCoffee = {
        name,
        email,
        password,
        destination,
        hotel,
        money,
        address,
        phone,
      };

      fetch(`http://localhost:5000/coffee/${coffee._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCoffee),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    };
  return (
    <div>
      Update Tour!
      <div>
        <form onSubmit={handleAddCoffee}>
          <div>
            <label htmlFor="">Your Email</label>
            <input type="email" name="email" defaultValue={coffee.email} />
          </div>
          <div>
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" defaultValue={coffee.name} />
          </div>
          <div>
            <label htmlFor="">Your destination</label>
            <input
              type="text"
              name="destination"
              defaultValue={coffee.destination}
            />
          </div>
          <div>
            <label htmlFor="">Your Address</label>
            <input type="text" name="address" defaultValue={coffee.address} />
          </div>
          <div>
            <label htmlFor="">Your Hotel</label>
            <input type="text" name="hotel" defaultValue={coffee.hotel} />
          </div>
          <div>
            <label htmlFor="">Your PHone</label>
            <input type="text" name="phone" defaultValue={coffee.phone} />
          </div>
          <div>
            <label htmlFor="">Your password</label>
            <input
              type="password"
              name="password"
              defaultValue={coffee.password}
            />
          </div>
          <div>
            <label htmlFor="">Your money</label>
            <input type="text" name="money" defaultValue={coffee.money} />
          </div>
          <input type="Submit" />
        </form>
      </div>
    </div>
  );
}

export default UpdateTour
