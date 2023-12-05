import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  updateName,
  updateFocusTimerLengthMS,
  updateBreatheTimerLengthMS,
} from '../reducers/settings';
import "./StartPage.css";
//Welcoming page + initial user data inputted;
//This page will be responsive by using MediaQueries only -- one page
//fits all;

//Working on this page, it will understand the size of the screen and after the submit
//it will give the app version better suiting the screenSize.
export const StartPage = ({ onSetupComplete }) => {
  //The start page here will set initial data to the store,
  //used then for the app itself
  const settingsState = useSelector(state => state.settings);
  const [name, setName] = useState(settingsState.name);
  const [focusTimerLength, setFocusTimerLength] = useState(
    settingsState.focusTimerLengthMS / (60 * 1000) // convert milliseconds to minutes
  );
  const [breatheTimerLength, setBreatheTimerLength] = useState(
    settingsState.breatheTimerLengthMS / (60 * 1000) // convert milliseconds to minutes
  );

  // Add state variables to track button clicks
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [focusTimerSubmitted, setFocusTimerSubmitted] = useState(false);
  const [breatheTimerSubmitted, setBreatheTimerSubmitted] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    //Check localStorage for existing data
    //I think this could be refactored better?
    const storedSettings = JSON.parse(localStorage.getItem('settings'));
    const storedName = storedSettings ? storedSettings.name : null;

    //console.log(storedName);

    if (storedName) {
      // If data is found, skip the StartPage
      onSetupComplete();
    }
  }, []);

  /*
  useEffect(() => {
    dispatch({ type: 'LOAD_DATA' });
    dispatch({ type: 'SAVE_DATA' });
  }, []);
  */

  const handleSubmitName = () => {
    dispatch(updateName({ name }));
    setNameSubmitted(true);
  };

  const handleSetFocusTimerLength = () => {
    dispatch(updateFocusTimerLengthMS({
      focusTimerLengthMS: focusTimerLength * 60 * 1000 // convert minutes to milliseconds
    }));
    setFocusTimerSubmitted(true);
  }

  const handleSetBreatheTimerLength = () => {
    dispatch(updateBreatheTimerLengthMS({
      breatheTimerLengthMS: breatheTimerLength * 60 * 1000 // convert minutes to milliseconds
    }));
    setBreatheTimerSubmitted(true);
  }

  const handleGoToDashboard = () => {
    // Validate that the name is provided
    if (!settingsState.name) {
      alert('Please fill out your name before proceeding.');
      return;
    }
  
    if (focusTimerSubmitted && breatheTimerSubmitted) {
      // If both timers are modified, proceed to onSetupComplete
      onSetupComplete();
    } else {
      // If neither timer is modified, show an alert and proceed after confirmation
      const confirmation = window.confirm('You have not submitted the values for one or both timers. They will be set to the default values. Do you want to proceed?');
  
      if (confirmation) {
        onSetupComplete();
      } else {
        alert('Please review and confirm your timer settings before proceeding.');
      }
    }
  };
  
  
    
  return (
    <div className="start-wrapper">
      <h1>Hello {settingsState.name}</h1>
      <div>
        Set Name:{' '}
        <input
          onChange={e => {
            setName(e.target.value);
          }}
        ></input>
        {' '}
        <button onClick={handleSubmitName}>Submit Name</button>
      </div>
      <div>
        Set Focus Timer Length (minutes):{' '}
        <input
          type="number"
          value={focusTimerLength}
          min="1"
          onChange={e => {
            setFocusTimerLength(e.target.value);
          }}
        ></input>
        {' '}
        <button onClick={handleSetFocusTimerLength}>
          Submit Focus Timer Length
        </button>
      </div>
      <div>
        Set Breathe Timer Length (minutes):{' '}
        <input
          type="number"
          value={breatheTimerLength}
          min="1"
          onChange={e => {
            setBreatheTimerLength(e.target.value);
          }}
        ></input>
        {' '}
        <button onClick={handleSetBreatheTimerLength}>
          Submit Breathe Timer Length
        </button>
      </div>
      <div>
        <button onClick={handleGoToDashboard}>Go to Dashboard</button>
      </div>
    </div>
  );
};
 