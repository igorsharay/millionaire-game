import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./store";

export interface QuestionsState {
  status: "idle" | "loading" | "failed";
}

const initialState: QuestionsState = {
  status: "idle",
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // increment: state => {
    //   state.value += 1;
    // },
  },
});

//export const { increment } = gameSlice.actions;

export default questionsSlice.reducer;
