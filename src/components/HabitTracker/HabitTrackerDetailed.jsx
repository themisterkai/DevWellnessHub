import { useDispatch, useSelector } from 'react-redux';

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
    <div className="habit-detailed-wrapper">
      <div className="habit-detailed-wrapper-title">
        <h2>Track your habits</h2>
      </div>
      <div className="habit-detailed-wrapper-count">
        <h4>🏆 {habitsCompletedCount}</h4>
      </div>
      <div className="habit-detailed-wrapper-habits">
        {habits.map(habit => {
          return (
            <div key={habit.id}>
              <input
                type="checkbox"
                id={habit.id}
                checked={habit.isComplete}
                onChange={() => handleToggleHabit(habit.id)}
              />{' '}
              <label htmlFor={habit.id}>{habit.description}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
