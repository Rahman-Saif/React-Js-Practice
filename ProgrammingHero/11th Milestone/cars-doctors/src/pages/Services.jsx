import { useEffect, useState } from "react"
import Service from "./Service";

const Services = () => {

    const [services,setServices]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
          .then((res) => res.json())
          .then((data) => setServices(data));
    },[])
  return (
    <div>
      service!
      <div>
        {
            services.map((service)=><Service service={service} key={service.id}/>)
        }
      </div>
    </div>
  )
}

export default Services
