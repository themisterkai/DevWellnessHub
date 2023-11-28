import { combineReducers } from '@reduxjs/toolkit';

import { mood } from './mood.js';
import { breatheTimer } from './breatheTimer.js';
import { focusTimer } from './focusTimer.js';
import { habits } from './habits.js';
import { settings } from './settings.js';
import { getCurrentDate } from '../helpers.js';

const combinedReducer = combineReducers({
  mood: mood.reducer,
  focusTimer: focusTimer.reducer,
  breatheTimer: breatheTimer.reducer,
  habits: habits.reducer,
  settings: settings.reducer,
});

const crossSliceReducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_DATA': {
      const currentData = {
        mood: state.mood,
        focusTimer: state.focusTimer,
        breatheTimer: state.breatheTimer,
        habits: state.habits,
      };
      localStorage.setItem(getCurrentDate(), JSON.stringify(currentData));
      return state;
    }
    case 'LOAD_DATA': {
      const name = localStorage.getItem('name') || state.settings.name;
      const colorPalette =
        localStorage.getItem('colorPalette') || state.settings.colorPalette;
      const focusTimerLengthMS =
        localStorage.getItem('focusTimerLengthMS') ||
        state.settings.focusTimerLengthMS;
      const breatheTimerLengthMS =
        localStorage.getItem('breatheTimerLengthMS') ||
        state.settings.breatheTimerLengthMS;

      const currentData = {
        mood: state.mood,
        focusTimer: state.focusTimer,
        breatheTimer: state.breatheTimer,
        habits: state.habits,
      };
      const currentDayData = localStorage.getItem(getCurrentDate());

      if (currentDayData != null) {
        const parsedData = JSON.parse(currentDayData);
        currentData.mood = parsedData.mood;
        currentData.focusTimer = parsedData.focusTimer;
        currentData.breatheTimer = parsedData.breatheTimer;
        currentData.habits = parsedData.habits;
      }

      return {
        ...state,
        ...currentData,
        settings: {
          ...state.settings,
          name,
          colorPalette,
          focusTimerLengthMS,
          breatheTimerLengthMS,
        },
      };
    }
    default:
      return state;
  }
};

export const reducer = (state, action) => {
  const intermediateState = combinedReducer(state, action);
  const finalState = crossSliceReducer(intermediateState, action);
  return finalState;
};
