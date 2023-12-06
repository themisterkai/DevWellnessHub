//This is the homepage for Desktop and Tablet,
//which is composed by VerticalMenu + Dashboard + HistoricalCalDetailed;
import useScreenSize from '../hooks/useScreenSize';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FocusTimerRenderless } from '../components/FocusTimer/FocusTimerRenderless';
import { BreatheTimerRenderless } from '../components/BreatheTimer/BreatheTimerRenderless';
import { VerticalMenu } from '../components/VerticalMenu';
import { Dashboard } from './Dashboard';
import { FocusTimerDetailed } from '../components/FocusTimer/FocusTimerDetailed';
import { MoodTrackerDetailed } from '../components/MoodTracker/MoodTrackerDetailed';
import { HabitTrackerDetailed } from '../components/HabitTracker/HabitTrackerDetailed';
import { BreatheTimerDetailed } from '../components/BreatheTimer/BreatheTimerDetailed';
import { SettingsPage } from './SettingsPage';
import './DesktopHomepage.css';
import { About } from '../components/About/About';
import { FocusAbout } from '../components/About/FocusAbout';
import { HabitsAbout } from '../components/About/HabitsAbout';
import { BreatheAbout } from '../components/About/BreatheAbout';
import { MoodAbout } from '../components/About/MoodAbout';

export const DesktopHomepage = () => {
  //Here the logic if to switch on mobile or on desktop with
  //conditional rendering of which components (better than doing it in the App.jsx)
  const { isMobile } = useScreenSize();

  return (
    <>
      <FocusTimerRenderless />
      <BreatheTimerRenderless />
      {isMobile ? (
        <Router>
          <Routes>
            {/* Mobile routes */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/focus-timer" element={<FocusTimerDetailed />} />
            <Route path="/habit-tracker" element={<HabitTrackerDetailed />} />
            <Route path="/breathe-timer" element={<BreatheTimerDetailed />} />
            <Route path="/mood-tracker" element={<MoodTrackerDetailed />} />
            <Route path="/settings" element={<SettingsPage />} />
            {/* Add more mobile-only routes as needed */}
          </Routes>
        </Router>
      ) : (
        <Router>
          <div className="desktop-wrapper">
            <VerticalMenu />
            <div>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/focus-timer" element={<FocusTimerDetailed />} />
                <Route path="/mood-tracker" element={<MoodTrackerDetailed />} />
                <Route
                  path="/habit-tracker"
                  element={<HabitTrackerDetailed />}
                />
                <Route
                  path="/breathe-timer"
                  element={<BreatheTimerDetailed />}
                />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </div>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/focus-timer" element={<FocusAbout />} />
              <Route path="/habit-tracker" element={<HabitsAbout />} />
              <Route path="/breathe-timer" element={<BreatheAbout />} />
              <Route path="/mood-tracker" element={<MoodAbout />} />
              <Route path="/settings" element={<About />} />
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
};
