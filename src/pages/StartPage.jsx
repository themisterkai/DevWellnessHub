import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import './StartPage.css';
import { StartPageStart } from '../components/StartPage/StartPageStart';
//Welcoming page + initial user data inputted;
//This page will be responsive by using MediaQueries only -- one page
//fits all;

//Working on this page, it will understand the size of the screen and after the submit
//it will give the app version better suiting the screenSize.
export const StartPage = ({ onSetupComplete }) => {
  //The start page here will set initial data to the store,
  //used then for the app itself

  useEffect(() => {
    //Check localStorage for existing data
    //I think this could be refactored better?
    const storedSettings = JSON.parse(localStorage.getItem('settings'));
    const storedName = storedSettings ? storedSettings.name : null;

    if (storedName) {
      // If data is found, skip the StartPage
      onSetupComplete();
    }
  }, []);

  return <StartPageStart onSetupComplete={onSetupComplete} />;
};

StartPage.propTypes = {
  onSetupComplete: PropTypes.func.isRequired,
};
