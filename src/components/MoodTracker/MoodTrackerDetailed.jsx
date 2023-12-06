import { useDispatch, useSelector } from 'react-redux';

import {
  setEnergyLevel,
  setMoodLevel,
  setOverwhelmedLevel,
} from '../../reducers/mood';
import './MoodTrackerDetailed.css';
import { MobileToDashBTN } from '../MobileToDashBTN';
import { getYesterdayDate } from '../../helpers';
import useScreenSize from '../../hooks/useScreenSize';
import { Link } from 'react-router-dom';
import { InfoIcon } from '../../assets/SVGElements';

export const MoodTrackerDetailed = () => {
  const dispatch = useDispatch();
  const { isMobile } = useScreenSize();
  const mood = useSelector(state => state.mood);
  const yesterdayDate = getYesterdayDate();

  const historical = useSelector(state => state.historical.historicalData);

  const dataYesterday = historical[yesterdayDate];

  const handleUpdateMoodLevel = moodLevel => {
    dispatch(setMoodLevel({ moodLevel }));
    dispatch({ type: 'SAVE_DATA' });
  };

  const handleUpdateEnergyLevel = energyLevel => {
    dispatch(setEnergyLevel({ energyLevel }));
    dispatch({ type: 'SAVE_DATA' });
  };

  const handleUpdateOverwhelmedLevel = overwhelmedLevel => {
    dispatch(setOverwhelmedLevel({ overwhelmedLevel }));
    dispatch({ type: 'SAVE_DATA' });
  };

  const historicalMoodData = Object.entries(historical).reduce(
    (acc, curr) => {
      acc.count += 1;
      const moodLevels = curr[1].mood;
      acc.mood += parseInt(moodLevels.moodLevel);
      acc.energy += parseInt(moodLevels.energyLevel);
      acc.overwhelmed += parseInt(moodLevels.overwhelmedLevel);
      return acc;
    },
    {
      mood: 0,
      energy: 0,
      overwhelmed: 0,
      count: 0,
    }
  );

  return (
    <div className="main-wrapper">
      <div className="app-container">
        <header className="main-header">
          <div className="main-app-name">. MOOD</div>
          {isMobile && (
            <div className="info-button">
              <Link to="/about-mood-tracker">
                <InfoIcon />
              </Link>
            </div>
          )}
        </header>
        <h2 className="secondary-header">How are you feeling today?</h2>
        <div className="range-mood">
          <div>Mood Level: {mood.moodLevel}</div>
          <input
            type="range"
            min={1}
            max={5}
            onChange={e => handleUpdateMoodLevel(e.target.value)}
            value={mood.moodLevel}
          ></input>
        </div>
        <div className="range-mood">
          <div>Energy Level: {mood.energyLevel}</div>
          <input
            type="range"
            min={1}
            max={5}
            onChange={e => handleUpdateEnergyLevel(e.target.value)}
            value={mood.energyLevel}
          ></input>
        </div>
        <div className="range-mood">
          <div>Overwhelmed Level: {mood.overwhelmedLevel}</div>
          <input
            type="range"
            min={1}
            max={5}
            onChange={e => handleUpdateOverwhelmedLevel(e.target.value)}
            value={mood.overwhelmedLevel}
          ></input>
        </div>
        <div className="mood-history">
          {dataYesterday != null && (
            <div className="mood-history-yesterday">
              Yesterday&apos;s data:
              <ul>
                <li>mood: {dataYesterday.mood.moodLevel}/5</li>
                <li>energy: {dataYesterday.mood.energyLevel}/5</li>
                <li>overwhelmed: {dataYesterday.mood.overwhelmedLevel}/5</li>
              </ul>
            </div>
          )}
          {historicalMoodData.count != 0 && (
            <div className="mood-history-overall">
              Overall data:
              <ul>
                <li>
                  mood: {historicalMoodData.mood / historicalMoodData.count}/5
                </li>
                <li>
                  energy: {historicalMoodData.energy / historicalMoodData.count}
                  /5
                </li>
                <li>
                  overwhelmed:{' '}
                  {historicalMoodData.overwhelmed / historicalMoodData.count}/5
                </li>
              </ul>
            </div>
          )}
        </div>
        <MobileToDashBTN />
      </div>
    </div>
  );
};
