//Dashboard that loads in mobile & it's used
//as a component for Desktop/Tablet
import { useSelector } from 'react-redux';
import "./Dashboard.css"
import { FocusTimer } from '../components/FocusTimer/FocusTimer';
import { HabitTracker } from '../components/HabitTracker/HabitTracker';
import { MoodTracker } from '../components/MoodTracker/MoodTracker';
import { BreatheTimer } from '../components/BreatheTimer/BreatheTimer';

export const Dashboard = () => {
    const settingsState = useSelector(state => state.settings);
    //Import Header
    //Import HistoricalCal
    //Import FocusTimer, Habit,Tracker, MoodTracker, BreatheTimer
    return (
            <div className="dashboard-wrapper">
                <h1 className="dash-user-name">Welcome {settingsState.name}</h1>
                <div className="app-container">
                    <div className="app-wrapper">
                        <FocusTimer />
                        <HabitTracker />
                        <BreatheTimer />
                        <MoodTracker />
                    </div>
                </div>
            </div>

    );
};
