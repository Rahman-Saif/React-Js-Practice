import React from 'react'

const Service = ({service}) => {
    const {id,title}=service;
  return (
    <div>
      <h1>{title}</h1>
      <h1>{id}</h1>
    </div>
  )
}

export default Service
