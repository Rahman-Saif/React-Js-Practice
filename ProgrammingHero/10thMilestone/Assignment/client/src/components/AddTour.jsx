import React from 'react'

const AddTour = () => {

    const handleAddCoffee=(e)=>{
        e.preventDefault();

        const form=e.target;

        const name=form.name.value;
        const email=form.email.value;
        const password = form.password.value;
        const destination=form.destination.value;
        const hotel=form.hotel.value;
        const money=form.money.value;
        const address=form.address.value;
        const phone=form.phone.value;

        const newCoffee={name,email,password,destination,hotel,money,address,phone};

        fetch(`http://localhost:5000/coffee`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
        })
    }
  return (
    <div>
      Add Tour
      <form onSubmit={handleAddCoffee}>
        <div>
          <label htmlFor="">Your Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="">Your Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="">Your destination</label>
          <input type="text" name="destination" />
        </div>
        <div>
          <label htmlFor="">Your Address</label>
          <input type="text" name="address" />
        </div>
        <div>
          <label htmlFor="">Your Hotel</label>
          <input type="text" name="hotel" />
        </div>
        <div>
          <label htmlFor="">Your PHone</label>
          <input type="text" name="phone" />
        </div>
        <div>
          <label htmlFor="">Your password</label>
          <input type="password" name="password" />
        </div>
        <div>
          <label htmlFor="">Your money</label>
          <input type="text" name="money" />
        </div>
        <input type="Submit" />
      </form>
    </div>
  );
}

export default AddTour
