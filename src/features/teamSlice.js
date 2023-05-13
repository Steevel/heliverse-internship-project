import { createSlice } from "@reduxjs/toolkit";

export const teamSlice = createSlice({
  name: "teamSlice",
  initialState: {
    members: [],
  },
  reducers: {
    addToTeam: (prevState, action) => {
      const data = [...prevState.members, action.payload];
      prevState.members = data;
    },
  },
});

export const { addToTeam } = teamSlice.actions;
export default teamSlice.reducer;
