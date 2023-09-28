import { RootState } from './store';

export const levelsSelector = (state: RootState) => state.levels;
export const gameSelector = (state: RootState) => state.game;
