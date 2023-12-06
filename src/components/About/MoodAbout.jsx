import { MobileGoBackBTN } from '../MobileBTN';
import './About.css';

export const MoodAbout = () => {
  return (
    <div className="about-wrapper">
      <div className="app-container">
      <div className="main-header">
      <div className="about-header">. MOOD</div>
      </div>
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
      <MobileGoBackBTN />
      </div>
    </div>
  );
};
