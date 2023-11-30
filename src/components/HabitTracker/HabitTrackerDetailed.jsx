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
      <div className="tile">
        <h2>Track your habits</h2>
      </div>
      <div className="tile">
        <h4>🏆 {habitsCompletedCount}</h4>
      </div>
      <div>
        {habits.map(habit => {
          return (
            <div key={habit.id} onClick={() => handleToggleHabit(habit.id)}>
              {habit.description}: {habit.isComplete.toString()}
            </div>
          );
        })}
      </div>
    </div>
  );
};
