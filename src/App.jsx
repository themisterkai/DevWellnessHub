import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { loadHistoricalData } from './reducers/historical';
import { setMoodLevel } from './reducers/mood';
import { updateName } from './reducers/settings';

export const App = () => {
  const settingsState = useSelector(state => state.settings);
  const currentDayStateMood = useSelector(state => state.mood);

  const [name, setName] = useState('');
  const [mood, setMood] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'LOAD_DATA' });
    dispatch({ type: 'SAVE_DATA' });
    dispatch(loadHistoricalData({}));
  }, []);

  useEffect(() => {
    setMoodLevel(currentDayStateMood);
  }, [currentDayStateMood]);

  const handleSubmitName = name => {
    dispatch(updateName({ name }));
  };

  const handleSetMoodLevel = moodLevel => {
    dispatch(setMoodLevel({ moodLevel }));
    dispatch({ type: 'SAVE_DATA' });
  };

  return (
    <>
      <h1>Hej {settingsState.name}</h1>
      Mood Level: {currentDayStateMood.moodLevel}
      <p />
      <div>
        Set Name:{' '}
        <input
          onChange={e => {
            setName(e.target.value);
          }}
        ></input>
        <button onClick={() => handleSubmitName(name)}>Submit Name</button>
      </div>
      <div>
        Set Mood Level:{' '}
        <input
          type="number"
          value={mood}
          min="1"
          max="10"
          onChange={e => {
            setMood(e.target.value);
          }}
        ></input>
        <button onClick={() => handleSetMoodLevel(mood)}>
          Submit Mood Level
        </button>
      </div>
    </>
  );
};
