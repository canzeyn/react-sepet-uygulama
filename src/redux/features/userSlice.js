import { createSlice } from "@reduxjs/toolkit";
import {userData} from '../../FakeData'



 
 


export const userSlice = createSlice({
    name:"users",
     initialState: {
        value: userData
     },
    
    reducers: {
        addUser: (state,action) => {
            state.action.push(action.payload)
        },
        deleteUser: () => {
            state.value = state.value.filter((user) => user.id !== aciton.payload.id)
        }
    }
})


export const {addUser} = userSlice.actions;
export default  userSlice.reducer;