import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchTodos=createAsyncThunk('users/fetchTodos',async()=>{
   const res=await axios.get('https://654b50dc5b38a59f28eedc29.mockapi.io/crud');
   return res.data
});

export const addUser=createAsyncThunk('users/addUser',async(user)=>{
   const res=await axios.post('https://654b50dc5b38a59f28eedc29.mockapi.io/crud',user);
   return res.json()
});

export const deluser=createAsyncThunk('users/deluser',async(id)=>{
    const res=await axios.delete(`https://654b50dc5b38a59f28eedc29.mockapi.io/crud/${id}`);
    return res.json()
});

export const updateuser=createAsyncThunk('users/updateuser',async(user)=>{
   const res=await axios.put(`https://654b50dc5b38a59f28eedc29.mockapi.io/crud/${user.id}`,user);
   return res.json();
})

const UserSlice=createSlice({
    name:'users',
    initialState:{
      data:[],
      loading:true
    },

    extraReducers:(builder)=>{
      builder.addCase(fetchTodos.fulfilled, (state,action)=>{
            state.data=action.payload;
            state.loading=false
      }),
      builder.addCase(addUser.fulfilled,(state,action)=>{
         state.data=action.payload;
         state.loading=false;
      }),
      builder.addCase(deluser.fulfilled,(state,action)=>{
         state.data=action.payload;
         state.loading=false
      }),
      builder.addCase(updateuser.fulfilled,(state,action)=>{
         state.data=action.payload;
         state.loading=false
      })
    }
})
export default UserSlice.reducer