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
      // delete settings page
      delete historicalData.settings;
      delete historicalData[getCurrentDate()];
      state.historicalData = { ...historicalData };
    },
  },
});

export const { loadHistoricalData, setEnergyLevel, setOverwhelmedLevel } =
  historical.actions;
