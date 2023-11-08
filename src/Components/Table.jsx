import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deluser } from './UserReducer';
import { fetchTodos } from './UserReducer';
import Alertmsg  from './Alert';
const Table = () => {
  const [alert,setalert]=useState('null')
   
  const showAlert=(msg,type)=>{
     setalert({msg,type})
     setTimeout(()=>{ setalert('null') },1500)
  }
    const users=useSelector(state=>state.users.data);
    const loading=useSelector(state=>state.users.loading);
    const top10users=[...users].sort((a,b)=>a.id > b.id ? -1 : 1).slice(0,10)
    const dispatch=useDispatch()
    const handledelete=(id)=>{
      dispatch(deluser(id));
      showAlert('User Delete Successfully','danger')
    };
    useEffect(()=>{
      dispatch(fetchTodos());
    },[])
    
  return (
    <div>
      {alert && <Alertmsg  alert={alert}/>}
      <div className="container mt-5">
        <h2 className='text-center'>{loading ? 'Loading.... ' :'Crud Operation with Redux Toolkit'}</h2>
        <Link className='btn btn-success mt-5 mb-5' to={'/add'}>Add New</Link>
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {top10users.map((item)=>{
                return(
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td><Link to={`/edit/${item.id}`}  className='btn btn-sm btn-primary me-3'>Edit</Link>
                    <button type='submit' onClick={()=>(handledelete(item.id) , alert('User Delete Successfully'))}  className='btn btn-sm btn-danger'>Delete</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table
