import { createSlice } from "@reduxjs/toolkit";
//user is authenticated or not this we will ask from store.
const initialState = {
    status : false,
    userData: null

}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: { 
        login: (state , action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },

        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
});
export const {login , logout} = authSlice.actions;
export default authSlice.reducer;