import { PropTypes } from 'prop-types';
import './Start.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateColorPaletteWithoutLocalStorage } from '../../reducers/settings';

export const StartPagePalette = ({ name, page, setPage }) => {
  const dispatch = useDispatch();
  const handleSubmitName = () => {
    setPage(page + 1);
  };

  const handleColorPaletteSelection = selectedPalette => {
    dispatch(
      updateColorPaletteWithoutLocalStorage({ colorPalette: selectedPalette })
    );
  };

  const settingsState = useSelector(state => state.settings);
  return (
    <div className="start-page">
      <header className="main-header">
        <div className="main-app-name">
          Hello, {name}! Happy to see you here!
        </div>
      </header>
      <h1 className="secondary-header">What color palette do you prefer?</h1>
      <div className="start-page-input-wrapper">
        <select
          id="colorPaletteSelect"
          className="colorPaletteSelect"
          value={settingsState.colorPalette}
          onChange={e => handleColorPaletteSelection(e.target.value)}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          {/* Add more options for additional color palettes */}
        </select>
        <div className="start-page-button">
          <button onClick={handleSubmitName}>Next</button>
        </div>
      </div>
    </div>
  );
};

StartPagePalette.propTypes = {
  name: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
