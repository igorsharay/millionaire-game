import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CurrentLevel, Level } from './types';
import { getGameLevelObject } from '../helpers/levelsHelper';

export interface GameState {
  level: CurrentLevel | null;
  isGameStarted: boolean;
  isGameOver: boolean;
  selectedAnswer: number;
  earnedAmount: string;
}

const initialState: GameState = {
  level: null,
  isGameStarted: false,
  isGameOver: false,
  selectedAnswer: -1,
  earnedAmount: '',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state, action: PayloadAction<Level>) => {
      state.isGameStarted = true;
      state.isGameOver = initialState.isGameOver;
      state.selectedAnswer = initialState.selectedAnswer;
      state.earnedAmount = initialState.earnedAmount;
      state.level = getGameLevelObject(action.payload);
    },
    endGame: (state) => {
      state.isGameOver = true;
    },
    setNextLevel: (state, action: PayloadAction<Level>) => {
      if (action.payload) {
        state.level = getGameLevelObject(action.payload);
        state.selectedAnswer = initialState.selectedAnswer;
      }
    },
    setSelectedAnswer: (state, action: PayloadAction<number>) => {
      state.selectedAnswer = action.payload;
    },
    setEarnedAmount: (state, action: PayloadAction<string>) => {
      state.earnedAmount = action.payload;
    },
  },
});

export const {
  startGame, endGame, setNextLevel, setSelectedAnswer, setEarnedAmount,
} = gameSlice.actions;

export default gameSlice.reducer;
