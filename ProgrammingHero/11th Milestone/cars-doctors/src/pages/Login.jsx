import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'

const Login = () => {

    const {signIn}=useContext(AuthContext)
    const handleSubmit=(e)=>{
         e.preventDefault();
         const form = e.target;
         const email = form.email.value;
         const password = form.password.value;
         console.log(name, email, password);

         signIn(email, password)
           .then((result) => {
             const user = result.user;
             console.log(user);
           })
           .then((error) => console.log(error));
    }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" name='name'/>
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="email" name='email'/>
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" name='password' />
      </div>
      <div>
        <input type="submit" />
      </div>
      <p>New to This? <Link to='/signup'>Signup</Link></p>
    </form>
  )
}

export default Login
