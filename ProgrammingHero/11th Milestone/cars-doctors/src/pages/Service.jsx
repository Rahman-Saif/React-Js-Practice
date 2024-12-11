import React from 'react'
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id,title}=service;
  return (
    <div>
      <h1>{title}</h1>
      <h1>{id}</h1>
      <Link to={`/checkout/${id}`}>
        Click Me 
      </Link>
    </div>
  )
}

export default Service
