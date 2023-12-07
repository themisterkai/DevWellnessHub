import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { MobileGoBackBTN } from '../MobileBTN';
import useScreenSize from '../../hooks/useScreenSize';
import './About.css';

export const HabitsAbout = () => {
  const navigate = useNavigate();
  const { isMobile } = useScreenSize();

  useEffect(() => {
    if (!isMobile) {
      navigate('/habit-tracker');
    }
  }, [isMobile]);

  return (
    <div className="about-wrapper">
      <div className="app-container">
        <div className="main-header">
          <div className="about-header">. HABIT</div>
        </div>
        <div className="about-paragraph">
          Habits are the product of repetition and intentional actions. When we
          consistently engage in specific behaviors, our brains establish neural
          pathways, making those actions more automatic over time. The key lies
          in mindful, repetitive practice.
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
        <MobileGoBackBTN />
      </div>
    </div>
  );
};
