import './About.css';

export const About = () => {
  return (
    <div className="about-wrapper">
      <div className="app-container">
      <div className="about-header">. ABOUT</div>   
      <div className="about-paragraph">
        In the fast-paced realm of coding and innovation, we understand the
        unique challenges developers face. That&apos;s why we&apos;ve curated a
        suite of features designed to empower you on your journey towards
        well-being and success:
        <ul>
          <li>
            <b>Focus Timer:</b> Master Your Productivity
          </li>

          <li>
            <b>Mood Tracker:</b> Navigate Your Emotional Landscape
          </li>
          <li>
            <b>Habit Tracker:</b> Cultivate Lasting Success
          </li>
          <li>
            <b>Breathe Timer:</b> Recharge and Refresh
          </li>
        </ul>
        <p />
        <i>DevWellnessHub</i> is not just an app; it&apos;s a companion on your
        journey to becoming a healthier, more productive, and fulfilled
        developer.
      </div>
      </div>
    </div>
  );
};