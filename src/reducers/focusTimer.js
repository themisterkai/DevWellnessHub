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
  reducers: {
    startTimer: state => {
      state.isFocusTimerRunning = true;
    },

    endTimer: state => {
      state.isFocusTimerRunning = false;
      state.focusTimerCount += 1;
    },

    setTimer: (state, action) => {
      state.focusTimer.minutes = action.payload.minutes;
      state.focusTimer.seconds = action.payload.seconds;
    },
  },
});

// export const {} = focusTimer.actions;
