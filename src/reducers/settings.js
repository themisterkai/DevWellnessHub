import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  name: '',
  // we should set a default value here
  colorPalette: 'dark',
  // default value of 1 min in ms (for testing purposes)
  focusTimerLengthMS: 1 * 60 * 1000,
  // default value of 1 min
  breatheTimerLengthMS: 1 * 60 * 1000,
  isMobile: false,
  habits: [
    {
      id: 0,
      description: 'exercise for at least 20 minutes',
      isComplete: false,
    },
    {
      id: 1,
      description: 'take a 15-minute walk',
      isComplete: false,
    },
    {
      id: 2,
      description: 'read a book for 20 min',
      isComplete: false,
    },
    {
      id: 3,
      description: 'drink at least 8 glasses of water',
      isComplete: false,
    },
    {
      id: 4,
      description: 'floss',
      isComplete: false,
    },
  ],
};

export const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateName: (state, action) => {
      const { name } = action.payload;
      state.name = name;
      localStorage.setItem('settings', JSON.stringify(state));
    },
    updateColorPalette: (state, action) => {
      const { colorPalette } = action.payload;
      state.colorPalette = colorPalette;
      localStorage.setItem('settings', JSON.stringify(state));
    },
    updateFocusTimerLengthMS: (state, action) => {
      const { focusTimerLengthMS } = action.payload;
      state.focusTimerLengthMS = focusTimerLengthMS;
      localStorage.setItem('settings', JSON.stringify(state));
    },
    updateBreatheTimerLengthMS: (state, action) => {
      const { breatheTimerLengthMS } = action.payload;
      state.breatheTimerLengthMS = breatheTimerLengthMS;
      localStorage.setItem('settings', JSON.stringify(state));
    },
    updateIsMobile: (state, action) => {
      const { isMobile } = action.payload;
      state.isMobile = isMobile;
    },
    factoryReset: () => {
      // Reset all fields to initial values
      localStorage.clear();
      window.location.reload(false);
    },
  },
});

export const {
  loadAppSettings,
  updateName,
  updateColorPalette,
  updateFocusTimerLengthMS,
  updateBreatheTimerLengthMS,
  updateIsMobile,
  factoryReset,
} = settings.actions;
