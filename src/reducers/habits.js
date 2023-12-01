import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habits: [],
};

export const habits = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    toggleHabit: (state, action) => {
      const { id } = action.payload;
      const selectedHabit = state.habits.find(
        habit => habit.id === parseInt(id)
      );
      selectedHabit.isComplete = !selectedHabit.isComplete;
    },
  },
});

export const { toggleHabit } = habits.actions;
