import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialstate = {
    is_logged :false,
    username: null,
    userId:null,
    phoneno:null,
    email:null,
};

export const loginSlice = createSlice({
    name: 'login',
    initialstate,
    reducers: {
        loginUser: (state, action) => {
            console.log(action.payload);
           
        },
        // logoutUser: (state, action) => {
        //     console.log(action.payload);

        // }
    }
});

export const { loginUser, logoutUser } = loginSlice.actions;

export default loginSlice.reducer