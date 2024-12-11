import { useLoaderData } from "react-router-dom"

const Checkout = () => {

    const service=useLoaderData();
    const {id,title}=service;
  return (
    <div>
      <h2>Book info : {id}</h2>
    </div>
  )
}

export default Checkout
