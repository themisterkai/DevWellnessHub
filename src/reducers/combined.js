import { combineReducers } from '@reduxjs/toolkit';

import { breatheTimer } from './breatheTimer.js';
import { focusTimer } from './focusTimer.js';
import { habits } from './habits.js';
import { getCurrentDate } from '../helpers.js';
import { historical } from './historical.js';
import { mood } from './mood.js';
import { settings } from './settings.js';

const combinedReducer = combineReducers({
  mood: mood.reducer,
  focusTimer: focusTimer.reducer,
  breatheTimer: breatheTimer.reducer,
  habits: habits.reducer,
  settings: settings.reducer,
  historical: historical.reducer,
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
      localStorage.setItem('settings', JSON.stringify(state.settings));
      return state;
    }

    case 'LOAD_DATA': {
      const settings = localStorage.getItem('settings');
      let currentSettings = { ...state.settings };

      if (settings != null) {
        currentSettings = {
          ...JSON.parse(settings),
        };
      }

      const currentData = {
        mood: state.mood,
        focusTimer: state.focusTimer,
        breatheTimer: state.breatheTimer,
        habits: state.habits,
      };

      const dataFromLocalStorage = localStorage.getItem(getCurrentDate());
      if (dataFromLocalStorage != null) {
        const parsedData = JSON.parse(dataFromLocalStorage);
        currentData.mood = parsedData.mood;
        currentData.focusTimer = parsedData.focusTimer;
        currentData.breatheTimer = parsedData.breatheTimer;
        currentData.habits = parsedData.habits;
      }

      return {
        ...state,
        ...currentData,
        settings: {
          ...currentSettings,
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
