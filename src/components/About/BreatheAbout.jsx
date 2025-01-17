import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { MobileGoBackBTN } from '../MobileBTN';
import useScreenSize from '../../hooks/useScreenSize';
import './About.css';

export const BreatheAbout = () => {
  const navigate = useNavigate();
  const { isMobile } = useScreenSize();

  useEffect(() => {
    if (!isMobile) {
      navigate('/breathe-timer');
    }
  }, [isMobile]);

  return (
    <div className="about-wrapper">
      <div className="app-container">
        <div className="main-header">
          <div className="about-header">. BREATHE</div>
        </div>
        <div className="about-paragraph">
          Mindful breathing is a simple yet transformative practice that taps
          into the restorative potential of each breath. It serves as an anchor,
          grounding you in the present moment and offering a respite from the
          demands of the digital world.
          <p />
          <i>Key Benefits:</i>
          <ul>
            <li>
              <b>Stress Reduction:</b> Engage in guided breathing exercises to
              alleviate stress and tension
            </li>
            <li>
              <b>Improved Focus:</b> Take short breaks with purpose
            </li>
            <li>
              <b>Physical Relaxation:</b> Experience the physical benefits of
              controlled breathing, such as reduced muscle tension and a slower
              heart rate
            </li>
          </ul>
        </div>
        <MobileGoBackBTN />
      </div>
    </div>
  );
};
