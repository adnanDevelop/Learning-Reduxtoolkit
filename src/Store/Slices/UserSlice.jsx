import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "users",
    initialState : [],
    reducers : {
        addUser(state , action) {
             state.push(action.payload);
        },
        removeUser(state , action) {},
        deleteAllUser(state , action) {},
    },
});

export default userSlice.reducer;
export const {addUser} = userSlice.actions;
