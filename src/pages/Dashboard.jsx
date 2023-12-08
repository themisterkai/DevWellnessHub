//Dashboard that loads in mobile & it's used
//as a component for Desktop/Tablet
import useScreenSize from '../hooks/useScreenSize';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DashLine, SettingsIcon } from '../assets/SVGElements';
import { FocusTimer } from '../components/FocusTimer/FocusTimer';
import { HabitTracker } from '../components/HabitTracker/HabitTracker';
import { MoodTracker } from '../components/MoodTracker/MoodTracker';
import { BreatheTimer } from '../components/BreatheTimer/BreatheTimer';
import { MobileInfoBTN } from '../components/MobileBTN';
import './Dashboard.css';


export const Dashboard = () => {
  const { isMobile } = useScreenSize();
  const settingsState = useSelector(state => state.settings);
  //Import Header
  //Import HistoricalCal
  //Import FocusTimer, Habit,Tracker, MoodTracker, BreatheTimer
  return (
    <>
      {isMobile ? (
        <div className="main-wrapper">
          <div className="app-container">
            <h1 className="main-app-name">DevWellnessHub</h1>
            <h2 className="secondary-header">
              Hi {settingsState.name}, ready for today&apos;s session?
            </h2>
            <DashLine />
            <div className="app-wrapper">
              <FocusTimer />
              <HabitTracker />
              <BreatheTimer />
              <MoodTracker />
            </div>
            <MobileInfoBTN />
          </div>
        </div>
      ) : (
        <div className="main-wrapper">
          <div className="app-container">
            <h1 className="main-app-name">DevWellnessHub</h1>
            <h2 className="secondary-header">
              Hi {settingsState.name}, ready for today&apos;s session?
            </h2>
            <div className="app-wrapper">
              <DashLine />
              <FocusTimer />
              <HabitTracker />
              <BreatheTimer />
              <MoodTracker />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
