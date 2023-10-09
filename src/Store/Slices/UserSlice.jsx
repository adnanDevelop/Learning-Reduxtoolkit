import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "users",
    initialState : [],
    reducers : {
        addUser(state , action) {
             state.push(action.payload);
        },
        removeUser(state , action) {
            let newData = state.filter((element , index) => {
                return action.payload !== index;
            })
            return state.push(newData);
        },
        deleteAllUser(state , action) {},
    },
});

export default userSlice.reducer;
export const {addUser , removeUser , deleteAllUser} = userSlice.actions;
