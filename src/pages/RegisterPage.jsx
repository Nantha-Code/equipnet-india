import React from 'react'

function RegisterPage() {
  return (
    <>
    <div className='register-container'>
        <h2>Register</h2>

        <div className="name">
        <label>Name</label>
        <input placeholder='name'/>
        </div>
        
        <div className="role">
        <label>Role</label>
        <input placeholder='role'/>
        </div>
    .email
        <label>Email</label>
        <input placeholder='email'/>

        <label>Password</label>
        <input placeholder='password'/>

        
        </div>
    </>
  );
}

export default RegisterPage;