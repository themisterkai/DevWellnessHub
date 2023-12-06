import { Link } from 'react-router-dom';
import useScreenSize from '../../hooks/useScreenSize';
import './About.css';

export const HabitsAbout = () => {
  const { isMobile } = useScreenSize();
  return (
    <div className="about-wrapper">
      <div className="app-container">
      {isMobile && (
        <div className="back-arrow">
          <Link to="/habit-tracker">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
        </div>
      )}
      <div className="about-header">. HABIT</div>   
      <div className="about-paragraph">
        Habits are the product of repetition and intentional actions. When we
        consistently engage in specific behaviors, our brains establish neural
        pathways, making those actions more automatic over time. The key lies in
        mindful, repetitive practice.
        <p />
        <i>Key Benefits:</i>
        <ul>
          <li>
            <b>Building Consistency:</b> Watch as daily actions evolve into
            ingrained behaviors
          </li>
          <li>
            <b>Enhanced Accountability:</b> Logging daily habits creates a
            tangible record of your efforts
          </li>
          <li>
            <b>Positive Reinforcement:</b> Positive reinforcement strengthens
            your commitment to forming and maintaining healthy habits
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};
