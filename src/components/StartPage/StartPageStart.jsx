import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from '../../reducers/settings';
import './Start.css';
import { StartPageName } from './StartPageName';
import { StartPagePalette } from './StartPagePalette';
import { StartPageFocusTimer } from './StartPageFocusTimer';
import { StartPageBreatheTimer } from './StartPageBreatheTimer';

export const StartPageStart = ({ onSetupComplete }) => {
  const settingsState = useSelector(state => state.settings);
  const [name, setName] = useState(settingsState.name);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const handleSubmitName = () => {
    dispatch(updateName({ name }));
  };

  return (
    <div className="start-wrapper">
      {page === 0 && (
        <StartPageName
          name={name}
          setName={setName}
          page={page}
          setPage={setPage}
        />
      )}
      {page === 1 && (
        <StartPagePalette name={name} page={page} setPage={setPage} />
      )}
      {page === 2 && <StartPageFocusTimer page={page} setPage={setPage} />}
      {page === 3 && (
        <StartPageBreatheTimer
          handleSubmitName={handleSubmitName}
          onSetupComplete={onSetupComplete}
        />
      )}
    </div>
  );
};

StartPageStart.propTypes = {
  onSetupComplete: PropTypes.func.isRequired,
};
