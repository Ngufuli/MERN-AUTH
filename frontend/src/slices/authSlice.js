import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getInfo('userInfo') ? JSON.parse(localStorage.getInfo('userInfo')) : null
}

const authSlice = createSlice({
    setCredentials: (state, action) => {
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    logout: (state, action) => {
        state.userInfo = null,
        localStorage.removeItem('userInfo')
    }
})

export const {setCredentials, logout} = authSlice.actions;
export default authSlice.reducer;