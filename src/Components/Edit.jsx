import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateuser } from './UserReducer';

export const Edit = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const { id } = useParams();
    const users = useSelector(state => state.users.data);
    const existinguser = users.filter(u => u.id === id)
    const { name, email } = existinguser[0];
    const [uname, setUname] = useState(name);
    const [uemail, setUemail] = useState(email);
    const handlesubmit = (e) => {
        e.preventDefault()
        dispatch(updateuser({
            id:id,
            name:uname,
            email:uemail
        }))
        navigate('/')
    }
    return (
        <>
            <div className="container addnew">
                <form onSubmit={handlesubmit} >
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" name='name' class="form-control" id="name" aria-describedby="name"
                            value={uname} onChange={e => setUname(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" value={uemail} onChange={e => setUemail(e.target.value)} />
                    </div>
                    <button type="submit" class="btn btn-danger w-100 mt-3">Update</button>
                </form>
            </div>
        </>
    )
}
