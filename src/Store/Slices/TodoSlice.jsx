import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoList",
  initialState: {
    defaultTodoData: [
      {
        name: "adnan",
        lastName: "Tariq",
        email: "dummy@gmail.com",
        phone: "03230838837 ",
        address: "Tehsil Pindigheb Gheb",
      },
      {
        name: "Hanan",
        lastName: "Tariq",
        email: "dummy@gmail.com",
        phone: "03230838837 ",
        address: "Tehsil Pindigheb Gheb",
      },
      {
        name: "Wajid",
        lastName: "Mehmood",
        email: "dummy@gmail.com",
        phone: "03230838837 ",
        address: "Tehsil Pindigheb Gheb",
      },
    ],
    uniqueData: { name: "", lastName: "", email: "", phone: "", address: "" },
  },
  // REDUCERS FUNCTION
  reducers: {
    getUniqueData(state, action) {
      state.uniqueData = state.defaultTodoData.find((element, index) => {
        return index === action.payload;
      });
    },

    clearData(state, action) {
      state.uniqueData = {
        name: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
      };
    },

    // EDIT ITEM REDUCER
    editData(state, action) {},

    // REMOVE ITEM REDUCER
    removeItem(state, action) {},
    deleteAllUser(state, action) {},
  },
});

export default todoSlice.reducer;
export const { getUniqueData, clearData } = todoSlice.actions;
