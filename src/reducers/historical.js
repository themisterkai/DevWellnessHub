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
  },
});

export const { loadHistoricalData, setEnergyLevel, setOverwhelmedLevel } =
  historical.actions;
