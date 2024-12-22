import React from 'react'
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
    const {_id, category,deadline}=job;
  return (
    <Link to={`job/${_id}`}>
      <h1>{deadline}</h1>
      <h1>{category}</h1>
    </Link>
  )
}

export default JobCard
