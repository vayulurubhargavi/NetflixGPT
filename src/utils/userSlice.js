import { createSlice } from "@reduxjs/toolkit";

// Create a slice for the user object
// The user object will be stored in the Redux store
// The user object will be null by default
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
