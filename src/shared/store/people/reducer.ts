import { initialState } from "@/shared/store/people/initialState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setIsDisabled: (state, actions: PayloadAction<boolean>) => {
      state.isDisabled = actions.payload;
    },
    setIsLoading: (state, actions: PayloadAction<boolean>) => {
      state.isLoading = actions.payload;
    },
    setBtnLoadingMore(state, actions: PayloadAction<boolean>) {
      state.btnLoadingMore = actions.payload;
    },
  },
});

export const { setIsDisabled, setIsLoading, setBtnLoadingMore } =
  peopleSlice.actions;

export default peopleSlice.reducer;
