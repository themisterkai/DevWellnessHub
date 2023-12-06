import { useDispatch, useSelector } from 'react-redux';
import { MobileToDashBTN } from '../MobileToDashBTN';
import './HabitTrackerDetailed.css';
import { toggleHabit } from '../../reducers/habits';

export const HabitTrackerDetailed = () => {
  const dispatch = useDispatch();
  const habits = useSelector(state => state.habits.habits);

  const handleToggleHabit = id => {
    dispatch(toggleHabit({ id }));
    dispatch({ type: 'SAVE_DATA' });
  };

  const habitsCompletedCount = habits.filter(habit => habit.isComplete).length;
  
  return (
    <div className="main-wrapper">
      <div className="app-container">
      <header className="main-header">
          <div className="main-app-name">. HABIT</div>    
        </header>
      <h2 className="secondary-header">Look what you can achieve today!</h2>
      <h4 className="habit-detailed-counter">🏆: {habitsCompletedCount}/5</h4>
      <div className="habit-detailed-wrapper-habits">
        {habits.map(habit => {
          return (
            <div
              className="habit-detailed-wrapper-habits-options"
              key={habit.id}
            >
              <input
                className="habit-detailed-checkbox"
                type="checkbox"
                id={habit.id}
                checked={habit.isComplete}
                onChange={() => handleToggleHabit(habit.id)}
              />{' '}
              <label
                className="habit-detailed-text-label"
                htmlFor={habit.id}
              >
                {habit.description}
              </label>
            </div>
          );
        })}
        
      </div>
      <MobileToDashBTN />
      </div>
    </div>
  );
};
