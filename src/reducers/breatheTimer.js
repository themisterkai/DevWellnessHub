import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  breatheTimerLength: '',
  isBreatheTimerRunning: false,
  breatheTimer: { minutes: 0, seconds: 0 },
  breatheTimerCount: 0,
};

export const breatheTimer = createSlice({
  name: 'breatheTimer',
  initialState,
  reducers: {},
});

export const { loadBreathe } = breatheTimer.actions;
