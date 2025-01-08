import { peopleSlice } from "@/shared/store/people/reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    people: peopleSlice.reducer,
  },
});
