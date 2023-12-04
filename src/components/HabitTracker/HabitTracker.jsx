// This is the component shown in the Dashboard
// Conditionally show either expanded or unexpanded depending the screen size
import { HabitCircle } from "../../assets/SVGElements";
import "./HabitTracker.css"

export const HabitTracker = () => {
  // if desktop render <HabitTrackerDetailed />
  // if mobile clicking will go to <MobileHabitTrackerPage />
  return(
    <div className="habit-wrapper">
        <div className="habit-name">. HABIT</div>
        <div className="habit-circles-wrapper">
          <HabitCircle />
          <HabitCircle />
          <HabitCircle />
          <HabitCircle />
          <HabitCircle />
        </div>
    </div>
  )
};
