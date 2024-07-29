import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'man',
  initialState: {   // here the initial state has a list in which we can add the users and can remove as well 
    list :[],
    error : false,
  },
  reducers: {                    // This reducer takes the new user data from action.payload and adds it to the list.
    addUser:(state, action) =>{
 // Add the new user to the list
 state.list = action.payload ;
    },
    addError:(state, action) =>{
 // Add the new user to the list
 state.error = action.payload ;
    },
   
    removeUser:(state, action)=> {       
  // Remove the user with the given id from the list
  state.list = state.list.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, removeUser, addError } = userSlice.actions;

export default {userSlice} ;