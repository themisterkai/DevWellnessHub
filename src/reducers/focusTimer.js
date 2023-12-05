import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFocusTimerRunning: false,
  isFocusTimerPaused: false,
  focusTimer: 0,
  focusTimerCount: 0,
};

export const focusTimer = createSlice({
  name: 'focusTimer',
  initialState,
  reducers: {
    startFocusTimer: state => {
      state.isFocusTimerRunning = true;
      state.isFocusTimerPaused = false;
    },

    pauseFocusTimer: state => {
      state.isFocusTimerPaused = !state.isFocusTimerPaused;
    },

    resetFocusTimer: state => {
      state.isFocusTimerRunning = false;
      state.isFocusTimerPaused = false;
      state.focusTimer = 0;
    },

    endFocusTimer: state => {
      state.isFocusTimerRunning = false;
      state.isFocusTimerPaused = false;
      state.focusTimerCount += 1;
    },

    setFocusTimer: (state, action) => {
      state.focusTimer = action.payload.focusTimer;
    },

    resetFactoryFocusTimer: state => {
      // Reset focusTimer to initial values
      Object.assign(state, initialState);
      localStorage.removeItem('focusTimer');
    },
  },
});

export const {
  startFocusTimer,
  pauseFocusTimer,
  resetFocusTimer,
  endFocusTimer,
  setFocusTimer,
  resetFactoryFocusTimer,
} = focusTimer.actions;
