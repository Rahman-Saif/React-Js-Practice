import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const updatedcoffee=useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } =
      updatedcoffee;

     fetch(`http://localhost:5000/coffee/${_id}`, {
       method: "PUT",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify(updatedcoffee),
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         if (data.modifiedCount>0) {
           Swal.fire({
             title: "Success!",
             text: "Coffee updated successfully!",
             icon: "success",
             confirmButtonText: "Cool",
           });
         }
       });

    return (
      <div>
        <div>
          <form onSubmit={UpdateCoffee}>
            <div className="form-control">
              <label className="label">
                <span>Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee Name"
                  name="name"
                  defaultValue={name}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span>Available Qty</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee Name"
                  name="quantity"
                  defaultValue={quantity}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span>Coffee Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee Name"
                  name="supplier"
                  defaultValue={supplier}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span>Coffee Teste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee Name"
                  name="taste"
                  defaultValue={taste}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span>Coffee Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee Name"
                  name="category"
                  defaultValue={category}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span>Coffee Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee Name"
                  name="details"
                  defaultValue={details}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span>photo url</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Coffee Name"
                  name="photo"
                  defaultValue={photo}
                />
              </label>
            </div>
            <div>
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    );
};

export default UpdateCoffee;