// This is the component shown in the Dashboard
// Conditionally show either expanded or unexpanded depending the screen size
import { HabitCircle } from "../../assets/SVGElements";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./HabitTracker.css"

export const HabitTracker = () => {
  const habitsState = useSelector(state => state.habits);

  // Your logic to change the color based on habit completion
  const getCircleColor = (habitId) => {
    const habit = habitsState.habits.find(h => h.id === habitId);
    return habit && habit.isComplete ? '#F0F2F1' : '#6F6F6F';
  };
  // if desktop render <HabitTrackerDetailed />
  // if mobile clicking will go to <MobileHabitTrackerPage />
  return(
    <div className="tile-wrapper">
        <div className="tile-main-name">. HABIT</div>
        <div className="habit-circles-wrapper">
          {habitsState.habits.map((habit, index) => (
            <HabitCircle key={index} style={{ fill: getCircleColor(habit.id) }} />
          ))}
        </div>
    </div>
  )
};
