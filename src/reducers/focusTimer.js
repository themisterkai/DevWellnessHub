import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  focusTimerLength: '',
  isFocusTimerRunning: false,
  focusTimer: { minutes: 0, seconds: 0 },
  focusTimerCount: 0,
};

export const focusTimer = createSlice({
  name: 'focusTimer',
  initialState,
  reducers: {},
});

// export const {} = focusTimer.actions;
