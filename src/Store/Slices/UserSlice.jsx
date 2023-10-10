import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "users",
    initialState : [],
    reducers : {
        addUser(state , action) {
             state.push(action.payload);
        },
        removeUser(state , action) {
            state.splice(action.payload , 1)
        },
        deleteAllUser(state , action) {
            return [];
        },
    },
    extraReducers(builder){
        builder.addCase(userSlice.actions.deleteAllUser , () => {
            return [];
        })
    },


});

export default userSlice.reducer;
export const {addUser , removeUser , deleteAllUser} = userSlice.actions;
