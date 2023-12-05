import { createSlice } from '@reduxjs/toolkit';

import { getCurrentDate } from '../helpers';

const initialState = {
  historicalData: {},
};

export const historical = createSlice({
  name: 'historical',
  initialState,
  reducers: {
    loadHistoricalData: state => {
      const historicalData = { ...localStorage };
      // delete settings data
      delete historicalData.settings;
      // delete data for the current date
      delete historicalData[getCurrentDate()];
      state.historicalData = { ...historicalData };
    },

    resetHistorical: state => {
      // Reset historical fields to initial values
      Object.assign(state, initialState);
      localStorage.removeItem('historical');
    },
  },
});

export const { loadHistoricalData, setEnergyLevel, setOverwhelmedLevel, resetHistorical } =
  historical.actions;
