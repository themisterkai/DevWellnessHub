import { useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { useSelector } from 'react-redux';

export const App = () => {
  const settingsState = useSelector(state => state.settings);
  const currentDayStateMood = useSelector(state => state.mood);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'LOAD_DATA' });
    dispatch({ type: 'SAVE_DATA' });
  }, []);

  return (
    <h1>
      Hello {settingsState.name}, {currentDayStateMood.moodLevel}
    </h1>
  );
};
