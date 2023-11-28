import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habits: {
    habits: [
      {
        id: 0,
        description: 'habit one',
        isComplete: false,
      },
    ],
  },
};

export const habits = createSlice({
  name: 'habits',
  initialState,
  reducers: {},
});

export const { loadHabits } = habits.actions;
