import { useDispatch, useSelector } from 'react-redux';

import {
  setEnergyLevel,
  setMoodLevel,
  setOverwhelmedLevel,
} from '../../reducers/mood';
import './MoodTrackerDetailed.css';
import { MobileToDashBTN } from '../MobileToDashBTN';

export const MoodTrackerDetailed = () => {
  const dispatch = useDispatch();
  const mood = useSelector(state => state.mood);

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

  return (
    <div className="main-wrapper">
      <div className="app-container">
      <header className="main-header">
          <div className="main-app-name">. MOOD</div>    
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
      <MobileToDashBTN />
      </div>
    </div>
  );
};
