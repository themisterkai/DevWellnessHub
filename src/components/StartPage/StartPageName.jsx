import { PropTypes } from 'prop-types';
import './Start.css';

export const StartPageName = ({ setName, page, setPage }) => {
  const handleSubmitName = () => {
    setPage(page + 1);
  };
  return (
    <div className="start-page">
      <header className="main-header">
        <div className="main-app-name">Welcome to DevWellnessHub!</div>
      </header>
      <h1 className="secondary-header">What should we call you?</h1>
      <div className="start-page-input-wrapper">
        <input
          className="start-page-input"
          type="text"
          onChange={e => {
            setName(e.target.value);
          }}
          data-1p-ignore
        ></input>
        <div className="start-page-button">
          <button onClick={handleSubmitName}>Next</button>
        </div>
      </div>
    </div>
  );
};

StartPageName.propTypes = {
  setName: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
