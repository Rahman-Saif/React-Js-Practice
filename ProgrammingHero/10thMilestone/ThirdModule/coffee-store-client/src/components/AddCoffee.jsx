import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
              title: "Success!",
              text: "User added successfully!",
              icon: "success",
              confirmButtonText: "Cool",
            });
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleAddCoffee}>
        <div className="form-control">
          <label className="label">
            <span>Coffee Name</span>
          </label>
          <label className="input-group">
            <input type="text" placeholder="Coffee Name" name="name" />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span>Available Qty</span>
          </label>
          <label className="input-group">
            <input type="text" placeholder="Coffee Name" name="quantity" />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span>Coffee Supplier</span>
          </label>
          <label className="input-group">
            <input type="text" placeholder="Coffee Name" name="supplier" />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span>Coffee Teste</span>
          </label>
          <label className="input-group">
            <input type="text" placeholder="Coffee Name" name="taste" />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span>Coffee Category</span>
          </label>
          <label className="input-group">
            <input type="text" placeholder="Coffee Name" name="category" />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span>Coffee Details</span>
          </label>
          <label className="input-group">
            <input type="text" placeholder="Coffee Name" name="details" />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span>photo url</span>
          </label>
          <label className="input-group">
            <input type="text" placeholder="Coffee Name" name="photo" />
          </label>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
