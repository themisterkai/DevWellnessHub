import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isBreatheTimerRunning: false,
  isBreatheTimerPaused: false,
  breatheTimer: 0,
  breatheTimerCount: 0,
};

export const breatheTimer = createSlice({
  name: 'breatheTimer',
  initialState,
  reducers: {
    startBreatheTimer: state => {
      state.isBreatheTimerRunning = true;
      state.isBreatheTimerPaused = false;
    },

    pauseBreatheTimer: state => {
      state.isBreatheTimerPaused = !state.isBreatheTimerPaused;
    },

    resetBreatheTimer: state => {
      state.isBreatheTimerRunning = false;
      state.isBreatheTimerPaused = false;
      state.focusTimer = 0;
    },

    endBreatheTimer: state => {
      state.isBreatheTimerRunning = false;
      state.isBreatheTimerPaused = false;
      state.breatheTimerCount += 1;
    },

    setBreatheTimer: (state, action) => {
      state.breatheTimer = action.payload.breatheTimer;
    },
  },
});

export const {
  startBreatheTimer,
  pauseBreatheTimer,
  resetBreatheTimer,
  endBreatheTimer,
  setBreatheTimer,
} = breatheTimer.actions;
