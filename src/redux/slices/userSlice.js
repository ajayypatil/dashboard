import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name : "user",
    initialState: {
        userName: "",
        isLoggedIn : false
    },
    reducers : {
        addUser : (state, action)=> {
          state.userName = action.payload.userName;
          state.isLoggedIn = true;
        },
        removeUser : (state, action)=> {
            state.userName = "";
          state.isLoggedIn = false;
        }
    }
})

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;