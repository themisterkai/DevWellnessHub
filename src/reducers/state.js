const initialState = {
  settings: {
    name: '',
    colorPalette: '',
    isMobile: false,
  },
  focusTimer: {
    focusTimerLength: '',
    isFocusTimerRunning: false,
    focusTimer: { minutes: 0, seconds: 0 },
    focusTimerCount: 0,
  },
  breatheTimer: {
    breatheTimerLength: '',
    isBreatheTimerRunning: false,
    breatheTimer: { minutes: 0, seconds: 0 },
    breatheTimerCount: 0,
  },
  habits: {
    habits: [
      {
        id: 0,
        description: 'habit one',
        isComplete: false,
      },
    ],
  },
  mood: {
    moodLevel: 0,
    energyLevel: 0,
    overwhelmedLevel: 0,
  },
};
