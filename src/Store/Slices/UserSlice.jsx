import { createSlice } from "@reduxjs/toolkit";
import {deleteAllUser} from '../Actions/Action';

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
        // deleteAllUser(state , action) {
        //     return [];
        // },
    },
    extraReducers(builder){
        builder.addCase(deleteAllUser , () => {
            return [];
        })
    },


});

export default userSlice.reducer;
export const {addUser , removeUser} = userSlice.actions;
