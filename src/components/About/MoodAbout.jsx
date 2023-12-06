import { Link } from 'react-router-dom';
import useScreenSize from '../../hooks/useScreenSize';
import './About.css';

export const MoodAbout = () => {
  const { isMobile } = useScreenSize();
  return (
    <div className="about-wrapper">
      <div className="app-container">
      {isMobile && (
        <div className="back-arrow">
          <Link to="/mood-tracker">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
        </div>
      )}
      <div className="about-header">. MOOD</div>
      <div className="about-paragraph">
        Emotions are intricate signals that reflect our mental state. Tracking
        these fluctuations allows for a deeper understanding of patterns,
        triggers, and the factors influencing your daily well-being.
        <p />
        <i>Key Benefits:</i>
        <ul>
          <li>
            <b>Self-Awareness:</b> Gain a deeper understanding of your emotional
            landscape
          </li>
          <li>
            <b>Identifying Triggers:</b> Uncover the factors influencing your
            emotions
          </li>
          <li>
            <b>Early Intervention:</b> Identify and address patterns of
            emotional distress early on
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};
