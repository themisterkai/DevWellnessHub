import { Link } from 'react-router-dom';
import useScreenSize from '../../hooks/useScreenSize';
import './About.css';

export const FocusAbout = () => {
  const { isMobile } = useScreenSize();
  return (
    <div className="about-wrapper">
      {isMobile && (
        <div className="back-arrow">
          <Link to="/focus-timer">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
        </div>
      )}
      <h2>. FOCUS</h2>
      <div className="about-text">
        A Focus Timer, or Pomodoro timer, divides your work into manageable
        intervals, typically 25 minutes. After each timer, we invite you to take
        a short break. It&apos;s a structured approach to boost focus and
        productivity.
        <p />
        <i>Key Benefits:</i>
        <ul>
          <li>
            <b>Maximized Productivity:</b> Work in concentrated bursts,
            minimizing procrastination
          </li>
          <li>
            <b>Enhanced Concentration:</b> Break tasks into intervals to foster
            deep concentration
          </li>
          <li>
            <b>Improved Time Management:</b> Establish a disciplined routine
          </li>
          <li>
            <b>Reduced Stress:</b> Regular breaks prevent burnout
          </li>
        </ul>
      </div>
    </div>
  );
};
