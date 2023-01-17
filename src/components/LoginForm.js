import React from 'react';
import './LoginForm.css';


const LoginForm = () => {
   return (
      <div className="login">
      <h2>Login Form</h2>
      <form action="">
         <label>User Name: </label>
         <input type="text" placeholder='Name'/>
         <br /><br />
         <label>Password: </label>
         <input type="password" placeholder='Password'/>
         <br /><br />
         <label>Password: </label>
         <input type="password" placeholder='Confirm Password' />
         <br /><br />
         <button className='btn btn-success'>Login Now</button>

      </form>
      </div>     
   );
}

export default LoginForm;