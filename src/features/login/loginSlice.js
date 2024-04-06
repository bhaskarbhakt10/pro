import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    is_logged: false,
    ID: null,
    username: null,
    userId: null,
    phoneno: null,
    email: null,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            const {
                ID,
                email,
                f_name,
                l_name,
                u_name,
                phone_no,
            } = action.payload;

            state.is_logged = true;
            state.username = u_name;
            state.userId = ID;
            state.phoneno = phone_no;
            state.firstname = f_name;
            state.lastname = l_name;

        },
        logoutUser: (state, action) => {

            state.is_logged = false;
            state.username = null;
            state.userId = null;
            state.phoneno = null;
            state.firstname = null;
            state.lastname = null;

        }
    }
});

export const { loginUser, logoutUser } = loginSlice.actions;

export default loginSlice.reducer