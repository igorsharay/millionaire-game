import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./store";


export interface GameState {
  status: "idle" | "loading" | "failed";
}

const initialState: GameState = {
  status: "idle",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // increment: state => {
    //   state.value += 1;
    // },
  },
});

//export const { increment } = gameSlice.actions;

export default gameSlice.reducer;
