import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  moodLevel: 5,
  energyLevel: 5,
  overwhelmedLevel: 5,
};

export const mood = createSlice({
  name: 'mood',
  initialState,
  reducers: {
    setMoodLevel: (state, action) => {
      state.moodLevel = action.payload.moodLevel;
    },
    setEnergyLevel: (state, action) => {
      state.energyLevel = action.payload.energyLevel;
    },
    setOverwhelmedLevel: (state, action) => {
      state.overwhelmedLevel = action.payload.overwhelmedLevel;
    },
  },
});

export const { setMoodLevel, setEnergyLevel, setOverwhelmedLevel } =
  mood.actions;
