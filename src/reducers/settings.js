import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  // we should set a default value here
  colorPalette: '',
  // default value of 25 min in ms
  focusTimerLengthMS: 25 * 60 * 1000,
  // default value of 1 min
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
  },
});

export const {
  loadAppSettings,
  updateName,
  updateColorPalette,
  updateFocusTimerLengthMS,
  updateBreatheTimerLengthMS,
  updateIsMobile,
} = settings.actions;
