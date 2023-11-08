import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {addUser} from './UserReducer'
import { useDispatch, useSelector } from 'react-redux';
const Addnew = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const handlesubmit=(e)=>{
        e.preventDefault();
        dispatch(addUser({name,email}))
        navigate('/')
    }
    return (
        <div className="container addnew">
            <form onSubmit={handlesubmit} >
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" name='name' class="form-control" id="name" aria-describedby="name" onChange={e=>setName(e.target.value)}/>  
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" onChange={e=>setEmail(e.target.value)}/>
                </div>
                <button type="submit" class="btn btn-danger w-100 mt-3">Submit</button>
            </form>
        </div>
    )
}

export default Addnew
