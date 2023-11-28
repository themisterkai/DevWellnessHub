import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  moodLevel: 0,
  energyLevel: 0,
  overwhelmedLevel: 0,
};

export const mood = createSlice({
  name: 'mood',
  initialState,
  reducers: {},
});

export const { loadMood } = mood.actions;
