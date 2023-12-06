import { useDispatch, useSelector } from 'react-redux';
import { toggleHabit } from '../../reducers/habits';
import { getYesterdayDate } from '../../helpers';
import { DashLine } from '../../assets/SVGElements';
import { MobileHabitBTN } from '../MobileBTN';
import './HabitTrackerDetailed.css';

export const HabitTrackerDetailed = () => {
  const dispatch = useDispatch();
  const habits = useSelector(state => state.habits.habits);
  const yesterdayDate = getYesterdayDate();

  const historical = useSelector(state => state.historical.historicalData);
  const dataYesterday = historical[yesterdayDate];

  const handleToggleHabit = id => {
    dispatch(toggleHabit({ id }));
    dispatch({ type: 'SAVE_DATA' });
  };

  const habitsCompletedCount = habits.filter(habit => habit.isComplete).length;

  const historicalHabitData = Object.entries(historical).reduce(
    (acc, curr) => {
      console.log('acc', acc);
      acc.count += 1;
      const habits = curr[1].habits.habits;
      acc.done += habits.filter(habit => habit.isComplete).length;
      acc.habitCount += habits.length;
      return acc;
    },
    {
      done: 0,
      habitCount: 0,
      count: 0,
    }
  );

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
                <label className="habit-detailed-text-label" htmlFor={habit.id}>
                  {habit.description}
                </label>
              </div>
            );
          })}
        </div>
        <DashLine />
        <div className="habit-history">
          {dataYesterday != null && (
            <div className="habit-history-yesterday">
              Yesterday&apos;s data:
              <p />
              🏆:{' '}
              {
                dataYesterday.habits.habits.filter(habit => habit.isComplete)
                  .length
              }{' '}
              / {dataYesterday.habits.habits.length}
            </div>
          )}
          {historicalHabitData.count != 0 && (
            <div className="habit-history-overall">
              Overall data:
              <p />
              🏆: {historicalHabitData.done / historicalHabitData.count}/{' '}
              {historicalHabitData.habitCount / historicalHabitData.count}
            </div>
          )}
        </div>
        <MobileHabitBTN />
      </div>
    </div>
  );
};
