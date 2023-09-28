import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import levelsData from '../levels.json';
import { Level } from './types';

export interface LevelsState {
  levels: Array<Level> | null;
  status: 'idle' | 'succeded' | 'failed';
}

const initialState: LevelsState = {
  levels: null,
  status: 'idle',
};

export const fetchLevelsData = createAsyncThunk(
  'levels/fetchLevelsData',
  async (_, { rejectWithValue, fulfillWithValue }) => {
    const levelsJson = levelsData;

    if (!levelsJson) {
      return rejectWithValue({ message: 'error' });
    }

    return fulfillWithValue(levelsJson);
  },
);

export const levelsSlice = createSlice({
  name: 'levels',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLevelsData.fulfilled, (state, action) => {
      const newLevels = [...action.payload];
      state.levels = newLevels.sort((itemA: Level, itemB: Level) => itemA.id - itemB.id);
      state.status = 'succeded';
    });

    builder.addCase(fetchLevelsData.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export default levelsSlice.reducer;
