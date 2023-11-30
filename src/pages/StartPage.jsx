import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateName } from '../reducers/settings';
import { setMoodLevel } from '../reducers/mood';
import "./SettingsPage.css";
//Welcoming page + initial user data inputted;
//This page will be responsive by using MediaQueries only -- one page
//fits all;

//Working on this page, it will understand the size of the screen and after the submit
//it will give the app version better suiting the screenSize.
export const StartPage = ({ onSetupComplete }) => {
  //The start page here will set initial data to the store,
  //used then for the app itself
  const settingsState = useSelector(state => state.settings);
  const currentDayStateMood = useSelector(state => state.mood);
  const [name, setName] = useState('');
  const [mood, setMood] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    // Check localStorage for existing data
    const storedSettings = JSON.parse(localStorage.getItem('settings'));
    const storedName = storedSettings ? storedSettings.name : null;

    console.log(storedName);

    if (storedName) {
      // If data is found, skip the StartPage
      onSetupComplete();
    }
  }, [onSetupComplete]);

  useEffect(() => {
    dispatch({ type: 'LOAD_DATA' });
    dispatch({ type: 'SAVE_DATA' });
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

  const handleGoToDashboard = () => {
    //Validate that the required information is provided
    //This could be changed or many other validations passed in!
    if (!name || !mood) {
      alert('Please fill out all required information before proceeding.');
      return;
    }

    //If all validation passes, call the onSetupComplete function
    onSetupComplete();
  };

    
  return (
    <>
      <h1>Hello {settingsState.name}</h1>
      Mood Level: {currentDayStateMood.moodLevel}
      <p />
      <div>
        Set Name:{' '}
        <input
          onChange={e => {
            setName(e.target.value);
          }}
        ></input>
        {' '}
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
        {' '}
        <button onClick={() => handleSetMoodLevel(mood)}>
          Submit Mood Level
        </button>
      </div>
      <div>
        <button onClick={handleGoToDashboard}>Go to Dashboard</button>
      </div>
    </>
  );

};
 