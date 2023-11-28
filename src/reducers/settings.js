import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'KAIIIII',
  // we should set a default value here
  colorPalette: '',
  // default value of 25 min in ms
  focusTimerLengthMS: 25 * 60 * 1000,
  // defiult value of 1 min
  breatheTimerLengthMS: 1 * 60 * 1000,
  isMobile: false,
};

export const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateName: (state, action) => {
      const { name } = action.payload;
      state.name = name;
      localStorage.setItem('name', name);
    },
    updateColorPalette: (state, action) => {
      const { colorPalette } = action.payload;
      state.colorPalette = colorPalette;
      localStorage.setItem('colorPalette', colorPalette);
    },
    updateFocusTimerLengthMS: (state, action) => {
      const { focusTimerLengthMS } = action.payload;
      state.focusTimerLengthMS = focusTimerLengthMS;
      localStorage.setItem('focusTimerLengthMS', focusTimerLengthMS);
    },
    updateBreatheTimerLengthMS: (state, action) => {
      const { breatheTimerLengthMS } = action.payload;
      state.breatheTimerLengthMS = breatheTimerLengthMS;
      localStorage.setItem('breatheTimerLengthMS', breatheTimerLengthMS);
    },
  },
});

export const {
  loadAppSettings,
  updateName,
  updateColorPalette,
  updateFocusTimerLengthMS,
  updateBreatheTimerLengthMS,
} = settings.actions;
