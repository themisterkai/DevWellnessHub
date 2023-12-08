import { PropTypes } from 'prop-types';
import { useState } from 'react';

import './Start.css';

export const StartPageName = ({ name, setName, page, setPage }) => {
  const regex = /^[a-zA-Z\s]*$/;
  const [error, setError] = useState('');

  const validate = input => {
    if (input === '') {
      setError('Name required');
      return true;
    } else if (input !== '' && !regex.test(input)) {
      setError('Only letters and spaces are allowed');
      return true;
    } else if (input.length > 20) {
      setError('Name should be less than 20 characters long');
      return true;
    }
    setError('');
    return false;
  };

  const handleKeyUp = e => {
    validate(e.target.value);
    if (e.key === 'Enter') {
      handleSubmitName();
    }
  };

  const handleSubmitName = () => {
    const hasError = validate(name);
    if (!hasError) {
      setPage(page + 1);
    }
  };

  return (
    <div className="start-page">
      <header className="main-header">
        <div className="main-app-name">Welcome to DevWellnessHub!</div>
      </header>
      <h1 className="secondary-header">What should we call you?</h1>

      <div className="start-page-input-wrapper">
        <input
          required="required"
          className="start-page-input"
          type="text"
          onKeyUp={handleKeyUp}
          onChange={e => {
            setName(e.target.value.trimStart());
          }}
          value={name}
          data-1p-ignore
        ></input>
        <div className="start-page-error">{error}</div>
        <div className="start-page-button">
          <button
            className="app-button"
            onClick={handleSubmitName}
            disabled={error !== ''}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

StartPageName.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
