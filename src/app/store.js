import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import teamSlice from "../features/teamSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    team: teamSlice,
  },
});
