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
      state.moodLevel = parseInt(action.payload.moodLevel);
    },
    setEnergyLevel: (state, action) => {
      state.energyLevel = parseInt(action.payload.energyLevel);
    },
    setOverwhelmedLevel: (state, action) => {
      state.overwhelmedLevel = parseInt(action.payload.overwhelmedLevel);
    },
    resetMood: state => {
      
      Object.assign(state, initialState);
      localStorage.removeItem('mood'); 
    },
  },
});

export const { setMoodLevel, setEnergyLevel, setOverwhelmedLevel, resetMood } =
  mood.actions;
