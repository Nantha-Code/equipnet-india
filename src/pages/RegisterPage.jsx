import React from 'react'

function RegisterPage() {
  return (
    <>
    <div className='register-container'>
        <h2>Register</h2>
        
        <label>Name</label>
        <input placeholder='name'/>

        <label>Role</label>
        <input placeholder='role'/>

        <label>Email</label>
        <input placeholder='email'/>

        <label>Password</label>
        <input placeholder='password'/>

        
        </div>
    </>
  );
}

export default RegisterPage;